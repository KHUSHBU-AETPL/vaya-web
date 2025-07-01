import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/images/logo_vaya.png';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronDown, FiX, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN'); // Default to EN as per design
  const [playFootballOpen, setPlayFootballOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleLangDropdown = () => setLangOpen(!langOpen);
  const togglePlayFootballDropdown = () => setPlayFootballOpen(!playFootballOpen);

  const playFootballRef = useRef(null);

  // Function to close dropdowns when clicking outside
  const handleBlur = (setter) => {
    setTimeout(() => setter(false), 100); // Small delay to allow click event to register
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (playFootballRef.current && !playFootballRef.current.contains(event.target)) {
        setPlayFootballOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [playFootballRef]);

  return (
    <nav className="sticky top-0 z-50 bg-primary-beige shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8"> {/* Changed to w-full for full width, kept padding */} 
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center"> {/* Added items-center for vertical alignment */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Vaya Logo" className="h-8 w-auto" /> {/* Adjusted logo size based on design */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-8"> {/* No ml-auto here, will be centered by justify-between */}
            <Link to="/about" className={`transition-colors duration-200 ${isActive('/about') ? 'text-primary-orange font-semibold' : 'text-primary-black hover:text-primary-orange'}`}>
              <span className="text-medium-weight text-medium">About</span>
            </Link>
            <div className="relative" ref={playFootballRef}>
              <button
                onClick={togglePlayFootballDropdown}
                className="flex items-center gap-1 text-primary-black hover:text-primary-orange transition-colors duration-200 focus:outline-none"
              >
                <span className="text-medium-weight text-medium">Play Football</span>
                <FiChevronDown className={`ml-1 h-4 w-4 transition-transform ${playFootballOpen ? 'rotate-180' : ''}`} />
              </button>
              {playFootballOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link 
                      to="/play-football/play-football"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      Play Football with Vaya
                    </Link>
                    <Link 
                      to="/play-football/pickup-games"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      Pick-up Games
                    </Link>
                    <Link 
                      to="/play-football/leagues-tournaments"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      Pibe Leagues and Tournaments
                    </Link>
                    <Link 
                      to="/play-football/private-sessions"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      Private Sessions
                    </Link>
                    <Link 
                      to="/play-football/field-rentals"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      Field Rentals
                    </Link>
                    <Link 
                      to="/play-football/corporate-football"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      Customized Corporate Football
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/faq" className={`transition-colors duration-200 ${isActive('/faq') ? 'text-primary-orange font-semibold' : 'text-primary-black hover:text-primary-orange'}`}>
              <span className="text-medium-weight text-medium">FAQ</span>
            </Link>
          </div>

          {/* Desktop Language and Button - Right Aligned */}
          <div className="hidden md:flex items-center space-x-8"> {/* Will be pushed to right by justify-between */}
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={toggleLangDropdown}
                onBlur={() => handleBlur(setLangOpen)}
                className="flex items-center gap-1 text-primary-black hover:text-primary-orange transition-colors duration-200 focus:outline-none"
              >
                <span className="text-medium-weight text-medium">{selectedLang}</span>
                <FiChevronDown className={`ml-1 h-4 w-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={() => { setSelectedLang('EN'); setLangOpen(false); }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      EN
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Get The App Button */}
            <a href="https://play.google.com/store/apps/details?id=com.vaya.app" target="_blank" rel="noopener noreferrer" className="bg-primary-orange text-primary-white px-6 py-2 rounded-lg hover:bg-warning-dark transition-colors duration-300 shadow-sm hover:shadow-md">
              <span className="text-semibold text-medium text-primary-white">Get The App</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-black hover:text-primary-orange focus:outline-none transition-colors duration-200"
            >
              <FiMenu className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'block'}`} />
              <FiX className={`h-6 w-6 ${mobileMenuOpen ? 'block' : 'hidden'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}> {/* Removed navbar-custom as it's not needed with new design */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-beige shadow-lg rounded-b-3xl"> {/* Updated background and shadow */}
          <Link to="/about" className="block px-3 py-2 text-primary-black hover:text-primary-orange rounded-md transition-colors duration-200">
            <span className="text-semibold text-medium">About</span>
          </Link>
          <div className="px-3 py-2">
            <button 
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="flex items-center justify-between w-full text-primary-black hover:text-primary-orange transition-colors duration-200"
            >
              <span className="text-semibold text-medium">Play Football</span>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="pl-4 mt-2 space-y-2">
              <Link 
                to="/play-football/play-football"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium">Play Football with Vaya</span>
              </Link>
              <Link 
                to="/play-football/pickup-games"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium">Pick-up Games</span>
              </Link>
              <Link 
                to="/play-football/leagues-tournaments"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium">Pibe Leagues and Tournaments</span>
              </Link>
              <Link 
                to="/play-football/private-sessions"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium">Private Sessions</span>
              </Link>
              <Link 
                to="/play-football/field-rentals"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium">Field Rentals</span>
              </Link>
              <Link 
                to="/play-football/corporate-football"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium">Customized Corporate Football</span>
              </Link>
            </div>
          </div>
          <Link to="/faq" className="block px-3 py-2 text-primary-black hover:text-primary-orange rounded-md transition-colors duration-200">
            <span className="text-semibold text-medium">FAQ</span>
          </Link>
          <a href="https://play.google.com/store/apps/details?id=com.vaya.app" target="_blank" rel="noopener noreferrer" className="block mt-4 text-center bg-primary-orange text-primary-white px-4 py-3 rounded-lg hover:bg-warning-dark transition-colors duration-300 shadow-sm hover:shadow-md">
            <span className="text-semibold text-medium text-primary-white">Get The App</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
