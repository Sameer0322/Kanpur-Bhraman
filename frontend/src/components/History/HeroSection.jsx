import React, { useEffect, useState } from 'react';
import evolutionImageDesktop from '../../assets/Evolution-L.png';
import evolutionImageMobile from '../../assets/Evolution-P.png';

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

  const backgroundImage = isMobile ? evolutionImageMobile : evolutionImageDesktop;

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
            The Glorious Past of Kanpur
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white drop-shadow-lg max-w-3xl mx-auto">
            Journey through time and discover the transformation of a small trading post into one of India's largest industrial metropolises.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
