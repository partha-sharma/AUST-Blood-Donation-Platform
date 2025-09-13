import React, { useState } from 'react';
import axios from 'axios';
// import './Register.css';

const Register = () => {
  // State for all form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    bloodGroup: '',
    department: '',
    position: '',
    currentSemester: 'Fall 2024',
    gender: '',
    presentAddress: '',
    phoneNumber: '',
  });
  const [universityIdPhoto, setUniversityIdPhoto] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handler for text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for file input change
  const handleFileChange = (e) => {
    setUniversityIdPhoto(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Use FormData because we are sending a file
    const submissionData = new FormData();
    // Append all text fields
    for (const key in formData) {
      submissionData.append(key, formData[key]);
    }
    // Append the file
    submissionData.append('universityIdPhoto', universityIdPhoto);

    try {
      await axios.post('/api/users/register', submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle successful registration (e.g., redirect to login)
      alert('Registration successful! Please log in.');
    } catch (err) {
      const message =
        err.response && err.response.data.message
          ? err.response.data.message
          : 'An unexpected error occurred.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Register for AUST Blood Donor Platform</h1>
      <p>Sign up with your @aust.edu email and upload your student/teacher ID for verification</p>

      {error && <p style={{ color: 'red', border: '1px solid red', padding: '10px' }}>{error}</p>}

      <form onSubmit={submitHandler}>
        {/* --- Full Name --- */}
        <input type="text" name="fullName" placeholder="Enter your full name" onChange={handleChange} required />

        {/* --- AUST Email --- */}
        <input type="email" name="email" placeholder="your.name@aust.edu" onChange={handleChange} required />

        {/* --- Password --- */}
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        
        {/* --- Blood Group (Dropdown) --- */}
        <select name="bloodGroup" onChange={handleChange} required>
            <option value="">Select your blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
        </select>
        
        {/* --- Department (CHANGED to Dropdown) --- */}
        <select name="department" onChange={handleChange} required>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="BBA">BBA</option>
            <option value="Arch">Architecture</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="IPE">Industrial & Production Engineering</option>
        </select>

        {/* --- Position (CHANGED Label and Placeholder) --- */}
        <input type="text" name="position" placeholder="e.g., Student or Assistant Professor" onChange={handleChange} required />

        {/* --- Current Semester --- */}
        <input type="text" name="currentSemester" defaultValue="Fall 2024" onChange={handleChange} required />
        
        {/* --- Gender (Dropdown) --- */}
        <select name="gender" onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select>

        {/* --- Present Address --- */}
        <input type="text" name="presentAddress" placeholder="Enter your Present Address" onChange={handleChange} required />
        
        {/* --- Phone Number --- */}
        <input type="text" name="phoneNumber" placeholder="Enter active Phone number" onChange={handleChange} required />
        
        {/* --- University ID Photo --- */}
        <input type="file" name="universityIdPhoto" onChange={handleFileChange} required />

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Registration'}
        </button>
      </form>
    </div>
  );
};

export default Register;