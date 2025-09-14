import React from 'react';

const AwardsSection = () => {
    const sectionStyle = { padding: '80px 40px', textAlign: 'center' };
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '30px',
        maxWidth: '900px',
        margin: '40px auto',
        textAlign: 'left'
    };
    const cardStyle = {
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        border: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    };
    const iconStyle = { fontSize: '2.5rem', color: '#f0ad4e' };

    return (
        <section style={sectionStyle}>
            <h2>Awards & Recognition</h2>
            <p>Our platform has been recognized for its impact on community healthcare</p>
            <div style={gridStyle}>
                {/* You can map over an array for cleaner code */}
                <div style={cardStyle}>
                    <div style={iconStyle}>🏆</div>
                    <div>
                        <h4>Best University Blood Donation Initiative</h4>
                        <p>Recognized for outstanding contribution to community blood donation.</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <div style={iconStyle}>🏆</div>
                    <div>
                        <h4>Excellence in Healthcare Partnership</h4>
                        <p>Acknowledged for successful blood donation collaborations.</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <div style={iconStyle}>🏆</div>
                    <div>
                        <h4>Community Service Award</h4>
                        <p>Honored for exceptional voluntary blood donation services.</p>
                    </div>
                </div>
                <div style={cardStyle}>
                    <div style={iconStyle}>🏆</div>
                    <div>
                        <h4>Digital Innovation in Healthcare</h4>
                        <p>Awarded for innovative digital platform for blood donation management.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;