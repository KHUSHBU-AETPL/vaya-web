import React, { useEffect, useRef } from 'react';
import appStoreBadge from '../assets/icons/store-badges/App Store.svg';
import googlePlayBadge from '../assets/icons/store-badges/Play Store.svg';
import phoneMockup from '../assets/images/CTA.svg'; // Phone mockup image

const GetItTodaySection = () => {
  const phoneRef = useRef(null);

  // Ensure the phone image is properly displayed on all screen sizes
  useEffect(() => {
    const handleResize = () => {
      if (phoneRef.current) {
        // Force a repaint on resize to ensure the image displays correctly
        phoneRef.current.style.display = 'none';
        setTimeout(() => {
          if (phoneRef.current) {
            phoneRef.current.style.display = 'block';
          }
        }, 10);
      }
    };

    // Initial call and event listener
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="bg-primary-beige py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-orange rounded-2xl sm:rounded-3xl relative overflow-hidden">
          {/* Background curved lines */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <svg 
              className="absolute top-0 right-0 h-full" 
              width="300" 
              height="100%" 
              viewBox="0 0 300 600" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin slice"
            >
              <path 
                d="M150 0C150 0 300 150 300 300C300 450 150 600 150 600" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="2" 
                fill="none"
              />
              <path 
                d="M100 0C100 0 250 150 250 300C250 450 100 600 100 600" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="2" 
                fill="none"
              />
            </svg>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center relative z-10 py-8 md:py-10 lg:py-0">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 px-6 sm:px-8 md:px-10 lg:px-16 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-left font-bold leading-tight mb-4 sm:mb-6">
                Get it today!
              </h2>
              
              <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
                <li className="flex items-center">
                  <span className="inline-block mr-3 text-lg sm:text-xl">•</span>
                  <span className="text-sm sm:text-base">Download the Vaya app</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block mr-3 text-lg sm:text-xl">•</span>
                  <span className="text-sm sm:text-base">Find your pick-up game or league</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block mr-3 text-lg sm:text-xl">•</span>
                  <span className="text-sm sm:text-base">Book and enjoy!</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="transform hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={appStoreBadge} 
                    alt="Download on the App Store" 
                    className="h-9 sm:h-10 md:h-12" 
                  />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="transform hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={googlePlayBadge} 
                    alt="Get it on Google Play" 
                    className="h-9 sm:h-10 md:h-12" 
                  />
                </a>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="w-full lg:w-1/2 relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] mt-6 sm:mt-8 lg:mt-0">
              {/* Phone Image */}
              <div className="absolute inset-0 flex items-end justify-center lg:justify-end lg:pr-8 xl:pr-12">
                <img 
                  ref={phoneRef}
                  src={phoneMockup} 
                  alt="Vaya App on Phone" 
                  className="h-auto w-auto max-h-full max-w-[90%] sm:max-w-[85%] lg:max-w-[90%] lg:max-h-[450px] object-contain z-10"
                />  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetItTodaySection;
