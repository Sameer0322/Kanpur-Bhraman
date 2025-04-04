import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, MapPin, Clock, Star, DollarSign, User } from "lucide-react";
import { places } from "../data/places";

const PlaceDetail = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetch with a small delay
    const timer = setTimeout(() => {
      const foundPlace = places.find((p) => p.id === id);
      setPlace(foundPlace || null);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-deep-blue border-t-gold rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-dark-gray">Loading...</p>
        </div>
      </div>
    );
  }

  if (!place) {
    return (
      <div className="min-h-screen pt-20 page-container">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-serif font-bold text-deep-blue mb-4">
            Place Not Found
          </h2>
          <p className="text-dark-gray mb-6">
            The place you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/places"
            className="btn-primary inline-flex items-center"
          >
            <ChevronLeft size={18} className="mr-2" /> Back to Places
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Banner Image with Parallax Effect */}
      <div className="w-full h-[60vh] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${place.image})`,
            transform: "translateZ(0)",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-gold font-serif font-bold text-4xl md:text-5xl mb-4">
              {place.title}
            </h1>
            <div className="flex items-center justify-center text-white space-x-2">
              <MapPin size={18} />
              <span>{place.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-light-cream py-4">
        <div className="container mx-auto px-4">
          <Link
            to="/places"
            className="inline-flex items-center text-deep-blue hover:text-gold"
          >
            <ChevronLeft size={18} className="mr-1" /> Back to Places
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-deep-blue mb-6">
                About {place.title}
              </h2>
              <p className="text-dark-gray mb-6 leading-relaxed">
                {place.fullDescription || place.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 my-6">
                {place.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-dark-gray text-sm px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-serif font-bold text-deep-blue mb-6">
                Reviews & Ratings
              </h2>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  <Star size={24} className="text-gold fill-gold" />
                  <span className="text-3xl font-bold ml-2">{place.rating.toFixed(1)}</span>
                </div>
                <span className="ml-4 text-gray-500">
                  Based on {place.reviews?.length || 0} reviews
                </span>
              </div>

              {/* Reviews List */}
              {place.reviews && place.reviews.length > 0 ? (
                <div className="space-y-6">
                  {place.reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start mb-2">
                        <div className="bg-deep-blue text-gold w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">{review.name}</div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                        <div className="ml-auto flex items-center">
                          <Star size={16} className="text-gold fill-gold" />
                          <span className="ml-1">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-dark-gray text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}

              {/* Post Review Button */}
              <button className="mt-6 border-2 border-deep-blue text-deep-blue px-6 py-2 rounded-md font-medium hover:bg-deep-blue hover:text-white transition-colors duration-300 inline-flex items-center">
                <User size={18} className="mr-2" />
                Write a Review
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Info Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-serif font-semibold text-xl mb-4 text-deep-blue">
                Information
              </h3>
              
              <ul className="space-y-4">
                {place.timings && (
                  <li className="flex items-start">
                    <Clock size={18} className="mr-3 text-gold mt-1" />
                    <div>
                      <span className="block text-sm font-medium text-dark-brown">Timings</span>
                      <span className="text-dark-gray">{place.timings}</span>
                    </div>
                  </li>
                )}
                
                {place.entryFee && (
                  <li className="flex items-start">
                    <DollarSign size={18} className="mr-3 text-gold mt-1" />
                    <div>
                      <span className="block text-sm font-medium text-dark-brown">Entry Fee</span>
                      <span className="text-dark-gray">{place.entryFee}</span>
                    </div>
                  </li>
                )}

                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-gold mt-1" />
                  <div>
                    <span className="block text-sm font-medium text-dark-brown">Location</span>
                    <span className="text-dark-gray">{place.location}</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Similar Places */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-serif font-semibold text-xl mb-4 text-deep-blue">
                Similar Places
              </h3>
              
              <div className="space-y-4">
                {places
                  .filter(p => p.category === place.category && p.id !== place.id)
                  .slice(0, 3)
                  .map(similarPlace => (
                    <Link 
                      key={similarPlace.id}
                      to={`/places/${similarPlace.id}`}
                      className="block group"
                    >
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded overflow-hidden">
                          <img 
                            src={similarPlace.image} 
                            alt={similarPlace.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-dark-brown group-hover:text-gold transition-colors">
                            {similarPlace.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500">
                            <Star size={14} className="text-gold" />
                            <span className="ml-1">{similarPlace.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail; 