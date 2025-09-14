import React from 'react';

const ContactSection = () => {
    const sectionStyle = { padding: '80px 40px', textAlign: 'center' };
    const containerStyle = { display: 'flex', gap: '30px', maxWidth: '1200px', margin: '40px auto', textAlign: 'left' };
    const mainContentStyle = { flex: '2', display: 'flex', flexDirection: 'column', gap: '30px' };
    const sidebarStyle = { flex: '1', display: 'flex', flexDirection: 'column', gap: '30px' };
    const cardStyle = { backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eee' };
    const emergencyCardStyle = { ...cardStyle, backgroundColor: '#f8d7da', borderLeft: '5px solid #d9534f' };
    
    return (
        <section style={sectionStyle}>
            <h2>Contact Us</h2>
            <p>Get in touch with our team for support, questions, or to join our mission</p>
            <div style={containerStyle}>
                <div style={mainContentStyle}>
                    <div style={cardStyle}>
                        <h4>🩸 Blood Donor Community Admins</h4>
                        {/* Admin details here */}
                    </div>
                    <div style={cardStyle}>
                        <h4>💻 Development Team</h4>
                        {/* Dev team details here */}
                    </div>
                </div>
                <div style={sidebarStyle}>
                    <div style={emergencyCardStyle}>
                        <h4>Emergency Contact</h4>
                        <p>📞 +880-1700-BLOOD</p>
                        <p>📧 emergency@austblood.org</p>
                        <button style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#d9534f', color: 'white' }}>Emergency Request</button>
                    </div>
                    <div style={cardStyle}>
                        <h4>Visit Us</h4>
                        <p>Ahsanullah University of Science and Technology, 141 & 142, Love Road, Dhaka</p>
                        <button style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'transparent' }}>Get Directions</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;