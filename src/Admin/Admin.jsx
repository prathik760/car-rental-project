import React, { useState } from 'react';
import './Admin.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}>Dashboard Home</li>
          <li onClick={() => setActiveTab('cars')} className={activeTab === 'cars' ? 'active' : ''}>Manage Cars</li>
          <li onClick={() => setActiveTab('users')} className={activeTab === 'users' ? 'active' : ''}>Manage Users</li>
          <li onClick={() => setActiveTab('bookings')} className={activeTab === 'bookings' ? 'active' : ''}>Manage Bookings</li>
        </ul>
      </aside>

      <main className="content">
        {activeTab === 'home' && (
          <div>
            <h1>Welcome to Admin Dashboard</h1>
            <p>Overview of recent activity and stats.</p>
          </div>
        )}

        {activeTab === 'cars' && (
          <div>
            <h1>Manage Cars</h1>
            <p>Add, update, or remove cars from your fleet.</p>
            {/* Add your car management UI here */}
          </div>
        )}

        {activeTab === 'users' && (
          <div>
            <h1>Manage Users</h1>
            <p>View and manage registered users.</p>
            {/* Add your user management UI here */}
          </div>
        )}

        {activeTab === 'bookings' && (
          <div>
            <h1>Manage Bookings</h1>
            <p>View and manage car bookings.</p>
            {/* Add your booking management UI here */}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
