import React, { useState, useEffect } from 'react';
import HeroSection from '../components/History/HeroSection';

const HistorySection = ({ title, content }) => (
  <div className="bg-blue-950/50 p-6 rounded-lg shadow-lg hover:bg-blue-950/60 transition-colors duration-300">
    <h2 className="text-2xl font-semibold mb-4 text-amber-300">{title}</h2>
    <p className="text-gray-300 leading-relaxed">{content}</p>
  </div>
);

const History = () => {
  const [historicalSections, setHistoricalSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        setLoading(true);
        const apiUrl = import.meta.env.VITE_BACKEND_API_URL;
        const response = await fetch(`${apiUrl}/api/history/`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setHistoricalSections(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching historical data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHistoricalData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-950 text-white">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-amber-300">Loading historical data...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-red-500">Error: {error}</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {historicalSections.map((section, index) => (
              <HistorySection
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-amber-400 text-lg font-medium mb-4">Discover More</p>
          <p className="text-gray-300">
            Visit our attractions page to explore these historical sites in person
            and immerse yourself in Kanpur's rich heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
