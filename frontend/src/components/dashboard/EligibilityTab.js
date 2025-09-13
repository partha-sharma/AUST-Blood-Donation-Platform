import React from 'react';
import { mockEligibilityData } from '../../data/mockData';

function EligibilityTab() {
  const data = mockEligibilityData;

  return (
    <div>
      <div className="info-box">
        <h4>Donation Eligibility Status</h4>
        <div className="status-message eligible">
          <p>✔ You're eligible to donate!</p>
          <small>Last donation: {new Date(data.lastDonationDate).toLocaleDateString()}</small>
          <p>You can safely donate blood now.</p>
        </div>
      </div>
      <div className="info-box">
        <h4>Donation Guidelines:</h4>
        <ul>
          <li>Wait at least 120 days (4 months) between donations</li>
          <li>Maintain a healthy diet and stay hydrated</li>
          <li>Get adequate rest before donating</li>
          <li>Inform the medical team of any medications</li>
        </ul>
      </div>
    </div>
  );
}
export default EligibilityTab;