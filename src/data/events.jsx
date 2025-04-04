export const eventCategories = [
  { id: "cultural", name: "Cultural Events" },
  { id: "food", name: "Food Festivals" },
  { id: "music", name: "Music Events" },
  { id: "sports", name: "Sports Events" },
  { id: "art", name: "Art Exhibitions" }
];

export const events = [
  {
    id: 1,
    title: "Kanpur Literature Festival",
    description: "Annual literary festival featuring renowned authors and poets.",
    date: "2024-03-15",
    time: "10:00 AM",
    location: "Ganga Bairav Temple Ground",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1000",
    price: "Free",
    organizer: "Kanpur Cultural Society",
    contact: "info@kanpurlitfest.com",
    registrationRequired: true
  },
  {
    id: 2,
    title: "Food Festival",
    description: "Experience the diverse culinary delights of Kanpur.",
    date: "2024-04-20",
    time: "6:00 PM",
    location: "Moti Jheel",
    category: "food",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1000",
    price: "₹200 per person",
    organizer: "Kanpur Food Association",
    contact: "foodfest@kanpur.com",
    registrationRequired: false
  },
  // ... Add more events as needed
];

export const getEventById = (id) => {
  return events.find(event => event.id === id);
};

export const getUpcomingEvents = () => {
  const today = new Date();
  return events.filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const getEventsByCategory = (category) => {
  return events.filter(event => event.category === category);
}; 