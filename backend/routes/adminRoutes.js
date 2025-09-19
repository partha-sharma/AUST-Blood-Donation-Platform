const express = require('express');
const router = express.Router();
const { getPendingUsers, approveUser } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/auth'); // Our new gatekeepers

router.route('/pending-users').get(protect, admin, getPendingUsers);
router.route('/approve-user/:id').put(protect, admin, approveUser);

module.exports = router;