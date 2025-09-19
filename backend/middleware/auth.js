// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to verify token
const protect = async (req, res, next) => {
    // ... (Code to verify JWT and find user) ...
    // ... (Attach user to req object: req.user = user) ...
    next();
};

// Middleware to check for admin role
const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as an admin' });
    }
};

module.exports = { protect, admin };