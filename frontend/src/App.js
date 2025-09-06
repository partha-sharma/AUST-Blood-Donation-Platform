import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
      </div>
    </Router>
  );
};

export default App;