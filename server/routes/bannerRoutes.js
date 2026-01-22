import express from 'express';
import * as bannerController from '../controllers/bannerController.js';

const router = express.Router();

router.get('/', bannerController.getSettings);
router.put('/', bannerController.updateSettings);

export default router;
