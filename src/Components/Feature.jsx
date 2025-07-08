import React from 'react';
import './Feature.css';
import { FaUserFriends, FaGasPump, FaCogs, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import audi from '../assets/car images/a6.jpg'
import bmw from '../assets/car images/bmw.jpg'
import fortuner from '../assets/car images/toyota.jpg'
const cars = [
  {
    name: 'Audi A6',
    price: '1200/day',
    image: audi,
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    location: 'New Delhi'
  },
  {
    name: 'BMW 5 Series',
    price: '₹1400/day',
    image: bmw,
    seats: 5,
    fuel: 'Diesel',
    transmission: 'Automatic',
    location: 'Mumbai'
  },
  {
      name: 'Toyota Fortuner',
      price: '₹1000/day',
      image: fortuner,
      fuel: 'Diesel',
      transmission: 'Manual',
      seats: 7,
      location: 'Chennai'
    },
];

const FeaturedCars = () => {
  return (
    <section className="featured-section">
      <div className="featured-header">
        <h1>Featured Vehicles</h1>
        <p>Handpicked luxury cars available across popular cities.</p>
      </div>

      <div className="featured-grid">
        {cars.map((car, index) => (
          <Link to={`/car/${encodeURIComponent(car.name)}`} key={index} className="car-card-link">
            <div className="car-card">
              <div className="image-wrapper">
                <img src={car.image} alt={car.name} />
                <span className="price-tag">{car.price}</span>
                <span className="availability">Available</span>
              </div>
              <h2>{car.name}</h2>
              <div className="car-features">
                <span><FaUserFriends /> {car.seats} Seats</span>
                <span><FaGasPump /> {car.fuel}</span>
                <span><FaCogs /> {car.transmission}</span>
                <span><FaMapMarkerAlt /> {car.location}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="explore-btn-wrapper">
  <Link to="/cars">
    <button className="explore-btn">
      Explore All Cars <FaArrowRight />
    </button>
  </Link>
</div>

    </section>
  );
};

export default FeaturedCars;
