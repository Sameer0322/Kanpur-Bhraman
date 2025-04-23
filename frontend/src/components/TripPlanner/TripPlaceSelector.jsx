// components/TripPlanner/TripPlaceSelector.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaMapPin, FaSpinner, FaCheck } from 'react-icons/fa';

const TripPlaceSelector = ({ onPlaceSelection }) => {
  const [placesList, setPlacesList] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  useEffect(() => {
    // Fetch the list of places from the backend API
    const fetchPlaces = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/places/names');
        setPlacesList(response.data);
      } catch (error) {
        console.error('Error fetching places:', error);
        alert('Failed to load places');
      }
    };

    fetchPlaces();
  }, []);

  const handlePlaceSelection = (placeName) => {
    setSelectedPlaces((prevSelected) => {
      if (prevSelected.includes(placeName)) {
        return prevSelected.filter((name) => name !== placeName);
      } else {
        return [...prevSelected, placeName];
      }
    });
  };

  useEffect(() => {
    onPlaceSelection(selectedPlaces);
  }, [selectedPlaces, onPlaceSelection]);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <FaMapPin className="text-amber-600 mr-2" /> Select Places to Visit
      </h3>
      
      {placesList.length === 0 ? (
        <div className="flex justify-center items-center p-8">
          <FaSpinner className="animate-spin text-amber-600 text-2xl mr-3" />
          <p className="text-gray-600">Loading places...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {placesList.map((place) => {
            const isSelected = selectedPlaces.includes(place.name);
            return (
              <div 
                key={place._id} 
                className={`border p-4 rounded-lg transition-all cursor-pointer ${isSelected ? 'bg-amber-100 border-amber-400 shadow-md' : 'bg-white hover:bg-amber-50 border-gray-200 hover:shadow-md'}`}
                onClick={() => handlePlaceSelection(place.name)}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 flex items-center justify-center rounded mr-3 ${isSelected ? 'bg-amber-500 text-white' : 'border border-gray-400'}`}>
                    {isSelected && <FaCheck className="text-xs" />}
                  </div>
                  <span className={`${isSelected ? 'font-medium' : ''}`}>{place.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      {selectedPlaces.length > 0 && (
        <div className="mt-4 p-3 bg-amber-100 rounded-lg">
          <p className="text-sm text-amber-800">
            <strong>Selected {selectedPlaces.length} place{selectedPlaces.length !== 1 ? 's' : ''}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default TripPlaceSelector;
