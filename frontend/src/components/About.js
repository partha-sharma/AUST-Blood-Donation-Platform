import React from 'react';

const About = () => {
 

 // 1. Add all the style objects
  const pageStyle = { padding: '20px 40px', maxWidth: '960px', margin: '0 auto', fontFamily: 'Arial, sans-serif', color: '#333' };
  const sectionStyle = { marginBottom: '30px' };
  const h2Style = { borderBottom: '2px solid #eee', paddingBottom: '10px', color: '#c0392b', display: 'flex', alignItems: 'center' };
  const h3Style = { color: '#d9534f', marginBottom: '10px' };
  const pStyle = { lineHeight: '1.6' };
  const listStyle = { listStyleType: 'disc', paddingLeft: '20px' };
  const statsContainer = { display: 'flex', justifyContent: 'space-around', gap: '15px', textAlign: 'center', padding: '20px 0' };
  const statBox = { padding: '20px', borderRadius: '8px', flex: 1, color: '#fff', minWidth: '150px' };
  const factsContainer = { display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '20px' };
  const factColumn = { flex: 1 };

   // 2. Add the full JSX structure with the styles applied
  return (
    <div style={pageStyle}>
      <div style={sectionStyle}>
        <h2 style={h2Style}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          About AUST Blood Donor Platform
        </h2>
        <p style={pStyle}>The AUST Blood Donor Platform is a secure, campus-only initiative designed to connect verified AUST students and faculty members who need blood with eligible donors within our university community.</p>
      </div>
      {/* (You can continue adding the rest of the sections here, like "Our Mission", etc.) */}
      <div style={sectionStyle}><h3 style={h3Style}>Our Mission</h3><p style={pStyle}>To create a trusted network where members of the AUST community can quickly find blood donors in times of medical emergencies, fostering a spirit of mutual aid and solidarity within our campus.</p></div>
 <div style={sectionStyle}><h3 style={h3Style}>How It Works</h3><ul style={listStyle}><li>Only verified @aust.edu email holders can participate.</li><li>Post blood requests with required details and location.</li><li>Eligible donors receive notifications for matching blood groups.</li><li>Donors can offer to donate directly or arrange through contacts.</li><li>All connections are facilitated through the platform's mail system.</li><li>Posts can be reposted after 36 hours if no response is received.</li></ul></div>
      <div style={sectionStyle}><h3 style={h3Style}>Safety & Privacy</h3><ul style={listStyle}><li>All users must be verified by admin with valid AUST ID.</li><li>Contact details are shared only after donor consent.</li><li>Platform facilitates connections - we don't store blood.</li><li>Always consult medical professionals for urgent needs.</li></ul></div>
  );
};

export default About;