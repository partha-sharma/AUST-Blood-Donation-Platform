// backend/routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const { getMatchingRequests, getAcceptedMails, acceptRequest } = require('../controllers/dashboardController');
const { protect } = require('../middleware/auth');

// All routes here are protected
router.use(protect);

router.get('/requests', getMatchingRequests);
router.get('/accepted', getAcceptedMails);
router.put('/requests/:id/accept', acceptRequest);

module.exports = router;