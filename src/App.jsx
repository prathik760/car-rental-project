import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// User-Facing Components
import Navbar from './Components/Navbar';
import Hero from './Components/HeroSection';
import FeaturedCars from './Components/Feature';
import CallToAction from './Components/Calltoaction';
import TestimonialSection from './Components/Testimonial';
import SubscribeSection from './Components/Subcription';
import Footer from './Components/Footer';
import CarDetail from './CarDetails/Cardetails';
 
import MyBookings from './Bookings/Mybookings';

// Admin Dashboard (Single Page with Tabs)
import AdminDashboard from './Admin/Admin';
import ManageCars from './Admin/Managecar';
import Homedash from './Admin/Homedash';
import AvailableCars from './AvailableCars/AvailableCars';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <FeaturedCars />
    <CallToAction />
    <TestimonialSection />
    <SubscribeSection />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        <Route
          path="/car/:name"
          element={
            <>
              <Navbar />
              <CarDetail />
              <Footer />
            </>
          }
        />

        <Route
          path="/cars"
          element={
            <>
              <Navbar />
              <AvailableCars />
              <Footer />
            </>
          }
        />

        <Route
          path="/mybookings"
          element={
            <>
              <Navbar />
              <MyBookings />
              <Footer />
            </>
          }
        />

        {/* Admin Dashboard Route */}
        <Route
  path="/dashboard"
  element={
    <>
      <AdminDashboard />
      {/* <ManageCars />
      <Homedash /> */}
    </>
  }
/>
      </Routes>
    </Router>
  );
};

export default App;
