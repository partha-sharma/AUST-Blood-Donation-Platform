// frontend/src/components/Newsfeed.js
import React, { useState } from 'react';
import { mockBloodRequests } from '../data/mockRequests';

const Newsfeed = () => {
  const [requests, setRequests] = useState(mockBloodRequests);
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>Blood Donation Requests</h1>
      <p>This is where the list of blood donation requests will be displayed.</p>
      {/* We will add filters and post cards here later */}
    </div>
  );
};

export default Newsfeed;