// components/TripPlanner/TripPlanner.jsx
import React, { useState } from 'react';
import axios from 'axios';
import TripPlaceSelector from './TripPlaceSelector';
import TripRoute from './TripRoute';
import { FaMapMarkedAlt, FaRoute } from 'react-icons/fa';

const TripPlanner = () => {
  const [places, setPlaces] = useState([]);
  const [route, setRoute] = useState([]);
  const [totalTime, setTotalTime] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePlaceSelection = (selectedPlaces) => {
    setPlaces(selectedPlaces);
  };

  const handlePlanTrip = async () => {
    if (places.length < 1) {
      alert('Please select at least one place.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/trip-planner/shortest-route', { places });
      setRoute(response.data.route);
      setTotalTime(response.data.totalEstimatedTime);
    } catch (error) {
      console.error('Error generating trip route:', error);
      alert('Error generating trip route');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="trip-planner" className="container mx-auto p-8 bg-white rounded-xl shadow-xl max-w-5xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-amber-600 mb-3 flex items-center justify-center">
          <FaMapMarkedAlt className="mr-3" /> Create Your Itinerary
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Select the places you want to visit in Kanpur and we'll create the optimal route for you to maximize your experience</p>
      </div>

      <div className="bg-amber-50 p-6 rounded-lg mb-8 shadow-md">
        <TripPlaceSelector onPlaceSelection={handlePlaceSelection} />
      </div>

      <div className="flex justify-center my-6">
        <button
          onClick={handlePlanTrip}
          className={`flex items-center px-6 py-3 rounded-lg shadow-md text-white font-semibold transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-700 hover:shadow-lg'}`}
          disabled={loading}
        >
          <FaRoute className="mr-2" />
          {loading ? 'Planning your trip...' : 'Generate Optimal Route'}
        </button>
      </div>

      {route.length > 0 && (
        <div className="mt-8 bg-amber-50 p-6 rounded-lg shadow-md">
          <TripRoute route={route} totalTime={totalTime} />
        </div>
      )}
    </div>
  );
};

export default TripPlanner;
