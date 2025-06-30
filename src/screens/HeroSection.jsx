import React from 'react';
import appStoreBadge from '../assets/App Store download button.svg'; // New App Store SVG
import googlePlayBadge from '../assets/images/play Store download button.svg'; // New Play Store SVG
import phoneMockup from '../assets/images/Header.svg'; // Using Header.svg for the phone mockup

const HeroSection = () => {
  return (
    <section className="bg-primary-beige py-16 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12"> {/* Changed to w-full for full width, kept padding */} 
        {/* Left Content Area */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            <span className="text-primary-orange">Find Your Game.</span> {/* TODO(i18n): "Find Your Game." */}
            <span className="text-primary-black"> Join the Movement.</span> {/* TODO(i18n): "Join the Movement." */} {/* Removed <br /> to allow single line */}
          </h1>
          <p className="text-primary-black text-lg text-medium-weight mb-8 max-w-xl mx-auto lg:mx-0"> {/* Added text-medium-weight */}
            At Vaya we want to make football inclusive and accessible. Book a game in a few clicks and join our beautiful community! {/* TODO(i18n): Full paragraph text */}
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer"> {/* TODO(link): Add actual App Store link */}
              <img src={appStoreBadge} alt="Download on the App Store" className="h-12" /> {/* TODO(i18n): "Download on the App Store" for alt text */}
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"> {/* TODO(link): Add actual Google Play link */}
              <img src={googlePlayBadge} alt="Get it on Google Play" className="h-12" /> {/* TODO(i18n): "Get it on Google Play" for alt text */} {/* Updated to use SVG */}
            </a>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src={phoneMockup} alt="Vaya App on Phone" className="max-w-xs md:max-w-sm lg:max-w-md" /> {/* Adjust size as needed */} {/* TODO(i18n): "Vaya App on Phone" for alt text */} {/* Using Header.svg */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
