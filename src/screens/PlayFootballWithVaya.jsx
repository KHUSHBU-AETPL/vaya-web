import React from 'react';
import footballImage from '../assets/images/untitled-59.svg';

const PlayFootballWithVaya = () => {
  return (
    <>
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-primary-beige">
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout for larger screens */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column - Text content */}
          <div className="lg:w-1/2 w-full">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              <span className="text-primary-orange">Play Football</span><br />
              <span className="text-primary-black">With Vaya</span>
            </h1>
            <p className="text-lg text-primary-black mb-8">
              Football has never been this easy and fun! Whether you're looking to join a quick pick-up game or dive into a league, Vaya makes it simple to get on the pitch and enjoy the game your way.
            </p>
            
            {/* Features section */}
            <div className="space-y-6 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-orange mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-black">Easy to Join</h3>
                  <p className="text-base text-primary-black">Sign up in seconds and find games near you</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-orange mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-black">Community First</h3>
                  <p className="text-base text-primary-black">Meet new players and build your football network</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-orange mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-black">Flexible Options</h3>
                  <p className="text-base text-primary-black">Choose from casual games to competitive leagues</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-10">
              <a 
                href="https://play.google.com/store/apps/details?id=com.vaya.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary-orange text-primary-white px-8 py-3 rounded-lg hover:bg-warning-dark transition-colors duration-300 shadow-sm hover:shadow-md inline-flex items-center"
              >
                <span className="text-semibold text-medium">Get The App</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
            <img 
              src={footballImage} 
              alt="Football players celebrating" 
              className="rounded-lg shadow-lg w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default PlayFootballWithVaya;
