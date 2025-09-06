import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About'; 
// 1. Create the placeholder component for the Newsfeed page
const Newsfeed = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>Welcome to the AUST Blood Donor Platform</h1>
    <p>This is the newsfeed where blood requests will be shown.</p>
  </div>
);

const App = () => {
  // 1. Add the style objects for the navigation
  const navStyle = {
    backgroundColor: '#f8f8f8',
    padding: '10px 40px',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    gap: '20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#d9534f',
    fontWeight: 'bold',
  };

  return (
    <Router>
      <div>
        {/* 2. Add the navigation bar using the styles */}
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Newsfeed</Link>
          <Link to="/about" style={linkStyle}>About</Link>
        </nav>
   
        <Routes>
          <Route path="/" element={<Newsfeed />} />
          <Route path="/about" element={<About />} />
        </Routes>
   
      </div>
    </Router>
  );
};

export default App;