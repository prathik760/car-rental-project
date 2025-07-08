import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  FaUserFriends,
  FaGasPump,
  FaCogs,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowLeft,
  FaCarSide,
} from 'react-icons/fa';
import './Cardetails.css';
import { useAuth } from '../AuthContext/Authcontext';
import LoginModal from '../Components/LoginModal';
import axios from 'axios';
import { toast } from 'react-toastify';
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
import volkswagen from '../assets/car-images/volkswagen.jpg'
import bmw from '../assets/car-images/bmw.jpg'
const cars = [
  {
    name: 'Audi A6',
    model: '2023',
    price: '₹1200/day',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    location: 'New Delhi',
    image: audi,
    description: 'The Audi A6 is a luxury sedan offering advanced features, smooth performance, and elegant design. Ideal for both business and leisure travel.',
    condition: 'Excellent - Clean interior, recent servicing, low mileage.',
    longDescription:
      'With a luxurious interior, adaptive suspension, and state-of-the-art infotainment system, the Audi A6 guarantees a premium driving experience. From long road trips to quick city rides, it adapts effortlessly to every condition. The car is regularly serviced and inspected to meet the highest safety and cleanliness standards.'
  },
  {
    name: 'BMW 5 Series',
    model: '2022',
    price: '₹1400/day',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 5,
    location: 'Mumbai',
    image: bmw,
    description: 'The BMW 5 Series combines sportiness and comfort with cutting-edge technology. A favorite for executive travel with powerful road presence.',
    condition: 'Very Good - Fully inspected, well-maintained with great fuel efficiency.',
    longDescription:
      'The BMW 5 Series features dynamic handling, an advanced driver assistance system, and plush interiors with ergonomic seating. Whether cruising the expressways or navigating through traffic, it delivers consistent performance and unmatched refinement. Our fleet is thoroughly cleaned and sanitized before every rental.'
  },
  {
    name: 'Mercedes C-Class',
    model: '2023',
    price: '₹1350/day',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    location: 'Bangalore',
    image: benz,
    description: 'The Mercedes-Benz C-Class blends luxury with performance. Known for its smooth handling and superior interior comfort.',
    condition: 'Excellent - Top condition, pristine exterior, serviced regularly.',
    longDescription:
      'Step into pure luxury with the Mercedes C-Class. With features like ambient lighting, surround sound, and AI-powered driving modes, this sedan is the definition of sophistication. Great for city driving and outstation trips alike, each vehicle is maintained with care to ensure customer satisfaction and safety.'
  },
  {
    name: 'Toyota Fortuner',
    model: '2021',
    price: '₹1000/day',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: 7,
    location: 'Chennai',
    image: fortuner,
    description: 'The Toyota Fortuner is a powerful SUV perfect for family trips and rugged terrain with spacious interiors and strong performance.',
    condition: 'Very Good - Rugged yet refined, recently serviced.',
    longDescription:
      'Ideal for longer journeys and tough roads, the Fortuner comes with high ground clearance and advanced off-road capabilities. Enjoy ultimate versatility and comfort on all types of routes. Vehicle is cleaned and serviced before every ride.'
  },
  {
    name: 'Honda City',
    model: '2022',
    price: '₹800/day',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    location: 'Hyderabad',
    image: honda,
    description: 'Honda City is known for its fuel efficiency, smooth ride, and comfort – perfect for everyday driving.',
    condition: 'Excellent - Low mileage, maintained regularly.',
    longDescription:
      'Smooth engine performance and compact design make the Honda City ideal for city travel. Fitted with modern amenities and safety features for a worry-free drive. Sanitized and ready-to-go always.'
  },
  {
    name: 'Skoda Superb',
    model: '2021',
    price: '₹1100/day',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    location: 'Kolkata',
    image: skoda,
    description: 'A premium sedan offering extra legroom, high-end features and smooth driving experience.',
    condition: 'Very Good - Clean interiors, well-kept bodywork.',
    longDescription:
      'Skoda Superb delivers on elegance and practicality, making it an excellent choice for business travelers. Excellent comfort, quiet cabin, and ample boot space. Maintained to deliver reliable performance every time.'
  },
  {
    name: 'Mahindra XUV700',
    model: '2023',
    price: '₹1050/day',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: 7,
    location: 'Ahmedabad',
    image: mahindra,
    description: 'The XUV700 is a bold SUV with top-notch safety features and powerful performance.',
    condition: 'Excellent - Latest model with modern upgrades.',
    longDescription:
      'Spacious 7-seater with excellent road presence. With ADAS features, panoramic sunroof, and connected tech, it brings modern luxury to Indian roads. Thoroughly cleaned and maintained to ensure safety.'
  },
  {
    name: 'Hyundai Creta',
    model: '2022',
    price: '₹900/day',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    location: 'Pune',
    image: creta,
    description: 'Compact SUV with a comfortable cabin, perfect for city and weekend getaways.',
    condition: 'Very Good - No dents, reliable and well-kept.',
    longDescription:
      'Hyundai Creta is a fan favorite for its smooth ride and compact size. Great infotainment, climate control, and boot space make it family-friendly and city-smart. Sanitized before each booking.'
  },
  {
    name: 'Kia Seltos',
    model: '2022',
    price: '₹1500/day',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: 5,
    location: 'Surat',
    image: kia,
    description: 'Stylish and sporty SUV with LED lighting, touchscreen display, and powerful performance.',
    condition: 'Good - Fully functional with regular checks.',
    longDescription:
      'A well-designed SUV for urban and highway driving. Spacious interiors, stylish exteriors, and consistent mileage. Car is sanitized and checked before every handover.'
  },
  {
    name: 'MG Hector',
    model: '2023',
    price: '₹1000/day',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 5,
    location: 'Jaipur',
    image: mg,
    description: 'Tech-rich SUV offering AI features, voice control, and massive touchscreen display.',
    condition: 'Excellent - New-gen model, recently serviced.',
    longDescription:
      'The MG Hector brings luxury and connectivity together. AI-enabled voice commands and a plush ride make it a futuristic pick. Always cleaned and sanitized thoroughly before rides.'
  },
  {
    name: 'Volkswagen Virtus',
    model: '2023',
    price: '₹1200/day',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: 5,
    location: 'Indore',
    image: volkswagen,
    description: 'A sporty and solid sedan with a modern cabin, great boot space, and efficient engine.',
    condition: 'Very Good - Recently inspected, no issues.',
    longDescription:
      'Volkswagen Virtus is built for confident long drives and city cruising. Balanced steering and premium interiors make every trip enjoyable. Vehicle is cleaned and verified before every booking.'
  },
  {
    name: 'Jeep Compass',
    model: '2022',
    price: '₹1150/day',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 5,
    location: 'Nagpur',
    image: jeep,
    description: 'Compact SUV with off-road capabilities and luxurious interiors.',
    condition: 'Excellent - Ready for rough terrain and long drives.',
    longDescription:
      'Known for rugged build and safety, the Jeep Compass is adventure-ready. Comes with traction control, hill assist, and a plush cabin. Fully sanitized and serviced on schedule.'
  }
];

const CarDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { user, token } = useAuth(); // <- get token from context


  const [showLogin, setShowLogin] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [bookingLoading, setBookingLoading] = useState(false);

  const car = cars.find(c => c.name === decodeURIComponent(name));
  if (!car) return <p>Car not found</p>;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookNow = async () => {
    if (!user) {
      setShowLogin(true);
      return;
    }

    if (!pickupDate || !returnDate) {
      return alert('Please select both pickup and return dates.');
    }

    if (new Date(pickupDate) >= new Date(returnDate)) {
      return alert('Return date must be after pickup date.');
    }

    try {
      setBookingLoading(true);
      const cleanedPrice = car.price.replace('$', '').replace('/day', '');

      const res = await axios.post(
  `${import.meta.env.VITE_API_BASE_URL}/api/bookings`,
        {
          carName: car.name,
          carImage: car.image,
          pickupDate,
          returnDate,
          location: car.location,
          price: cleanedPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 201) {
        toast('Booking successful!');
        navigate('/mybookings');
      }
    } catch (err) {
      console.error('Booking Error:', err.response?.data || err.message);
      toast.error(err.response?.data?.message || 'Booking failed');

    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <section className="car-detail">
      <div className="car-detail-nav-buttons">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>
         
      </div>

      <div className="car-detail-header">
        <img src={car.image} alt={car.name} />
        <div className="car-detail-info">
          <h1>
            {car.name} <span className="model">({car.model})</span>
          </h1>
          <p className="description">{car.description}</p>
          <h2 className="price">{car.price}</h2>

          <div className="date-fields">
            <label>
              Pick-up Date:
              <input type="date" value={pickupDate} onChange={e => setPickupDate(e.target.value)} />
            </label>
            <label>
              Return Date:
              <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
            </label>
          </div>

          <button className="book-btn" onClick={handleBookNow} disabled={bookingLoading}>
            {bookingLoading ? 'Booking...' : 'Book Now'}
          </button>
        </div>
      </div>

      <div className="car-detail-features">
        <h3>Features</h3>
        <ul>
          <li><FaUserFriends /> {car.seats} Seats</li>
          <li><FaGasPump /> {car.fuel}</li>
          <li><FaCogs /> {car.transmission}</li>
          <li><FaMapMarkerAlt /> Location: {car.location}</li>
          <li><FaCheckCircle /> Condition: {car.condition}</li>
        </ul>
      </div>

      <div className="car-long-description">
        <h3>More About This Car</h3>
        <p>{car.longDescription}</p>
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </section>
  );
};

export default CarDetail;