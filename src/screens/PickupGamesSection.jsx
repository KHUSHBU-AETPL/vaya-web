import React from 'react';
import pickupGamesImage from '../assets/images/Image.svg';

const PickupGamesSection = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-primary-beige">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout for larger screens */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-12">
            {/* Left column - Image */}
            <div className="lg:w-1/2 w-full">
              <img 
                src={pickupGamesImage} 
                alt="Players in Vaya jerseys" 
                className="rounded-lg w-full h-auto object-cover" 
              />
            </div>
            
            {/* Right column - Text content */}
            <div className="lg:w-1/2 w-full">
              <h2 className="text-2xl font-bold text-primary-black mb-4">Pick up games</h2>
              
              <p className="text-base text-primary-black mb-4">
                Pick-up games are friendly, one-off football matches open to players of all skill levels. You're welcome to join on your own, with friends, or even with your entire team — whatever suits you best. We offer different types of games, such as 5-a-side and 7-a-side, as well as options like women's, mixed-gender, and advanced matches.
              </p>
              
              <p className="text-base text-primary-black mb-4">
                Simply register through the app, select your preferred game, and arrive ready to play. Each match is managed by a Vaya organizer, who may adjust teams to help ensure a fair and enjoyable experience for everyone.
              </p>
              
              <p className="text-base text-primary-black mb-4">
                The games are casual and flexible, making it easy to fit football into your schedule. All players are welcome, regardless of experience.
              </p>
              
              {/* CTA Button */}
              <div className="mt-4">
                <a 
                  href="#" 
                  className="bg-primary-orange text-primary-white px-4 py-2 rounded-lg inline-block"
                >
                  Join a game!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickupGamesSection;
