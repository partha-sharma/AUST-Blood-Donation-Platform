// backend/routes/requestRoutes.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  createRequest,
  getRequests,
  getMatchingRequests,
  createDonationOffer,
  deleteRequest
} = require('../controllers/requestController');

// @route   GET /api/requests/
// @desc    Get all blood requests (for Newsfeed)
// @access  Private
router.get('/', protect, getRequests);

// @route   POST /api/requests/
// @desc    Create a new blood request
// @access  Private
router.post('/', protect, createRequest);

// @route   GET /api/requests/matches
// @desc    Get requests that match the user's blood group (for Dashboard "Request Mails")
// @access  Private
router.get('/matches', protect, getMatchingRequests);

// @route   POST /api/requests/:id/offer
// @desc    Allow a user to make a donation offer on a specific request
// @access  Private
router.post('/:id/offer', protect, createDonationOffer);

// @route   DELETE /api/requests/:id
// @desc    Allow the original poster to delete their blood request
// @access  Private
router.delete('/:id', protect, deleteRequest);

module.exports = router;