import React from 'react';
import footballImage from '../assets/images/untitled-59.svg';

const PlayFootballWithVaya = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-primary-beige">
      <div className="max-w-7xl mx-auto">
        {/* Two-column layout for larger screens */}
        <div className="flex flex-col lg:flex-row items-center gap-36 xl:gap-48">
          {/* Left column - Text content */}
          <div className="lg:w-1/2 text-left w-full">
            <h1>
              <span className="text-4xl lg:text-5xl font-bold text-primary-orange block">Play Football</span>
              <span className="text-4xl lg:text-5xl font-bold text-primary-black block mt-2">With Vaya</span>
            </h1>
            <p className="text-base text-left text-primary-black mt-4">
              Football has never been this easy and fun! Whether you're
              looking to join a quick pick-up game or dive into a league, Vaya
              makes it simple to get on the pitch and enjoy the game your way.
            </p>
          </div>
          
          {/* Right column - Image */}
          <div className="lg:w-1/2 w-full">
            <img 
              src={footballImage} 
              alt="Vaya players celebrating" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayFootballWithVaya;
