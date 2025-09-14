import React from 'react';

const CTASection = () => {
    const sectionStyle = { padding: '80px 40px', textAlign: 'center', backgroundColor: '#d9534f', color: 'white' };
    const containerStyle = { display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px' };
    const cardStyle = { backgroundColor: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '10px', width: '300px' };
    const buttonStyle = { padding: '15px 30px', border: 'none', borderRadius: '5px', backgroundColor: 'white', color: '#d9534f', fontWeight: 'bold', cursor: 'pointer' };

    return (
        <section style={sectionStyle}>
            <h2>Ready to Save Lives?</h2>
            <p>Join thousands of AUST students and faculty who are making a difference</p>
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <h3>Become a Donor</h3>
                    <p>Register as a blood donor and help save lives in your community</p>
                    <button style={buttonStyle}>Register Now</button>
                </div>
                <div style={cardStyle}>
                    <h3>Request Blood</h3>
                    <p>Need blood for yourself or a family member? Submit a request quickly</p>
                    <button style={buttonStyle}>Make Request</button>
                </div>
                <div style={cardStyle}>
                    <h3>Emergency Help</h3>
                    <p>Need immediate assistance? Contact our 24/7 emergency support</p>
                    <button style={buttonStyle}>Call Now</button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;