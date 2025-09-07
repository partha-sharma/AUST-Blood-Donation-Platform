// frontend/src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Inline styles
  const homeStyle = { padding: '50px 20px', textAlign: 'center' };
  const buttonContainerStyle = { marginTop: '30px' };
  const linkStyle = { 
    margin: '10px', 
    padding: '12px 25px', 
    color: 'white', 
    textDecoration: 'none', 
    borderRadius: '5px',
    fontWeight: 'bold',
  };
  const loginButtonStyle = { ...linkStyle, backgroundColor: '#333' };
  const registerButtonStyle = { ...linkStyle, backgroundColor: '#d9534f' };

  return (
    <div style={homeStyle}>
      <h1>🩸 AUST Blood Donor Platform</h1>
      <p style={{fontSize: '1.2rem', color: '#555'}}>
        Connecting AUST community members to save lives.
      </p>
      <div style={buttonContainerStyle}>
        {/* Using Link component for internal navigation */}
        <Link to="/login" style={loginButtonStyle}>
          Login
        </Link>
        <Link to="/register" style={registerButtonStyle}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;