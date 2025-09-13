// Start of code to paste

import express from 'express';
const router = express.Router();

// --- 1. Import all necessary controller functions and middleware ---

// Import controller functions for both login and registration
import { loginUser, registerUser } from '../controllers/userController.js';

// Import the specialized middleware for handling file uploads
import upload from '../middleware/uploadMiddleware.js';

// --- 2. Define the API Routes ---

/**
 * @route   POST /api/users/login
 * @desc    Authenticates a user and returns a token
 * @access  Public
 */
router.post('/login', loginUser);

/**
 * @route   POST /api/users/register
 * @desc    Registers a new user
 * @access  Public
 */
// This route is special. It first runs the 'upload' middleware to handle the
// file, and only if that is successful does it proceed to the 'registerUser' controller.
router.post('/register', upload, registerUser);

// --- 3. Export the router to be used in server.js ---
export default router;

// End of code to paste