import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Star } from "lucide-react";
import { places } from "../data/places";
import { events } from "../data/events";
import PlaceCard from "../components/PlaceCard";
import EventCard from "../components/EventCard";

const Home = () => {
  // Get top rated places
  const topPlaces = [...places]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // Get featured events
  const featuredEvents = events.filter((event) => event.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Discover Kanpur's Rich Heritage"
        subtitle="Explore the historical landmarks, cultural attractions, and hidden gems of Kanpur - the industrial heart of Uttar Pradesh."
        backgroundImage="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1000"
        buttonText="Explore Kanpur"
        buttonLink="/places"
      />

      {/* Intro Section */}
      <section className="page-container">
        <div className="py-16 px-4 md:px-10 bg-parchment rounded-lg shadow-md">
          <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-deep-blue mb-6">
            The Historical City of Kanpur
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-dark-brown text-lg mb-6 leading-relaxed">
              Nestled on the banks of the sacred Ganges, Kanpur has been a silent 
              witness to India's rich history. From being a small trading post to 
              becoming the "Manchester of the East" during the British colonial era, 
              the city has transformed while preserving its cultural heritage.
            </p>
            <p className="text-dark-brown text-lg mb-6 leading-relaxed">
              Kanpur played a pivotal role in India's first war of independence in 1857, 
              and the echoes of that valiant struggle can still be felt in its monuments 
              and landmarks. Today, Kanpur stands as a vibrant blend of history, industry, 
              and culture, inviting visitors to explore its many facets.
            </p>
            <div className="text-center mt-10">
              <Link to="/places" className="btn-primary inline-flex items-center">
                Discover More <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions Section */}
      <section className="page-container section">
        <h2 className="section-title text-center">Top Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {topPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/places" className="btn-secondary inline-flex items-center">
            View All Places <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 bg-deep-blue">
        <div className="page-container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6 text-center">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} featuredStyle={true} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link 
              to="/events" 
              className="bg-transparent text-white px-6 py-3 rounded-md border-2 border-gold hover:bg-gold hover:text-deep-blue transition-all duration-300 inline-flex items-center"
            >
              View All Events <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Visit Kanpur */}
      <section className="page-container section">
        <h2 className="section-title text-center">Why Visit Kanpur</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
            <div className="w-16 h-16 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-gold" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-dark-brown">
              Rich Historical Sites
            </h3>
            <p className="text-dark-gray">
              Explore forts, museums, and memorials that showcase Kanpur's 
              significant role in India's history and freedom struggle.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
            <div className="w-16 h-16 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={24} className="text-gold" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-dark-brown">
              Cultural Experiences
            </h3>
            <p className="text-dark-gray">
              Immerse yourself in the vibrant local culture, traditional 
              markets, authentic cuisine, and religious festivities.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
            <div className="w-16 h-16 bg-deep-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar size={24} className="text-gold" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-dark-brown">
              Year-Round Events
            </h3>
            <p className="text-dark-gray">
              Participate in festivals, exhibitions, and cultural events 
              that celebrate Kanpur's heritage throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-light-cream">
        <div className="page-container">
          <div className="bg-deep-blue rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4">
              Ready to Explore Kanpur?
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-8">
              Start planning your journey to discover the historical and cultural treasures of Kanpur.
            </p>
            <Link to="/places" className="bg-gold text-deep-blue px-8 py-3 rounded-md font-semibold hover:bg-white transition-colors duration-300">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 