import React from 'react';
import pibeLeaguesImage from '../assets/images/untitled-75 (1).svg';

const PibeLeaguesTournamentsScreen = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-primary-beige">
      <div className="max-w-6xl mx-auto">
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            {/* Header Section */}
            <h1 className="text-3xl font-bold mb-6 text-left">
              <span className="text-primary-black">PIBE Leagues & Tournaments</span>
            </h1>
            <p className="text-lg text-left text-primary-black mb-4">
              We bring together football lovers of all levels in a structured, 
              7-a-side format that's both competitive and community-
              driven. Whether you're looking to test your team's strength or 
              simply enjoy the thrill of organized competition, there's a 
              place for you here.
            </p>
            
            <p className="text-base text-left text-primary-black mb-4">
              Our leagues and tournaments are open to players of all skill 
              levels, and focus on creating a friendly yet competitive 
              atmosphere where fair play and quality organization come 
              first. You can sign up with your team or join solo — we'll help 
              you find the right squad or spot.
            </p>
            
            <p className="text-base text-left text-primary-black mb-4">
              All games are managed by the PIBE team, ensuring a 
              professional matchday experience, smooth logistics, and a 
              great vibe on and off the pitch. Expect clear schedules, and a 
              strong sense of community from kickoff to final whistle.
            </p>
            
            <p className="text-base text-left text-primary-black mb-4">
              And for those who love to keep track of their progress, you 
              can follow live statistics through the app, including league 
              standings, top goalscorers, MVPs, and more.
            </p>
            
            <p className="text-base text-left text-primary-black mb-4">
              Simply register through the app, select the competition that 
              suits you, and get ready to play.
            </p>
            
            {/* Additional Information Section */}
            <div className="mt-6">
              <p className="text-sm text-left text-primary-black mb-1">
                For more information, see the League Rules and FAQ;
              </p>
              <p className="text-sm text-left text-primary-black mb-1">
                General League Rules and Conditions
              </p>
              <p className="text-sm text-left text-primary-black mb-1">
                League FAQ
              </p>
              <p className="text-sm text-left text-primary-black mb-6">
                julianandres4343@gmail.com, I added 2 links here so people 
                can find all info on your League Section
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="text-left">
              <a 
                href="#" 
                className="inline-block bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-warning-dark transition-colors duration-300"
              >
                <span className="text-semibold text-sm">Join a league!</span>
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
