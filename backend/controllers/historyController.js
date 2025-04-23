const HistorySection = require('../models/History');

// Add a single history section
const addHistorySection = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  try {
    const newSection = new HistorySection({ title, content });
    await newSection.save();
    res.status(201).json({ message: 'Section added successfully', section: newSection });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all history sections
const getAllHistorySections = async (req, res) => {
  try {
    const sections = await HistorySection.find();
    res.json(sections);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addHistorySection,
  getAllHistorySections
};
