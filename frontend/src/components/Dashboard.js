// frontend/src/components/Dashboard.js
import React, { useState } from 'react';
import EligibilityCalendar from './dashboard/EligibilityCalendar';
import DonationHistory from './dashboard/DonationHistory';

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
        return <EligibilityCalendar />;
      case 'Donation History':
        return <DonationHistory />; // <-- REPLACE THE DIV
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {/* UPDATE THE TABS */ }
      <nav style={styles.nav}>
        <div style={activeTab === 'Eligibility Calendar' ? { ...styles.tab, ...styles.activeTab } : styles.tab} onClick={() => setActiveTab('Eligibility Calendar')}>
          Eligibility Calendar
        </div>
        <div style={activeTab === 'Donation History' ? { ...styles.tab, ...styles.activeTab } : styles.tab} onClick={() => setActiveTab('Donation History')}>
          Donation History
        </div>
      </nav>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;