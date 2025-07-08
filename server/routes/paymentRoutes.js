import express from 'express';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

router.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    });

    res.status(201).json(order);
  } catch (error) {
    console.error('Order error:', error);
    res.status(500).json({ message: 'Failed to create order' });
  }
});

export default router;
