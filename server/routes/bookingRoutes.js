import express from 'express';
import { createBooking, getUserBookings, deleteBooking } from '../controllers/bookingControllers.js';
import { authenticateUser} from '../Middleware/auth.js';
 
const router = express.Router();

router.post('/', authenticateUser, createBooking);
router.get('/mybookings', authenticateUser, getUserBookings);
router.delete('/:id', authenticateUser, deleteBooking);
export default router;
