// backend/controllers/requestController.js
const Request = require('../models/Request');
const DonationOffer = require('../models/DonationOffer');
const User = require('../models/User'); //User model for eligibility check

// @desc    Create a new blood request
// @route   POST /api/requests
// @access  Private

const getMatchingRequests = async (req, res) => {
  try {
    if (!req.user || !req.user.bloodGroup) {
      return res.status(400).json({ success: false, message: 'User blood group not found.' });
    }

    // Find requests that match the user's blood group and are not fulfilled yet.
    const requests = await Request.find({
      bloodGroup: req.user.bloodGroup,
      isFulfilled: false,
    })
      .sort({ createdAt: -1 })
      .populate('user', 'fullName department yearPosition');

    // Also filter here for consistency
    const validRequests = requests.filter(request => request.user);

    res.status(200).json({ success: true, data: validRequests }); // Send the filtered list
  } catch (error) {
    console.error('Get Matching Requests Error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const getRequests = async (req, res) => {
  try {
    const requests = await Request.find({})
      .sort({ createdAt: -1 })
      .populate('user', 'fullName department yearPosition');

    // Filter out requests where the user might have been deleted
    const validRequests = requests.filter(request => request.user);

    res.status(200).json({ success: true, data: validRequests }); // Send the filtered list
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


const createDonationOffer = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ success: false, message: 'Request not found' });
    }

    // Server-side eligibility check for security
    const donor = await User.findById(req.user._id);
    const lastDonationDate = donor.lastDonation || donor.createdAt;
    const eligibilityDate = new Date(lastDonationDate);
    eligibilityDate.setDate(eligibilityDate.getDate() + 120);

    if (new Date() < eligibilityDate) {
      return res.status(403).json({ success: false, message: 'You are not eligible to donate yet.' });
    }

    // Check if the user has already made an offer for this request
    const existingOffer = await DonationOffer.findOne({ request: req.params.id, donor: req.user._id });
    if (existingOffer) {
        return res.status(400).json({ success: false, message: 'You have already offered to donate for this request.' });
    }

    const offer = new DonationOffer({
      request: req.params.id,
      donor: req.user._id,
    });

    await offer.save();

    // Ideally, here you would also send a notification to the request's author.
    // For now, we will just confirm the offer was made.
    
    res.status(201).json({ success: true, message: 'Donation offer successfully made.' });

  } catch (error) {
    console.error('Create Donation Offer Error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const deleteRequest = async (req, res) => {
    try {
        const request = await Request.findById(req.params.id);

        if (!request) {
            return res.status(404).json({ success: false, message: 'Request not found' });
        }
        
        // ** IMPORTANT SECURITY CHECK **
        // Ensure the user deleting the request is the one who created it
        if (request.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ success: false, message: 'User not authorized' });
        }
        
        await request.deleteOne();

        // Optional: Also delete any offers associated with this request
        await DonationOffer.deleteMany({ request: req.params.id });

        res.status(200).json({ success: true, message: 'Request removed' });

    } catch (error) {
        console.error('Delete Request Error:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = {
  createRequest,
  getRequests,
  getMatchingRequests,
  createDonationOffer,
  deleteRequest,
};