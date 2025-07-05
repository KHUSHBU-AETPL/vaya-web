import React from 'react';
import corporateFootballImage from '../assets/images/cutomizedcorp.svg';

const CorporateFootballScreen = () => {
  return (
    <div className="w-full py-20 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[100px]">
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row-reverse gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:mt-28">
            {/* Header Section */}
            <h1 className="mb-6 text-left" style={{ fontSize: 'var(--font-size-xlarge)', lineHeight: 'var(--line-height-xlarge)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-primary-black)' }}>
              Customized Corporate Football
            </h1>
            
            <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
              Vaya makes it possible for companies, organizations, or co-
              working spaces to organize football activities for their staff.
            </p>
            
            <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
              We offer private sessions, field rentals, tournaments, and
              leagues tailored to your needs and schedule.
            </p>
            
            <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
              Whether you want a one-time event or a regular competition,
              we'll work with you to create the right football experience for
              your team.
            </p>
            
            <p className="mb-6 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
              Once a slot is confirmed, payment can be made through the
              app or by bank transfer, with an invoice provided if needed.
            </p>
            
            {/* CTA Button */}  
            <div className="mt-6 text-left">
              <a 
                href="#" 
                className="inline-block bg-primary-orange px-4 py-2 rounded-md hover:bg-warning-dark transition-colors duration-300"
                style={{ color: 'var(--color-primary-white)', fontSize: 'var(--font-size-medium)', fontWeight: 'var(--font-weight-medium)' }}
              >
                Request private session
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
