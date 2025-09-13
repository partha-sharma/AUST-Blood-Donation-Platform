import React from 'react';

const ProcessSection = () => {
    const sectionStyle = {
        padding: '80px 40px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9'
    };
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        marginTop: '40px'
    };
    const cardStyle = {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        width: '300px',
        borderTop: '4px solid #d9534f'
    };
    const numberStyle = {
        backgroundColor: '#5bc0de',
        color: 'white',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto 20px auto',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    };

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <div style={numberStyle}>1</div>
                    <h3>Registration</h3>
                    <p>Complete health screening and registration process</p>
                </div>
                <div style={cardStyle}>
                    <div style={numberStyle}>2</div>
                    <h3>Donation</h3>
                    <p>Safe and supervised blood donation process (10-15 minutes)</p>
                </div>
                <div style={cardStyle}>
                    <div style={numberStyle}>3</div>
                    <h3>Recovery</h3>
                    <p>Rest and refreshments provided after donation</p>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;