const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');
const upload = require('../middleware/uploadMiddleware');

router.post('/register', (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      // This catches multer-specific errors (e.g., file type, size)
      res.status(400).json({ message: err });
    } else {
      // If upload is successful, proceed to the controller
      registerUser(req, res, next);
    }
  });
});

module.exports = router;