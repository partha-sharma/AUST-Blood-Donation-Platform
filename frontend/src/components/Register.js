import React, { useState } from "react";
import API from "../api";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    bloodGroup: "",
    department: "",
    position: "",
    currentSemester: "",
    gender: "",
    presentAddress: "",
    phone: "",
    universityIdPhoto: null,
  });

  const [error, setError] = useState("");

  const validate = () => {
    if (!/@gmail\.com$/.test(formData.email)) {
      return "Invalid email. Please use a @gmail.com address";
    }
    if (formData.password.length < 8 || !/[!@#$%^&*]/.test(formData.password)) {
      return "Password must be 8+ chars and contain a special symbol";
    }
    if (!/^\d{11}$/.test(formData.phone)) {
      return "Phone number must be exactly 11 digits";
    }
    if (!formData.department) {
      return "Please select a department";
    }
    if (formData.universityIdPhoto && !formData.universityIdPhoto.type.startsWith("image/")) {
      return "Invalid file type. Please upload an image";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await API.post("/users/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Registration successful!");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email (@gmail.com only)"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />

      <select
        value={formData.bloodGroup}
        onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
        required
      >
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="O+">O+</option>
      </select>

      <select
        value={formData.department}
        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
        required
      >
        <option value="">Select Department</option>
        <option value="CSE">CSE</option>
        <option value="EEE">EEE</option>
        <option value="ME">ME</option>
        <option value="CE">CE</option>
        <option value="IPE">IPE</option>
        <option value="BBA">BBA</option>
      </select>

      <input
        type="text"
        placeholder="Position (e.g., Assistant Professor)"
        value={formData.position}
        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
        required
      />

      <input
        type="text"
        placeholder="Current Semester"
        value={formData.currentSemester}
        onChange={(e) => setFormData({ ...formData, currentSemester: e.target.value })}
      />

      <select
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="text"
        placeholder="Present Address"
        value={formData.presentAddress}
        onChange={(e) => setFormData({ ...formData, presentAddress: e.target.value })}
        required
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFormData({ ...formData, universityIdPhoto: e.target.files[0] })
        }
        required
      />

      <button type="submit">Submit Registration</button>
    </form>
  );
};

export default Register;
