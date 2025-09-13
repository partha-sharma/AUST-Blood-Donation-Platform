import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css'; // Import the new CSS file

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        bloodGroup: '',
        department: '',
        yearPosition: '',
        currentSemester: 'Fall 2024',
        gender: '',
        presentAddress: '',
        phone: '',
    });
    const [universityIdPhoto, setUniversityIdPhoto] = useState(null);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [serverError, setServerError] = useState('');

    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'email':
                if (!/@aust\.edu$/.test(value)) {
                    error = 'Invalid email. Must use an @aust.edu address.';
                }
                break;
            case 'password':
                if (value.length < 8) error = 'Password must be at least 8 characters. ';
                if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) error += 'Must contain a symbol.';
                break;
            case 'phone':
                if (!/^\d{11}$/.test(value)) {
                    error = 'Phone number must be exactly 11 digits.';
                }
                break;
            // You can add more simple front-end required checks here
            case 'fullName':
                if (!value) error = 'Full name is required.';
                break;
             case 'bloodGroup':
                if (!value) error = 'Please select a blood group.';
                break;
        }
        return error;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Real-time validation
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        let error = '';
        if (file) {
            const isImage = file.type.startsWith('image/');
            if (!isImage) error = 'Invalid file type. Please upload a photo.';
            if (file.size > 5 * 1024 * 1024) error = 'File is too large (Max 5MB).';

            if (error) {
                setErrors({ ...errors, universityIdPhoto: error });
                e.target.value = null;
            } else {
                setErrors({ ...errors, universityIdPhoto: '' });
                setUniversityIdPhoto(file);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerError('');
        setSuccessMessage('');

        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        if (universityIdPhoto) {
            data.append('universityIdPhoto', universityIdPhoto);
        }

        try {
            await axios.post('http://localhost:5000/api/users/register', data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setSuccessMessage('Registration successful! You can now log in.');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setServerError(error.response.data.message);
            } else {
                setServerError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} noValidate>
                {/* Full Name */}
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="fullName" placeholder="Enter your full name" onChange={handleInputChange} />
                    {errors.fullName && <p className="error-message">{errors.fullName}</p>}
                </div>

                {/* AUST Email */}
                <div className="form-group">
                    <label>AUST Email</label>
                    <input type="email" name="email" placeholder="your.name@aust.edu" onChange={handleInputChange} />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                {/* Password */}
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleInputChange} />
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>

                {/* Blood Group */}
                <div className="form-group">
                    <label>Blood Group</label>
                    <select name="bloodGroup" onChange={handleInputChange} value={formData.bloodGroup}>
                        <option value="">Select your blood group</option>
                        <option value="A+">A+</option><option value="A-">A-</option>
                        <option value="B+">B+</option><option value="B-">B-</option>
                        <option value="AB+">AB+</option><option value="AB-">AB-</option>
                        <option value="O+">O+</option><option value="O-">O-</option>
                    </select>
                    {errors.bloodGroup && <p className="error-message">{errors.bloodGroup}</p>}
                </div>

                {/* Department */}
                <div className="form-group">
                    <label>Department</label>
                    <input type="text" name="department" placeholder="e.g., CSE, EEE" onChange={handleInputChange} />
                    {errors.department && <p className="error-message">{errors.department}</p>}
                </div>

                {/* Year/Position */}
                <div className="form-group">
                    <label>Year/Position</label>
                    <input type="text" name="yearPosition" placeholder="e.g., 3rd Year or Assistant Professor" onChange={handleInputChange} />
                    {errors.yearPosition && <p className="error-message">{errors.yearPosition}</p>}
                </div>
                
                {/* Current Semester */}
                <div className="form-group">
                    <label>Current Semester</label>
                    <input type="text" name="currentSemester" value={formData.currentSemester} readOnly />
                </div>
                
                {/* Gender */}
                <div className="form-group">
                    <label>Gender</label>
                    <select name="gender" onChange={handleInputChange} value={formData.gender}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.gender && <p className="error-message">{errors.gender}</p>}
                </div>

                {/* Present Address */}
                <div className="form-group">
                    <label>Present Address</label>
                    <input type="text" name="presentAddress" placeholder="Enter your Present Address" onChange={handleInputChange} />
                </div>
            
                {/* Phone Number */}
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter active Phone number" onChange={handleInputChange} />
                    {errors.phone && <p className="error-message">{errors.phone}</p>}
                </div>

                {/* University ID Photo */}
                <div className="form-group">
                    <label>University ID Photo</label>
                    <input type="file" name="universityIdPhoto" onChange={handleFileChange} />
                    {errors.universityIdPhoto && <p className="error-message">{errors.universityIdPhoto}</p>}
                </div>

                {serverError && <div className="server-feedback error">{serverError}</div>}
                {successMessage && <div className="server-feedback success">{successMessage}</div>}

                <button type="submit" className="submit-btn">Submit Registration</button>
            </form>
        </div>
    );
};

export default RegisterForm;