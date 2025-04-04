import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";

const PlaceCard = ({ place }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
      <div className="relative h-48 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-deep-blue text-white text-xs uppercase font-semibold px-2 py-1 rounded">
          {place.type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-dark-brown font-bold text-xl mb-2">
          {place.name}
        </h3>
        <p className="text-dark-gray text-sm mb-4 line-clamp-3">
          {place.description}
        </p>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span>{place.location.split(',')[0]}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star
              size={16}
              className="text-gold fill-gold"
            />
            <span className="ml-1 text-dark-gray font-medium">
              {place.rating.toFixed(1)}
            </span>
          </div>
          <Link
            to={`/places/${place.id}`}
            className="text-deep-blue font-medium hover:text-gold transition-colors"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard; 