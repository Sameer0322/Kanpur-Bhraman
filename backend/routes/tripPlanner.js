// routes/tripPlannerRoutes.js
const express = require('express');
const router = express.Router();
const tripPlannerController = require('../controllers/tripPlannerController');

// Route to get the shortest route based on selected places
router.post('/shortest-route', tripPlannerController.getShortestRoute);

module.exports = router;
