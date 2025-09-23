// frontend/src/components/dashboard/RequestMails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RequestCard from '../RequestCard'; // We can reuse the same card component

const RequestMails = () => {
  const [matchingRequests, setMatchingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatchingRequests = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Ensure this is the correct key
        if (!token) {
          setError("You must be logged in.");
          setLoading(false);
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        
        // Fetch from our new backend endpoint
        const res = await axios.get('/api/requests/matches', config);
        setMatchingRequests(res.data.data);

      } catch (err) {
        setError('Failed to fetch matching blood requests.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatchingRequests();
  }, []);

  const styles = {
    header: { marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid #eee'},
    h2: { margin: '0 0 5px 0' },
    p: { margin: 0, color: '#555' }
  };
  
  if (loading) {
    return <p>Loading matching requests...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <div style={styles.header}>
        <h2 style={styles.h2}>Request Mails ({matchingRequests.length})</h2>
        <p style={styles.p}>Blood requests matching your group - sorted by priority</p>
      </div>

      {matchingRequests.length > 0 ? (
        matchingRequests.map(request => (
          <RequestCard key={request._id} request={request} />
        ))
      ) : (
        <p>No current requests match your blood group. We'll notify you when there's a match!</p>
      )}
    </div>
  );
};

export default RequestMails;