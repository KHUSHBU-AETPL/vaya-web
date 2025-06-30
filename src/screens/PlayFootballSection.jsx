import React from 'react';
import footballPlayersImage from '../assets/images/Playfootball.svg'; // Using Playfootball.svg for the main image
import iconSoccer from '../assets/icons/football/Soccer.svg';
import iconTrophy from '../assets/icons/football/Trophy.svg';
import iconGroup from '../assets/icons/football/Group.svg';
import iconField from '../assets/icons/football/Field.svg';
import iconMedal from '../assets/icons/football/Medal.svg';

const PlayFootballSection = () => {
  const options = [
    {
      icon: iconSoccer,
      title: 'Pick-Up Games',
      description: 'Join casual matches anytime and meet new players.',
    },
    {
      icon: iconTrophy,
      title: 'Pibe Leagues and Tournaments',
      description: 'Play in short leagues for regular, competitive fun or take part in one-day tournaments designed for action and good vibes.',
    },
    {
      icon: iconGroup,
      title: 'Private Sessions',
      description: 'Organise exclusive matches with your group.',
    },
    {
      icon: iconField,
      title: 'Field Rentals',
      description: 'Rent top-quality pitches for your own events.',
    },
    {
      icon: iconMedal,
      title: 'Customized Corporate Football',
      description: 'Tailored games, tournaments, and leagues designed to bring teams together.',
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-primary-beige">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="inline-block bg-secondary-orange-25 text-primary-orange text-xs font-semibold px-3 py-1 rounded-full mb-4">PLAY FOOTBALL</span> {/* TODO(i18n): "PLAY FOOTBALL" */}
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-primary-black mb-6">
          Play Football With Vaya {/* TODO(i18n): Main heading */}
        </h1>
        <p className="text-lg text-primary-black max-w-xl mx-auto">
          Football has never been this easy and fun! Whether you're looking to join a quick pick-up game or dive into a league, Vaya makes it simple to get on the pitch and enjoy the game your way. {/* TODO(i18n): Description */}
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-16">
        {/* Left Content - Options List */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-bold text-primary-black mb-6 text-left">Explore Our Options:</h2> {/* TODO(i18n): "Explore Our Options:" */}
          <div>
            {options.map((option, index) => (
              <React.Fragment key={index}>
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-orange mr-4">
                    <img src={option.icon} alt={option.title} className="w-6 h-6 text-primary-white" /> {/* TODO(i18n): alt text for icons */}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-black text-left">{option.title}</h3> {/* TODO(i18n): option.title */}
                    <p className="text-base text-primary-black text-left leading-relaxed">{option.description}</p> {/* TODO(i18n): option.description */}
                  </div>
                </div>
                {index < options.length - 1 && (
                  <div className="border-b border-gray-200 my-4 mx-16"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2">
          <img src={footballPlayersImage} alt="Football Players" className="rounded-lg shadow-lg w-full h-auto object-cover" /> {/* TODO(i18n): "Football Players" for alt text */} {/* Using Playfootball.svg */}
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center mt-12">
        <a href="#" className="text-primary-orange font-semibold flex items-center justify-center gap-2"> {/* TODO(link): Add actual link */}
          Learn more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </div>
  );
};

export default PlayFootballSection;
