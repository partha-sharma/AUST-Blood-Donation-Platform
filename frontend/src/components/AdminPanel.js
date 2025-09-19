// frontend/src/components/AdminPanel.js
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const AdminPanel = () => {
  const [pendingUsers, setPendingUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // For success messages
  const { user } = useContext(AuthContext); // Get user info to access the token

  // Function to fetch pending users
  const fetchPendingUsers = async () => {
    try {
      // We need to get the token to send with our request
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("Not authorized. Please log in again.");
        setLoading(false);
        return;
      }

      // Create the authorization header
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      // Make the API call to our protected endpoint
      const { data } = await axios.get("/api/admin/pending-users", config);
      setPendingUsers(data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch pending users.");
      setLoading(false);
    }
  };

  // Use useEffect to run the fetch function once when the component loads
  useEffect(() => {
    fetchPendingUsers();
  }, []); // The empty array ensures this runs only once on mount

  // Function to handle the approval of a user
  const handleApprove = async (userId) => {
    setMessage("");
    setError("");
    try {
      const token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Make the PUT request to approve the user
      const { data } = await axios.put(
        `/api/admin/approve-user/${userId}`,
        {},
        config
      );
      setMessage(data.message);

      // Refresh the list of pending users after approval
      fetchPendingUsers();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to approve user.");
    }
  };
  const handleReject = async (userId) => {
    if (
      window.confirm(
        "Are you sure you want to reject and delete this user? This cannot be undone."
      )
    ) {
      setMessage("");
      setError("");
      try {
        const token = localStorage.getItem("authToken");
        const config = { headers: { Authorization: `Bearer ${token}` } };

        const { data } = await axios.delete(
          `/api/admin/reject-user/${userId}`,
          config
        );
        setMessage(data.message);

        fetchPendingUsers(); // Refresh the list
      } catch (err) {
        setError(err.response?.data?.message || "Failed to reject user.");
      }
    }
  };

  // We will add the JSX to display this data next
  // Replace the existing return block in AdminPanel.js with this complete version:

  return (
    <div
      style={{
        padding: "20px 40px",
        maxWidth: "1000px",
        margin: "80px auto 0 auto",
      }}
    >
      <h2 style={{ borderBottom: "2px solid #eee", paddingBottom: "10px" }}>
        Admin Panel - Pending Registrations
      </h2>
      <p style={{ color: "#555" }}>
        The following users have registered and are awaiting verification.
      </p>

      {/* Display Loading, Error, or Success Messages */}
      {loading && <p>Loading pending users...</p>}
      {error && (
        <div
          style={{
            color: "white",
            backgroundColor: "#d9534f",
            padding: "15px",
            borderRadius: "5px",
            marginBottom: "15px",
          }}
        >
          Error: {error}
        </div>
      )}
      {message && (
        <div
          style={{
            color: "white",
            backgroundColor: "#28a745",
            padding: "15px",
            borderRadius: "5px",
            marginBottom: "15px",
          }}
        >
          {message}
        </div>
      )}

      {/* Display the List of Users */}
      <div style={{ marginTop: "20px" }}>
        {/* Show a message if there are no users and it's not loading */}
        {!loading && pendingUsers.length === 0 && (
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f9f9f9",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <p>No pending registration requests at this time.</p>
          </div>
        )}

        {/* Map over the pendingUsers array and display each user */}
        {pendingUsers.map((pendingUser) => (
          <div
            key={pendingUser._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap", // Helps with responsiveness
            }}
          >
            <div>
              <h4 style={{ margin: "0 0 10px 0", fontSize: "1.2rem" }}>
                {pendingUser.fullName} ({pendingUser.department})
              </h4>
              <p style={{ margin: 0, color: "#555" }}>
                Email: {pendingUser.email}
              </p>
              <p style={{ margin: "5px 0", color: "#555" }}>
                Phone: {pendingUser.phone}
              </p>
              <p style={{ margin: "5px 0 0 0" }}>
                {/* Defensive check for the ID photo link */}
                {pendingUser.universityIdPhoto ? (
                  <a
                    href={`http://localhost:5000/${pendingUser.universityIdPhoto}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: "bold", color: "#007bff" }}
                  >
                    View ID Photo
                  </a>
                ) : (
                  <span style={{ color: "#888" }}>No ID Photo Uploaded</span>
                )}
              </p>
            </div>
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => handleApprove(pendingUser._id)}
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "#28a745",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(pendingUser._id)}
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "#d9534f", // Red color
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                  marginLeft: "10px", // Add some space
                }}
              >
                Reject
              </button>
              {/* You could add a 'Reject' button here in the future */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
