// frontend/src/components/Newsfeed.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RequestCard from './RequestCard';
import CreateRequestModal from './CreateRequestModal';

const Newsfeed = () => {
  const [requests, setRequests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // New states for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This function will be called by the modal when a new request is created
  const handleRequestCreated = (newRequest) => {
    // Add the new request to the top of the list
    // Note: For a more robust app, you might want to refetch all requests instead
    setRequests([newRequest, ...requests]);
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setError("You must be logged in to view requests.");
          setLoading(false);
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        
        const res = await axios.get('/api/requests', config);
        setRequests(res.data.data);

      } catch (err) {
        setError('Failed to fetch blood requests. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []); // The empty array [] means this effect runs only once

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };
  
  const createButtonStyle = {
      backgroundColor: '#c0392b',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
  };

  return (
    <div style={{ maxWidth: '800px', margin: '100px auto', textAlign: 'left', padding: '0 20px' }}>
      <header style={headerStyle}>
        <div>
          <h1 style={{ fontSize: '24px', marginBottom: '5px' }}>Blood Donation Requests</h1>
          <p>Connect with donors and help save lives in our campus community</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} style={createButtonStyle}>Create Request</button>
      </header>

      <div>
        {loading && <p>Loading requests...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && requests.map(request => (
          <RequestCard key={request._id} request={request} /> // Use _id from MongoDB
        ))}
      </div>

      <CreateRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreated={handleRequestCreated}
      />
    </div>
  );
};

export default Newsfeed;