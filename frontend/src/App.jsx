import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Attractions from './pages/Attractions';
import PlaceDetails from './pages/PlaceDetails';
import TripPlanner from './pages/TripPlanner';
import Contact from './pages/Contact';
// import Spinner from './components/Spinner';

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time (you can remove this in production)
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <Router>
      <div className="min-h-screen bg-gray-950 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/place/:id" element={<PlaceDetails />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
