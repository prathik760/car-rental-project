import express from 'express';
import { registerUser, loginUser, getCurrentUser } from '../controllers/userControllers.js';
import { authenticateUser } from '../Middleware/auth.js';
 

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', authenticateUser, getCurrentUser);

export default router;
