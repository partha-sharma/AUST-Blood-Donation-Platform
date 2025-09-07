// backend/middleware/upload.js
const multer = require("multer");
const path = require("path");

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save files to the "uploads" folder
  },
  filename: function (req, file, cb) {
    // Get the email from the request body. We're assuming the client sends it.
    const email = req.body.email;

    if (!email) {
      // If for some reason the email isn't there, fall back to a random name
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, "user-id-" + uniqueSuffix + path.extname(file.originalname));
      return;
    }

    // Sanitize the email to make it a safe filename component
    // 'partha.cse@aust.edu' becomes 'partha_cse_aust_edu'
    const sanitizedEmail = email.replace(/[@.]/g, "_");

    const uniqueSuffix = Date.now(); // The timestamp is enough for uniqueness
    const newFilename = `${sanitizedEmail}-${uniqueSuffix}${path.extname(
      file.originalname
    )}`;

    cb(null, newFilename);
  },
});

// Create the upload middleware
const upload = multer({ storage: storage });

module.exports = upload;
