import React from "react";

const Register = () => {
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
            minLength="6"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Blood Group</label>
          <select style={styles.input} name="bloodGroup" required>
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
          <label style={styles.label}>Year</label>
          <input
            style={styles.input}
            type="text"
            name="yearPosition"
            placeholder="Enter Year"
            required
          />
        </div>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Current Semester</label>
          <input
            style={styles.input}
            type="text"
            name="currentSemester"
            placeholder="Enter your current Semester"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Gender</label>
          <input
            style={styles.input}
            type="text"
            name="gender"
            placeholder="Gender"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Present Address</label>
          <input
            style={styles.input}
            type="text"
            name="address"
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
            placeholder="Enter active Phone number"
            required
          />
        </div>
        
        {/* You can add the other input fields here (Department, Year, Gender, etc.) following the same pattern */}
        <div style={styles.formGroup}>
          <label style={styles.label}>University ID Photo</label>
          <input
            style={styles.input}
            type="file"
            name="universityIdPhoto"
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
