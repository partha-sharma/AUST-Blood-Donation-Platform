// frontend/src/components/dashboard/DonationHistory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonationHistory = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const res = await axios.get('/api/users/my-offers', config);
        setOffers(res.data.data);
      } catch (err) {
        setError('Could not fetch your donation history.');
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

  const styles = { /* ... */ }; 
  if (loading) return <p>Loading donation history...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h3>My Donation Offers</h3>
      {offers.length === 0 ? (
        <p>You have not made any donation offers yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {offers.map(offer => (
            <li key={offer._id} style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '15px', marginBottom: '10px' }}>
                <p><strong>Request For:</strong> {offer.request.bloodGroup} at {offer.request.hospital}</p>
                <p><strong>Request By:</strong> {offer.request.user.fullName}</p>
                <p><strong>Offered On:</strong> {formatDate(offer.createdAt)}</p>
                <p><strong>Status:</strong> <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{offer.status}</span></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DonationHistory;