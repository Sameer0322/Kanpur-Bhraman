import React, { useState, useEffect } from 'react';
import HeroSection from '../components/Attractions/HeroSection';
import SearchBar from '../components/Attractions/SearchBar';
import AttractionCard from '../components/Attractions/AttractionCard';
import axios from 'axios';

function Attractions() {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const apiUrl = import.meta.env.VITE_BACKEND_API_URL;
        const res = await axios.get(`${apiUrl}/api/places`);
        console.log('API Response:', res.data);
        if (res.data && Array.isArray(res.data)) {
          console.log('Setting places:', res.data);
          setPlaces(res.data);
          setFilteredPlaces(res.data);
        } else {
          console.error('Invalid data format received:', res.data);
        }
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };

    fetchPlaces();
  }, []);

  const handleSearch = (query) => {
    const filtered = places.filter((place) =>
      place.name.toLowerCase().includes(query.toLowerCase()) ||
      place.tags?.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredPlaces(filtered);
  };

  const handleFilter = (filters) => {
    const filtered = places.filter((place) => {
      // Check if the place has the selected category in its category array
      const matchesCategory = !filters.category || 
        (Array.isArray(place.category) && 
         place.category.some(cat => cat.toLowerCase() === filters.category.toLowerCase()));
      
      return matchesCategory;
    });
    setFilteredPlaces(filtered);
  };

  return (
    <div className="w-full">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchBar onSearch={handleSearch} onFilter={handleFilter} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {console.log('Filtered Places:', filteredPlaces)}
          {filteredPlaces && filteredPlaces.length > 0 ? (
            filteredPlaces.slice(0, visibleCount).map((place) => (
              <AttractionCard key={place._id} place={place} />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No places found</p>
          )}
        </div>
        {filteredPlaces.length > 0 && (
          <div className="flex justify-center gap-4 mt-8">
            {visibleCount < filteredPlaces.length && (
              <button
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                See More
              </button>
            )}
            {visibleCount > 3 && (
              <button
                onClick={() => setVisibleCount(3)}
                className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                See Less
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Attractions;
