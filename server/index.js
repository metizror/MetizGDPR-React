import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import Shop from './models/Shop.js';
import authRoutes from './routes/authRoutes.js';
import webhookRoutes from './routes/webhookRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Log all requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Webhook route needs to be before express.json() to handle raw body
app.use('/api/webhooks', express.raw({ type: 'application/json' }), webhookRoutes);

app.use(express.json());

// Middleware to set CSP headers for Shopify
app.use((req, res, next) => {
    const shop = req.query.shop || req.headers['x-shop-domain'];
    if (shop) {
        res.setHeader(
            "Content-Security-Policy",
            `frame-ancestors https://admin.shopify.com https://${shop} https://*.myshopify.com;`
        );
    } else {
        res.setHeader(
            "Content-Security-Policy",
            "frame-ancestors https://admin.shopify.com https://*.myshopify.com;"
        );
    }
    next();
});

const redirectToAuth = (req, res, shop) => {
    const authUrl = `${process.env.HOST}/api/auth?shop=${shop}`;
    console.log(`--> Redirecting to Auth URL: ${authUrl}`);

    // If we are embedded, this redirect might be blocked by browsers if not initiated by user action.
    // However, user requested to remove the breakout HTML.
    res.redirect(authUrl);
};

// Root handler: Force Auth and update session
app.get('/', async (req, res, next) => {
    const { shop, hmac, host, id_token, locale, session, timestamp } = req.query;

    if (shop) {
        try {
            const existingShop = await Shop.findOne({ shop });

            // IF SHOP IS NOT IN DATABASE OR HAS NO ACCESS TOKEN OR IS INACTIVE
            if (!existingShop || !existingShop.accessToken || existingShop.isActive === false) {
                console.log(`--> Shop ${shop} incomplete or missing in DB. Redirecting to Auth flow...`);
                return redirectToAuth(req, res, shop);
            }

            // If it exists, update the session info
            console.log(`--> Updating DB for ${shop} on app load.`);
            console.log(`   id_token: ${id_token ? 'Present' : 'Missing'}`);
            console.log(`   session: ${session ? session : 'Missing'}`);

            await Shop.findOneAndUpdate(
                { shop },
                {
                    hmac,
                    host,
                    id_token,
                    locale,
                    session,
                    timestamp,
                    isActive: true, // Ensure shop is marked active if it's loading successfully
                    updatedAt: new Date()
                }
            );
            console.log(`--> Session info updated for active shop: ${shop}`);
        } catch (error) {
            console.error("Error in root shop check:", error);
        }
    }

    // Fallback for old style URLs
    if (shop && !host && !id_token) {
        return redirectToAuth(req, res, shop);
    }
    next();
});

// Serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Serve static files for ScriptTags
app.use('/public', express.static(path.join(__dirname, 'public')));

import bannerRoutes from './routes/bannerRoutes.js';

// Routes
app.use('/api', authRoutes);
app.use('/api/banner', bannerRoutes);


app.get('/api', (req, res) => {
    res.send('Shopify App Backend is running!');
});

// Catch-all handler
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
