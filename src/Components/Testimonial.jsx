import React from 'react';
import './Testimonial.css';
import ravi from '../assets/car images/ravi.png'
import anjali from '../assets/car images/anjali.png'
import vikram from '../assets/car images/vikram.png'
const testimonials = [
  {
    name: 'Ravi Sharma',
    review: 'The booking process was smooth and the car was spotless. Absolutely loved the experience!',
    image: ravi,
    rating: 5
  },
  {
    name: 'Anjali Mehta',
    review: 'Rented an Audi for a weekend trip. Everything was seamless. Highly recommended!',
    image: anjali,
    rating: 5
  },
  {
    name: 'Vikram Desai',
    review: 'Best luxury car rental platform I’ve ever used. Great customer service and pricing.',
    image: vikram,
    rating: 4
  }
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h2>What Our Customers Say</h2>
      <p>Trusted by thousands of happy renters across the country.</p>

      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={t.name} className="user-img" />
            <p className="review-text">“{t.review}”</p>
            <div className="stars">
              {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
            </div>
            <h4>{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
