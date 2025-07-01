import React from 'react';
import { Link } from 'react-router-dom';
import supportImage from '../assets/images/Vaya_Notifications 1.svg';

const SupportSection = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2 text-left">
              <span className="inline-block bg-secondary-orange-25 text-primary-orange text-xs font-semibold px-3 py-1 rounded-full mb-4">
                SUPPORT {/* TODO(i18n): "SUPPORT" */}
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-primary-dark mb-4 leading-tight">
                We're here to help {/* TODO(i18n): "We're here to help" */}
              </h2>
              <p className="text-lg text-primary-dark-gray mb-8">
                Can't find the answer you're looking for? Please contact our team. {/* TODO(i18n): "Can't find the answer you're looking for? Please contact our team." */}
              </p>
              <Link to="/contact-old" className="inline-block bg-primary-orange text-white font-semibold px-6 py-3 rounded-md hover:bg-primary-orange-dark transition-colors duration-300">
                Contact Us {/* TODO(i18n): "Contact Us" */}
              </Link>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-orange rounded-full transform scale-90 translate-x-4 translate-y-0"></div>
                <img src={supportImage} alt="Support Megaphone" className="relative z-10 w-full max-w-md h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
