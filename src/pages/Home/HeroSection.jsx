import React from 'react';
import appStoreBadge from '../../assets/icons/store-badges/App Store download button.svg';
import googlePlayBadge from '../../assets/icons/store-badges/play Store download button.svg';
import phoneMockup from '../../assets/images/Header.svg';
import { ScrollToTopButton } from '../../components/common';

/**
 * HeroSection component for the home page
 * Features app download links and a phone mockup
 */
const HeroSection = () => {
  return (
    <>
      {/* Scroll to top button - appears after scrolling down */}
      <ScrollToTopButton showAfterScrollY={300} position="bottom-right" />
      
      <section className="bg-primary-beige py-16 lg:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content Area */}
          <div className="lg:w-1/2 text-center px-12 lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              <span className="text-primary-orange">Find Your Game.</span>
              <span className="text-primary-black"> Join the Movement.</span>
            </h1>
            <p className="text-primary-black text-lg text-medium-weight mb-8 max-w-xl mx-auto lg:mx-0">
              At Vaya we want to make football inclusive and accessible. Book a game in a few clicks and join our beautiful community!
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={appStoreBadge} alt="Download on the App Store" className="h-12" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={googlePlayBadge} alt="Get it on Google Play" className="h-12" />
              </a>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img src={phoneMockup} alt="Vaya App on Phone" className="max-w-xs md:max-w-sm lg:max-w-md" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
