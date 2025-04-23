// src/components/Home/LiveInfo.jsx
import React, { useState, useEffect } from 'react';
import bgImage from '../../assets/LiveInfo-bg2.png'; // Make sure to replace with the correct path
import bgImage2 from '../../assets/LiveInfo-bg.png'; // Make sure to replace with the correct path
const LiveInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Kanpur,IN&units=metric&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
        );

        if (!response.ok) {
          throw new Error('Weather data not available');
        }

        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
    // Refresh weather data every 5 minutes
    const weatherTimer = setInterval(fetchWeather, 300000);
    return () => clearInterval(weatherTimer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('en-IN', {
    weekday: isMobile ? 'short' : 'long',
    year: 'numeric',
    month: isMobile ? 'short' : 'long',
    day: 'numeric'
  });

  const formattedTime = currentTime.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div
      className="bg-blue-950/90 shadow-lg p-4 sm:p-6 md:p-8 rounded-xl w-full max-w-5xl mx-auto backdrop-blur-sm"
      style={{
        backgroundImage: `url(${isMobile ? bgImage2 : bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: isMobile ? '100vh' : 'auto'
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-amber-400">Live Information</h2>

      {loading ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-300">Loading weather data...</p>
        </div>
      ) : error ? (
        <div className="text-center py-8 bg-red-900/20 rounded-lg">
          <p className="text-lg text-red-400">Error: {error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Time and Date Card */}
          <div className="md:col-span-3 bg-blue-950/50 p-6 rounded-xl backdrop-blur-sm hover:bg-blue-950/60 transition-colors duration-300">
            <div className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-4">
              <p className="flex items-center gap-3 text-amber-400">
                <span className="text-3xl">📅</span>
                <span className="text-2xl">{formattedDate}</span>
              </p>
              <p className="flex items-center gap-3 text-amber-400">
                <span className="text-3xl">⏰</span>
                <span className="text-2xl">{formattedTime}</span>
              </p>
            </div>
          </div>

          {/* Weather Cards */}
          <div className="bg-blue-950/50 p-6 rounded-xl backdrop-blur-sm hover:bg-blue-950/60 transition-colors duration-300">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">🌡️</span>
              <span className="text-sm text-gray-300">Temperature</span>
              <strong className="text-2xl text-amber-400 mt-1">{Math.round(weatherData.main.temp)}°C</strong>
            </div>
          </div>

          <div className="bg-blue-950/50 p-6 rounded-xl backdrop-blur-sm hover:bg-blue-950/60 transition-colors duration-300">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">💧</span>
              <span className="text-sm text-gray-300">Humidity</span>
              <strong className="text-2xl text-amber-400 mt-1">{weatherData.main.humidity}%</strong>
            </div>
          </div>

          <div className="bg-blue-950/50 p-6 rounded-xl backdrop-blur-sm hover:bg-blue-950/60 transition-colors duration-300">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">☁️</span>
              <span className="text-sm text-gray-300">Clouds</span>
              <strong className="text-2xl text-amber-400 mt-1">{weatherData.clouds.all}%</strong>
            </div>
          </div>

          <div className="md:col-span-3 bg-blue-950/50 p-6 rounded-xl backdrop-blur-sm hover:bg-blue-950/60 transition-colors duration-300">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">🌬️</span>
              <span className="text-sm text-gray-300">Wind Speed</span>
              <strong className="text-2xl text-amber-400 mt-1">{weatherData.wind.speed} m/s</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveInfo;
