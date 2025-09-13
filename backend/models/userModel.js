const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    fullName: { type: String, required: [true, 'Please add a full name'] },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [/@aust\.edu$/, 'Please use a valid @aust.edu email address']
    },
    password: { type: String, required: [true, 'Please add a password'] },
    bloodGroup: { type: String, required: [true, 'Please select a blood group'] },
    department: { type: String, required: [true, 'Please add a department'] },
    yearPosition: { type: String, required: [true, 'Please add your year or position'] },
    currentSemester: { type: String, required: [true, 'Please add the current semester'] },
    gender: { type: String, required: [true, 'Please select a gender'] },
    presentAddress: { type: String, required: [true, 'Please add a present address'] },
    phone: {
        type: String,
        required: [true, 'Please add a phone number'],
        validate: {
            validator: function(v) {
                return /^\d{11}$/.test(v);
            },
            message: props => `${props.value} is not a valid 11-digit phone number!`
        }
    },
    universityIdPhoto: { type: String, required: true },
}, {
    timestamps: true
});

// Hash password before saving the user
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
module.exports = User;