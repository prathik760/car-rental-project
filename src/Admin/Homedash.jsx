import React from 'react';
import './Homedash.css'; // Optional: if you plan to use separate CSS for styling

const Homedash = () => {
  return (
    <div className="section">
      <h2>Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>128</p>
        </div>
        <div className="stat-card">
          <h3>Total Cars</h3>
          <p>45</p>
        </div>
        <div className="stat-card">
          <h3>Total Bookings</h3>
          <p>312</p>
        </div>
        <div className="stat-card">
          <h3>Pending Approvals</h3>
          <p>5</p>
        </div>
      </div>

      {/* Activity Log */}
      <div className="activity-log">
        <h3>Recent Activity</h3>
        <ul>
          <li>✅ New user "john@example.com" registered</li>
          <li>🚗 Admin added a new Audi A6 to listings</li>
          <li>📅 Booking confirmed for BMW 5 Series</li>
          <li>🔧 Car "Hyundai i20" removed from listings</li>
          <li>🧾 User "amy@xyz.com" cancelled a booking</li>
        </ul>
      </div>
    </div>
  );
};

export default Homedash;
