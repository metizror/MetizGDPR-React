import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
    shop: {
        type: String,
        required: true,
        unique: true,
    },
    accessToken: {
        type: String,
        required: true,
    },
    scope: {
        type: String,
    },
    domain: String,
    email: String,
    shopOwner: String,
    country: String,
    currency: String,
    name: String,
    planName: String,
    hmac: String,
    host: String,
    id_token: String,
    locale: String,
    session: String,
    timestamp: String,
    isActive: {
        type: Boolean,
        default: true,
    },
    installedAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

const Shop = mongoose.model('Shop', shopSchema);
export default Shop;
