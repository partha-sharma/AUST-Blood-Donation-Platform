import React from 'react';

const heroBgImage = 'https://aust.edu/storage/files/n1PcUDYT6dpguLymdm1TICUm2vAvwZaP7zKYyU6w.jpeg'; 

const HeroSection = () => {
    const heroStyle = {
        height: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
    };

    const h1Style = {
        color: '#ffffffff',
        fontSize: '4rem',
        margin: '0 0 20px 0'
        
    };

    const pStyle = {
        fontSize: '1.5rem',
        maxWidth: '600px',
        marginBottom: '30px'
    };

    const buttonStyle = {
        padding: '15px 30px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1.09rem',
        fontWeight: 'bold',
        margin: '0 10px'
    };

    const primaryButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#d9534f',
        color: 'white'
    };

    const secondaryButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'white',
        color: 'black'
    };

    return (
        <div style={heroStyle}>
            <h1 style={h1Style}>AUST Blood Donor Community</h1>
            <p style={pStyle}>Connecting donors with those in need. Saving lives together at Ahsanullah University of Science and Technology.</p>
            <div>
                <button style={primaryButtonStyle}>Register as Donor</button>
                <button style={secondaryButtonStyle}>Request Blood</button>
            </div>
        </div>
    );
};

export default HeroSection;