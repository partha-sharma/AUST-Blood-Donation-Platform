
import asyncHandler from 'express-async-handler';
import validator from 'validator';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    fullName,
    email,
    password,
    bloodGroup,
    department,
    position,
    currentSemester,
    gender,
    presentAddress,
    phoneNumber,
  } = req.body;

  // --- Start of Custom Validation ---

  // 1. Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400); // Bad Request
    throw new Error('User with this email already exists');
  }

  // 2. Password Strength Validation
  if (!validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    res.status(400);
    throw new Error(
      'Password must be at least 8 characters long and contain an uppercase letter, a number, and a symbol.'
    );
  }

  // 3. Check if the University ID photo was uploaded
  if (!req.file) {
    res.status(400);
    throw new Error('University ID photo is required.');
  }

  // --- End of Custom Validation ---

  // Create the new user in the database
  const user = await User.create({
    fullName,
    email,
    password,
    bloodGroup,
    department,
    position,
    currentSemester,
    gender,
    presentAddress,
    phoneNumber,
    universityIdPhoto: req.file.path, // Save the path provided by multer
  });

  if (user) {
    generateToken(res, user._id); // Sign them in immediately
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      message: 'Registration successful!',
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data received');
  }
});

export { registerUser };