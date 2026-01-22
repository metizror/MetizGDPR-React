import crypto from "crypto";
import querystring from "querystring";
import Shop from "../models/Shop.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scopes = process.env.SCOPES || "read_products,write_products";
const nonce = () => crypto.randomBytes(16).toString("hex");

// Simple webhook registration function
const registerWebhook = async (shop, accessToken) => {
    try {
        const webhookUrl = `${process.env.HOST}/api/webhooks/app/uninstalled`;
        const response = await fetch(`https://${shop}/admin/api/2023-04/webhooks.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': accessToken
            },
            body: JSON.stringify({
                webhook: {
                    topic: 'app/uninstalled',
                    address: webhookUrl,
                    format: 'json'
                }
            })
        });
        const data = await response.json();
        if (!response.ok) {
            console.error(`--> Error registering webhook: ${JSON.stringify(data)}`);
        } else {
            console.log(`--> Webhook registered for ${shop}:`, data);
        }
    } catch (error) {
        console.error(`--> Error registering webhook for ${shop}:`, error);
    }
};

export const auth = async (req, res) => {
    const shop = req.query.shop;
    console.log(`--> /api/auth called (Manual Flow). Shop: ${shop}`);

    if (!shop) {
        return res.status(400).json({ error: "Missing shop parameter" });
    }

    const shopState = nonce();
    // Save nonce in DB or verify later if needed, simpler manual flow often skips nonce persistence or uses cookies
    // For now we pass it and verify it comes back, but standard stateless verification relies on HMAC

    const redirectUri = `${process.env.HOST}/api/auth/callback`;
    const installUrl = `https://${shop}/admin/oauth/authorize?client_id=${process.env.SHOPIFY_API_KEY}&scope=${scopes}&redirect_uri=${redirectUri}&state=${shopState}&grant_options[]=per-user`;

    console.log(`--> Redirecting to: ${installUrl}`);
    res.redirect(installUrl);
};

export const callback = async (req, res) => {
    const { shop, hmac, code, state } = req.query;
    console.log("--> Callback req.query", req.query);

    if (!shop || !hmac || !code) { // State is strictly required but for simplicity we focus on HMAC
        return res.status(400).json({ success: false, error: "Required parameters are missing" });
    }

    // HMAC Validation
    const queryParams = { ...req.query };
    delete queryParams.hmac;
    delete queryParams.signature;

    const message = querystring.stringify(queryParams);
    const providedHmac = Buffer.from(hmac, "utf-8");
    const generatedHash = Buffer.from(
        crypto
            .createHmac("sha256", process.env.SHOPIFY_API_SECRET)
            .update(message)
            .digest("hex"),
        "utf-8"
    );

    let hashEquals = false;
    try {
        hashEquals = crypto.timingSafeEqual(generatedHash, providedHmac);
    } catch (e) {
        hashEquals = false;
    }

    if (!hashEquals) {
        console.error("--> HMAC validation failed");
        return res.status(400).json({ success: false, error: "HMAC validation failed" });
    }

    try {
        // **Get Access Token**
        const accessTokenRequestUrl = `https://${shop}/admin/oauth/access_token`;
        const accessTokenPayload = {
            client_id: process.env.SHOPIFY_API_KEY,
            client_secret: process.env.SHOPIFY_API_SECRET,
            code,
        };

        const tokenResponse = await fetch(accessTokenRequestUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(accessTokenPayload),
        });

        if (!tokenResponse.ok) {
            const errorText = await tokenResponse.text();
            console.error(`--> Token exchange failed. Status: ${tokenResponse.status}, Body: ${errorText}`);
            throw new Error(`Failed to fetch access token: ${tokenResponse.statusText} - ${errorText}`);
        }

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;
        console.log("--> Access Token received");

        // Fetch Shop Data
        const apiRequestURL = `https://${shop}/admin/api/2023-04/shop.json`;
        const shopResponse = await fetch(apiRequestURL, {
            method: "GET",
            headers: {
                "X-Shopify-Access-Token": accessToken,
                "Content-Type": "application/json",
            },
        });

        if (!shopResponse.ok) {
            throw new Error("Failed to fetch shop data");
        }

        const shopData = await shopResponse.json();
        const shopDetails = shopData.shop;

        const shopDataObj = {
            shop: shopDetails.domain, // Or req.query.shop
            accessToken: accessToken,
            scope: scopes,
            domain: shopDetails.domain,
            email: shopDetails.email,
            shopOwner: shopDetails.shop_owner,
            country: shopDetails.country,
            currency: shopDetails.currency,
            name: shopDetails.name,
            planName: shopDetails.plan_name,
            updatedAt: new Date(),
            isActive: true, // Reactivate if it was soft deleted
            // Store available query params immediately
            hmac: req.query.hmac,
            timestamp: req.query.timestamp,
            state: req.query.state,
            host: req.query.host, // Note: Host might technically be missing in query if not passed through, but often is present in callback or state
        };

        // **Check if Store Exists / Update**
        // Using findOneAndUpdate with upsert to handle both creation and update atomically
        // ensuring isActive is explicitly set to true.
        await Shop.findOneAndUpdate(
            { shop: shopDetails.domain },
            shopDataObj,
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );
        console.log(`--> Shop data saved/updated for ${shopDetails.domain}`);

        await registerWebhook(shopDetails.domain, accessToken);

        console.log("--> Auth completed successfully. Redirecting to app...");

        // Redirect to app root with shop and host parameters to ensure App Bridge initializes correctly
        const host = req.query.host;
        res.redirect(`/?shop=${shopDetails.domain}&host=${host}`);

    } catch (error) {
        console.error("--> Error in auth callback:", error);
        res.status(500).json({
            success: false,
            error: error.message || "An error occurred",
        });
    }
};
