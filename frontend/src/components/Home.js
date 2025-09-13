import React from 'react';
// Import all the section components
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import CompatibilitySection from './CompatibilitySection';
import ProcessSection from './ProcessSection';
import AwardsSection from './AwardsSection';
// Import the other sections once you've created them
// import NewsSection from './NewsSection';
// import ContactSection from './ContactSection';
// import CTASection from './CTASection';
// import Footer from './Footer';

const Home = () => {
  return (
    // The paddingTop prevents content from being hidden behind the fixed navbar
    <div style={{ paddingTop: '75px' }}> 
      <HeroSection />
      <InfoSection />
      <CompatibilitySection />
      <ProcessSection />
      <AwardsSection />
      {/* 
        <NewsSection />
        <ContactSection />
        <CTASection />
        <Footer /> 
      */}
    </div>
  );
};

export default Home;