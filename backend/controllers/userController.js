
const User = require('../models/User');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, bloodGroup, department /* ...other fields */ } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      // 400 means Bad Request
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    const user = await User.create({
      fullName, email, password, bloodGroup, department /* ...other fields */
    });
    
    // 201 means something was successfully created
    res.status(201).json({
      message: 'Registration successful! Awaiting admin approval.',
      _id: user._id,
      fullName: user.fullName
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error during registration', error: error.message });
  }
};

module.exports = {
  registerUser,
};
