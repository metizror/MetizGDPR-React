import '@shopify/shopify-api/adapters/node';
import { shopifyApi, ApiVersion } from '@shopify/shopify-api';
import { restResources } from '@shopify/shopify-api/rest/admin/2023-04';
import dotenv from 'dotenv';
dotenv.config();

const shopify = shopifyApi({
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET,
    scopes: process.env.SCOPES ? process.env.SCOPES.split(',') : [],
    hostName: process.env.HOST ? process.env.HOST.replace(/https?:\/\//, '') : '',
    hostScheme: process.env.HOST ? process.env.HOST.split('://')[0] : 'https',
    apiVersion: ApiVersion.October24,
    isEmbeddedApp: true,
    restResources,
});

export default shopify;
