import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainSection from '../../src/screens/MainSection';

// Mock the react-router import used in MainSection
vi.mock('react-router', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

describe('MainSection Component', () => {
  it('renders the main heading correctly', () => {
    render(
      <BrowserRouter>
        <MainSection />
      </BrowserRouter>
    );
    
    const heading = screen.getByText('FIND AND BOOK SPORTS PITCHES NEAR YOU');
    expect(heading).toBeInTheDocument();
  });

  it('renders the "How It Works" section', () => {
    render(
      <BrowserRouter>
        <MainSection />
      </BrowserRouter>
    );
    
    const howItWorksHeading = screen.getByText('HOW IT WORKS');
    expect(howItWorksHeading).toBeInTheDocument();
    
    const step1 = screen.getByText('FIND A PITCH NEAR YOU');
    const step2 = screen.getByText('BOOK YOUR SLOT');
    const step3 = screen.getByText('PLAY AND ENJOY');
    
    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
    expect(step3).toBeInTheDocument();
  });

  it('renders the "Join a Game" button', () => {
    render(
      <BrowserRouter>
        <MainSection />
      </BrowserRouter>
    );
    
    const joinButton = screen.getByText('JOIN A GAME');
    expect(joinButton).toBeInTheDocument();
  });
});
