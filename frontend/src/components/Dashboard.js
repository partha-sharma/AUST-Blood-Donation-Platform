// frontend/src/components/Dashboard.js
import React, { useState } from 'react';

// We will create these components in the next steps
// import EligibilityCalendar from './dashboard/EligibilityCalendar';
// import RequestMails from './dashboard/RequestMails';
// import AcceptedMails from './dashboard/AcceptedMails';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Request Mails');

  // Basic inline styles for the dashboard layout
  const styles = {
    container: { maxWidth: '960px', margin: '100px auto', padding: '0 20px' },
    nav: { display: 'flex', borderBottom: '1px solid #ddd', marginBottom: '20px' },
    tab: { padding: '10px 20px', cursor: 'pointer', borderBottom: '2px solid transparent' },
    activeTab: { borderBottom: '2px solid #d9534f', fontWeight: 'bold' }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Eligibility Calendar':
        // return <EligibilityCalendar />;
        return <div>Eligibility Calendar Content Coming Soon...</div>;
      case 'Request Mails':
        // return <RequestMails />;
        return <div>Request Mails Content Coming Soon...</div>;
      case 'Accepted Mails':
        // return <AcceptedMails />;
        return <div>Accepted Mails Content Coming Soon...</div>;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={activeTab === 'Eligibility Calendar' ? { ...styles.tab, ...styles.activeTab } : styles.tab} onClick={() => setActiveTab('Eligibility Calendar')}>
          Eligibility Calendar
        </div>
        <div style={activeTab === 'Request Mails' ? { ...styles.tab, ...styles.activeTab } : styles.tab} onClick={() => setActiveTab('Request Mails')}>
          Request Mails
        </div>
        <div style={activeTab === 'Accepted Mails' ? { ...styles.tab, ...styles.activeTab } : styles.tab} onClick={() => setActiveTab('Accepted Mails')}>
          Accepted Mails
        </div>
      </nav>

      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;