const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const upload = require('../middleware/upload');


router.post('/register', upload.single('universityIdPhoto'), registerUser);
// When a POST request comes to "/register", run the registerUser function
router.post('/register', registerUser);
router.post('/login', loginUser);
module.exports = router;