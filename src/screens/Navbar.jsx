import React, { useState } from 'react';
import logo from '../assets/images/logo_vaya.png'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [leaguesOpen, setLeaguesOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLeagues = () => setLeaguesOpen(!leaguesOpen);
  const toggleEvents = () => setEventsOpen(!eventsOpen);
  const toggleLocations = () => setLocationsOpen(!locationsOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Close dropdowns when clicking outside
  const closeDropdowns = () => {
    setLeaguesOpen(false);
    setEventsOpen(false);
    setLocationsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-primary-orange via-primary-beige to-primary-black bg-opacity-90 backdrop-blur-md shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Vaya Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between space-x-8">
            {/* Leagues Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center gap-1 text-primary-black hover:text-primary-orange focus:outline-none transition-all duration-300 ease-in-out hover:scale-105 px-4 py-2 rounded-xl bg-white/40 "
                onClick={toggleLeagues}
                onBlur={() => setTimeout(closeDropdowns, 100)}
              >
                <span className="text-semibold text-medium">Leagues</span>
                <svg className={`ml-1 h-5 w-5 transition-transform ${leaguesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {leaguesOpen && (
                <div className="absolute left-0 mt-2 w-52 rounded-xl shadow-2xl bg-gradient-to-br bg-primary-white from-primary-beige via-primary-orange to-primary-black border border-gray-25 z-50 overflow-hidden animate-fade-in">
                  <div className="py-2" role="menu" aria-orientation="vertical">
                    <Link to="/leagues/football" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Football Leagues</span>
                    </Link>
                    <Link to="/leagues/cricket" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Cricket Leagues</span>
                    </Link>
                    <Link to="/leagues/basketball" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Basketball Leagues</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Events Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center gap-1 text-primary-black hover:text-primary-orange focus:outline-none transition-all duration-300 ease-in-out hover:scale-105 px-4 py-2 rounded-xl bg-white/40 "
                onClick={toggleEvents}
                onBlur={() => setTimeout(closeDropdowns, 100)}
              >
                <span className="text-semibold text-medium">Events</span>
                <svg className={`ml-1 h-5 w-5 transition-transform ${eventsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {eventsOpen && (
                <div className="absolute left-0 mt-2 w-52 rounded-xl shadow-2xl bg-gradient-to-br bg-primary-white from-primary-beige via-warning-light to-warning-dark border border-gray-25 z-50 overflow-hidden animate-fade-in">
                  <div className="py-2" role="menu" aria-orientation="vertical">
                    <Link to="/events/upcoming" className="block px-5 py-2 text-primary-black hover:bg-warning-dark hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Upcoming Events</span>
                    </Link>
                    <Link to="/events/past" className="block px-5 py-2 text-primary-black hover:bg-warning-dark hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Past Events</span>
                    </Link>
                    <Link to="/events/register" className="block px-5 py-2 text-primary-black hover:bg-warning-dark hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Register for Event</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-primary-black hover:text-primary-orange focus:outline-none transition-colors duration-300 ease-in-out hover:scale-105"
                onClick={toggleLocations}
                onBlur={() => setTimeout(closeDropdowns, 100)}
              >
                <span className="text-semibold text-medium">Locations</span>
                <svg className={`ml-1 h-5 w-5 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Locations Dropdown Menu */}
              {locationsOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-primary-white border border-gray-25 z-50 overflow-hidden">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link to="/locations/city1" className="block px-4 py-2 text-gray-100 hover:bg-gradient-to-r hover:from-primary-orange hover:to-primary-beige hover:text-primary-black transition-all duration-300">
                      <span className="text-medium-weight text-small">City 1</span>
                    </Link>
                    <Link to="/locations/city2" className="block px-4 py-2 text-gray-100 hover:bg-gradient-to-r hover:from-primary-orange hover:to-primary-beige hover:text-primary-black transition-all duration-300">
                      <span className="text-medium-weight text-small">City 2</span>
                    </Link>
                    <Link to="/locations/city3" className="block px-4 py-2 text-gray-100 hover:bg-gradient-to-r hover:from-primary-orange hover:to-primary-beige hover:text-primary-black transition-all duration-300">
                      <span className="text-medium-weight text-small">City 3</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link to="/about" className="text-primary-black hover:text-primary-orange transition-colors duration-200 ease-in-out">
              <span className="text-semibold text-medium">About Us</span>
            </Link>

            {/* FAQ */}
            <Link to="/faq" className="text-primary-black hover:text-primary-orange transition-colors duration-200 ease-in-out">
              <span className="text-semibold text-medium">FAQ</span>
            </Link>


            {/* Play Now Button */}
            <Link to="/play" className="bg-primary-orange text-primary-white px-6 py-2 rounded-lg hover:bg-warning-dark transition-colors duration-300 shadow-sm hover:shadow-md">
              <span className="text-semibold text-medium text-primary-white">Play Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-black hover:text-primary-orange focus:outline-none transition-colors duration-200"
            >
              <svg 
                className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'block'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`h-6 w-6 ${mobileMenuOpen ? 'block' : 'hidden'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 navbar-custom shadow-lg rounded-b-3xl">
            {/* Mobile Leagues Dropdown */}
            <div className="relative">
              <button 
                className="w-full flex justify-between text-primary-black hover:text-primary-orange px-3 py-2 rounded-xl bg-white/30 backdrop-blur-sm shadow-sm transition-all duration-200"
                onClick={toggleLeagues}
              >
                <span className="text-semibold text-medium">Leagues</span>
                <svg className={`ml-1 h-5 w-5 transition-transform ${leaguesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {leaguesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/leagues/football" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                    <span className="text-medium-weight text-small">Football Leagues</span>
                  </Link>
                  <Link to="/leagues/cricket" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                    <span className="text-medium-weight text-small">Cricket Leagues</span>
                  </Link>
                  <Link to="/leagues/basketball" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                    <span className="text-medium-weight text-small">Basketball Leagues</span>
                  </Link>
                </div>
              )}
            </div>
            {/* Mobile Events Dropdown */}
            <div className="relative">
              <button 
                className="w-full flex items-center justify-between text-primary-black hover:text-warning-dark px-3 py-2 rounded-xl bg-white/30 backdrop-blur-sm shadow-sm transition-all duration-200"
                onClick={toggleEvents}
              >
                <span className="text-semibold text-medium">Events</span>
                <svg className={`ml-1 h-5 w-5 transition-transform ${eventsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {eventsOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link to="/events/upcoming" className="block px-3 py-2 text-primary-black hover:bg-warning-dark hover:text-primary-white rounded-md transition-colors duration-200">
                    <span className="text-medium-weight text-small">Upcoming Events</span>
                  </Link>
                  <Link to="/events/past" className="block px-3 py-2 text-primary-black hover:bg-warning-dark hover:text-primary-white rounded-md transition-colors duration-200">
                    <span className="text-medium-weight text-small">Past Events</span>
                  </Link>
                  <Link to="/events/register" className="block px-3 py-2 text-primary-black hover:bg-warning-dark hover:text-primary-white rounded-md transition-colors duration-200">
                    <span className="text-medium-weight text-small">Register for Event</span>
                  </Link>
                </div>
              )}
            </div>

          {/* Mobile Locations Dropdown */}
          <div className="relative">
            <button 
              className="w-full flex items-center justify-between text-primary-black hover:text-primary-orange px-3 py-2 rounded-md transition-colors duration-200"
              onClick={toggleLocations}
            >
              <span className="text-semibold text-medium">Locations</span>
              <svg className={`ml-1 h-5 w-5 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mobile Locations Dropdown Items */}
            {locationsOpen && (
              <div className="pl-4 space-y-1 mt-1">
                <Link to="/locations/city1" className="block px-3 py-2 text-gray-100 hover:bg-primary-beige hover:text-primary-orange rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">City 1</span>
                </Link>
                <Link to="/locations/city2" className="block px-3 py-2 text-gray-100 hover:bg-primary-beige hover:text-primary-orange rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">City 2</span>
                </Link>
                <Link to="/locations/city3" className="block px-3 py-2 text-gray-100 hover:bg-primary-beige hover:text-primary-orange rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">City 3</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile About Us */}
          <Link to="/about" className="block px-3 py-2 text-primary-black hover:text-primary-orange rounded-md transition-colors duration-200">
            <span className="text-semibold text-medium">About Us</span>
          </Link>

          {/* Mobile FAQ */}
          <Link to="/faq" className="block px-3 py-2 text-primary-black hover:text-primary-orange rounded-md transition-colors duration-200">
            <span className="text-semibold text-medium">FAQ</span>
          </Link>
          
          {/* Mobile Admin */}
          <Link to="/admin" className="block px-3 py-2 text-primary-black hover:text-primary-orange rounded-md transition-colors duration-200">
            <span className="text-semibold text-medium">Admin</span>
          </Link>

          {/* Mobile Play Now Button */}
          <Link to="/play" className="block mt-4 text-center bg-primary-orange text-primary-white px-4 py-3 rounded-lg hover:bg-warning-dark transition-colors duration-300 shadow-sm hover:shadow-md">
            <span className="text-semibold text-medium text-primary-white">Play Now</span>
          </Link>
        </div>
      </div>
    </nav>
  );    
};

export default Navbar;
