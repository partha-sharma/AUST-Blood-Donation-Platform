// backend/routes/requestRoutes.js
const express = require('express');
const router = express.Router();

const { createRequest, getRequests } = require('../controllers/requestController');
const { protect } = require('../middleware/auth');

//route for getting all requests
router.get('/', protect, getRequests);

// route for creating a request
router.post('/', protect, createRequest);

module.exports = router;