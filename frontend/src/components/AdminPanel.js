// frontend/src/components/AdminPanel.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const AdminPanel = () => {
    const [pendingUsers, setPendingUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [message, setMessage] = useState(''); // For success messages
    const { user } = useContext(AuthContext); // Get user info to access the token

    // Function to fetch pending users
    const fetchPendingUsers = async () => {
        try {
            // We need to get the token to send with our request
            const token = localStorage.getItem('authToken');
            if (!token) {
                setError("Not authorized. Please log in again.");
                setLoading(false);
                return;
            }

            // Create the authorization header
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            // Make the API call to our protected endpoint
            const { data } = await axios.get('/api/admin/pending-users', config);
            setPendingUsers(data);
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch pending users.');
            setLoading(false);
        }
    };
    
    // Use useEffect to run the fetch function once when the component loads
    useEffect(() => {
        fetchPendingUsers();
    }, []); // The empty array ensures this runs only once on mount

    // Function to handle the approval of a user
    const handleApprove = async (userId) => {
        setMessage('');
        setError('');
        try {
            const token = localStorage.getItem('authToken');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            // Make the PUT request to approve the user
            const { data } = await axios.put(`/api/admin/approve-user/${userId}`, {}, config);
            setMessage(data.message);

            // Refresh the list of pending users after approval
            fetchPendingUsers();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to approve user.');
        }
    };

    // We will add the JSX to display this data next
    return (
        <div>
            <h2>Admin Panel - Pending Registrations</h2>
            {/* JSX to display loading, errors, messages, and the user list will go here */}
        </div>
    );
};

export default AdminPanel;