import React, { useState } from 'react';
import './HeroSection.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import audi from '../assets/car images/bnww.png'

const Hero = () => {
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [duration, setDuration] = useState(0);

  const navigate = useNavigate();

  const handleLocationChange = async (e) => {
    const value = e.target.value;
    setLocation(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(value)}`
      );
      const data = await res.json();
      setSuggestions(data.slice(0, 5));
    } catch (err) {
      console.error('Error fetching suggestions:', err);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setLocation(suggestion.display_name);
    setSuggestions([]);
  };

  const handleDateChange = (setter, value) => {
    setter(value);
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    if (pickupDate && returnDate && start <= end) {
      const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setDuration(diff);
    } else {
      setDuration(0);
    }
  };

  const handleSearch = () => {
    if (!location || !pickupDate || !returnDate) {
      alert('Please fill in all fields.');
      return;
    }

    // Navigate to /cars with query parameters
    navigate(`/cars?location=${encodeURIComponent(location)}&pickup=${pickupDate}&return=${returnDate}`);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Luxury Cars on Rent</h1>

        <div className="search-bar">
          <div className="input-group">
            <input
              type="text"
              placeholder="Pick-up Location"
              value={location}
              onChange={handleLocationChange}
              autoComplete="off"
            />
            {suggestions.length > 0 && (
              <ul className="suggestion-list">
                {suggestions.map((item, i) => (
                  <li key={i} onClick={() => handleSuggestionClick(item)}>
                    {item.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="input-group">
            <label>Pick-up Date</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => handleDateChange(setPickupDate, e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Return Date</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => handleDateChange(setReturnDate, e.target.value)}
            />
          </div>

          <button className="search-button" onClick={handleSearch}>
            <FaSearch className="search-icon" /> Search
          </button>
        </div>

        {duration > 0 && (
          <p className="duration-text">
            Duration: {duration} {duration === 1 ? 'day' : 'days'}
          </p>
        )}

        <div className="hero-image">
          <img src={audi} alt="Luxury Car" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
