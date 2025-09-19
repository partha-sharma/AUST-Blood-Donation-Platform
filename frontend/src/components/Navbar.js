// frontend/src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
     const { user, logout } = useContext(AuthContext);
    // Basic inline styles for now. We can move these to a CSS file later.
    const navStyle = {
        backgroundColor: '#fff',
        padding: '15px 40px',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed', // Make it stick to the top
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        boxSizing: 'border-box'
    };

    const logoStyle = {
        fontWeight: 'bold',
        color: '#d9534f', // A shade of red
        textDecoration: 'none',
        fontSize: '24px'
    };
    
    const linkContainerStyle = {
        display: 'flex',
        alignItems: 'center'
    };

    const linkStyle = {
        margin: '0 15px',
        textDecoration: 'none',
        color: '#333',
        fontWeight: '500'
    };

    const buttonStyle = {
        marginLeft: '15px',
        padding: '10px 20px',
        border: '1px solid #d9534f',
        backgroundColor: 'transparent',
        color: '#d9534f',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        fontWeight: 'bold'
    };

    const primaryButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#d9534f',
        color: '#fff',
    };

    // For now, we'll hardcode the logged-out view.
    // Later, the AuthContext will tell us if a user is logged in.
    //const isLoggedIn = false;
 return (
        <nav style={navStyle}>
            <Link to="/" style={logoStyle}>❤️ AUST Blood Donor</Link>

            <div style={linkContainerStyle}>
                {/* Public links that are always visible */}
                <Link to="/newsfeed" style={linkStyle}>Newsfeed</Link>
                <Link to="/about" style={linkStyle}>About</Link>

                {user ? (
                    // --- Logged In View ---
                    <>
                        <Link to="/dashboard" style={linkStyle}>My Dashboard</Link>

                        {/* Only show Admin Panel link if the user's role is 'admin' */}
                        {user.role === 'admin' && (
                            <Link to="/admin" style={{ ...linkStyle, color: '#d9534f', fontWeight: 'bold' }}>Admin Panel</Link>
                        )}
                        
                        <span style={{ margin: '0 15px', color: '#555' }}>
                            Hi, {user.fullName}
                        </span>

                        <button onClick={logout} style={buttonStyle}>
                            Logout
                        </button>
                    </>
                ) : (
                    // --- Logged Out View ---
                    <>
                        <Link to="/login" style={buttonStyle}>Login</Link>
                        <Link to="/register" style={primaryButtonStyle}>Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;