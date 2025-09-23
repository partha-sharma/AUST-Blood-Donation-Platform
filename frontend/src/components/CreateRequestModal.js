// frontend/src/components/CreateRequestModal.js
import React, { useState } from 'react';
import styles from './CreateRequestModal.module.css';
import axios from 'axios';

const CreateRequestModal = ({ isOpen, onClose, onCreated }) => {
  const [formData, setFormData] = useState({
    bloodGroup: '',
    quantity: 1,
    hospital: '',
    message: '',
    agreedToProvideRefreshments: false,
  });

  const { bloodGroup, quantity, hospital, message, agreedToProvideRefreshments } = formData;

  const onChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // This is a placeholder. In a real app, you would get the token from your auth context/storage.
    const token = localStorage.getItem('authToken'); 
    if (!token) {
      alert("You must be logged in to create a request.");
      return;
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.post('/api/requests', formData, config);
      
      alert('Request created successfully!');
      onCreated(res.data.data); // Pass new request to parent
      onClose(); // Close modal
      
    } catch (err) {
        alert(err.response?.data?.message || 'Failed to create request.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>&times;</button>
        <h3>Create Blood Request</h3>
        <p>Fill out the details for your blood donation request</p>

        <div className={styles.notice}>
          <strong>Important Notice:</strong> By posting a request, you agree to provide donors with refreshments (juice, fruits, coconut water) and help with transportation costs as a token of appreciation.
        </div>

        <form onSubmit={onSubmit}>
          {/* Form Groups from Figma Design */}
          <div className={styles.formGroup}>
              <label className={styles.label}>Blood Group</label>
              <select name="bloodGroup" value={bloodGroup} onChange={onChange} className={styles.select} required>
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Number of Bags Needed</label>
            <input type="number" name="quantity" value={quantity} onChange={onChange} min="1" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Hospital/Location</label>
            <input type="text" name="hospital" value={hospital} onChange={onChange} className={styles.input} placeholder="e.g., Square Hospital, Dhaka" required />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Message (optional)</label>
            <textarea name="message" value={message} onChange={onChange} className={styles.textarea} placeholder="Brief description of the situation..." />
          </div>
          
          <div className={styles.formGroup}>
            <div className={styles.checkboxContainer}>
                <input type="checkbox" id="agree" name="agreedToProvideRefreshments" checked={agreedToProvideRefreshments} onChange={onChange} required/>
                <label htmlFor="agree">I agree to provide refreshments (juice, fruits, coconut water) and help with transportation costs for donors who help me.</label>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button type="button" onClick={onClose} className={`${styles.button} ${styles.cancelButton}`}>Cancel</button>
            <button type="submit" className={`${styles.button} ${styles.submitButton}`}>Post Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRequestModal;