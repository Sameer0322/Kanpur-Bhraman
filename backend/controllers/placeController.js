const Place = require('../models/Place');

// GET all places
exports.getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// GET place by ID
exports.getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) return res.status(404).json({ message: 'Place not found' });
    res.json(place);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// GET places by category
exports.getPlacesByCategory = async (req, res) => {
  try {
    const places = await Place.find({ category: req.params.category });
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// GET names of places
exports.getAllPlaceNames = async (req, res) => {
  try {
    const places = await Place.find({}, { name: 1, _id: 1 }).lean();
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};


// SEARCH places with filters
exports.searchPlaces = async (req, res) => {
  try {
    const { category, tags, ageGroup, entryFee, openNow } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (tags) filter.tags = { $in: tags.split(',') };
    if (entryFee) filter.entry_fee = entryFee;

    const places = await Place.find(filter);
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: 'Error filtering places', error });
  }
};

// ADMIN: Add a new place
exports.createPlace = async (req, res) => {
  try {
    const place = new Place(req.body);
    await place.save();
    res.status(201).json(place);
  } catch (error) {
    res.status(400).json({ message: 'Error creating place', error });
  }
};

// ADMIN: Edit a place
exports.updatePlace = async (req, res) => {
  try {
    const updated = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Place not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Error updating place', error });
  }
};

// ADMIN: Delete a place
exports.deletePlace = async (req, res) => {
  try {
    const deleted = await Place.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Place not found' });
    res.json({ message: 'Place deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting place', error });
  }
};
