// backend/controllers/requestController.js
const Request = require('../models/Request');

// @desc    Create a new blood request
// @route   POST /api/requests
// @access  Private

const getRequests = async (req, res) => {
  try {
    // Find all requests, sort by newest first (-1 means descending)
    // Then, populate the 'user' field with details from the User model
    const requests = await Request.find({})
      .sort({ createdAt: -1 })
      .populate('user', 'fullName department yearPosition'); // <-- IMPORTANT: This joins the user data

    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    console.error('Get Requests Error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const createRequest = async (req, res) => {
  try {
    const { bloodGroup, quantity, hospital, message, agreedToProvideRefreshments } = req.body;

    // Basic validation
    if (!bloodGroup || !quantity || !hospital || !agreedToProvideRefreshments) {
      return res.status(400).json({ success: false, message: 'Please fill out all required fields.' });
    }
    
    if (agreedToProvideRefreshments !== true && agreedToProvideRefreshments !== 'true') {
         return res.status(400).json({ success: false, message: 'You must agree to the terms to post a request.' });
    }

    const request = new Request({
      user: req.user._id, // User ID from the 'protect' middleware
      bloodGroup,
      quantity,
      hospital,
      message,
      agreedToProvideRefreshments
    });

    const createdRequest = await request.save();

    res.status(201).json({ success: true, data: createdRequest });
  } catch (error) {
    console.error('Create Request Error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  createRequest,
  getRequests,
};