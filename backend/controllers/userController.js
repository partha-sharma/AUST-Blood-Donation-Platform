// backend/controllers/userController.js

const User = require("../models/User");
const { generateToken } = require("../utils/jwt");

const registerUser = async (req, res) => {
  try {
    // 1. Destructure all the expected fields from the form body.
    //    This is clear and explicit.
    const {
      fullName,
      email,
      password,
      bloodGroup,
      department,
      yearPosition,
      currentSemester,
      gender,
      address,
      phone,
    } = req.body;

    // 2. Check if a user with this email already exists in the database.
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({
          success: false,
          message: "User with this email already exists",
        });
    }

    // 3. Check if the file was uploaded successfully by multer.
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "University ID photo is required" });
    }
    // Get just the path relative to the server's public folder
    const universityIdPhoto = `uploads/${req.file.filename}`;
    // 4. Create a new user instance IN MEMORY. This does NOT save to the database yet.
    //    This is the "new User({})" pattern. It's clean and works perfectly.
    const user = new User({
      fullName,
      email,
      password,
      bloodGroup,
      department,
      yearPosition,
      currentSemester,
      gender,
      address,
      phone,
      universityIdPhoto, // Add the file path here
    });

    // 5. NOW, save the user instance to the database.
    //    This is the moment your pre('save') password-hashing middleware runs.
    await user.save();

    // 6. Send a success response.
    res.status(201).json({
      success: true,
      message:
        "Registration successful! Your account is now pending admin approval.",
    });
  } catch (error) {
    // If anything above fails, this block will run.
    console.error("Registration Error:", error); // This gives you full details in the console
    res.status(500).json({
      success: false,
      message: "Server error during registration",
      error: error.message, // This gives a clean message to the frontend
    });
  }
};

// --- 3. THE loginUser FUNCTION (must be defined BEFORE exports) ---
// @desc    Authenticate user & get token
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.comparePassword(password))) {
      if (!user.isActive) {
        return res.status(403).json({
          success: false,
          message: "Your account has not been approved by an admin yet.",
        });
      }

      res.json({
        success: true,
        message: "Login successful!",
        user: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
        },
        token: generateToken(user._id),
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    console.error("Login Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error during login" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
