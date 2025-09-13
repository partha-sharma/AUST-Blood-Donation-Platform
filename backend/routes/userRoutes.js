const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');
const upload = require('../middleware/uploadMiddleware');

// The upload middleware will process the file first.
// If the file is invalid, it will throw an error before registerUser is even called.
router.post('/register', upload, registerUser);

module.exports = router;