import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import EligibilityTab from '../components/dashboard/EligibilityTab';
import RequestMailsTab from '../components/dashboard/RequestMailsTab';
import AcceptedMailsTab from '../components/dashboard/AcceptedMailsTab';
import './DashboardPage.css'; // We will create this for styling

function DashboardPage() {
  const [activeTab, setActiveTab] = useState('eligibility');

  // We add mock notification counts for the visual design
  const requestCount = 1;
  const acceptedCount = 1;

  return (
    <div className="dashboard-container">
        <div className="dashboard-actions">
  <Link to="/request-blood" className="action-button">
    Post a New Blood Request
  </Link>
</div>
      <nav className="dashboard-nav">
        <button className={activeTab === 'eligibility' ? 'active' : ''} onClick={() => setActiveTab('eligibility')}>
          Eligibility Calendar
        </button>
        <button className={activeTab === 'requests' ? 'active' : ''} onClick={() => setActiveTab('requests')}>
          Request Mails {requestCount > 0 && <span className="notification-dot red">{requestCount}</span>}
        </button>
        <button className={activeTab === 'accepted' ? 'active' : ''} onClick={() => setActiveTab('accepted')}>
          Accepted Mails {acceptedCount > 0 && <span className="notification-dot green">{acceptedCount}</span>}
        </button>
      </nav>

      <main className="dashboard-content">
        {activeTab === 'eligibility' && <EligibilityTab />}
        {activeTab === 'requests' && <RequestMailsTab />}
        {activeTab === 'accepted' && <AcceptedMailsTab />}
      </main>
    </div>
  );
}

export default DashboardPage;