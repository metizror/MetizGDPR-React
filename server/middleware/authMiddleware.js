import shopify from '../config/shopify.js';

const verifyRequest = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            throw new Error('No authorization header found.');
        }

        const payload = await shopify.session.decodeSessionToken(authHeader.split(' ')[1]);
        const shop = payload.dest.replace('https://', '');

        req.shop = shop;
        next();
    } catch (e) {
        console.error(e);
        return res.status(401).send('Unauthorized');
    }
};

export default verifyRequest;
