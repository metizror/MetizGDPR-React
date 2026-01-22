import express from 'express';
import * as webhookController from '../controllers/webhookController.js';

const router = express.Router();

// Middleware to parse raw buffer body if necessary
const parseBody = (req, res, next) => {
    if (Buffer.isBuffer(req.body)) {
        try {
            req.body = JSON.parse(req.body.toString());
        } catch (e) {
            console.error("Failed to parse webhook body:", e);
        }
    }
    next();
};

router.post('/installed', parseBody, webhookController.appInstalled);
router.post('/app/uninstalled', parseBody, webhookController.appUninstalled);

export default router;
