// frontend/src/components/dashboard/RequestMails.js
import React from 'react';
import styles from './DashboardComponents.module.css';

const RequestMails = ({ requests, onViewDetails }) => {
  return (
    <div>
        <h3 className={styles.listHeader}>Request Mails ({requests.length})</h3>
        <p className={styles.listSubheader}>Blood requests matching your group - sorted by priority.</p>
        {requests.length === 0 ? (
            <p className={styles.emptyMessage}>No new blood requests match your blood group at this time.</p>
        ) : (
            requests.map(req => (
                <div key={req._id} className={styles.requestCard}>
                    <div className={styles.requestInfo}>
                        <div className={styles.bloodGroupTag}>{req.bloodGroup}</div>
                        <div>
                            <span className={styles.bagsNeeded}>{req.quantity} bags needed</span>
                            <span className={styles.newTag}>New</span>
                        </div>
                        <h4>{req.user.fullName} ({req.user.department} • {req.user.yearPosition})</h4>
                        <p>{req.hospital}</p>
                        <span>{req.message}</span>
                    </div>
                    <div className={styles.requestActions}>
                        <button onClick={() => onViewDetails(req)} className={styles.viewDetailsBtn}>View Details</button>
                    </div>
                </div>
            ))
        )}
    </div>
  );
};

export default RequestMails;