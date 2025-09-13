import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RequestBloodPage.css'; // We will create this CSS file

function RequestBloodPage() {
  const [bagsNeeded, setBagsNeeded] = useState(1);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // --- Frontend Validation ---
    if (!location.trim() || !description.trim()) {
      return setError('Hospital/Location and Description are required.');
    }
    console.log("Submitting:", { bagsNeeded, location, description });
    
    // In the future, this is where you will send data to the backend.
    // For now, we'll just simulate a success and go back to the dashboard.
    alert('Request submitted successfully! (Frontend Only)');
    navigate('/dashboard');
  };

  return (
    <div className="form-page-container">
      <div className="request-form-wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Post a New Blood Request</h2>
          <p className="subtitle">Your blood group will be automatically included from your profile.</p>
          
          <div className="form-group">
            <label htmlFor="bags">Bags Needed</label>
            <input 
              type="number" 
              id="bags" 
              value={bagsNeeded} 
              onChange={e => setBagsNeeded(parseInt(e.target.value))} 
              min="1" 
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Hospital / Location</label>
            <input 
              type="text" 
              id="location" 
              value={location} 
              onChange={e => setLocation(e.target.value)} 
              placeholder="e.g., AUST Medical Center" 
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Reason / Description</label>
            <textarea 
              id="description" 
              value={description} 
              onChange={e => setDescription(e.target.value)} 
              placeholder="e.g., For a scheduled thalassemia transfusion" 
              rows="4"
              required
            ></textarea>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-button">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default RequestBloodPage;