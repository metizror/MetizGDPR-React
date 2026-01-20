require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { shopifyApi, LATEST_API_VERSION } = require('@shopify/shopify-api');

const app = express();
const PORT = process.env.PORT || 5000;

// Shopify API initialization
// const shopify = shopifyApi({
//     apiKey: process.env.SHOPIFY_API_KEY,
//     apiSecretKey: process.env.SHOPIFY_API_SECRET,
//     scopes: process.env.SCOPES.split(','),
//     hostName: process.env.HOST.replace(/https?:\/\//, ''),
//     apiVersion: LATEST_API_VERSION,
//     isEmbeddedApp: true,
// });

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get('/api', (req, res) => {
    res.send('Shopify App Backend is running!');
});

// Authentication Routes (Placeholders for now)
app.get('/api/auth', async (req, res) => {
    // Logic for initiating OAuth
    res.send('OAuth initiation would happen here.');
});

app.get('/api/auth/callback', async (req, res) => {
    // Logic for handling OAuth callback
    res.send('OAuth callback would happen here.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
