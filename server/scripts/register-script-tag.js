import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
import mongoose from 'mongoose';
import Shop from '../models/Shop.js';

// Connect to Database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

const registerTag = async () => {
    await connectDB();

    try {
        const shops = await Shop.find({ isActive: true });
        console.log(`Found ${shops.length} active shops.`);

        for (const shopDoc of shops) {
            console.log(`Processing ${shopDoc.shop}...`);
            const accessToken = shopDoc.accessToken;
            const shop = shopDoc.shop;

            const scriptTagUrl = `https://${shop}/admin/api/2023-04/script_tags.json`;
            const scriptSrc = `${process.env.HOST}/public/banner.js`;

            console.log(`Target Script Src: ${scriptSrc}`);

            // Check existing tags
            const tagsResponse = await fetch(scriptTagUrl, {
                headers: { 'X-Shopify-Access-Token': accessToken }
            });
            const tagsData = await tagsResponse.json();

            if (!tagsResponse.ok) {
                console.error(`Failed to fetch tags for ${shop}:`, tagsData);
                continue;
            }

            // Remove old/duplicate tags if necessary or just check uniqueness
            const existingTag = tagsData.script_tags?.find(tag => tag.src === scriptSrc);

            if (!existingTag) {
                console.log(`Registering new tag for ${shop}...`);
                const regResponse = await fetch(scriptTagUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Shopify-Access-Token': accessToken
                    },
                    body: JSON.stringify({
                        script_tag: {
                            event: 'onload',
                            src: scriptSrc
                        }
                    })
                });
                const regData = await regResponse.json();
                console.log('Registration result:', JSON.stringify(regData, null, 2));
            } else {
                console.log(`Tag already exists for ${shop}. ID: ${existingTag.id}`);
            }
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        mongoose.disconnect();
    }
};

registerTag();
