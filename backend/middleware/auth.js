// backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// YOUR EXISTING 'protect' FUNCTION IS PERFECT. KEEP IT.
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');
      
      if (!req.user) {
        return res.status(401).json({ success: false, message: 'Not authorized, user not found' });
      }
      next();
    } catch (error) {
      res.status(401).json({ success: false, message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ success: false, message: 'Not authorized, no token' });
  }
};

// --- ADD THIS NEW FUNCTION ---
// Middleware to check for admin role AFTER 'protect' has run
const admin = (req, res, next) => {
    // Because 'protect' runs first, we can safely assume 'req.user' exists here.
    if (req.user && req.user.role === 'admin') {
        next(); // User is an admin, proceed.
    } else {
        res.status(403).json({ success: false, message: 'Not authorized as an admin' }); // 403 Forbidden is more appropriate here
    }
};

// --- UPDATE YOUR EXPORTS TO INCLUDE BOTH ---
module.exports = { 
    protect, 
    admin 
};