const User = require('../models/user');

// Get all Users
const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a User by phone number
const getUserByPhoneNumber = async (req, res) => {
    const { phoneNumber } = req.params;

    try {
      const user = await User.findOne({"phoneNumber":phoneNumber}).populate({
        path: 'diagnosticCenters.diagnostic',
        select: '_id diagnosticName'
      })
      
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new User
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' + error });
  }
};

// Update a User by ID
const updateUser = async (req, res) => {
  const {id} = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a User by ID
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getUser,
  getUserByPhoneNumber,
  createUser,
  updateUser,
  deleteUser,
};