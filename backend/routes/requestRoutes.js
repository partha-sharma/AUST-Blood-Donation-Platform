// backend/routes/requestRoutes.js
const express = require('express');
const router = express.Router();
const { createRequest } = require('../controllers/requestController');
const { protect } = require('../middleware/auth');

// @route   POST /api/requests
// This route is protected, so only logged-in users can access it.
router.post('/', protect, createRequest);

module.exports = router;