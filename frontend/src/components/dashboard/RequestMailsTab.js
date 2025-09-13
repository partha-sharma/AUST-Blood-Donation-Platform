import React, { useState } from 'react';

// The component now RECEIVES the list of requests as a "prop"
function RequestMailsTab({ requests }) {
  const [selectedRequest, setSelectedRequest] = useState(null);

  // This function doesn't change
  const handleOfferDonation = (requestId) => {
    alert(`Offer sent for request ID: ${requestId}! (Frontend Only)`);
    setSelectedRequest(null);
  };
  
  // It no longer needs to import mockData or use useState/useEffect for the list.

  return (
    <div>
      <h3>Blood requests matching your group ({requests.length})</h3>
      {requests.length === 0 ? (
        <p>No active blood requests match your group right now.</p>
      ) : (
        requests.map(request => (
          <div key={request._id} className="mail-card">
            <div className="card-header">
              <span>{request.bloodGroup} | {request.bagsNeeded} bags needed</span>
              {request.isRepost && <span className="tag repost-tag">REPOST</span>}
            </div>
            <div className="card-body">
              <p><strong>{request.postedBy.name}</strong> ({request.postedBy.department} • {request.postedBy.year})</p>
              <p>{request.location}</p>
              <p>{request.description}</p>
            </div>
            <button onClick={() => setSelectedRequest(request)} className="view-details-btn">View Details</button>
          </div>
        ))
      )}

      {/* The offer modal code remains the same */}
      {selectedRequest && (
        <div className="modal-overlay">
          {/* ... modal content ... */}
        </div>
      )}
    </div>
  );
}

export default RequestMailsTab;