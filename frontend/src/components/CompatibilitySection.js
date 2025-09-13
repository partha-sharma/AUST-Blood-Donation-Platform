import React from 'react';

const CompatibilitySection = () => {
    const sectionStyle = {
        padding: '80px 40px',
        textAlign: 'center',
    };
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        maxWidth: '1000px',
        margin: '40px auto'
    };
    const cardStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        border: '1px solid #eee'
    };
    const bloodTypeStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#d9534f'
    };
    const tagStyle = {
        display: 'inline-block',
        padding: '5px 15px',
        borderRadius: '15px',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        color: 'white',
        margin: '10px 0'
    };

    const bloodTypes = [
        { type: 'O-', tag: 'Universal Donor', color: '#d9534f', text: 'Can donate to all blood types' },
        { type: 'O+', tag: 'Most Common', color: '#5cb85c', text: 'Can donate to all positive types' },
        { type: 'A-', tag: 'Rare Donor', color: '#f0ad4e', text: 'Needed for A- and AB- recipients' },
        { type: 'A+', tag: 'Common', color: '#5bc0de', text: 'Can donate to A+ and AB+' },
        { type: 'B-', tag: 'Rare Donor', color: '#f0ad4e', text: 'Needed for B- and AB- recipients' },
        { type: 'B+', tag: 'Common', color: '#5bc0de', text: 'Can donate to B+ and AB+' },
        { type: 'AB-', tag: 'Rare', color: '#f0ad4e', text: 'Can donate to AB- only' },
        { type: 'AB+', tag: 'Universal Recipient', color: '#d9534f', text: 'Can receive from all blood types' },
    ];

    return (
        <section style={sectionStyle}>
            <h2>Blood Type Compatibility</h2>
            <div style={gridStyle}>
                {bloodTypes.map(blood => (
                    <div key={blood.type} style={cardStyle}>
                        <div style={bloodTypeStyle}>{blood.type}</div>
                        <div style={{ ...tagStyle, backgroundColor: blood.color }}>{blood.tag}</div>
                        <p>{blood.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CompatibilitySection;