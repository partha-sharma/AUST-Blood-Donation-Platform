// backend/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  department: { type: String, required: true },
  yearPosition: { type: String, required: true },
  currentSemester: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  universityIdPhoto: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },
  lastDonation: { type: Date, default: null },
  role: { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' }
}, { timestamps: true });

// Hash password before saving (add this before module.exports)
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);