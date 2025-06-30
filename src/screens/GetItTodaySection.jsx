import React from 'react';
import appStoreBadge from '../assets/icons/store-badges/App Store download button.svg';
import googlePlayBadge from '../assets/icons/store-badges/play Store download button.svg';
import phoneMockup from '../assets/images/16 Pro Max.svg'; // Using the new phone mockup image

const GetItTodaySection = () => {
  return (
    <section className="bg-primary-beige py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-primary-orange rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left text-primary-white">
          <div className="pl-16 lg:pl-24">
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Get it today! {/* TODO(i18n): "Get it today!" */}
            </h2>
            <ul className="list-disc list-inside text-lg mb-8 space-y-2">
              <li>Download the Vaya app {/* TODO(i18n): "Download the Vaya app" */}</li>
              <li>Find your pick-up game or league {/* TODO(i18n): "Find your pick-up game or league" */}</li>
              <li>Book and enjoy! {/* TODO(i18n): "Book and enjoy!" */}</li>
            </ul>
            <div className="flex justify-center lg:justify-start gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer"> {/* TODO(link): Add actual App Store link */}
                <img src={appStoreBadge} alt="Download on the App Store" className="h-12" /> {/* TODO(i18n): "Download on the App Store" for alt text */}
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"> {/* TODO(link): Add actual Google Play link */}
                <img src={googlePlayBadge} alt="Get it on Google Play" className="h-12" /> {/* TODO(i18n): "Get it on Google Play" for alt text */}
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute right-[-2rem] bottom-0 z-10">
          <img src={phoneMockup} alt="Vaya App on Phone" className="max-w-sm md:max-w-md lg:max-w-lg" /> {/* TODO(i18n): "Vaya App on Phone" for alt text */}
        </div>
      </div>
    </section>
  );
};

export default GetItTodaySection;
