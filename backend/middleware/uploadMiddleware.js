// Start of code to copy

import multer from 'multer';
import path from 'path';

// This section sets up the rules for how files are stored on your server's disk.
const storage = multer.diskStorage({
  // Rule 1: Where to save the files.
  destination: function (req, file, cb) {
    // We tell it to save files in the 'backend/uploads/' folder.
    // 'cb' is a callback function. The first argument is for errors (null means no error).
    cb(null, 'backend/uploads/');
  },
  // Rule 2: How to name the files.
  filename: function (req, file, cb) {
    // To avoid files with the same name overwriting each other, we create a unique name.
    // It will be named like: 'universityIdPhoto-1678886400000.png'
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

// This function is our "security check" to ensure only image files are allowed.
function checkFileType(file, cb) {
  // Define the allowed file extensions.
  const filetypes = /jpeg|jpg|png|gif/;
  // Check the file's extension (e.g., .png).
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check the file's mime type (e.g., image/png).
  const mimetype = filetypes.test(file.mimetype);

  // If both checks pass, the file is valid.
  if (mimetype && extname) {
    return cb(null, true); // Allow the file.
  } else {
    // If the file is not an image, create an error.
    cb(new Error('Error: Images Only!'), false); // Reject the file.
  }
}

// This is the final configuration object that we will export.
const upload = multer({
  storage: storage, // Use the storage rules we defined above.
  limits: { fileSize: 2 * 1024 * 1024 }, // Set a strict size limit of 2 Megabytes.
  fileFilter: function (req, file, cb) { // Use our security check function.
    checkFileType(file, cb);
  },
}).single('universityIdPhoto'); // IMPORTANT: This tells multer to expect ONE file from an input named 'universityIdPhoto'.

// We export the fully configured 'upload' tool so other files can use it.
export default upload;

// End of code to copy