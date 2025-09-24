// frontend/src/components/RequestCard.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import styles from './RequestCard.module.css'; 
import { Heart, Droplet, MapPin, UserCheck, Send, HandHeart } from 'lucide-react';

const RequestCard = ({ request, onDelete  }) => {
  const { user } = useContext(AuthContext);
  const [offerMade, setOfferMade] = useState(request.responded);
  const handleDonate = async () => {
    if (!window.confirm("Are you sure you want to offer to donate for this request?")) {
      return;
    }

    try {
        const token = localStorage.getItem('authToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };

        // The request ID is passed in the URL
        await axios.post(`/api/requests/${request._id}/offer`, {}, config);
        
        alert("Thanks for your offer! The request poster has been notified.");
        setOfferMade(true); // Update the button state

    } catch (err) {
        // Display the specific error message from the backend (e.g., "not eligible")
        alert(err.response?.data?.message || "An error occurred. Could not make offer.");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this request? This cannot be undone.")) {
        return;
    }
    try {
        const token = localStorage.getItem('authToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        await axios.delete(`/api/requests/${request._id}`, config);
        alert("Request deleted successfully.");
        onDelete(request._id); // Notify parent to remove card from UI
    } catch (err) {
        alert(err.response?.data?.message || "Failed to delete request.");
    }
  };

  const cardClasses = `${styles.card} ${request.isUrgent ? styles.urgentCard : ''}`;

  return (
    <div className={cardClasses}>
      <div className={styles.header}>
        <Heart color="#d9534f" size={28} />
        <div>
          <h3>{request.bloodGroup} Blood Needed</h3>
            <p className={styles.posterInfo}>
              {/* Use optional chaining to prevent crash if user is null */}
              Posted by {request.user?.fullName || 'an unknown user'} ({request.user?.department} • {request.user?.yearPosition})
            </p>
        </div>
        <div className={styles.tags}>
          {request.isRepost && <span className={`${styles.tag} ${styles.repostTag}`}>REPOSTED</span>}
          {request.isUrgent && <span className={`${styles.tag} ${styles.urgentTag}`}>URGENT</span>}
        </div>
      </div>

      {user && user._id === request.user?._id && (
          <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '10px'}}>
              <button onClick={handleDelete} className={styles.deleteButton}>
                  <Trash2 size={16} /> Delete
              </button>
          </div>
      )}

      <div className={styles.body}>
        <div className={styles.infoItem}>
          <Droplet size={20} />
          <span>{request.quantity} bags still needed</span>
        </div>
        <div className={styles.infoItem}>
          <MapPin size={20} />
          <span>{request.hospital}</span>
        </div>
      </div>

      <p className={styles.details}>
        {request.message}
      </p>

      <div className={styles.footer}>
        {offerMade ? ( // Use the new state variable here
          <p className={styles.respondedMessage}>
            <UserCheck size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }}/> 
            You've responded to this request.
          </p>
        ) : (
            <div className={styles.buttonGroup}>
                <button className={styles.actionButton}>
                    <Send size={16}/>
                    I Can Arrange
                </button>
                {/* Add onClick handler to the donate button */}
                <button className={styles.donateButton} onClick={handleDonate}> 
                    <HandHeart size={16}/>
                    I'm Ready to Donate
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default RequestCard;