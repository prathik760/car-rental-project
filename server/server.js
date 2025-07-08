import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import router from './routes/userRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js'
 

const app = express();
const PORT = process.env.PORT || 2000;

// Middleware
app.use(cors({
  origin: ['https://car-rental-project-qx5i.vercel.app'],
  credentials: true,
}));

app.use(express.json());
app.use('/api/user', router);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payment', paymentRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚗 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('❌ MongoDB connection failed:', err));

// 🚨 Add this root route
app.get('/', (req, res) => {
  res.send('server has started');
});

 
 