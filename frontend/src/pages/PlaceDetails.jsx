import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaClock } from 'react-icons/fa';

const PlaceDetails = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', rating: '', comment: '' });
  
  // Format time from minutes to hours and minutes
  const formatTime = (minutes) => {
    if (!minutes && minutes !== 0) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_BACKEND_API_URL;
        const placeRes = await axios.get(`${apiUrl}/api/places/${id}`);
        setPlace(placeRes.data);

        const reviewsRes = await axios.get(`${apiUrl}/api/reviews/${id}`);
        setReviews(reviewsRes.data);
      } catch (err) {
        console.error('Error fetching place details:', err);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_BACKEND_API_URL;
      await axios.post(`${apiUrl}/api/reviews`, {
        ...form,
        place_id: id,
      });
      setForm({ name: '', email: '', rating: '', comment: '' });
      const updatedReviews = await axios.get(`${apiUrl}/api/reviews/${id}`);
      setReviews(updatedReviews.data);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  if (!place) return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto pt-32 px-4 py-10 text-white">
      <h2 className="text-3xl sm:text-5xl pb-4 text-center font-semibold text-white mb-2">
        Welcome to {place.name}
      </h2>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-amber-400 text-center">{place.name}</h1>
      <p className="text-gray-400 mb-6 text-center">{place.address}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {place.images?.map((img, idx) => (
          <img key={idx} src={img} alt={`img-${idx}`} className="w-full h-64 object-cover rounded" />
        ))}
      </div>

      <div className="space-y-2 mb-6">
        <p>{place.description}</p>
        <p><strong>Category:</strong> {place.category}</p>
        <p><strong>Opening Hours:</strong> {place.opening_hours}</p>
        <p><strong>Entry Fee:</strong> {place.entry_fee}</p>
        <p className="flex items-center">
          <FaClock className="mr-2 text-amber-400" />
          <strong>Estimated Visit Time:</strong> {formatTime(place.estimated_time || 60)} {/* Default to 60 minutes if not set */}
        </p>
        <p>
          <a href={place.map_link} target="_blank" rel="noreferrer" className="text-amber-400 underline">
            View on Map
          </a>
        </p>
      </div>

      {/* Reviews */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Reviews ({reviews.length})</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review._id} className="bg-gray-800 rounded p-4">
              <div className="flex justify-between items-center flex-wrap gap-y-2">
                <p className="font-semibold">{review.name}</p>
                <p className="text-amber-400">⭐ {review.rating}</p>
              </div>
              <p className="text-sm text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Review */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Submit a Review</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white"
            required
          />
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            placeholder="Rating (1-5)"
            value={form.rating}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white"
            required
          />
          <textarea
            name="comment"
            placeholder="Your Review"
            value={form.comment}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white sm:col-span-2"
            rows="4"
            required
          />
          <button
            type="submit"
            className="sm:col-span-2 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaceDetails;
