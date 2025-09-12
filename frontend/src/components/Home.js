import React from 'react';
// We will create these components next
 import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
// ... and so on

const Home = () => {
  return (
    // We add a paddingTop to the main container to avoid content being hidden by the fixed navbar
    <div style={{ paddingTop: '70px' }}> 
        
        {
          // <HeroSection ,
          <InfoSection />
          /*
          <CompatibilitySection />
          <ProcessSection />
          <AwardsSection />
          <NewsSection />
          <ContactSection />
          <CTASection />
          <Footer />
        */}
    </div>
  );
};

export default Home;