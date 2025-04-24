// src/components/Home/HeroSection.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImageDesktop from '../../assets/Hero3.png';
import heroImageMobile from '../../assets/MobileHero.png'; // <-- Your mobile-specific image

const HeroSection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // Update screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const backgroundImage = isMobile ? heroImageMobile : heroImageDesktop;

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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 -mt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-400 drop-shadow-lg">
            Welcome to Kanpur Bhraman
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white drop-shadow-lg">
            Discover the soul of Kanpur – places, people & stories
          </p>
          <button
            className="mt-6 px-6 py-2 bg-amber-400 text-black rounded-full hover:bg-amber-500 transition"
            onClick={() => navigate('/attractions')}
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
