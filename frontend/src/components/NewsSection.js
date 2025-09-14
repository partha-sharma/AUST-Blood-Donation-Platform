import React from 'react';

const NewsSection = () => {
    const sectionStyle = { padding: '80px 40px', textAlign: 'center', backgroundColor: '#f9f9f9' };
    const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto 40px auto' };
    const containerStyle = { display: 'flex', gap: '30px', maxWidth: '1200px', margin: '0 auto', textAlign: 'left' };
    const mainArticleStyle = { flex: '2', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' };
    const sidebarStyle = { flex: '1' };
    const updateCardStyle = { backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '20px' };
    const tagStyle = { display: 'inline-block', padding: '5px 15px', borderRadius: '5px', backgroundColor: '#d9534f', color: 'white', fontSize: '0.8rem', fontWeight: 'bold' };

    return (
        <section style={sectionStyle}>
            <div style={headerStyle}>
                <div>
                    <h2>Latest News & Updates</h2>
                    <p>Stay updated with our recent activities and achievements</p>
                </div>
                <a href="/news" style={{ textDecoration: 'none', fontWeight: 'bold' }}>View All News →</a>
            </div>
            <div style={containerStyle}>
                {/* Main Article */}
                <div style={mainArticleStyle}>
                    <div style={{ padding: '30px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <span style={tagStyle}>Achievement</span>
                            <span style={{ color: '#888' }}>September 8, 2025</span>
                        </div>
                        <h3>Record-Breaking Blood Donation Drive</h3>
                        <p>Our overwhelming response from students and faculty shows the strength of our community.</p>
                        <a href="/news/1" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#333' }}>Read More</a>
                    </div>
                </div>

                {/* Sidebar Updates */}
                <div style={sidebarStyle}>
                    <h4>Recent Updates</h4>
                    <div style={updateCardStyle}>
                        <p style={{ fontWeight: 'bold', color: '#555', margin: '0 0 5px 0' }}>New Partnership with Square Hospital</p>
                        <span style={{ fontSize: '0.8rem', color: '#888' }}>September 5, 2025</span>
                    </div>
                    <div style={updateCardStyle}>
                        <p style={{ fontWeight: 'bold', color: '#555', margin: '0 0 5px 0' }}>Mobile App Launch Coming Soon</p>
                        <span style={{ fontSize: '0.8rem', color: '#888' }}>September 1, 2025</span>
                    </div>
                    <div style={updateCardStyle}>
                        <p style={{ fontWeight: 'bold', color: '#555', margin: '0 0 5px 0' }}>Volunteer Training Program</p>
                        <span style={{ fontSize: '0.8rem', color: '#888' }}>August 28, 2025</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;