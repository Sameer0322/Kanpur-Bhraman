export const categories = [
  { id: "tourist-attraction", name: "Tourist Attractions" },
  { id: "religious-place", name: "Religious Places" },
  { id: "historical", name: "Historical Sites" },
  { id: "park", name: "Parks & Gardens" },
  { id: "museum", name: "Museums" },
  { id: "shopping", name: "Shopping Areas" }
];

export const places = [
  {
    id: 1,
    name: "Allen Forest Zoo",
    type: "tourist-attraction",
    description: "A beautiful zoo spread over 77 acres with a variety of animals and birds.",
    location: "Kanpur Zoo Road, Nawabganj",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1000",
    tags: ["zoo", "wildlife", "family"],
    openingHours: "9:00 AM - 5:00 PM",
    entryFee: "₹50 per person",
    coordinates: {
      lat: 26.4567,
      lng: 80.3319
    }
  },
  {
    id: 2,
    name: "J.K. Temple",
    type: "religious-place",
    description: "A magnificent temple dedicated to Lord Shiva, built by J.K. Trust.",
    location: "Kamla Tower, Civil Lines",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1000",
    tags: ["temple", "spiritual", "architecture"],
    openingHours: "6:00 AM - 8:00 PM",
    entryFee: "Free",
    coordinates: {
      lat: 26.4678,
      lng: 80.3312
    }
  },
  // ... Add more places as needed
];

export const getPlaceById = (id) => {
  return places.find(place => place.id === id);
};

export const getPlacesByType = (type) => {
  return places.filter(place => place.type === type);
};

export const searchPlaces = (query) => {
  const searchTerm = query.toLowerCase();
  return places.filter(place => 
    place.name.toLowerCase().includes(searchTerm) ||
    place.description.toLowerCase().includes(searchTerm) ||
    place.location.toLowerCase().includes(searchTerm) ||
    place.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}; 