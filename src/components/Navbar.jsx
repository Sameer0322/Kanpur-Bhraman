import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Places", path: "/places" },
    { name: "What's Hot", path: "/whats-hot" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-deep-blue shadow-md py-2"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className={`font-serif font-bold text-2xl ${scrolled ? "text-gold" : "text-white"}`}>
              Kanpur Bhraman
            </h1>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium hover-gold ${
                  scrolled ? "text-white" : "text-white"
                } ${
                  location.pathname === link.path ? "text-gold font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-deep-blue mt-4 rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col py-4 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium px-4 py-3 rounded-md hover:bg-opacity-10 hover:bg-white hover-gold ${
                    location.pathname === link.path
                      ? "text-gold font-semibold"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 