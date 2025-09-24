const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth'); 
const { 
    registerUser,
    loginUser,
    getEligibilityStatus,
    getMyOffers} = require('../controllers/userController');
const upload = require('../middleware/upload');


router.post('/register', upload.single('universityIdPhoto'), registerUser);
// When a POST request comes to "/register", run the registerUser function
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/eligibility', protect, getEligibilityStatus);
router.get('/my-offers', protect, getMyOffers);

module.exports = router;