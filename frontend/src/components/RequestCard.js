// frontend/src/components/RequestCard.js
import React from 'react';
import styles from './RequestCard.module.css'; 
import { Heart, Droplet, MapPin, UserCheck, Send, HandHeart } from 'lucide-react';

const RequestCard = ({ request }) => {
  const cardClasses = `${styles.card} ${request.isUrgent ? styles.urgentCard : ''}`;

  return (
    <div className={cardClasses}>
      <div className={styles.header}>
        <Heart color="#d9534f" size={28} />
        <div>
          <h3>{request.bloodGroup} Blood Needed</h3>
          <p className={styles.posterInfo}>
            Posted by {request.postedBy} ({request.department} • {request.year}) • {request.postedAgo} ago
          </p>
        </div>
        <div className={styles.tags}>
          {request.isRepost && <span className={`${styles.tag} ${styles.repostTag}`}>REPOSTED</span>}
          {request.isUrgent && <span className={`${styles.tag} ${styles.urgentTag}`}>URGENT</span>}
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.infoItem}>
          <Droplet size={20} />
          <span>{request.bagsRemaining} bags still needed</span>
        </div>
        <div className={styles.infoItem}>
          <MapPin size={20} />
          <span>{request.location}</span>
        </div>
      </div>

      <p className={styles.details}>
        {request.details}
      </p>

      <div className={styles.footer}>
        {/* Conditionally render the button OR the "responded" message */}
        {request.responded ? (
          <p className={styles.respondedMessage}>
            <UserCheck size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }}/> 
            You've responded to this request. The poster will contact you if accepted.
          </p>
        ) : (
            <div className={styles.buttonGroup}>
                <button className={styles.actionButton}>
                <Send size={16}/>
                I Can Manage
                </button>
                <button className={styles.donateButton}>
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