// backend/models/DonationOffer.js
const mongoose = require('mongoose');

const donationOfferSchema = new mongoose.Schema({
  request: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Request'
  },
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('DonationOffer', donationOfferSchema);