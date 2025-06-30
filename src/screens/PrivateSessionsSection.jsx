import React from 'react';
import privateSessionsImage from '../assets/images/Image.svg';

const PrivateSessionsSection = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-primary-white">
        <div className="max-w-6xl mx-auto">
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
              <h2 className="text-2xl font-bold text-primary-black mb-6">Private sessions</h2>
              
              <p className="text-base text-primary-black mb-3">
                Private sessions are exclusive football matches you can create for your group.
              </p>
              
              <p className="text-base text-primary-black mb-3">
                We can set up a private game for you in the app that's only visible and accessible to people with a specific link.
              </p>
              
              <p className="text-base text-primary-black mb-6">
                This way, you control who joins, making it perfect for friends, teams, or special events.
              </p>
              
              {/* CTA Button */}
              <div>
                <a 
                  href="#" 
                  className="bg-primary-orange text-primary-white px-4 py-2 rounded-lg inline-block"
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
