// components/TripPlanner/TripRoute.jsx
import React from 'react';
import { FaMapMarkerAlt, FaClock, FaArrowRight, FaFlag, FaHourglassHalf } from 'react-icons/fa';

const TripRoute = ({ route, totalTime }) => {
  // Convert minutes to hours and minutes format
  const formatTime = (minutes) => {
    if (!minutes && minutes !== 0) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };
  
  // Get the estimated time for a place, with fallback to default
  const getEstimatedTime = (place) => {
    return place.estimated_time || 60; // Default to 60 minutes if not set
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 flex items-center text-amber-700">
        <FaMapMarkerAlt className="mr-3" /> Your Optimized Trip Route
      </h3>
      
      <div className="relative">
        {route.map((place, index) => (
          <div key={place._id} className="mb-6 relative">
            <div className="flex">
              {/* Left side with number and connector line */}
              <div className="relative mr-4 w-10 flex-shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${index === 0 ? 'bg-green-500' : index === route.length - 1 ? 'bg-red-500' : 'bg-amber-500'} text-white font-bold shadow-md z-10`}>
                  {index === 0 ? <FaFlag /> : index === route.length - 1 ? <FaFlag /> : index + 1}
                </div>
                {index < route.length - 1 && (
                  <div className="absolute top-10 bottom-0 left-5 w-0.5 -ml-px bg-amber-300 z-0"></div>
                )}
              </div>
              
              {/* Right side with place details */}
              <div className="bg-white rounded-lg border border-amber-200 p-4 shadow-md flex-grow">
                <div className="font-semibold text-lg text-amber-800 mb-1">{place.name}</div>
                <div className="flex items-center text-gray-600 text-sm">
                  <FaHourglassHalf className="mr-1" />
                  <span>Estimated visit time: {formatTime(getEstimatedTime(place))}</span>
                </div>
                
                {index < route.length - 1 && (
                  <div className="flex items-center mt-2 text-amber-600">
                    <FaArrowRight className="mr-1" />
                    <span className="text-sm">Next stop</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-amber-100 p-4 rounded-lg shadow-sm border border-amber-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaClock className="text-amber-700 mr-2 text-xl" />
            <span className="font-medium">Total Trip Duration:</span>
          </div>
          <div className="text-xl font-bold text-amber-700">{formatTime(totalTime)}</div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          This is the estimated time for visiting all selected places. Travel time between locations may vary based on traffic conditions.
        </p>
      </div>
    </div>
  );
};

export default TripRoute;
