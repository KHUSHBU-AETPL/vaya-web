import React, { useState, useRef, useEffect, useCallback } from 'react';
import logo from '../assets/images/logo_vaya.png';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronDown, FiX, FiMenu, FiGlobe } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePlayFootballOpen, setMobilePlayFootballOpen] = useState(false);
  const [mobilePoliciesOpen, setMobilePoliciesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN'); // Default to EN as per design
  const [playFootballOpen, setPlayFootballOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);

  // Language options
  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'CA', name: 'Català' }
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleLangDropdown = () => {
    setLangOpen(!langOpen);
    if (playFootballOpen) setPlayFootballOpen(false);
    if (policiesOpen) setPoliciesOpen(false);
  };
  const togglePlayFootballDropdown = () => {
    setPlayFootballOpen(!playFootballOpen);
    if (langOpen) setLangOpen(false);
    if (policiesOpen) setPoliciesOpen(false);
  };
  const togglePoliciesDropdown = () => {
    setPoliciesOpen(!policiesOpen);
    if (langOpen) setLangOpen(false);
    if (playFootballOpen) setPlayFootballOpen(false);
  };

  const playFootballRef = useRef(null);
  const policiesRef = useRef(null);
  const langRef = useRef(null);

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
      if (policiesRef.current && !policiesRef.current.contains(event.target)) {
        setPoliciesOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [playFootballRef, policiesRef]);
  
  // Close mobile menu on scroll
  const handleScroll = useCallback(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setMobilePlayFootballOpen(false);
      setMobilePoliciesOpen(false);
    }
  }, [mobileMenuOpen]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

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
              <span className={`text-medium-weight text-medium ${isActive('/about') ? 'text-primary-orange' : ''}`}>About</span>
            </Link>
            <div className="relative" ref={playFootballRef}>
              <button
                onClick={togglePlayFootballDropdown}
                className={`flex items-center gap-1 transition-colors duration-200 focus:outline-none ${isActive('/play-football') ? 'text-primary-orange' : 'text-primary-black hover:text-primary-orange'}`}
              >
                <span className={`text-medium-weight text-medium ${isActive('/play-football') ? 'text-primary-orange' : ''}`}>Play Football</span>
                <FiChevronDown className={`ml-1 h-4 w-4 transition-transform ${playFootballOpen ? 'rotate-180' : ''}`} />
              </button>
              {playFootballOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link 
                      to="/play-football/play-football"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      Play Football with Vaya
                    </Link>
                    <Link 
                      to="/play-football/pickup-games"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      Pick-up Games
                    </Link>
                    <Link 
                      to="/play-football/leagues-tournaments"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      Pibe Leagues and Tournaments
                    </Link>
                    <Link 
                      to="/play-football/private-sessions"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      Private Sessions
                    </Link>
                    <Link 
                      to="/play-football/field-rentals"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      Field Rentals
                    </Link>
                    <Link 
                      to="/play-football/corporate-football"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      Customized Corporate Football
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/faq" className={`transition-colors duration-200 ${isActive('/faq') ? 'text-primary-orange font-semibold' : 'text-primary-black hover:text-primary-orange'}`}>
              <span className={`text-medium-weight text-medium ${isActive('/faq') ? 'text-primary-orange' : ''}`}>FAQ</span>
            </Link>
            {/* Policies Dropdown */}
            <div className="relative" ref={policiesRef}>
              <button
                onClick={togglePoliciesDropdown}
                onBlur={() => handleBlur(setPoliciesOpen)}
                className="flex items-center gap-1 text-primary-black hover:text-primary-orange transition-colors duration-200 focus:outline-none"
              >
                <span className={`text-medium-weight text-medium ${isActive('/booking-policy') || isActive('/refund-policy') ? 'text-primary-orange' : ''}`}>Policies</span>
                <FiChevronDown className={`ml-1 h-4 w-4 transition-transform ${policiesOpen ? 'rotate-180' : ''}`} />
              </button>
              {policiesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link 
                      to="/booking-policy"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                      onClick={() => setPoliciesOpen(false)}
                    >
                      Booking Policy
                    </Link>
                    <Link 
                      to="/refund-policy"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-orange"
                      onClick={() => setPoliciesOpen(false)}
                    >
                      Refund and Cancellation Policy
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact" className={`transition-colors duration-200 ${isActive('/contact') ? 'text-primary-orange font-semibold' : 'text-primary-black hover:text-primary-orange'}`}>
              <span className={`text-medium-weight text-medium ${isActive('/contact') ? 'text-primary-orange' : ''}`}>Contact</span>
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
                <span className="text-medium-weight text-medium">Languages</span>
                <FiChevronDown className={`ml-1 h-4 w-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setSelectedLang(lang.code); setLangOpen(false); }}
                        className={`block w-full text-left px-4 py-2 text-sm ${selectedLang === lang.code ? 'text-primary-orange font-medium' : 'text-gray-700'} hover:bg-gray-100 hover:text-primary-orange`}
                        role="menuitem"
                      >
                        {lang.name} ({lang.code})
                      </button>
                    ))}
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
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-beige shadow-lg rounded-b-3xl">
          {/* Mobile Nav Links - Left Aligned */}
          <Link to="/about" className={`block px-3 py-2 rounded-md transition-colors duration-200 text-left ${isActive('/about') ? 'text-primary-orange' : 'text-primary-black hover:text-primary-orange'}`}>
            <span className="text-semibold text-medium">About</span>
          </Link>
          
          {/* Play Football Dropdown - Left Aligned */}
          <div className="px-3 py-2">
            <button 
              onClick={() => setMobilePlayFootballOpen(prev => !prev)}
              className={`flex items-center w-full transition-colors duration-200 text-left ${isActive('/play-football') ? 'text-primary-orange' : 'text-primary-black hover:text-primary-orange'}`}
            >
              <span className="text-semibold text-medium mr-2">Play Football</span>
              <FiChevronDown className={`h-4 w-4 transition-transform ${mobilePlayFootballOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Content - Left Aligned with Indentation */}
            <div className={`pl-4 mt-2 space-y-2 ${mobilePlayFootballOpen ? 'block' : 'hidden'}`}>
              <Link 
                to="/play-football/play-football"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium">Play Football with Vaya</span>
              </Link>
              <Link 
                to="/play-football/pickup-games"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium">Pick-up Games</span>
              </Link>
              <Link 
                to="/play-football/leagues-tournaments"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium">Pibe Leagues and Tournaments</span>
              </Link>
              <Link 
                to="/play-football/private-sessions"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium">Private Sessions</span>
              </Link>
              <Link 
                to="/play-football/field-rentals"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium">Field Rentals</span>
              </Link>
              <Link 
                to="/play-football/corporate-football"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium">Customized Corporate Football</span>
              </Link>
            </div>
          </div>
          
          {/* FAQ Link - Left Aligned */}
          <Link to="/faq" className={`block px-3 py-2 rounded-md transition-colors duration-200 text-left ${isActive('/faq') ? 'text-primary-orange' : 'text-primary-black hover:text-primary-orange'}`}>
            <span className="text-semibold text-medium">FAQ</span>
          </Link>
          
          {/* Policies Dropdown - Left Aligned */}
          <div className="px-3 py-2">
            <button
              onClick={() => setMobilePoliciesOpen(!mobilePoliciesOpen)}
              className={`flex items-center text-left w-full ${isActive('/booking-policy') || isActive('/refund-policy') ? 'text-primary-orange' : 'text-primary-black hover:text-primary-orange'} transition-colors duration-200 focus:outline-none`}
            >
              <span className="text-semibold text-medium mr-2">Policies</span>
              <FiChevronDown className={`h-4 w-4 transition-transform ${mobilePoliciesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobilePoliciesOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  to="/booking-policy"
                  className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-medium hover:text-primary-orange">Booking Policy</span>
                </Link>
                <Link 
                  to="/refund-policy"
                  className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-medium hover:text-primary-orange">Refund Policy</span>
                </Link>
              </div>
            )}
          </div>
          
          {/* Contact Link - Left Aligned */}
          <Link to="/contact" className={`block px-3 py-2 rounded-md transition-colors duration-200 text-left ${isActive('/contact') ? 'text-primary-orange' : 'text-primary-black hover:text-primary-orange'}`}>
            <span className="text-semibold text-medium">Contact</span>
          </Link>
          
          {/* Language Selector - Left Aligned */}
          <div className="px-3 py-2">
            <button
              onClick={toggleLangDropdown}
              className="flex items-center text-primary-black hover:text-primary-orange transition-colors duration-200 focus:outline-none text-left"
            >
              <span className="text-medium-weight text-medium mr-2">Languages</span>
              <FiChevronDown className={`h-4 w-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="pl-4 mt-2 space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setSelectedLang(lang.code); setLangOpen(false); }}
                    className={`block w-full text-left py-1 text-sm ${selectedLang === lang.code ? 'text-primary-orange font-medium' : 'text-primary-black'} hover:text-primary-orange`}
                  >
                    {lang.name} ({lang.code})
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Get The App Button - Left Aligned but Full Width */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.vaya.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block mt-4 text-left bg-primary-orange text-primary-white px-4 py-3 rounded-lg hover:bg-warning-dark transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            <span className="text-semibold text-medium text-primary-white">Get The App</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
