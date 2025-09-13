import React from 'react';
import { mockAcceptedMailsData } from '../../data/mockData';

function AcceptedMailsTab() {
  const acceptedOffers = mockAcceptedMailsData;

  return (
    <div>
      <h3>Accepted Donations ({acceptedOffers.length})</h3>
      {acceptedOffers.map(offer => (
        <div key={offer._id} className="mail-card accepted">
          {/* Card content from previous answer */}
        </div>
      ))}
    </div>
  );
}
export default AcceptedMailsTab;