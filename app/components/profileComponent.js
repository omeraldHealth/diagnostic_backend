const Profile = require('../models/profile');

// Get all Profiles
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.find();
    res.json(profile);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a Profile by phone number
const getProfileByPhoneNumber = async (req, res) => {
    const { phoneNumber } = req.params;

    try {
      const profile = await Profile.findOne({"phoneNumber":phoneNumber});
      if (!profile) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      res.json(profile);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new Profile
const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' + error });
  }
};

// Update a Profile by ID
const updateProfile = async (req, res) => {
  const {id} = req.body;
  try {
    const profile = await Profile.findByIdAndUpdate(id, req.body, { new: true });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a Profile by ID
const deleteProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findByIdAndDelete(id);
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getProfile,
  getProfileByPhoneNumber,
  createProfile,
  updateProfile,
  deleteProfile,
};