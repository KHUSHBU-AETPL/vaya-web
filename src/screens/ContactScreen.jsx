import React from 'react';
import contactImage from '../assets/images/untitled-75 (1).svg'; // Reusing the image, you can replace with a more appropriate one

const ContactScreen = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-primary-white">
      <div className="max-w-3xl mx-auto">
        {/* Content Container */}
        <div className="flex flex-col items-center">
          {/* Header Section */}
          <h1 className="mb-6 text-center w-full">
            <span style={{ 
              fontSize: 'clamp(32px, 5vw, 40px)', 
              lineHeight: '100%', 
              fontWeight: 'var(--font-weight-bold)', 
              color: 'var(--color-primary-orange)', 
              letterSpacing: '0px' 
            }}>Contact Us</span>
          </h1>
          
          <div className="space-y-6 w-full">
            <div className="text-center">
              <h2 className="mb-2" style={{ 
                fontSize: 'clamp(18px, 4vw, var(--font-size-large))', 
                lineHeight: '100%', 
                fontWeight: 'var(--font-weight-bold)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
                Birgit Ottilie Jeanine Hermans
              </h2>
              <p className="mb-1" style={{ 
                fontSize: 'var(--font-size-medium)', 
                lineHeight: 'var(--line-height-medium)', 
                fontWeight: 'var(--font-weight-medium)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
                NIE: Y5696892J
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="mb-2" style={{ 
                fontSize: '18px', 
                lineHeight: '24px', 
                fontWeight: 'var(--font-weight-semibold)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
                Address
              </h3>
              <p className="mb-1" style={{ 
                fontSize: 'var(--font-size-medium)', 
                lineHeight: 'var(--line-height-medium)', 
                fontWeight: 'var(--font-weight-medium)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
                Carrer Hartzenbusch 8-10, 1-2
              </p>
              <p className="mb-1" style={{ 
                fontSize: 'var(--font-size-medium)', 
                lineHeight: 'var(--line-height-medium)', 
                fontWeight: 'var(--font-weight-medium)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
                08014 Barcelona
              </p>
              <p className="mb-1" style={{ 
                fontSize: 'var(--font-size-medium)', 
                lineHeight: 'var(--line-height-medium)', 
                fontWeight: 'var(--font-weight-medium)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
                Spain
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="mb-2" style={{ 
                fontSize: '18px', 
                lineHeight: '24px', 
                fontWeight: 'var(--font-weight-semibold)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
                Contact Details
              </h3>
              <p className="mb-1" style={{ 
                fontSize: 'var(--font-size-medium)', 
                lineHeight: 'var(--line-height-medium)', 
                fontWeight: 'var(--font-weight-medium)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
                Email: <a href="mailto:brit@vaya-sports.com" className="text-primary-orange hover:underline transition-all duration-200">brit@vaya-sports.com</a>
              </p>
              <p className="mb-1" style={{ 
                fontSize: 'var(--font-size-medium)', 
                lineHeight: 'var(--line-height-medium)', 
                fontWeight: 'var(--font-weight-medium)', 
                color: 'var(--color-primary-black)', 
                letterSpacing: '0px' 
              }}>
                Tel: <span className="italic">+34 664 251 01</span>
              </p>
            </div>

            
            {/* CTA Button */}
            <div className="mt-6 text-center">
              <a 
                href="mailto:brit@vaya-sports.com" 
                className="inline-block bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-warning-dark transition-colors duration-300"
              >
                <span style={{ 
                  fontSize: 'var(--font-size-medium)', 
                  lineHeight: 'var(--line-height-medium)', 
                  fontWeight: 'var(--font-weight-semibold)' 
                }}>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
