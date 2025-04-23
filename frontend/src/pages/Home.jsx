// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import LiveInfo from '../components/Home/LiveInfo';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />

      {/* Live Info Centered Section */}
      <div className="w-full flex justify-center px-4 py-16">
        <LiveInfo />
      </div>
    </div>
  );
};

export default Home;
