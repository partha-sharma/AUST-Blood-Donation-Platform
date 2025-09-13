// backend/controllers/requestController.js
const Request = require('../models/Request');

// @desc    Create a new blood request
// @route   POST /api/requests
// @access  Private
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
};