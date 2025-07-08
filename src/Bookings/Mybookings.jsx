import React, { useEffect, useState } from 'react';
import './Mybookings.css';
import {
  FaUserFriends,
  FaGasPump,
  FaCogs,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRupeeSign,
} from 'react-icons/fa';
import { useAuth } from '../AuthContext/Authcontext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyBookings = () => {
  const { token } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
  const fetchBookings = async () => {
    if (!token) return; // ✅ Skip API call if no token

    try {
      const res = await axios.get(`https://car-rental-ah1c.onrender.com/api/bookings/mybookings`, {

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(res.data);
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || 'Failed to load your bookings.';

      console.error('Fetch Bookings Error:', message);

      if (status === 401 && token) {
        // Token is present but invalid/expired
        toast.error('Session expired. Please log in again.');
      } else {
        toast.error(message);
      }
    }
  };

  fetchBookings();
}, [token]);

  

  const handleCancel = async (id) => {
    const confirmCancel = window.confirm('Are you sure you want to cancel this booking?');
    if (!confirmCancel) return;

    try {
     await axios.delete(`https://car-rental-ah1c.onrender.com/api/bookings/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings((prev) => prev.filter((booking) => booking._id !== id));
      toast.success('Booking cancelled successfully!');
    } catch (error) {
      console.error('Cancel Booking Error:', error);
      toast.error('Failed to cancel booking.');
    }
  };

 const handlePayNow = async (booking) => {
  try {
    const res = await axios.post(`https://car-rental-ah1c.onrender.com/api/payment/create-order`, {
      amount: booking.price,
    });

    const { id: order_id } = res.data;

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: booking.price * 100,
      currency: "INR",
      name: "Car Rental",
      description: "Car Booking Payment",
      order_id,
      handler: function (response) {
        toast.success("Payment successful!");
        console.log("Payment ID:", response.razorpay_payment_id);
        console.log("Order ID:", response.razorpay_order_id);
      },
      prefill: {
        name: booking.user?.name || "User",
        email: booking.user?.email || "user@example.com",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  } catch (error) {
    toast.error("Payment failed");
    console.error("Payment Error:", error);
  }
};

  return (
    <section className="bookings-section" style={{ minHeight: 'calc(100vh - 300px)' }}>
      <h1>My Bookings</h1>
      <p>Your reserved luxury rides with cancellation and payment options.</p>

      <div className="bookings-grid">
        {bookings.length === 0 ? (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>No bookings found.</p>
        ) : (
          bookings.map((booking) => (
            <div className="booking-card" key={booking._id}>
              <div className="booking-img">
                <img src={booking.carImage} alt={booking.carName} />
              </div>

              <div className="booking-info">
                <h2>{booking.carName}</h2>
                <p className="price">
                  <FaRupeeSign /> {booking.price}
                </p>

                <div className="dates">
                  <p>
                    <FaCalendarAlt /> Pickup: {booking.pickupDate.slice(0, 10)}
                  </p>
                  <p>
                    <FaCalendarAlt /> Return: {booking.returnDate.slice(0, 10)}
                  </p>
                </div>

                <div className="features">
                  <span><FaUserFriends /> 5 Seats</span>
                  <span><FaGasPump /> Fuel</span>
                  <span><FaCogs /> Auto</span>
                  <span><FaMapMarkerAlt /> {booking.location}</span>
                </div>

                <div className="booking-actions">
                  <button className="cancel-btn" onClick={() => handleCancel(booking._id)}>
                    Cancel Booking
                  </button>
                  <button className="pay-btn" onClick={() => handlePayNow(booking)}>
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MyBookings;
