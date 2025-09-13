const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: [true, 'Full name is required'] },
    austEmail: {
      type: String,
      required: [true, 'AUST email is required'],
      unique: true,
      match: [/@aust\.edu$/, 'Please enter a valid AUST email (@aust.edu)'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters long'],
      validate: {
        validator: function (v) {
          // Requires at least one special character
          return /[!@#$%^&*(),.?":{}|<>]/.test(v);
        },
        message: 'Password must contain at least one special character (@, #, $, etc.)',
      },
    },
    bloodGroup: { type: String, required: [true, 'Blood group is required'] },
    department: { type: String, required: [true, 'Department is required'] },
    position: { type: String, required: [true, 'Position is required'] },
    currentSemester: { type: String, required: [true, 'Current semester is required'] },
    gender: { type: String, required: [true, 'Gender is required'] },
    presentAddress: { type: String, required: [true, 'Present address is required'] },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      validate: {
        validator: function (v) {
          return /^\d{11}$/.test(v);
        },
        message: 'Phone number must be exactly 11 digits',
      },
    },
    universityIdPhoto: { type: String, required: [true, 'University ID photo is required'] },
  },
  {
    timestamps: true,
  }
);

// Encrypt password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
module.exports = User;