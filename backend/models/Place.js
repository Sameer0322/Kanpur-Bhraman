const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  images: [String],
  category: [{
    type: String,
    enum: ['Religious', 'Parks', 'Historical', 'Wildlife', 'Lakes', "Games", "Adventure", "Shopping", "Food"]
  }],
  address: String,
  map_link: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      default: [80.3319, 26.4499] // Default coordinates for Kanpur
    }
  },
  opening_hours: String,
  entry_fee: String,
  tags: [String],
  estimated_time: {
    type: Number,
    default: 60, // Default time in minutes
  },
  average_rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  review_count: {
    type: Number,
    default: 0,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Optional: add 2dsphere index if you'll do geospatial queries
placeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Place', placeSchema);
