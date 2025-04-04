import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { eventCategories } from "../data/events";

const EventCard = ({ event, featuredStyle = false }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getCategoryName = (categoryId) => {
    const category = eventCategories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  if (featuredStyle) {
    return (
      <div className="relative h-[400px] group overflow-hidden rounded-lg">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-deep-blue/70 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="bg-gold text-deep-blue text-xs uppercase font-semibold px-2 py-1 rounded">
              {getCategoryName(event.category)}
            </span>
            <h3 className="font-serif text-white font-bold text-2xl mt-3 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-200 mb-4 line-clamp-2">
              {event.description}
            </p>
            <div className="flex items-center text-gray-200 text-sm mb-2">
              <Calendar size={16} className="mr-1" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center text-gray-200 text-sm">
              <MapPin size={16} className="mr-1" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover-scale">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-gold text-deep-blue text-xs uppercase font-semibold px-2 py-1 rounded">
          {getCategoryName(event.category)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-dark-brown font-bold text-xl mb-2">
          {event.title}
        </h3>
        <p className="text-dark-gray text-sm mb-4 line-clamp-3">
          {event.description}
        </p>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar size={16} className="mr-1" />
          <span>{formatDate(event.date)}</span>
          {event.time && <span className="ml-2">| {event.time}</span>}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-1" />
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard; 