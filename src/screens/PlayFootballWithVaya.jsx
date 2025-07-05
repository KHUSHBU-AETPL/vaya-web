import React from 'react';
import footballImage from '../assets/images/untitled-59.svg';

const PlayFootballWithVaya = () => {
  return (
    <div className="w-full py-16 bg-primary-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[100px]">
        {/* Two-column layout for larger screens */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          {/* Left column - Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="mb-3 sm:mb-4">
              <span style={{ 
                display: 'block', 
                fontSize: 'clamp(36px, 8vw, 64px)', 
                lineHeight: 'clamp(46px, 9vw, 81px)', 
                fontWeight: 'var(--font-weight-bold)', 
                color: 'var(--color-primary-black)' 
              }}>Play Football </span>
              <span style={{ 
                display: 'block', 
                fontSize: 'clamp(36px, 8vw, 64px)', 
                lineHeight: 'clamp(46px, 9vw, 81px)', 
                fontWeight: 'var(--font-weight-bold)', 
                color: 'var(--color-primary-orange)' 
              }}>with Vaya</span>
            </h1>
            <p className="mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0" style={{ 
              fontSize: 'clamp(16px, 4vw, 18px)', 
              lineHeight: 'var(--line-height-medium)', 
              fontWeight: 'var(--font-weight-medium)', 
              color: 'var(--color-primary-black)', 
              letterSpacing: '0px' 
            }}>
              Football has never been this easy and fun! Whether you're
              looking to join a quick pick-up game or dive into a league, Vaya
              makes it simple to get on the pitch and enjoy the game your way.
            </p>
          </div>
          
          {/* Right column - Image */}
          <div className="lg:w-1/2 flex justify-center mt-8 sm:mt-12 lg:mt-8 lg:justify-end">
            <img 
              src={footballImage} 
              alt="Vaya players celebrating" 
              className="max-w-[85%] sm:max-w-xs md:max-w-sm lg:max-w-md w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayFootballWithVaya;
