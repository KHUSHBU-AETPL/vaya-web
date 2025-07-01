import React from 'react';
import fieldRentalsImage from '../assets/images/untitled-75 (1).svg';

const FieldRentalsScreen = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-primary-beige">
      <div className="max-w-6xl mx-auto">
        {/* Content Container */}
        <div className="flex flex-col items-center lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            {/* Header Section */}
            <h1 className="text-3xl font-bold mb-6 text-left">
              <span className="text-primary-black">Field rentals</span>
            </h1>
            
            <p className="text-lg text-left text-primary-black mb-4">
              Field rentals allow you to book a pitch for your own event.
              You can share your preferred time and location with our
              support team, and we'll do our best to find a suitable offer.
            </p>
            
            <p className="text-base text-left text-primary-black mb-4">
              This option gives you flexibility to organize games that fit your
              wishes.
            </p>
            
            <p className="text-base text-left text-primary-black mb-4">
              Once a slot is confirmed, payment can be made through the
              app or by bank transfer, with an invoice available if desired.
            </p>
            
            {/* CTA Button */}
            <div className="mt-6 text-left">
              <a 
                href="#" 
                className="inline-block bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-warning-dark transition-colors duration-300"
              >
                <span className="text-semibold text-sm">Request field rental</span>
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <img 
              src={fieldRentalsImage} 
              alt="Field Rentals" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldRentalsScreen;
