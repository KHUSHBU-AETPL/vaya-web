import React, { useState } from 'react';
import logo from '../assets/images/logo_vaya.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [playFootballOpen, setPlayFootballOpen] = useState(false);
  const [playFootballOpenMobile, setPlayFootballOpenMobile] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const [policiesOpenMobile, setPoliciesOpenMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('Language');

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
    setLangOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-primary-orange via-primary-beige to-primary-black bg-opacity-90 backdrop-blur-md shadow-xl w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Vaya Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between space-x-8">
            {/* Play Football Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-primary-black hover:text-primary-orange focus:outline-none transition-all duration-300 ease-in-out hover:scale-105 px-4 py-2 rounded-xl bg-white/40"
                onClick={() => setPlayFootballOpen(!playFootballOpen)}
                onBlur={() => setTimeout(() => setPlayFootballOpen(false), 100)}
              >
                <span className="text-semibold text-medium">Play Football</span>
                <svg className={`ml-1 h-5 w-5 transition-transform ${playFootballOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {playFootballOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-2xl bg-gradient-to-br bg-primary-white from-primary-beige via-primary-orange to-primary-black z-50 overflow-hidden animate-fade-in">
                  <div className="py-2" role="menu" aria-orientation="vertical">
                    <a href="/football/play-with-vaya" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Play Football with Vaya</span>
                    </a>
                    <a href="/football/pickup-games" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Pick-up Games</span>
                    </a>
                    <a href="/football/leagues-tournaments" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Pibe Leagues and Tournaments</span>
                    </a>
                    <a href="/football/private-sessions" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Private Sessions</span>
                    </a>
                    <a href="/football/field-rentals" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Field Rentals</span>
                    </a>
                    <a href="/football/customized-corporate-football" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Customized Corporate Football</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* About Vaya */}
            <Link to="/about" className="text-primary-black hover:text-primary-orange transition-colors duration-200 ease-in-out">
              <span className="text-semibold text-medium">About Vaya</span>
            </Link>

            {/* Contact */}
            <Link to="/contact" className="text-primary-black hover:text-primary-orange transition-colors duration-200 ease-in-out">
              <span className="text-semibold text-medium">Contact</span>
            </Link>

            {/* Policies Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-primary-black hover:text-primary-orange focus:outline-none transition-all duration-300 ease-in-out hover:scale-105 px-4 py-2 rounded-xl bg-white/40"
                onClick={() => setPoliciesOpen(!policiesOpen)}
                onBlur={() => setTimeout(() => setPoliciesOpen(false), 100)}
              >
                <span className="text-semibold text-medium">Policies</span>
                <svg className={`ml-1 h-5 w-5 transition-transform ${policiesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {policiesOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-2xl bg-gradient-to-br bg-primary-white from-primary-beige via-primary-orange to-primary-black z-50 overflow-hidden animate-fade-in">
                  <div className="py-2" role="menu" aria-orientation="vertical">
                    <Link to="/booking-policy" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Booking Policy</span>
                    </Link>
                    <Link to="/refund-cancellation-policy" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Refund & Cancellation Policy</span>
                    </Link>
                    <Link to="/terms-of-use" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Terms of Use</span>
                    </Link>
                    <Link to="/privacy-policy" className="block px-5 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white transition-all duration-300 rounded-lg">
                      <span className="text-medium-weight text-small">Privacy Policy</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Download App Button */}
            <a href="https://play.google.com/store/apps/details?id=com.vaya.app" target="_blank" rel="noopener noreferrer" className="bg-primary-orange text-primary-white px-6 py-2 rounded-lg hover:bg-warning-dark transition-colors duration-300 shadow-sm hover:shadow-md">
              <span className="text-semibold text-medium text-primary-white">Download App</span>
            </a>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white/40 text-primary-black hover:text-primary-orange transition-all duration-200"
              >
                <span className="text-medium font-semibold">{selectedLang}</span>
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
                <div className="absolute mt-2 right-0 w-40 rounded-xl shadow-xl bg-white z-50">
                  <button
                    onClick={() => handleLangChange('English 🇬🇧')}
                    className="block w-full text-left px-4 py-2 hover:bg-primary-orange hover:text-white"
                  >
                    English 🇬🇧
                  </button>
                  <button
                    onClick={() => handleLangChange('Español 🇪🇸')}
                    className="block w-full text-left px-4 py-2 hover:bg-primary-orange hover:text-white"
                  >
                    Español 🇪🇸
                  </button>
                  <button
                    onClick={() => handleLangChange('Català 🇦🇩')}
                    className="block w-full text-left px-4 py-2 hover:bg-primary-orange hover:text-white"
                  >
                    Català 🇦🇩
                  </button>
                </div>
              )}
            </div>
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
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 navbar-custom shadow-lg rounded-b-3xl">
          {/* Mobile Play Football Dropdown */}
          <div className="relative">
            <button
              className="w-full flex justify-between text-primary-black hover:text-primary-orange px-3 py-2 rounded-xl bg-white/30 backdrop-blur-sm shadow-sm transition-all duration-200"
              onClick={() => setPlayFootballOpenMobile(!playFootballOpenMobile)}
            >
              <span className="text-semibold text-medium">Play Football</span>
              <svg className={`ml-1 h-5 w-5 transition-transform ${playFootballOpenMobile ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {playFootballOpenMobile && (
              <div className="pl-4 space-y-1 mt-1">
                <a href="/football/play-with-vaya" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">Play Football with Vaya</span>
                </a>
                <a href="/football/pickup-games" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">Pick-up Games</span>
                </a>
                <a href="/football/leagues-tournaments" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">Pibe Leagues and Tournaments</span>
                </a>
                <a href="/football/private-sessions" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">Private Sessions</span>
                </a>
                <a href="/football/field-rentals" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">Field Rentals</span>
                </a>
                <a href="/football/customized-corporate-football" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">Customized Corporate Football</span>
                </a>
              </div>
            )}
          </div>

          {/* Mobile Links */}
          <Link to="/about" className="block px-3 py-2 text-primary-black hover:text-primary-orange rounded-md transition-colors duration-200 text-left">
            <span className="text-semibold text-medium">About Vaya</span>
          </Link>
          <Link to="/contact" className="block px-3 py-2 text-primary-black hover:text-primary-orange rounded-md transition-colors duration-200 text-left">
            <span className="text-semibold text-medium">Contact</span>
          </Link>

          {/* Mobile Policies Dropdown */}
          <div className="relative">
            <button
              className="w-full flex justify-between text-primary-black hover:text-primary-orange px-3 py-2 rounded-xl bg-white/30 backdrop-blur-sm shadow-sm transition-all duration-200"
              onClick={() => setPoliciesOpenMobile(!policiesOpenMobile)}
            >
              <span className="text-semibold text-medium">Policies</span>
              <svg className={`ml-1 h-5 w-5 transition-transform ${policiesOpenMobile ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {policiesOpenMobile && (
              <div className="pl-4 space-y-1 mt-1">
                <Link to="/legal/booking-policy" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">Booking Policy</span>
                </Link>
                <Link to="/legal/refund-cancellation-policy" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">Refund & Cancellation Policy</span>
                </Link>
                <Link to="/legal/terms-of-use" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">Terms of Use</span>
                </Link>
                <Link to="/legal/privacy-policy" className="block px-3 py-2 text-primary-black hover:bg-primary-orange hover:text-primary-white rounded-md transition-colors duration-200">
                  <span className="text-medium-weight text-small">Privacy Policy</span>
                </Link>
              </div>
            )}
          </div>

          <a href="https://play.google.com/store/apps/details?id=com.vaya.app" target="_blank" rel="noopener noreferrer" className="block mt-4 text-left bg-primary-orange text-primary-white px-4 py-3 rounded-lg hover:bg-warning-dark transition-colors duration-300 shadow-sm hover:shadow-md">
            <span className="text-semibold text-medium text-primary-white">Download App</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
