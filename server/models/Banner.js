import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
    shop: {
        type: String,
        required: true,
        unique: true
    },
    shopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop',
        required: true
    },
    bannerType: {
        type: String,
        enum: ['informative', 'opt-out', 'opt-in', 'opt-in-out', 'preferences'],
        default: 'informative'
    }
}, { timestamps: true });

const Banner = mongoose.model('Banner', bannerSchema);

export default Banner;
