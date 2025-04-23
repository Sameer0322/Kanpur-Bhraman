import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/history", label: "History" },
    { path: "/attractions", label: "Attractions" },
    { path: "/trip-planner", label: "Trip Planner" },
    { path: "/contact", label: "Contact" }
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    return location.pathname === path;
  };

  return (
    <nav className={`bg-blue-950 py-1 shadow-gray-600 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold text-amber-400 hover:text-white transition-colors duration-200">
          Kanpur Bhraman
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-sans">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={`text-white hover:text-amber-400 transition-colors duration-200 ${
                isActive(path) ? "!text-amber-400 font-medium" : ""
              }`}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-white hover:text-amber-400 transition-colors duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // Cross
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-sans">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`block text-right py-2 px-4 rounded-md transition-colors duration-200 ${
                isActive(path) ? "!text-amber-400 font-medium" : "text-white hover:text-amber-400"
              }`}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
