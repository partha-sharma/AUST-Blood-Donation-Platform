// frontend/src/components/dashboard/RequestDetailsModal.js
import React from 'react';
import styles from './RequestDetailsModal.module.css';

const RequestDetailsModal = ({ isOpen, onClose, request, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton}>×</button>
        <h3>Blood Request Details</h3>
        <p className={styles.subtitle}>Review the complete information and respond if you can help.</p>
        
        <div className={styles.infoGrid}>
          <div><strong>Blood Group:</strong> <span>{request.bloodGroup}</span></div>
          <div><strong>Bags Required:</strong> <span>{request.quantity}</span></div>
          <div><strong>Posted By:</strong> <span>{request.user.fullName}</span></div>
          <div><strong>Department:</strong> <span>{request.user.department}</span></div>
          <div className={styles.fullWidth}><strong>Hospital:</strong> <span>{request.hospital}</span></div>
          <div className={styles.fullWidth}><strong>Reason:</strong> <p>{request.message || 'No additional message provided.'}</p></div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.actionButton} onClick={() => onAccept(request._id)}>
            <span role="img" aria-label="person managing">🤝</span> I Can Arrange
          </button>
          <button className={styles.donateButton} onClick={() => onAccept(request._id)}>
            <span role="img" aria-label="heart">❤️</span> I'm Ready To Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetailsModal;
