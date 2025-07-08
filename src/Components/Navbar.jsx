import React, { useState } from 'react';
import './Navbar.css';
import LoginPopup from './LoginModal';
import { useAuth } from '../AuthContext/Authcontext';
import logo from '../assets/car images/logo2.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const { user, logout } = useAuth(); // use context

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <div className="navbar-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/cars" className="nav-link">Cars</a>
            <a href="/Mybookings" className="nav-link">My Bookings</a>
          </div>

          <div className="navbar-search">
            <input type="text" className="search-input" placeholder="Search vehicle..." />
          </div>

          <div className="navbar-actions">
            <a href="/dashboard" className="nav-link">Dashboard</a>
            {user ? (
              <>
                <span className="nav-link">Hi, {user.name || 'User'}</span>
                <button className="signup-btn" onClick={logout}>Logout</button>
              </>
            ) : (
              <button className="signup-btn" onClick={() => setShowLoginModal(true)}>Login</button>
            )}
          </div>
        </div>
      </nav>

      {showLoginModal && (
        <LoginPopup onClose={() => setShowLoginModal(false)} />
      )}
    </>
  );
};

export default Navbar;
