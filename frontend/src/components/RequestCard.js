// frontend/src/components/RequestCard.js
import React from 'react';

const RequestCard = ({ request }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '15px 0', textAlign: 'left' }}>
      <h3>{request.bloodGroup} Blood Needed</h3>
      <p>
        Posted by {request.postedBy} ({request.department} • {request.year})
      </p>
      <p>
        {request.bagsRemaining} bags still needed @ {request.location}
      </p>
      <p>{request.details}</p>

      {/* Simple button for now */}
      <button style={{ padding: '10px', width: '100%', cursor: 'pointer' }}>
        I Can Arrange
      </button>
    </div>
  );
};

export default RequestCard;