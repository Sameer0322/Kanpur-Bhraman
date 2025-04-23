// pages/TripPlanner.jsx
import React from 'react';
import TripPlanner from '../components/TripPlanner/TripPlanner';
import HeroSection from '../components/TripPlanner/HeroSection';

const TripPlannerPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="py-12"> {/* Added padding to create space between components */}
        <TripPlanner />
      </div>
    </div>
  );
};

export default TripPlannerPage;
