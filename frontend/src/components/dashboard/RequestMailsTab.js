import React, { useState } from 'react';
import { mockRequestMailsData } from '../../data/mockData';

function RequestMailsTab() {
  const requests = mockRequestMailsData;
  const [selectedRequest, setSelectedRequest] = useState(null); // State for the modal

  const handleOfferDonation = (requestId) => {
    // This is where you will send an "offer" to the backend in the future.
    alert(`Offer sent for request ID: ${requestId}! (Frontend Only)`);
    setSelectedRequest(null); // Close the modal
  };

  return (
    <div>
      <h3>Blood requests matching your group ({requests.length})</h3>
      {requests.map(request => (
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
          {/* This button now opens the modal */}
          <button onClick={() => setSelectedRequest(request)} className="view-details-btn">View Details</button>
        </div>
      ))}

      {/* --- This is the new Modal for user input --- */}
      {selectedRequest && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Donation Offer</h3>
            <p>You are about to offer a donation for a request from <strong>{selectedRequest.postedBy.name}</strong>.</p>
            <p className="modal-details">Location: {selectedRequest.location}</p>
            <div className="modal-actions">
              <button className="confirm-btn" onClick={() => handleOfferDonation(selectedRequest._id)}>Confirm Offer</button>
              <button className="cancel-btn" onClick={() => setSelectedRequest(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestMailsTab;