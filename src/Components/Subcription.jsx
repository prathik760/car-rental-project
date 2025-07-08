import React from 'react';
import './Subcription.css';

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
      <h2>Never miss a deal!</h2>
      <p>Subscribe to get updates on new car listings and exclusive offers straight to your inbox.</p>

      <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email address"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default SubscribeSection;
