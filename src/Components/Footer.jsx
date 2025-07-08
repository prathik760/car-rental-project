import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF,FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/car images/logo2.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <img src={logo} alt="CarRent Logo" className="footer-logo" />
          <p>Your go-to destination for luxury and reliable car rentals. Drive the difference today.</p>
          <div className="footer-socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            
            <a href="mailto:info@carrent.com"><FaEnvelope /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cars">Browse Cars</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-links">
          <h3>Resources</h3>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/offers">Latest Offers</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li><FaPhoneAlt /> +91 6361770366</li>
            <li><FaEnvelope /> support@carrental.com</li>
            <li><FaMapMarkerAlt /> Bengaluru, India</li>
          </ul>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CarRent Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
