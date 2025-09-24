// frontend/src/components/dashboard/EligibilityCalendar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EligibilityCalendar = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const res = await axios.get('/api/users/eligibility', config);
        setStatus(res.data.data);
      } catch (err) {
        setError('Could not fetch eligibility status.');
      } finally {
        setLoading(false);
      }
    };
    fetchStatus();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };
  
  // Inline styles for cleaner JSX
  const styles = {
    statusBox: {
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    statusIcon: { fontSize: '2rem' },
    statusText: { margin: 0 },
    guidelines: {
        border: '1px solid #eee',
        padding: '20px',
        borderRadius: '8px'
    }
  };

  if (loading) return <p>Loading eligibility status...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  const effectiveLastDonation = status.lastDonation || status.registeredAt;

  return (
    <div>
      {status.isEligible ? (
        <div style={{...styles.statusBox, backgroundColor: '#d4edda', color: '#155724'}}>
          <span style={styles.statusIcon}>✅</span>
          <div>
            <h3>You're eligible to donate!</h3>
            <p style={styles.statusText}>
              Last donation recorded on: {formatDate(effectiveLastDonation)}. You can safely donate blood now.
            </p>
          </div>
        </div>
      ) : (
        <div style={{...styles.statusBox, backgroundColor: '#f8d7da', color: '#721c24'}}>
          <span style={styles.statusIcon}>❌</span>
          <div>
            <h3>You are not currently eligible to donate.</h3>
            <p style={styles.statusText}>
              Your next eligible donation date is after: <strong>{formatDate(status.nextEligibleDate)}</strong>.
            </p>
          </div>
        </div>
      )}

      <div style={styles.guidelines}>
        <h4>Donation Guidelines:</h4>
        <ul>
            <li>Wait at least 120 days (4 months) between donations.</li>
            <li>Maintain a healthy diet and stay hydrated.</li>
            <li>Get adequate rest before donating.</li>
            <li>Inform the medical team of any medications.</li>
        </ul>
      </div>
    </div>
  );
};

export default EligibilityCalendar;