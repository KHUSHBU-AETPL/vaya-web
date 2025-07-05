import React from 'react';
import privateSessionsImage from '../assets/images/privatesessions.svg';

const PrivateSessionsSection = () => {
  return (
    <>
      <div className="w-full py-16 bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[100px]">
          {/* Two-column layout for larger screens */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            {/* Left column - Image */}
            <div className="lg:w-1/2 w-full">
              <img 
                src={privateSessionsImage} 
                alt="Players in Vaya jerseys" 
                className="w-full h-auto object-cover" 
              />
            </div>
            
            {/* Right column - Text content */}
            <div className="lg:w-1/2 w-full">
              <h2 className="mb-6 text-left" style={{ fontSize: 'var(--font-size-xlarge)', lineHeight: 'var(--line-height-xlarge)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-primary-black)' }}>Private sessions</h2>
              
              <p className="mb-3 text-left" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
                Private sessions are exclusive football matches you can create for your group.
              </p>
              
              <p className="mb-3 text-left" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
                We can set up a private game for you in the app that's only visible and accessible to people with a specific link.
              </p>
              
              <p className="mb-6 text-left" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
                This way, you control who joins, making it perfect for friends, teams, or special events.
              </p>
              
              {/* CTA Button */}
              <div className="text-left">
                <a 
                  href="#" 
                  className="bg-primary-orange px-4 py-2 rounded-lg inline-block"
                  style={{ color: 'var(--color-primary-white)', fontSize: 'var(--font-size-medium)', fontWeight: 'var(--font-weight-medium)' }}
                >
                  Request private session
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateSessionsSection;
