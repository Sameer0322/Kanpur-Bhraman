import React from "react";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import { events } from "../data/events";
import { ArrowRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const WhatsHot = () => {
  // Get trending events (featured events)
  const trendingEvents = events.filter(event => event.featured);
  // Get other events
  const otherEvents = events.filter(event => !event.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="What's Hot in Kanpur"
        subtitle="Stay updated with the trending events, attractions, and experiences"
        backgroundImage="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000"
        height="h-[60vh]"
      />

      {/* Trending Events Section */}
      <section className="page-container section">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title mb-0 flex items-center">
            <Flame size={28} className="text-gold mr-2" /> Trending Now
          </h2>
          <Link to="/events" className="text-deep-blue hover:text-gold flex items-center">
            View All Events <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingEvents.map(event => (
            <EventCard key={event.id} event={event} featuredStyle={true} />
          ))}
        </div>
      </section>

      {/* Seasonal Highlights */}
      <section className="bg-deep-blue py-16">
        <div className="page-container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-10 text-center">
            Seasonal Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1624468619997-0d76f7ec7191?q=80&w=1000" 
                  alt="Festival Season" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white font-serif font-bold text-xl">
                    Festival Season
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-dark-gray mb-4">
                  Experience the vibrant festival celebrations in Kanpur, from colorful
                  Holi festivities to the spiritual ambiance of Diwali. The city comes alive
                  with lights, colors, and cultural performances during festival seasons.
                </p>
                <a href="#" className="text-deep-blue font-medium hover:text-gold transition-colors">
                  Learn More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover-scale">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000" 
                  alt="Food Festivals" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white font-serif font-bold text-xl">
                    Food Festivals
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-dark-gray mb-4">
                  Indulge in Kanpur's culinary delights at various food festivals throughout
                  the year. From street food extravaganzas to gourmet showcases, experience
                  the authentic flavors of Uttar Pradesh cuisine.
                </p>
                <a href="#" className="text-deep-blue font-medium hover:text-gold transition-colors">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Events Section */}
      <section className="page-container section">
        <h2 className="section-title mb-8">Other Events & Activities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherEvents.slice(0, 6).map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Local Insights */}
      <section className="bg-light-cream py-16">
        <div className="page-container">
          <h2 className="text-3xl font-serif font-bold text-deep-blue mb-8 text-center">
            Local Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold text-dark-brown mb-3">
                Best Time to Visit
              </h3>
              <p className="text-dark-gray">
                The ideal time to visit Kanpur is during the winter months from October to March
                when the weather is pleasant and perfect for sightseeing and outdoor activities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold text-dark-brown mb-3">
                Local Transportation
              </h3>
              <p className="text-dark-gray">
                Auto-rickshaws and cycle-rickshaws are common for short distances. For longer routes,
                city buses and private taxis are available. Major attractions are well-connected.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold text-dark-brown mb-3">
                Shopping Destinations
              </h3>
              <p className="text-dark-gray">
                Z Square Mall, Rave Moti, and Phool Bagh markets offer diverse shopping experiences
                from modern retail to traditional handicrafts and the famous Kanpur leather products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsHot; 