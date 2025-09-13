import React from 'react';
import { mockRequestMailsData } from '../../data/mockData';

function RequestMailsTab() {
  const requests = mockRequestMailsData;

  return (
    <div>
      <h3>Blood requests matching your group ({requests.length})</h3>
      {requests.map(request => (
        <div key={request._id} className="mail-card">
          {/* Card content from previous answer */}
        </div>
      ))}
    </div>
  );
}
export default RequestMailsTab;