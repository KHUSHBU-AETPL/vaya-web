import React from 'react';
import corporateFootballImage from '../assets/images/Image.svg';

const CorporateFootballScreen = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-primary-white">
      <div className="max-w-6xl mx-auto">
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row-reverse gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:mt-28">
            {/* Header Section */}
            <h1 className="text-3xl font-bold mb-6 text-left">
              <span className="text-primary-black">Customized Corporate Football</span>
            </h1>
            
            <p className="text-lg text-left text-primary-black mb-4">
              Vaya makes it possible for companies, organizations, or co-
              working spaces to organize football activities for their staff.
            </p>
            
            <p className="text-base text-left text-primary-black mb-4">
              We offer private sessions, field rentals, tournaments, and
              leagues tailored to your needs and schedule.
            </p>
            
            <p className="text-base text-left text-primary-black mb-4">
              Whether you want a one-time event or a regular competition,
              we'll work with you to create the right football experience for
              your team.
            </p>
            
            <p className="text-base text-left text-primary-black mb-6">
              Once a slot is confirmed, payment can be made through the
              app or by bank transfer, with an invoice provided if needed.
            </p>
            
            {/* CTA Button */}
            <div className="mt-6 text-left">
              <a 
                href="#" 
                className="inline-block bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-warning-dark transition-colors duration-300"
              >
                <span className="text-semibold text-sm">Contact our support</span>
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-1/2">
            <img 
              src={corporateFootballImage} 
              alt="Corporate Football Team" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateFootballScreen;
