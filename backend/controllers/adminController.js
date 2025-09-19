const User = require('../models/User');

// @desc    Get all users pending approval
// @route   GET /api/admin/pending-users
// @access  Private/Admin
const getPendingUsers = async (req, res) => {
    const users = await User.find({ isVerified: false });
    res.json(users);
};

// @desc    Approve a user registration
// @route   PUT /api/admin/approve-user/:id
// @access  Private/Admin
const approveUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        user.isVerified = true;
        user.isActive = true; // Let's also make them active upon approval
        const updatedUser = await user.save();
        res.json({ message: 'User approved successfully', user: updatedUser });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

module.exports = { getPendingUsers, approveUser };