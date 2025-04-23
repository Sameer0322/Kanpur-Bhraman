// utils/distanceUtils.js
const haversine = require('haversine');

// Calculate the distance between two coordinates in kilometers
function calculateDistance(from, to) {
  return haversine(
    { latitude: from[1], longitude: from[0] },
    { latitude: to[1], longitude: to[0] },
    { unit: 'km' }
  );
}

module.exports = { calculateDistance };
