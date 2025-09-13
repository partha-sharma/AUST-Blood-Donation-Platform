// frontend/src/components/Newsfeed.js
import React, { useState } from 'react';
import { mockBloodRequests } from '../data/mockRequests';
import RequestCard from './RequestCard'; //for 
import CreateRequestModal from './CreateRequestModal'; //for blood request.

const Newsfeed = () => {
  const [requests, setRequests] = useState(mockBloodRequests);
  const [isModalOpen, setIsModalOpen] = useState(false); //state for modal
  
  // Function to handle adding the new request to the list
  const handleRequestCreated = (newRequest) => {
    // Here, we prepend the new request to our existing list
    // Later, you'll want to refetch the list instead of just adding it
    setRequests([newRequest, ...requests]); 
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };
  
  const createButtonStyle = {
      backgroundColor: '#c0392b',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
  };

  return (
    <div style={{ maxWidth: '800px', margin: '100px auto', textAlign: 'left', padding: '0 20px' }}>
      <header style={headerStyle}>
        <div>
          <h1 style={{ fontSize: '24px', marginBottom: '5px' }}>Blood Donation Requests</h1>
          <p>Connect with donors and help save lives in our campus community</p>
        </div>
        {/* BUTTON TO OPEN MODAL */}
        <button onClick={() => setIsModalOpen(true)} style={createButtonStyle}>Create Request</button>
      </header>

      <div>
        {requests.map(request => (
          <RequestCard key={request.id} request={request} />
        ))}
      </div>

      {/* RENDER THE MODAL */}
      <CreateRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreated={handleRequestCreated}
      />
    </div>
  );
};

export default Newsfeed;