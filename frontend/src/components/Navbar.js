// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  // Inline styles 
  const navStyle = {
    backgroundColor: '#fff',
    padding: '10px 40px',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  const logoStyle = {
    fontWeight: 'bold',
    color: '#d9534f', 
    textDecoration: 'none',
    fontSize: '24px'
  };
  const linkStyle = {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#333'
  };

  return (
    <nav style={navStyle}>
      <div>
        {/* The logo links to the Home page */}
        <Link to="/" style={logoStyle}>❤️ AUST Blood Donor Platform</Link>
      </div>
      <div>
        {/* Links for a logged-out user */}
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;