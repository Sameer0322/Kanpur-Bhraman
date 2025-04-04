import React from "react";
import { Link } from "react-router-dom";

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink = "/places",
  overlayOpacity = "opacity-50",
  height = "h-screen",
}) => {
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black ${overlayOpacity}`}></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
        <h1 className="text-gold font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-4 animate-fade-in">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-white text-lg md:text-xl max-w-2xl mb-8 animate-fade-in">
            {subtitle}
          </p>
        )}

        {buttonText && (
          <Link
            to={buttonLink}
            className="bg-deep-blue text-white px-8 py-3 rounded font-medium border-2 border-transparent hover:bg-transparent hover:border-gold hover:text-gold transition-all duration-300 animate-fade-in"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero; 