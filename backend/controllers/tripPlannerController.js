// controllers/tripPlannerController.js
const Place = require('../models/Place');
const { calculateDistance } = require('../utils/distanceUtils');

// Function to get the shortest route based on nearest neighbor algorithm
exports.getShortestRoute = async (req, res) => {
  try {
    const { places } = req.body; // An array of place names
    const placeList = await Place.find({ name: { $in: places } });

    if (placeList.length === 0) {
      return res.status(404).json({ message: 'No places found for the selected names.' });
    }

    let route = [];
    let totalTime = 0;
    let remainingPlaces = [...placeList];

    // Start from the first place
    const firstPlace = placeList[0];
    route.push(firstPlace);
    // Add the first place's estimated time to the total
    totalTime += firstPlace.estimated_time || 60; // Default to 60 minutes if not set
    
    let currentLocation = firstPlace.location?.coordinates || [80.3319, 26.4499]; // Default to Kanpur coordinates if not set
    remainingPlaces = remainingPlaces.filter(place => place._id.toString() !== firstPlace._id.toString());

    while (remainingPlaces.length > 0) {
      const nearestPlace = findNearestPlace(currentLocation, remainingPlaces);
      route.push(nearestPlace);
      totalTime += nearestPlace.estimated_time || 60; // Default to 60 minutes if not set

      currentLocation = nearestPlace.location?.coordinates || [80.3319, 26.4499]; // Default to Kanpur coordinates if not set
      remainingPlaces = remainingPlaces.filter(place => place._id.toString() !== nearestPlace._id.toString());
    }

    // Return the route with total estimated time
    res.json({ route, totalEstimatedTime: totalTime });
  } catch (error) {
    console.error('Error calculating route:', error);
    res.status(500).json({ message: 'Server Error', error });
  }
};

// Function to find the nearest place to the current location
function findNearestPlace(currentLocation, remainingPlaces) {
  let nearestPlace = null;
  let minDistance = Infinity;

  remainingPlaces.forEach((place) => {
    try {
      const placeCoordinates = place.location?.coordinates || [80.3319, 26.4499]; // Default to Kanpur coordinates if not set
      const distance = calculateDistance(currentLocation, placeCoordinates);
      if (distance < minDistance) {
        minDistance = distance;
        nearestPlace = place;
      }
    } catch (error) {
      console.error(`Error calculating distance for place ${place.name}:`, error);
      // If there's an error, still consider this place but with a high distance
      if (!nearestPlace) {
        nearestPlace = place;
      }
    }
  });

  // If no nearest place was found (e.g., all had errors), return the first one
  return nearestPlace || remainingPlaces[0];
}
