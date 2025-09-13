const User = require('../models/userModel');
const generateToken = require('../utils/generateToken'); // We'll create this next

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res, next) => {
  try {
    const {
      fullName,
      austEmail,
      password,
      bloodGroup,
      department,
      position,
      currentSemester,
      gender,
      presentAddress,
      phone,
    } = req.body;

    if (!req.file) {
      res.status(400);
      throw new Error('University ID photo is required');
    }

    const userExists = await User.findOne({ austEmail });

    if (userExists) {
      res.status(400); // Bad Request
      throw new Error('User with this email already exists');
    }

    const user = await User.create({
      fullName,
      austEmail,
      password,
      bloodGroup,
      department,
      position,
      currentSemester,
      gender,
      presentAddress,
      phone,
      universityIdPhoto: req.file.path,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.fullName,
        email: user.austEmail,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  } catch (error) {
    next(error); // Pass error to the centralized error handler
  }
};

module.exports = { registerUser };