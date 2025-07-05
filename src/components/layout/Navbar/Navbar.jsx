import React, { useState, useRef, useEffect, useCallback } from 'react';
import logo from '../../../assets/images/logo_vaya.png';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronDown, FiX, FiMenu, FiGlobe } from 'react-icons/fi';
import Button from '../../common/Button';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePlayFootballOpen, setMobilePlayFootballOpen] = useState(false);

  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN'); // Default to EN as per design
  const [playFootballOpen, setPlayFootballOpen] = useState(false);


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
  };


  const playFootballRef = useRef(null);

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

    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [playFootballRef]);
  
  // Close mobile menu on scroll
  const handleScroll = useCallback(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setMobilePlayFootballOpen(false);

    }
  }, [mobileMenuOpen]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className="sticky top-0 z-50 bg-primary-beige">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-[100px]"> {/* Updated to match hero section with max-width and centered */}
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center"> {/* Added items-center for vertical alignment */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="Vaya Logo" style={{ width: '81px', height: '48px' }} /> {/* Updated logo dimensions to match design specs */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex items-center" style={{ width: '248px', height: '32px', gap: '19px', paddingTop: '8px' }}>
            <Link to="/about" className={`transition-colors duration-200 ${isActive('/about') ? 'text-primary-orange font-semibold' : 'text-primary-black hover:text-primary-orange'}`}>
              <span style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '500', letterSpacing: '0px', fontFamily: 'DM Sans', display: 'inline-block', height: '24px', whiteSpace: 'nowrap' }} className={`${isActive('/about') ? 'text-primary-orange' : 'text-primary-black'}`}>About</span>
            </Link>
            <div className="relative" ref={playFootballRef}>
              <button
                onClick={togglePlayFootballDropdown}
                className={`flex items-center gap-1 transition-colors duration-200 focus:outline-none ${isActive('/play-football') ? 'text-primary-orange' : 'text-primary-black hover:text-primary-orange'}`}
              >
                <span style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '500', letterSpacing: '0px', fontFamily: 'DM Sans', height: '24px', whiteSpace: 'nowrap' }} className={`${isActive('/play-football') ? 'text-primary-orange' : 'text-primary-black'}`}>Play Football</span>
                <FiChevronDown className={`ml-1 h-4 w-4 transition-transform ${playFootballOpen ? 'rotate-180' : ''}`} />
              </button>
              {playFootballOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link 
                      to="/play-football/play-football"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      <span className="text-gray-700 hover:text-primary-orange transition-colors duration-200">Play Football with Vaya</span>
                    </Link>
                    <Link 
                      to="/play-football/pickup-games"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      <span className="text-gray-700 hover:text-primary-orange transition-colors duration-200">Pick-up Games</span>
                    </Link>
                    <Link 
                      to="/play-football/leagues-tournaments"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      <span className="text-gray-700 hover:text-primary-orange transition-colors duration-200">Pibe Leagues and Tournaments</span>
                    </Link>
                    <Link 
                      to="/play-football/private-sessions"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      <span className="text-gray-700 hover:text-primary-orange transition-colors duration-200">Private Sessions</span>
                    </Link>
                    <Link 
                      to="/play-football/field-rentals"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      <span className="text-gray-700 hover:text-primary-orange transition-colors duration-200">Field Rentals</span>
                    </Link>
                    <Link 
                      to="/play-football/corporate-football"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setPlayFootballOpen(false)}
                    >
                      <span className="text-gray-700 hover:text-primary-orange transition-colors duration-200">Customized Corporate Football</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/faq" className={`transition-colors duration-200 ${isActive('/faq') ? 'text-primary-orange font-semibold' : 'text-primary-black hover:text-primary-orange'}`}>
              <span style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '500', letterSpacing: '0px', fontFamily: 'DM Sans', display: 'inline-block', height: '24px', whiteSpace: 'nowrap' }} className={`${isActive('/faq') ? 'text-primary-orange' : 'text-primary-black'}`}>FAQ</span>
            </Link>

            <Link to="/contact" className={`transition-colors duration-200 ${isActive('/contact') ? 'text-primary-orange font-semibold' : 'text-primary-black hover:text-primary-orange'}`}>
              <span style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '500', letterSpacing: '0px', fontFamily: 'DM Sans', display: 'inline-block', height: '24px', whiteSpace: 'nowrap' }} className={`${isActive('/contact') ? 'text-primary-orange' : 'text-primary-black'}`}>Contact</span>
            </Link>
          </div>

          {/* Desktop Language and Button - Right Aligned */}
          <div className="hidden md:flex items-center space-x-8" style={{ paddingTop: '8px' }}> {/* Will be pushed to right by justify-between */}
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
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200`}
                        role="menuitem"
                      >
                        <span className={`${selectedLang === lang.code ? 'text-primary-orange font-medium' : 'text-gray-700'} hover:text-primary-orange transition-colors duration-200`}>
                          {lang.name} ({lang.code})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Get The App Button */}
            <a href="https://play.google.com/store/apps/details?id=com.vaya.app" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">
                Get The App
              </Button>
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
                <span className="text-medium hover:text-primary-orange transition-colors duration-200">Play Football with Vaya</span>
              </Link>
              <Link 
                to="/play-football/pickup-games"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium hover:text-primary-orange transition-colors duration-200">Pick-up Games</span>
              </Link>
              <Link 
                to="/play-football/leagues-tournaments"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium hover:text-primary-orange transition-colors duration-200">Pibe Leagues and Tournaments</span>
              </Link>
              <Link 
                to="/play-football/private-sessions"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium hover:text-primary-orange transition-colors duration-200">Private Sessions</span>
              </Link>
              <Link 
                to="/play-football/field-rentals"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium hover:text-primary-orange transition-colors duration-200">Field Rentals</span>
              </Link>
              <Link 
                to="/play-football/corporate-football"
                className="block py-1 text-primary-black hover:text-primary-orange transition-colors duration-200 text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-medium hover:text-primary-orange transition-colors duration-200">Customized Corporate Football</span>
              </Link>
            </div>
          </div>
          
          {/* FAQ Link - Left Aligned */}
          <Link to="/faq" className={`block px-3 py-2 rounded-md transition-colors duration-200 text-left ${isActive('/faq') ? 'text-primary-orange' : 'text-primary-black hover:text-primary-orange'}`}>
            <span className="text-semibold text-medium">FAQ</span>
          </Link>
          

          
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
                    className="block w-full text-left py-1 text-sm transition-colors duration-200"
                  >
                    <span className={`${selectedLang === lang.code ? 'text-primary-orange font-medium' : 'text-primary-black'} hover:text-primary-orange transition-colors duration-200`}>
                      {lang.name} ({lang.code})
                    </span>
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
            className="block mt-4 text-left"
          >
            <Button variant="primary" size="md" fullWidth={true}>
              Get The App
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
