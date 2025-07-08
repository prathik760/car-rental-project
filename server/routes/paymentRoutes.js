// routes/paymentRoutes.js
import express from 'express';
import Razorpay from 'razorpay';

const router = express.Router();

// ✅ Use test keys directly for now
const razorpay = new Razorpay({
  key_id: 'rzp_test_IoTlyxsVrzo2hs',
  key_secret: 'afLXT8Tjip8sn5RKbU1oYCF0',
});

// ✅ Create Razorpay Order
router.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  if (!amount || isNaN(amount)) {
    return res.status(400).json({ message: 'Invalid or missing amount' });
  }

  const options = {
    amount: amount * 100, // paise
    currency: 'INR',
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (err) {
    console.error('❌ Razorpay Order Creation Failed:', err);
    res.status(500).json({ message: 'Failed to create Razorpay order' });
  }
});

export default router;
