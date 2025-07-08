// routes/paymentRoutes.js
import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const router = express.Router();

const razorpay = new Razorpay({
  key_id: "rzp_test_6rNnJqCLji7n9O",
  key_secret: "jDKaZmxoTeORHKFozvZglOtI",
});

// Create order
router.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // amount in paise
    currency: 'INR',
    receipt: `receipt_order_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    console.error('Razorpay Order Error:', err);
    res.status(500).json({ message: 'Failed to create Razorpay order' });
  }
});

export default router;
