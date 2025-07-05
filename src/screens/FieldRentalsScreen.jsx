import React from 'react';
import fieldRentalsImage from '../assets/images/fieldrentals.svg';

const FieldRentalsScreen = () => {
  return (
    <div className="w-full py-16 bg-primary-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[100px]">
        {/* Content Container */}
        <div className="flex flex-col items-center lg:flex-row gap-12 lg:gap-16 xl:gap-24">
          {/* Left Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            {/* Header Section */}
            <h1 className="mb-6 text-left" style={{ fontSize: 'var(--font-size-xlarge)', lineHeight: 'var(--line-height-xlarge)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-primary-black)' }}>
              Field rentals
            </h1>
            
            <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
              Field rentals allow you to book a pitch for your own event.
              You can share your preferred time and location with our
              support team, and we'll do our best to find a suitable offer.
            </p>
            
            <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
              This option gives you flexibility to organize games that fit your
              wishes.
            </p>
            
            <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
              Once a slot is confirmed, payment can be made through the
              app or by bank transfer, with an invoice available if desired.
            </p>
            
            {/* CTA Button */}
            <div className="mt-6 text-left">
              <a 
                href="#" 
                className="inline-block bg-primary-orange px-4 py-2 rounded-md hover:bg-warning-dark transition-colors duration-300"
                style={{ color: 'var(--color-primary-white)', fontSize: 'var(--font-size-medium)', fontWeight: 'var(--font-weight-medium)' }}
              >
                Request field rental
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
