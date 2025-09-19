const express = require('express');
const router = express.Router();
const { getPendingUsers, approveUser , rejectUser } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/auth'); // Our new gatekeepers

router.route('/pending-users').get(protect, admin, getPendingUsers);
router.route('/approve-user/:id').put(protect, admin, approveUser);
router.route('/reject-user/:id').delete(protect, admin, rejectUser);
module.exports = router;