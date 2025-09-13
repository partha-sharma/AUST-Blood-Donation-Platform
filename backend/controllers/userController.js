const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
const validator = require('validator');

const registerUser = async (req, res) => {
    try {
        const {
            fullName, email, password, bloodGroup, department,
            yearPosition, currentSemester, gender, presentAddress, phone
        } = req.body;

        // --- CRITICAL BACKEND VALIDATION ---

        // 1. Check if all fields exist
        const requiredFields = [fullName, email, password, bloodGroup, department, yearPosition, currentSemester, gender, presentAddress, phone];
        if (requiredFields.some(field => !field)) {
            return res.status(400).json({ message: 'Please fill in all fields' });
        }

        // 2. Email validation (@aust.edu and uniqueness)
        if (!/@aust\.edu$/.test(email)) {
            return res.status(400).json({ message: 'Invalid email. Please use an @aust.edu address.' });
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({ message: 'An account with this email already exists.' });
        }

        // 3. Password validation (min 8 chars, 1 symbol)
        if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long and contain a symbol.' });
        }

        // 4. Phone number validation (exactly 11 digits)
        const sanitizedPhone = phone.replace(/\D/g, ''); // Remove non-digits
        if (!/^\d{11}$/.test(sanitizedPhone)) {
            return res.status(400).json({ message: 'Phone number must be exactly 11 digits.' });
        }
        
        // 5. Department validation (ensure it's a valid option)
        const validDepartments = ['CSE', 'EEE', 'ME', 'IPE', 'CE', 'TE', 'ARCHI', 'BBA']; // Example list
        if (!validDepartments.includes(department.toUpperCase())) {
            return res.status(400).json({ message: 'Invalid department selected.' });
        }

        // 6. University ID photo validation (check if file was uploaded)
        if (!req.file) {
            return res.status(400).json({ message: 'University ID photo is required.' });
        }

        // --- All validations passed, create user ---
        
        const user = await User.create({
            fullName,
            email,
            password,
            bloodGroup,
            department,
            yearPosition,
            currentSemester,
            gender,
            presentAddress,
            phone: sanitizedPhone,
            universityIdPhoto: req.file.path // Store the path to the uploaded file
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                token: generateToken(user._id)
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = { registerUser };