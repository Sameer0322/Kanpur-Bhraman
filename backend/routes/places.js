const express = require('express');
const router = express.Router();
const placeController = require('../controllers/placeController');

// Public routes
router.get('/names', placeController.getAllPlaceNames);
router.get('/', placeController.getAllPlaces);
router.get('/:id', placeController.getPlaceById);
router.get('/search', placeController.searchPlaces);

// Admin routes (authentication middleware should be added)
router.post('/admin', placeController.createPlace);
router.put('/admin/:id', placeController.updatePlace);
router.delete('/admin/:id', placeController.deletePlace);

module.exports = router;
