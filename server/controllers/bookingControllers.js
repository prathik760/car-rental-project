// controllers/bookingController.js
import Booking from '../models/bookings.js';

export const createBooking = async (req, res) => {
  const { carName, carImage, pickupDate, returnDate, location, price } = req.body;

  if (!carName || !pickupDate || !returnDate) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const booking = await Booking.create({
      user: req.user._id,
      carName,
      carImage,
      pickupDate,
      returnDate,
      location,
      price
    });

    res.status(201).json({ message: 'Booking created', booking });
  } catch (error) {
    console.error('Create Booking Error:', error);
    res.status(500).json({ message: 'Failed to create booking' });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Fetch Booking Error:', error);
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
};

 
// controllers/bookingController.js
export const deleteBooking = async (req, res) => {
  const bookingId = req.params.id;

  try {
    const booking = await Booking.findOne({ _id: bookingId, user: req.user._id });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    await booking.deleteOne();
    res.status(200).json({ message: 'Booking cancelled' });
  } catch (error) {
    console.error('Delete Booking Error:', error);
    res.status(500).json({ message: 'Failed to cancel booking' });
  }
};
