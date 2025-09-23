// frontend/src/components/Register.js

import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  // Styles are perfect, no changes needed here
  const styles = {
    container: {
      maxWidth: "500px",
      margin: "30px auto",
      padding: "30px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      backgroundColor: "#fff",
    },
    formGroup: { marginBottom: "20px" },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "10px",
      boxSizing: "border-box",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#58616a",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
    header: { textAlign: "center", marginBottom: "10px" },
    p: {
      textAlign: "center",
      color: "#666",
      marginTop: "-10px",
      marginBottom: "30px",
    },
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

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevents the browser from reloading the page
    setMessage("");
    setError("");

    // Check if a file has been selected
    if (!universityIdPhoto) {
      setError("Please upload your University ID photo.");
      return; // Stop the function here
    }

    // Create a FormData object to send both text and file data
    const registrationData = new FormData();

    // Append all the text data from the 'formData' state
    for (const key in formData) {
      registrationData.append(key, formData[key]);
    }
    // Append the photo file from the 'universityIdPhoto' state
    registrationData.append("universityIdPhoto", universityIdPhoto);

    try {
      // Send the request to the backend with axios
      const res = await axios.post(
        "/api/users/register", // <-- Changed line
        registrationData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // If successful, show the success message from the server
      setMessage(res.data.message);
    } catch (err) {
      // If there's an error, show the error message from the server
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Register for AUST Blood Donor Platform</h2>
      <p style={styles.p}>
        Sign up with your @aust.edu email and upload your student/teacher ID for
        verification
      </p>

      {message && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#d4edda",
            color: "#155724",
            borderRadius: "4px",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          {message}
        </div>
      )}
      {error && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            borderRadius: "4px",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={onSubmit}>
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
