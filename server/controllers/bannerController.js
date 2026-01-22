import Shop from '../models/Shop.js';
import Banner from '../models/Banner.js';

export const getSettings = async (req, res) => {
    try {
        const shop = req.headers['x-shop-domain'] || req.query.shop;
        if (!shop) return res.status(400).json({ error: 'Missing shop parameter' });

        const banner = await Banner.findOne({ shop });

        // Return default if no banner settings found yet
        res.json(banner || { bannerType: 'informative' });
    } catch (error) {
        console.error('Error fetching banner settings:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateSettings = async (req, res) => {
    try {
        const shop = req.headers['x-shop-domain'];
        if (!shop) return res.status(400).json({ error: 'Missing shop header' });

        const { bannerType } = req.body;

        // Find the shop first to get the ID
        const shopDoc = await Shop.findOne({ shop });
        if (!shopDoc) {
            return res.status(404).json({ error: 'Shop not found' });
        }

        const updatedBanner = await Banner.findOneAndUpdate(
            { shop },
            {
                $set: {
                    bannerType,
                    shopId: shopDoc._id
                }
            },
            { new: true, upsert: true }
        );

        res.json(updatedBanner);
    } catch (error) {
        console.error('Error updating banner settings:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
