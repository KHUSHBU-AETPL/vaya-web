import React from 'react';
import HeroSection from '../../screens/HeroSection';

/**
 * Home page component that uses the existing HeroSection screen component
 * which already includes all necessary sections like About, PlayFootball, FAQ, etc.
 */
const HomePage = () => {
  return (
    <HeroSection />
  );
};

export default HomePage;
