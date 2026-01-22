import express from 'express';
import * as authController from '../controllers/authController.js';
import verifyRequest from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/auth', authController.auth);
router.get('/auth/callback', authController.callback);


export default router;
