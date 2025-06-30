import React, { useState } from 'react';
import logo from '../assets/images/logo_vaya.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN'); // Default to EN as per design

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleLangDropdown = () => setLangOpen(!langOpen);

  // Function to close dropdowns when clicking outside
  const handleBlur = (setter) => {
    setTimeout(() => setter(false), 100); // Small delay to allow click event to register
  };

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
            <Link to="/about" className="text-primary-black hover:text-primary-orange transition-colors duration-200">
              <span className="text-medium-weight text-medium">About</span>
            </Link>
            <Link to="/play-football" className="text-primary-black hover:text-primary-orange transition-colors duration-200">
              <span className="text-medium-weight text-medium">Play Football</span>
            </Link>
            <Link to="/faq" className="text-primary-black hover:text-primary-orange transition-colors duration-200">
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
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${langOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
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
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}> {/* Removed navbar-custom as it's not needed with new design */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-beige shadow-lg rounded-b-3xl"> {/* Updated background and shadow */}
          <Link to="/about" className="block px-3 py-2 text-primary-black hover:text-primary-orange rounded-md transition-colors duration-200">
            <span className="text-semibold text-medium">About</span>
          </Link>
          <Link to="/play-football" className="block px-3 py-2 text-primary-black hover:text-primary-orange rounded-md transition-colors duration-200">
            <span className="text-semibold text-medium">Play Football</span>
          </Link>
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
