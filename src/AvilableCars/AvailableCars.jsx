import React, { useState,useEffect} from 'react';
import './AvailableCars.css';
import { FaUserFriends, FaGasPump, FaCogs, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import audi from '../assets/car-images/a6.jpg'
import benz from '../assets/car-images/mer.png'
import creta from '../assets/car-images/creta.jpg'
import fortuner from '../assets/car-images/toyota.jpg'
import honda from '../assets/car-images/city.jpg'
import jeep from '../assets/car-images/jeep.jpg'
import kia from '../assets/car-images/kia.jpg'
import mahindra from '../assets/car-images/xuv.jpg'
import mg from '../assets/car-images/mg.png'
import skoda from '../assets/car-images/skoda.png'
import volkswagen from '../assets/car-images/Volkswagen.jpg'
import bmw from '../assets/car-images/bmw.jpg'
const carList = [
  {
    name: 'Audi A6',
    price: '₹1200/day',
    image: audi,
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    location: 'New Delhi'
  },
  {
    name: 'BMW 5 Series',
    price: '₹1400/day',
    image: bmw,
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 5,
    location: 'Mumbai'
  },
  {
    name: 'Mercedes C-Class',
    price: '₹1350/day',
    image: benz,
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    location: 'Bangalore'
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
  {
    name: 'Honda City',
    price: '₹800/day',
    image: honda,
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    location: 'Hyderabad'
  },
  {
    name: 'Skoda Superb',
    price: '₹1100/day',
    image: skoda,
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    location: 'Kolkata'
  },
  {
    name: 'Mahindra XUV700',
    price: '₹1050/day',
    image: mahindra,
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: 7,
    location: 'Ahmedabad'
  },
  {
    name: 'Hyundai Creta',
    price: '₹900/day',
    image: creta,
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    location: 'Pune'
  },
  {
    name: 'Kia Seltos',
    price: '$1500/day',
    image: kia,
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: 5,
    location: 'Surat'
  },
  {
    name: 'MG Hector',
    price: '₹1000/day',
    image: mg,
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 5,
    location: 'Jaipur'
  },
  {
    name: 'Volkswagen Virtus',
    price: '₹1200/day',
    image: volkswagen,
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: 5,
    location: 'Indore'
  },
  {
    name: 'Jeep Compass',
    price: '₹1150/day',
    image: jeep,
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 5,
    location: 'Nagpur'
  }
];

const AvailableCars = () => {
  const [search, setSearch] = useState('');

  const filteredCars = carList.filter(car =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="available-section">
      <div className="available-header">
        <h1>Available Cars</h1>
        <p>Choose from a wide range of luxury and comfort cars to make your ride unforgettable.</p>
        <input
          type="text"
          placeholder="Search by car name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-car-input"
        />
      </div>

      <div className="available-grid">
        {filteredCars.map((car, index) => (
          <Link to={`/car/${encodeURIComponent(car.name)}`} key={index} className="available-card">
            <div className="available-image-wrapper">
              <img src={car.image} alt={car.name} />
              <span className="available-badge">Available</span>
              <span className="available-price">{car.price}</span>
            </div>
            <h2>{car.name}</h2>
            <div className="available-features">
              <span><FaUserFriends /> {car.seats}</span>
              <span><FaGasPump /> {car.fuel}</span>
              <span><FaCogs /> {car.transmission}</span>
              <span><FaMapMarkerAlt /> {car.location}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AvailableCars;
 