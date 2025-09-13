import React, { useState, useEffect } from 'react';
import EligibilityTab from '../components/dashboard/EligibilityTab';
import RequestMailsTab from '../components/dashboard/RequestMailsTab';
import AcceptedMailsTab from '../components/dashboard/AcceptedMailsTab';
import MyRequestsTab from '../components/dashboard/MyRequestsTab';
import { mockRequestMailsData } from '../data/mockData';
import './DashboardPage.css';

// --- CHANGE #1: FAKE "CURRENT USER" INFORMATION ---
// In a real app, this info would come from your login state. For now,
// we'll define it right here so we can use it.
const currentUser = {
  name: "Ahmed Rahman (You)", // This is your logged-in user
  department: "CSE",
  year: "4th Year"
};

function DashboardPage() {
  const [activeTab, setActiveTab] = useState('requests');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests(mockRequestMailsData);
  }, []);
  
  const [bagsNeeded, setBagsNeeded] = useState(1);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleOpenModal = () => {
    setBagsNeeded(1);
    setLocation('');
    setDescription('');
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!location.trim() || !description.trim()) {
      alert("Location and Description cannot be empty.");
      return;
    }
    
    // --- CHANGE #2: USE THE `currentUser` INFO WHEN CREATING A POST ---
    const newRequest = {
      _id: Date.now().toString(),
      bloodGroup: "B+", // We still assume a blood group for now
      bagsNeeded,
      isRepost: false,
      // The `postedBy` field now uses our "fake" logged-in user object
      postedBy: currentUser,
      location,
      description,
    };

    // This part remains the same: it updates the list, causing a re-render
    setRequests(prevRequests => [newRequest, ...prevRequests]);
    
    handleCloseModal();
  };

  // --- No other changes are needed in the rest of this file ---
  // The JSX for the return(), nav, main, and modal is exactly the same as before.
  
  return (
    <div className="dashboard-container">
      {/* ... The rest of your JSX remains the same ... */}
       <nav className="dashboard-nav">
          {/* ... all your buttons ... */}
       </nav>
       <main className="dashboard-content">
          <div className="tab-header">
             {activeTab === 'requests' && (
               <button onClick={handleOpenModal} className="action-button">
                 + Post New Request
               </button>
             )}
          </div>
          {activeTab === 'requests' && <RequestMailsTab requests={requests} />}
          {/* ... other tabs */}
       </main>
       {isModalOpen && (
          <div className="modal-overlay">
             {/* ... The entire pop-up form ... */}
          </div>
       )}
    </div>
  );
}

export default DashboardPage;