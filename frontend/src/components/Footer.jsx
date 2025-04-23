import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 pt-10 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
          {/* About Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-amber-400">Kanpur Bhraman</h3>
            <p className="mb-4 text-gray-300">
              Developed by <a href="https://github.com/Sameer0322" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400">Sameer Saxena</a>
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-400">Home</Link>
              </li>
              <li>
                <Link to="/places" className="text-gray-300 hover:text-amber-400">Attractions</Link>
              </li>
              <li>
                <Link to="/trip-planner" className="text-gray-300 hover:text-amber-400">Trip Planner</Link>
              </li>
              <li>
                <Link to="/history" className="text-gray-300 hover:text-amber-400">History</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amber-400">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-amber-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-amber-400" />
                <span className="text-gray-300">123 Tourism Road, Kanpur, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-amber-400" />
                <span className="text-gray-300">+91 512 123 4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-amber-400" />
                <span className="text-gray-300">info@kanpurbhraman.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p className="flex items-center justify-center">
            &copy; {currentYear} Kanpur Bhraman. All rights reserved. Made with <FaHeart className="mx-1 text-red-500" /> in Kanpur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
