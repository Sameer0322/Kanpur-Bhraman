const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Public
router.get('/:placeId', reviewController.getReviewsByPlace);
router.post('/', reviewController.postReview);

// Admin
router.delete('/admin/:id', reviewController.deleteReview);

module.exports = router;
