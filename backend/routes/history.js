const express = require('express');
const router = express.Router();
const {
  addHistorySection,
  getAllHistorySections
} = require('../controllers/historyController');

// Add one section
router.post('/add', addHistorySection);

// Get all sections
router.get('/', getAllHistorySections);

module.exports = router;
