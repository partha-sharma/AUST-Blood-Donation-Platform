// frontend/src/components/Newsfeed.js
import React, { useState } from 'react';
import { mockBloodRequests } from '../data/mockRequests';
import RequestCard from './RequestCard';

const Newsfeed = () => {
  const [requests, setRequests] = useState(mockBloodRequests);

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', textAlign: 'left' }}>
      <header>
        <h1 style={{fontSize: '24px'}}>Blood Donation Requests</h1>
        <p>Connect with donors and help save lives in our campus community</p>
      </header>

      {/* We will add filters here later */}

      <div>
        {requests.map(request => (
          <RequestCard key={request.id} request={request} /> // <-- USE the new component here
        ))}
      </div>
    </div>
  );
};

export default Newsfeed;