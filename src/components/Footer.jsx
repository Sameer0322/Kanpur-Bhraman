import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-gold text-xl font-semibold mb-4">Kanpur Bhraman</h3>
            <p className="text-sm text-gray-300 mb-4">
              Exploring the historical significance and cultural heritage of Kanpur. 
              Discover the beauty, history, and attractions of this vibrant city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover-gold">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover-gold">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover-gold">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-gold text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover-gold">Home</Link>
              </li>
              <li>
                <Link to="/places" className="text-sm text-gray-300 hover-gold">Tourist Attractions</Link>
              </li>
              <li>
                <Link to="/whats-hot" className="text-sm text-gray-300 hover-gold">What's Hot</Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-gray-300 hover-gold">Events</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover-gold">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Tourism Resources */}
          <div>
            <h3 className="font-serif text-gold text-xl font-semibold mb-4">Tourism Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-300 hover-gold">Travel Guides</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover-gold">Accommodation</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover-gold">Local Transport</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover-gold">Food & Cuisine</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover-gold">Shopping</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-gold text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-gold" />
                <span className="text-sm text-gray-300">Kanpur Tourism Office, Mall Road, Kanpur, Uttar Pradesh</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gold" />
                <a href="mailto:info@kanpurbhraman.com" className="text-sm text-gray-300 hover-gold">
                  info@kanpurbhraman.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gold" />
                <a href="tel:+919876543210" className="text-sm text-gray-300 hover-gold">
                  +91 987-654-3210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {year} Kanpur Bhraman. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 