// frontend/src/components/Dashboard.js
import React from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import styles from './Dashboard.module.css';

import EligibilityCalendar from './dashboard/EligibilityCalendar';
import RequestMails from './dashboard/RequestMails';
import AcceptedMails from './dashboard/AcceptedMails';
import RequestDetailsModal from './dashboard/RequestDetailsModal';

const Dashboard = () => {
const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('requests');
  const [requestMails, setRequestMails] = useState([]);
  const [acceptedMails, setAcceptedMails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    const token = localStorage.getItem('authToken');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      // Fetch both requests and accepted mails in parallel
      const [requestsRes, acceptedRes] = await Promise.all([
        axios.get('/api/dashboard/requests', config),
        axios.get('/api/dashboard/accepted', config),
      ]);
      setRequestMails(requestsRes.data);
      setAcceptedMails(acceptedRes.data);
    } catch (err) {
      setError('Failed to fetch dashboard data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  const handleAcceptRequest = async (requestId) => {
    try {
        const token = localStorage.getItem('authToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        
        // This is the simplified "auto-accept" logic
        await axios.put(`/api/dashboard/requests/${requestId}/accept`, {}, config);
        
        // Refetch all data to update the UI instantly
        fetchData();
        handleCloseModal();
        setActiveTab('accepted'); // Switch to accepted mails tab
    } catch (err) {
        alert('Failed to accept the request. It may have been taken by another donor.');
        console.error(err);
        handleCloseModal();
    }
  };


    return (
    <div className={styles.dashboardContainer}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === 'eligibility' ? styles.active : ''}`}
          onClick={() => setActiveTab('eligibility')}
        >
          Eligibility Calendar
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'requests' ? styles.active : ''}`}
          onClick={() => setActiveTab('requests')}
        >
          Request Mails
          {requestMails.length > 0 && <span className={styles.badge}>{requestMails.length}</span>}
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'accepted' ? styles.active : ''}`}
          onClick={() => setActiveTab('accepted')}
        >
          Accepted Mails
           {acceptedMails.length > 0 && <span className={`${styles.badge} ${styles.badgeGreen}`}>{acceptedMails.length}</span>}
        </button>
      </div>

      <div className={styles.tabContent}>
        {loading && <p>Loading...</p>}
        {error && <p className={styles.error}>{error}</p>}
        {!loading && !error && (
          <>
            {activeTab === 'eligibility' && <EligibilityCalendar user={user} />}
            {activeTab === 'requests' && <RequestMails requests={requestMails} onViewDetails={handleViewDetails} />}
            {activeTab === 'accepted' && <AcceptedMails mails={acceptedMails} />}
          </>
        )}
      </div>

      {selectedRequest && (
        <RequestDetailsModal 
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            request={selectedRequest}
            onAccept={handleAcceptRequest}
        />
      )}
    </div>
  );
};

export default Dashboard;