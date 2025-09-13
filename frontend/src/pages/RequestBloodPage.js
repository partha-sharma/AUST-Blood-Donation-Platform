import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RequestBloodPage.css';

function RequestBloodPage() {
  // --- Step A: We create state variables to HOLD what you type ---
  const [bagsNeeded, setBagsNeeded] = useState(1);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!location.trim() || !description.trim()) {
      return setError('Hospital/Location and Description are required.');
    }
    console.log("Submitting:", { bagsNeeded, location, description });
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
              // --- Step B: These two lines are REQUIRED for typing ---
              value={bagsNeeded}                                 // 1. This shows what's in the state.
              onChange={e => setBagsNeeded(parseInt(e.target.value))} // 2. This updates the state every time you type.
              min="1" 
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Hospital / Location</label>
            <input 
              type="text" 
              id="location" 
              // --- Step B: These two lines are REQUIRED for typing ---
              value={location}                              // 1. This shows what's in the state.
              onChange={e => setLocation(e.target.value)} // 2. This updates the state every time you type.
              placeholder="e.g., AUST Medical Center" 
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Reason / Description</label>
            <textarea 
              id="description" 
              // --- Step B: These two lines are REQUIRED for typing ---
              value={description}                           // 1. This shows what's in the state.
              onChange={e => setDescription(e.target.value)} // 2. This updates the state every time you type.
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