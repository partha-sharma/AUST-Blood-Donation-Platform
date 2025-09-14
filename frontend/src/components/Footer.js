import React from 'react';

const Footer = () => {
    const footerStyle = { padding: '60px 40px', backgroundColor: '#222', color: 'white' };
    const gridStyle = { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '30px', maxWidth: '1200px', margin: '0 auto' };
    const linkStyle = { color: '#ccc', textDecoration: 'none', display: 'block', marginBottom: '10px' };
    const bottomBarStyle = { borderTop: '1px solid #444', marginTop: '40px', paddingTop: '20px', textAlign: 'center', fontSize: '0.9rem', color: '#888' };

    return (
        <footer style={footerStyle}>
            <div style={gridStyle}>
                <div>
                    <h4>AUST Blood Donor Platform</h4>
                    <p style={{ color: '#ccc' }}>Connecting blood donors with those in need at Ahsanullah University of Science and Technology.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <a href="/" style={linkStyle}>Home</a>
                    <a href="/about" style={linkStyle}>About Us</a>
                    <a href="/register" style={linkStyle}>Register as Donor</a>
                    <a href="/news" style={linkStyle}>News Feed</a>
                </div>
                <div>
                    <h4>Contact Info</h4>
                    <p style={{ margin: '0 0 10px 0' }}>📞 +880-1700-BLOOD</p>
                    <p style={{ margin: '0 0 10px 0' }}>📧 info@austblood.org</p>
                    <p style={{ margin: '0 0 10px 0' }}>📍 141 & 142, Love Road, Dhaka</p>
                </div>
                <div>
                    <h4>Emergency</h4>
                    <div style={{ backgroundColor: '#333', padding: '15px', borderRadius: '5px' }}>
                        <p style={{ margin: '0 0 10px 0' }}>24/7 Emergency Support</p>
                        <p style={{ margin: '0', fontWeight: 'bold', fontSize: '1.2rem' }}>+880-1700-BLOOD</p>
                    </div>
                </div>
            </div>
            <div style={bottomBarStyle}>
                <p>&copy; {new Date().getFullYear()} AUST Blood Donor Platform. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;