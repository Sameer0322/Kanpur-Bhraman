import React, { useState, useEffect, useMemo } from "react";
import Hero from "../components/Hero";
import FilterBar from "../components/FilterBar";
import EventCard from "../components/EventCard";
import { events, eventCategories } from "../data/events";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const EventCalendarView = ({ events, selectedMonth, onMonthChange }) => {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const currentDate = new Date();
  currentDate.setMonth(selectedMonth);
  
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null); // Empty days before the 1st of the month
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  
  // Group events by day of month
  const eventsByDay = {};
  events.forEach((event) => {
    const eventDate = new Date(event.date);
    if (eventDate.getMonth() === selectedMonth) {
      const dayOfMonth = eventDate.getDate();
      if (!eventsByDay[dayOfMonth]) {
        eventsByDay[dayOfMonth] = [];
      }
      eventsByDay[dayOfMonth].push(event);
    }
  });
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => onMonthChange(selectedMonth - 1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <h3 className="font-serif text-xl font-bold">
          {monthNames[selectedMonth]} {currentDate.getFullYear()}
        </h3>
        <button 
          onClick={() => onMonthChange(selectedMonth + 1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day} className="text-center font-medium text-dark-gray py-2">
            {day}
          </div>
        ))}
        
        {days.map((day, index) => (
          <div 
            key={index}
            className={`aspect-square p-1 border ${
              day ? "cursor-pointer hover:bg-gray-50" : ""
            } ${
              eventsByDay[day] ? "border-gold" : "border-gray-100"
            }`}
          >
            {day && (
              <div className="h-full">
                <div className="text-right text-sm mb-1">
                  {day}
                </div>
                {eventsByDay[day] && (
                  <div className="flex flex-wrap gap-1">
                    {eventsByDay[day].slice(0, 2).map((event, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 rounded-full bg-gold"
                        title={event.title}
                      ></div>
                    ))}
                    {eventsByDay[day].length > 2 && (
                      <div className="text-xs text-gold">+{eventsByDay[day].length - 2}</div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [viewMode, setViewMode] = useState("list"); // "list" or "calendar"

  const filteredEvents = useMemo(() => {
    let result = [...events];

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((event) => event.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(lowerCaseQuery) ||
          event.description.toLowerCase().includes(lowerCaseQuery) ||
          event.location.toLowerCase().includes(lowerCaseQuery)
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const getCategoryName = (categoryId) => {
    if (categoryId === "All") return "All";
    const category = eventCategories.find(c => c.id === categoryId);
    return category ? category.name : "All";
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Events & Festivals"
        subtitle="Discover upcoming cultural events, food festivals, and entertainment in Kanpur"
        backgroundImage="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000"
        buttonText="View Calendar"
        height="h-[60vh]"
        overlayOpacity="opacity-60"
      />

      <section className="page-container -mt-10 relative z-10">
        <FilterBar 
          categories={eventCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSearchChange={setSearchQuery}
        />

        <div className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="section-title">
              {filteredEvents.length > 0 
                ? `Explore ${getCategoryName(selectedCategory)} Events` 
                : "No events found"}
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-md ${
                  viewMode === "list"
                    ? "bg-deep-blue text-white"
                    : "bg-gray-100 text-dark-gray"
                }`}
              >
                List View
              </button>
              <button
                onClick={() => setViewMode("calendar")}
                className={`px-4 py-2 rounded-md ${
                  viewMode === "calendar"
                    ? "bg-deep-blue text-white"
                    : "bg-gray-100 text-dark-gray"
                }`}
              >
                Calendar View
              </button>
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-dark-gray text-lg">
                No events found matching your filters. Please try a different search or category.
              </p>
            </div>
          ) : viewMode === "list" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <EventCalendarView
              events={filteredEvents}
              selectedMonth={selectedMonth}
              onMonthChange={setSelectedMonth}
            />
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-light-cream py-16 mt-16">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-deep-blue mb-6">
              About Kanpur's Events
            </h2>
            <p className="text-dark-gray mb-4">
              Kanpur hosts a variety of events throughout the year, from cultural festivals 
              to food fairs and sports competitions. The city's rich heritage and diverse 
              population make it a hub for various cultural activities and celebrations.
            </p>
            <p className="text-dark-gray mb-4">
              Whether you're interested in literature, music, food, or sports, there's always 
              something happening in Kanpur. The city's event calendar is packed with activities 
              that cater to all age groups and interests.
            </p>
            <p className="text-dark-gray">
              Stay updated with our event listings to make the most of your time in Kanpur 
              and experience the city's vibrant cultural scene.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events; 