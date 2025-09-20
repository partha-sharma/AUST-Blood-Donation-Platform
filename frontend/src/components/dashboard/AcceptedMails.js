// frontend/src/components/dashboard/AcceptedMails.js
import React from 'react';
import styles from './DashboardComponents.module.css';

const AcceptedMails = ({ mails }) => {
    return (
        <div>
            <h3 className={styles.listHeader}>Accepted Donations ({mails.length})</h3>
            <p className={styles.listSubheader}>Your donation offers that have been accepted by posters.</p>
            {mails.length === 0 ? (
                <p className={styles.emptyMessage}>You have not accepted any donation requests yet.</p>
            ) : (
                mails.map(mail => (
                    <div key={mail._id} className={`${styles.requestCard} ${styles.acceptedCard}`}>
                        <div className={styles.requestInfo}>
                             <div className={`${styles.bloodGroupTag} ${styles.greenTag}`}>
                                ✓ {mail.quantity} bag accepted
                             </div>
                            <h4>You accepted {mail.user.fullName}'s request!</h4>
                            <p>{mail.hospital}</p>
                        </div>
                        <div className={styles.contactDetails}>
                            <h4>Contact Details:</h4>
                            <p><strong>Email:</strong> {mail.user.email}</p>
                            <p><strong>Phone:</strong> {mail.user.phone || 'Not provided'}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default AcceptedMails;