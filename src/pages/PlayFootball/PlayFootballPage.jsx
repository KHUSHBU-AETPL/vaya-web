import React from 'react';
import { PlayFootballSection } from '../../components/sections';

// Import assets
import footballPlayersImage from '../../assets/images/Playfootball.svg';
import iconSoccer from '../../assets/icons/football/Soccer.svg';
import iconTrophy from '../../assets/icons/football/Trophy.svg';
import iconGroup from '../../assets/icons/football/Group.svg';
import iconField from '../../assets/icons/football/Field.svg';
import iconMedal from '../../assets/icons/football/Medal.svg';

/**
 * PlayFootball page component that uses the reusable PlayFootballSection component
 */
const PlayFootballPage = () => {
  // Define the options for the PlayFootball section
  const footballOptions = [
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
    <>
      {/* Use the reusable PlayFootballSection component */}
      <PlayFootballSection 
        title="Play Football"
        titleHighlight="With Vaya"
        description="Football has never been this easy and fun! Whether you're looking to join a quick pick-up game or dive into a league, Vaya makes it simple to get on the pitch and enjoy the game your way."
        options={footballOptions}
        image={footballPlayersImage}
        imageAlt="Football Players"
        backgroundColor="bg-primary-beige"
        learnMoreLink="/learn-more"
        learnMoreText="Learn more"
      />
      
      {/* Additional sections could be added here */}
    </>
  );
};

export default PlayFootballPage;
