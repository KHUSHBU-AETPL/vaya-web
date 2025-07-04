import React, { useState, useEffect } from 'react';
import appStoreBadge from '../assets/icons/store-badges/App Store download button.svg'; // App Store SVG
import googlePlayBadge from '../assets/icons/store-badges/play Store download button.svg'; // Play Store SVG
import phoneMockup from '../assets/images/Header.svg'; // Using Header.svg for the phone mockup
import AboutScreen from './AboutScreen'; // Import AboutScreen to render it after HeroSection
import PlayFootballSection from './PlayFootballSection'; // Import PlayFootballSection to render it after AboutScreen
import GetItTodaySection from "./GetItTodaySection";
import FAQSection from "./FAQSection";
import SupportSection from "./SupportSection";

const HeroSection = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      {/* Scroll to top button */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary-orange text-primary-white shadow-lg hover:bg-opacity-90 transition-all duration-300 focus:outline-none"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      )}
      <section className="bg-primary-beige pt-6 sm:pt-4 md:pt-2 lg:pt-0 pb-12 sm:pb-16 lg:pb-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
            {/* Left Content Area */}
            <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="mb-3 sm:mb-4">
              <div className="flex flex-row flex-wrap justify-center lg:justify-start">
                <span style={{ 
                  fontSize: 'clamp(36px, 8vw, 64px)', 
                  lineHeight: 'clamp(46px, 9vw, 74px)', 
                  fontWeight: 'var(--font-weight-bold)', 
                  color: 'var(--color-primary-orange)', 
                  letterSpacing: '0px', 
                  display: 'inline-block',
                  whiteSpace: 'nowrap'
                }}>Find your Game. </span>
                <span style={{ 
                  fontSize: 'clamp(36px, 8vw, 64px)', 
                  lineHeight: 'clamp(46px, 9vw, 74px)', 
                  fontWeight: 'var(--font-weight-bold)', 
                  color: 'var(--color-primary-black)', 
                  letterSpacing: '0px', 
                  display: 'inline-block',
                  whiteSpace: 'nowrap'
                }}>Join the Movement.</span> {/* TODO(i18n): "Find Your Game. Join the Movement." */}
              </div>
            </h1>
            <p className="mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0" style={{ 
              fontSize: 'clamp(16px, 4vw, 18px)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)' 
            }}> 
              At Vaya we want to make football inclusive and accessible. Book a game in a few clicks and join our beautiful community! {/* TODO(i18n): Full paragraph text */}
            </p>
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer"> {/* TODO(link): Add actual App Store link */}
                <img src={appStoreBadge} alt="Download on the App Store" className="h-8 xs:h-10 sm:h-12" /> {/* TODO(i18n): "Download on the App Store" for alt text */}
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"> {/* TODO(link): Add actual Google Play link */}
                <img src={googlePlayBadge} alt="Get it on Google Play" className="h-8 xs:h-10 sm:h-12" /> {/* TODO(i18n): "Get it on Google Play" for alt text */} {/* Updated to use SVG */}
              </a>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="lg:w-1/2 flex justify-center mt-8 xs:mt-10 sm:mt-12 md:mt-16 lg:mt-0 lg:justify-end">
            <img 
              src={phoneMockup} 
              alt="Vaya App on Phone" 
              className="max-w-[85%] xs:max-w-[80%] sm:max-w-xs md:max-w-sm lg:max-w-md w-full h-auto" 
            /> {/* Responsive sizing */} {/* TODO(i18n): "Vaya App on Phone" for alt text */}
          </div>
          </div>
        </div>
      </section>
      <AboutScreen /> {/* Render AboutScreen directly after HeroSection */}
      <PlayFootballSection /> {/* Render PlayFootballSection after AboutScreen */}
      <GetItTodaySection />
      <FAQSection />
      <SupportSection />
    
    </>
  );
};

export default HeroSection;
