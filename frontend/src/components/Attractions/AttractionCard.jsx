import React from 'react';
import { Link } from 'react-router-dom';

const AttractionCard = ({ place }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition">
      <img
        src={place.images?.[0]} //https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000
        alt={place.name}
        className="w-full h-48 object-cover rounded-lg mb-3"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://dummyimage.com/600x400/e0e0e0/ffffff&text=Attraction+Image+Missing';
        }}
        loading="lazy"
      />
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-bold">{place.name}</h3>
        <div className="flex items-center text-amber-500">
          <span className="mr-1">★</span>
          <span className="text-sm">{place.average_rating}</span>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-3">{place.description}</p>
      <div className="space-y-2">
        <p className="text-sm text-gray-500 flex items-center">
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {place.opening_hours}
        </p>
        <p className="text-sm text-gray-500 flex items-center">
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {place.address}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {place.tags?.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-4 text-right">
        <Link
          to={`/place/${place._id}`}
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold py-2 px-4 rounded"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default AttractionCard;
