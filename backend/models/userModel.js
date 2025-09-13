import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: [true, 'Full name is required'] },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      // Regex to ensure the email ends with @aust.edu
      match: [/.+@aust\.edu$/, 'Please use your @aust.edu email address'],
    },
    password: { type: String, required: [true, 'Password is required'] },
    bloodGroup: {
      type: String,
      required: [true, 'Blood group is required'],
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // Example blood groups
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      enum: ['CSE', 'EEE', 'BBA', 'Arch', 'ME', 'IPE'], // Allowed departments
    },
    position: { type: String, required: [true, 'Position is required'] },
    currentSemester: { type: String, required: [true, 'Current semester is required'] },
    gender: {
      type: String,
      required: [true, 'Gender is required'],
      enum: ['Male', 'Female', 'Other'],
    },
    presentAddress: { type: String, required: [true, 'Present address is required'] },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      // Custom validator for exactly 11 digits
      validate: {
        validator: function (v) {
          return /^\d{11}$/.test(v);
        },
        message: 'Phone number must be exactly 11 digits.',
      },
    },
    universityIdPhoto: {
      type: String, // We will store the path to the image
      required: [true, 'University ID photo is required'],
    },
    isVerified: { type: Boolean, default: false }, // For admin verification later
  },
  { timestamps: true }
);

// Hash password automatically before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
export default User;
