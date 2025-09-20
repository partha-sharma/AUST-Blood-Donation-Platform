// frontend/src/components/dashboard/EligibilityCalendar.js
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from './DashboardComponents.module.css';

const EligibilityCalendar = () => {
  const { user } = useContext(AuthContext);

  const isEligible = () => {
    if (!user || !user.lastDonation) {
        return true; // Eligible if they have never donated
    }
    const lastDonationDate = new Date(user.lastDonation);
    const today = new Date();
    const diffTime = Math.abs(today - lastDonationDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 120;
  };

  const eligibilityStatus = isEligible();

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>Donation Eligibility Status</h3>
      
      <div className={eligibilityStatus ? styles.statusEligible : styles.statusNotEligible}>
          {eligibilityStatus ? '✓ You\'re eligible to donate!' : '✗ You\'re not eligible to donate yet.'}
      </div>

      <div className={styles.infoSection}>
        <p><strong>Last donation:</strong> {user && user.lastDonation ? new Date(user.lastDonation).toLocaleDateString() : 'N/A'}</p>
        <p>{eligibilityStatus ? 'You can safely donate blood now.' : 'Please wait until you are eligible again.'}</p>
      </div>

      <div className={styles.guidelines}>
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