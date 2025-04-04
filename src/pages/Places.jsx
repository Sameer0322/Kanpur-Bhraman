import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import FilterBar from "../components/FilterBar";
import PlaceCard from "../components/PlaceCard";
import { places, categories } from "../data/places";

const Places = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    let result = [...places];

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((place) => place.type === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      result = result.filter(
        (place) =>
          place.name.toLowerCase().includes(lowerCaseQuery) ||
          place.description.toLowerCase().includes(lowerCaseQuery) ||
          (place.tags && place.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)))
      );
    }

    setFilteredPlaces(result);
  }, [selectedCategory, searchQuery]);

  const getCategoryName = (categoryId) => {
    if (categoryId === "All") return "All";
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : "All";
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Tourist Attractions"
        subtitle="Discover the historical sites, temples, parks, and modern attractions of Kanpur"
        backgroundImage="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1000"
        buttonText="Explore Now"
        height="h-[60vh]"
        overlayOpacity="opacity-60"
      />

      <section className="page-container -mt-10 relative z-10">
        <FilterBar 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSearchChange={setSearchQuery}
        />

        <div className="mt-10">
          <h2 className="section-title">
            {filteredPlaces.length > 0 
              ? `Explore ${getCategoryName(selectedCategory)} Attractions` 
              : "No attractions found"}
          </h2>
          
          {filteredPlaces.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-dark-gray text-lg">
                No attractions found matching your filters. Please try a different search or category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredPlaces.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-light-cream py-16 mt-16">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-deep-blue mb-6">
              About Kanpur's Attractions
            </h2>
            <p className="text-dark-gray mb-4">
              Kanpur offers a diverse range of attractions that cater to various interests. 
              From historical sites like Jajmau Fort and Phool Bagh that tell the story of 
              India's struggle for independence, to religious landmarks like JK Temple that 
              showcase architectural brilliance.
            </p>
            <p className="text-dark-gray mb-4">
              Nature enthusiasts can enjoy the serene environment of Allen Forest Zoo, while 
              families can have a fun-filled day at Blue World Theme Park. The city's proximity 
              to the Ganges adds a spiritual dimension to the tourism experience, especially at 
              places like Bithoor.
            </p>
            <p className="text-dark-gray">
              Whether you're interested in history, spirituality, nature, or entertainment, 
              Kanpur has something to offer for everyone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Places; 