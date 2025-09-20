// backend/controllers/dashboardController.js
const Request = require('../models/Request');
const User = require('../models/User');

// @desc    Get blood requests matching the logged-in user's blood group
// @route   GET /api/dashboard/requests
// @access  Private
const getMatchingRequests = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find requests that match the user's blood group, are not yet accepted, and not posted by the user themselves
        const requests = await Request.find({
            bloodGroup: user.bloodGroup,
            isFulfilled: false,
            user: { $ne: user._id } // Exclude user's own posts
        }).sort({ createdAt: -1 }).populate('user', 'fullName department yearPosition');

        res.json(requests);
    } catch (error) {
        console.error('Error fetching matching requests:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get donation offers accepted by the logged-in user
// @route   GET /api/dashboard/accepted
// @access  Private
const getAcceptedMails = async (req, res) => {
    try {
        // Find requests that the current user has accepted
        const acceptedDonations = await Request.find({ acceptedBy: req.user._id })
            .sort({ updatedAt: -1 })
            .populate('user', 'fullName email phone'); // Populate original poster's contact details

        res.json(acceptedDonations);
    } catch (error) {
        console.error('Error fetching accepted mails:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Mark a request as accepted by the logged-in user
// @route   PUT /api/dashboard/requests/:id/accept
// @access  Private
const acceptRequest = async (req, res) => {
    try {
        const request = await Request.findById(req.params.id);

        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }

        if (request.isFulfilled) {
            return res.status(400).json({ message: 'This request has already been accepted.' });
        }

        request.isFulfilled = true;
        request.acceptedBy = req.user._id;

        const updatedRequest = await request.save();

        // Let's also update the donor's last donation date
        const donor = await User.findById(req.user._id);
        donor.lastDonation = new Date();
        await donor.save();

        res.json(updatedRequest);
    } catch (error) {
        console.error('Error accepting request:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports = {
    getMatchingRequests,
    getAcceptedMails,
    acceptRequest,
};