import React from 'react';

const InfoSection = () => {
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
        width: '250px',
        textAlign: 'center'
    };

    const iconStyle = {
        fontSize: '2rem',
        color: '#d9534f'
    };
    
    return (
        <section style={sectionStyle}>
            <h1>Blood Donation Information</h1>
            <p>Learn about blood types, donation process, and why your contribution matters</p>
            <div style={containerStyle}>
                {/* Card 1 */}
                <div style={cardStyle}>
                    <div style={iconStyle}>❤️</div>
                    <h3>Save 3 Lives</h3>
                    <p>One donation can help up to 3 patients.</p>
                </div>
                {/* Card 2 */}
                <div style={cardStyle}>
                    <div style={iconStyle}>⏰</div>
                    <h3>Every 2 Seconds</h3>
                    <p>Someone needs blood every 2 seconds.</p>
                </div>
                {/* Card 3 */}
                <div style={cardStyle}>
                    <div style={iconStyle}>🩸</div>
                    <h3>Regular Donation</h3>
                    <p>You can donate every 56 days.</p>
                </div>
                {/* Card 4 */}
                <div style={cardStyle}>
                    <div style={iconStyle}>📉</div>
                    <h3>Low Supply</h3>
                    <p>Only 3% of eligible people donate.</p>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;