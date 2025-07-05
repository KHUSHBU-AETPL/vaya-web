import React from 'react';
import pickupGamesImage from '../assets/images/pickup.svg';

const PickupGamesSection = () => {
  return (
    <>
      <div className="w-full py-16 bg-primary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[100px]">
          {/* Two-column layout for larger screens */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24 mb-12">
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
              <h2 className="mb-4 text-left" style={{ fontSize: 'var(--font-size-xlarge)', lineHeight: 'var(--line-height-xlarge)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-primary-black)' }}>Pick up games</h2>
              
              <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
                Pick-up games are friendly, one-off football matches open to players of all skill levels. You're welcome to join on your own, with friends, or even with your entire team — whatever suits you best. We offer different types of games, such as 5-a-side and 7-a-side, as well as options like women's, mixed-gender, and advanced matches.
              </p>
              
              <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
                Simply register through the app, select your preferred game, and arrive ready to play. Each match is managed by a Vaya organizer, who may adjust teams to help ensure a fair and enjoyable experience for everyone.
              </p>
              
              <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
                The games are casual and flexible, making it easy to fit football into your schedule. All players are welcome, regardless of experience.
              </p>
              
              {/* CTA Button */}
              <div className="mt-4 text-left">
                <a 
                  href="#" 
                  className="bg-primary-orange px-4 py-2 rounded-lg inline-block"
                  style={{ color: 'var(--color-primary-white)', fontSize: 'var(--font-size-medium)', fontWeight: 'var(--font-weight-medium)' }}
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
