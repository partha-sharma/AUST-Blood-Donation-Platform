// frontend/src/components/Register.js

import React, { useState } from "react";

const Register = () => {
  // Styles are perfect, no changes needed here
  const styles = {
    /* ... */
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    bloodGroup: "",
    department: "", // You need a field for this
    yearPosition: "",
    currentSemester: "Fall 2024",
    gender: "",
    address: "",
    phone: "",
  });

  const [universityIdPhoto, setUniversityIdPhoto] = useState(null);

  const {
    fullName,
    email,
    password,
    bloodGroup,
    department,
    yearPosition,
    currentSemester,
    gender,
    address,
    phone,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onFileChange = (e) => setUniversityIdPhoto(e.target.files[0]);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Register for AUST Blood Donor Platform</h2>
      <p style={styles.p}>
        Sign up with your @aust.edu email and upload your student/teacher ID for
        verification
      </p>

      <form>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            style={styles.input}
            type="text"
            name="fullName"
            value={fullName}
            onChange={onChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        
        <div style={styles.formGroup}>
          <label style={styles.label}>AUST Email</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="your.name@aust.edu"
            required
          />
         
        </div>

    
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
            required
          />
        </div>

      
        <div style={styles.formGroup}>
          <label style={styles.label}>Blood Group</label>
          <select
            style={styles.input}
            name="bloodGroup"
            value={bloodGroup}
            onChange={onChange}
            required
          >
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
        </div>
        

        
        <div style={styles.formGroup}>
          <label style={styles.label}>Department</label>
          <input
            style={styles.input}
            type="text"
            name="department"
            value={department}
            onChange={onChange}
            placeholder="e.g., CSE, EEE"
            required
          />
        </div>

        
        <div style={styles.formGroup}>
          <label style={styles.label}>Year/Position</label>
          <input
            style={styles.input}
            type="text"
            name="yearPosition"
            value={yearPosition}
            onChange={onChange}
            placeholder="e.g., 3rd Year or Assistant Professor"
            required
          />
        </div>

        
        <div style={styles.formGroup}>
          <label style={styles.label}>Current Semester</label>
          <input
            style={styles.input}
            type="text"
            name="currentSemester"
            value={currentSemester}
            onChange={onChange}
            required
          />
        </div>

    
        <div style={styles.formGroup}>
          <label style={styles.label}>Gender</label>
          <select
            style={styles.input}
            name="gender"
            value={gender}
            onChange={onChange}
            required
          >
            
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Present Address</label>
          <input
            style={styles.input}
            type="text"
            name="address"
            value={address}
            onChange={onChange}
            placeholder="Enter your Present Address"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Phone Number</label>
          <input
            style={styles.input}
            type="text"
            name="phone"
            value={phone}
            onChange={onChange}
            placeholder="Enter active Phone number"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>University ID Photo</label>
          <input
            style={styles.input}
            type="file"
            name="universityIdPhoto"
            onChange={onFileChange}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default Register;
