import React from 'react';
import './Calltoaction.css';
import { FaArrowRight } from 'react-icons/fa';
import volkswagen from '../assets/car images/volkswagen.jpg'

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <div className="cta-text">
          <h2>Ready for Your Next Journey?</h2>
          <p>Choose from our top luxury cars and make your trip unforgettable. Affordable, fast, and elegant rentals at your fingertips.</p>
          <button className="cta-btn">
            Book Now <FaArrowRight />
          </button>
        </div>
        <div className="cta-image">
          <img src={volkswagen} alt="Luxury Car" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
