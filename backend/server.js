const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const placeRoutes = require('./routes/places');
const reviewRoutes = require('./routes/reviews');
const historyRoutes = require('./routes/history');
const tripPlannerRoutes = require('./routes/tripPlanner');
const contactRoutes = require('./routes/contact');

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/travel')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic welcome route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Kanpur Bhraman API' });
});

// Mounting Routes
app.use('/api/places', placeRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/trip-planner', tripPlannerRoutes);
app.use('/api/contact', contactRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 Server is running on http://localhost:${PORT}`);
});
