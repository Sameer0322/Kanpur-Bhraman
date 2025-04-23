import React, { useEffect, useState } from 'react';
import attractionImageDesktop from '../../assets/Attractions-L.png';
import attractionImageMobile from '../../assets/Attractions-P.png';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const backgroundImage = isMobile ? attractionImageMobile : attractionImageDesktop;

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 -mt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-400 drop-shadow-lg">
          The Allure of Kanpur's Attractions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white drop-shadow-lg max-w-3xl mx-auto">
            Explore the vibrant heart of Kanpur, where history, culture, and modernity come together. From ancient landmarks to bustling marketplaces, each attraction tells a story of the city's rich heritage and dynamic growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
