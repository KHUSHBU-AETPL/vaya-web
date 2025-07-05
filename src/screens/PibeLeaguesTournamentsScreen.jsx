import React from 'react';
import pibeLeaguesImage from '../assets/images/pibeleagues.svg';
import arrowIcon from '../assets/icons/ui/Icon.svg';

const PibeLeaguesTournamentsScreen = () => {
  return (
    <div className="w-full py-16 bg-primary-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[100px]">
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">
          {/* Left Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            {/* Header Section */}
            <h1 className="mb-6 text-left" style={{ fontSize: 'var(--font-size-xlarge)', lineHeight: '100%', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-primary-black)' }}>
              PIBE Leagues & Tournaments
            </h1>
            <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
              We bring together football lovers of all levels in a structured, 
              <span className="whitespace-nowrap"> 7-a-side</span> format that's both competitive and community-driven.
              Whether you're looking to test your team's strength or simply enjoy the thrill of organized competition, 
              there's a place for you here.
            </p>
            
            <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
              Our leagues and tournaments are open to players of all skill levels, and focus on creating a friendly 
              yet competitive atmosphere where fair play and quality organization come first. You can sign up with 
              your team or join solo — we'll help you find the right squad or spot.
            </p>
            
            <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
              All games are managed by the PIBE team, ensuring a professional matchday experience, smooth logistics, 
              and a great vibe on and off the pitch. Expect clear schedules, and a strong sense of community from 
              kickoff to final whistle.
            </p>
            
            <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
              And for those who love to keep track of their progress, you can follow live statistics through the app, 
              including league standings, top goalscorers, MVPs, and more.
            </p>
            
            <p className="mb-4 text-justify" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
              Simply register through the app, select the competition that suits you, and get ready to play.
            </p>
            
            {/* Footer style information section */}
            <div className="mt-8">
              <p className="mb-4 text-left" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
                For more information, see the League Rules and FAQ:
              </p>
              
              <div className="flex flex-col items-start space-y-3">
                <a href="#" className="flex items-center hover:underline" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-orange)', fontWeight: 'var(--font-weight-medium)' }}>
                  General League Rules and Conditions
                  <img src={arrowIcon} alt="arrow" className="ml-2 w-4 h-4" />
                </a>
                
                <a href="#" className="flex items-center hover:underline" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-orange)', fontWeight: 'var(--font-weight-medium)' }}>
                  League FAQ
                  <img src={arrowIcon} alt="arrow" className="ml-2 w-4 h-4" />
                </a>
              </div>
              
              <div className="mt-4 text-left">
                <p className="flex items-start" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)', fontWeight: 'var(--font-weight-medium)' }}>
                  Contact: 
                  <a href="mailto:holapibe.barcelona@gmail.com" className="flex items-center ml-1 hover:underline" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-orange)', fontWeight: 'var(--font-weight-medium)' }}>
                    holapibe.barcelona@gmail.com
                    <img src={arrowIcon} alt="arrow" className="ml-2 w-4 h-4" />
                  </a>
                </p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="text-left mt-6">
              <a 
                href="#" 
                className="inline-block bg-primary-orange px-6 py-3 rounded-md hover:bg-warning-dark transition-colors duration-300"
                style={{ color: 'var(--color-primary-white)', fontSize: 'var(--font-size-medium)', fontWeight: 'var(--font-weight-semibold)' }}
              >
                Join a league!
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <img 
              src={pibeLeaguesImage} 
              alt="PIBE Leagues and Tournaments" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PibeLeaguesTournamentsScreen;
