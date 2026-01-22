import Shop from '../models/Shop.js';

export const appInstalled = async (req, res) => {
    try {
        const shop = req.headers['x-shopify-shop-domain'];
        const shopDetails = req.body;

        console.log(`--> Webhook: App Installed for ${shop}`);

        await Shop.findOneAndUpdate(
            { shop },
            {
                domain: shopDetails.domain || shopDetails.myshopify_domain,
                email: shopDetails.email,
                shopOwner: shopDetails.shop_owner || shopDetails.name,
                country: shopDetails.country,
                currency: shopDetails.currency,
                name: shopDetails.name,
                planName: shopDetails.plan_name,
                updatedAt: new Date(),
                isActive: true
            },
            { upsert: true }
        );

        console.log(`Shop data saved for ${shop} via installation webhook.`);
        res.status(200).send('OK');
    } catch (e) {
        console.error(`---> Error in appInstalled webhook:`, e);
        res.status(500).send(e.message);
    }
};

export const appUninstalled = async (req, res) => {
    try {
        const shop = req.headers['x-shopify-shop-domain'];

        console.log(`--> Webhook: App Uninstalled for ${shop}`);

        await Shop.findOneAndDelete({ shop });

        console.log(`Shop ${shop} removed from database.`);
        res.status(200).send('OK');
    } catch (e) {
        console.error(`---> Error in appUninstalled webhook:`, e);
        res.status(500).send(e.message);
    }
};
