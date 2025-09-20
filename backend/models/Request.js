// backend/models/Request.js
const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // This links the request to the user who posted it
  },
  bloodGroup: {
    type: String,
    required: [true, 'Blood group is required.'],
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  quantity: {
    type: Number,
    required: [true, 'Number of bags is required.'],
    min: 1,
    default: 1
  },
  hospital: {
    type: String,
    required: [true, 'Hospital/Location is required.']
  },
  message: {
    type: String,
    trim: true
  },
  isFulfilled: {
    type: Boolean,
    default: false
  },
    acceptedBy: { // <-- NEW FIELD
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  agreedToProvideRefreshments: {
    type: Boolean,
    required: [true, 'You must agree to the refreshments and transport cost terms.']
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Request', requestSchema);