import React, { useState } from 'react';
import logo from '../assets/images/logo_vaya.png'; 
import Typography from '../utility/Typography';
import { Link } from 'react-router';

const Navbar = () => {
  const [experiencesOpen, setExperiencesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleExperiences = () => setExperiencesOpen(!experiencesOpen);
  const toggleLocations = () => setLocationsOpen(!locationsOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Close dropdowns when clicking outside
  const closeDropdowns = () => {
    setExperiencesOpen(false);
    setLocationsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
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
            {/* Experiences Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
                onClick={toggleExperiences}
                onBlur={() => setTimeout(closeDropdowns, 100)}
              >
                <Typography variant="medium">Experiences</Typography>
                <svg className={`ml-1 h-5 w-5 transition-transform ${experiencesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Experiences Dropdown Menu */}
              {experiencesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link to="/experiences/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Typography variant="small">Option 1</Typography>
                    </Link>
                    <Link to="/experiences/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Typography variant="small">Option 2</Typography>
                    </Link>
                    <Link to="/experiences/option3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Typography variant="small">Option 3</Typography>
                    </Link>
                    <Link to="/experiences/option4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Typography variant="small">Option 4</Typography>
                    </Link>
                    <Link to="/experiences/option5" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Typography variant="small">Option 5</Typography>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
                onClick={toggleLocations}
                onBlur={() => setTimeout(closeDropdowns, 100)}
              >
                <Typography variant="medium">Locations</Typography>
                <svg className={`ml-1 h-5 w-5 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Locations Dropdown Menu */}
              {locationsOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link to="/locations/city1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Typography variant="small">City 1</Typography>
                    </Link>
                    <Link to="/locations/city2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Typography variant="small">City 2</Typography>
                    </Link>
                    <Link to="/locations/city3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Typography variant="small">City 3</Typography>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              <Typography variant="medium">About Us</Typography>
            </Link>

            {/* Play Now Button */}
            <Link to="/play" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
              <Typography variant="medium" className="text-white">Play Now</Typography>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {/* Mobile Experiences Dropdown */}
          <div className="relative">
            <button 
              className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
              onClick={toggleExperiences}
            >
              <Typography variant="medium">Experiences</Typography>
              <svg className={`ml-1 h-5 w-5 transition-transform ${experiencesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mobile Experiences Dropdown Items */}
            {experiencesOpen && (
              <div className="pl-4 space-y-1 mt-1">
                <Link to="/experiences/option1" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <Typography variant="small">Option 1</Typography>
                </Link>
                <Link to="/experiences/option2" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <Typography variant="small">Option 2</Typography>
                </Link>
                <Link to="/experiences/option3" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <Typography variant="small">Option 3</Typography>
                </Link>
                <Link to="/experiences/option4" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <Typography variant="small">Option 4</Typography>
                </Link>
                <Link to="/experiences/option5" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <Typography variant="small">Option 5</Typography>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Locations Dropdown */}
          <div className="relative">
            <button 
              className="w-full flex items-center justify-between text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
              onClick={toggleLocations}
            >
              <Typography variant="medium">Locations</Typography>
              <svg className={`ml-1 h-5 w-5 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mobile Locations Dropdown Items */}
            {locationsOpen && (
              <div className="pl-4 space-y-1 mt-1">
                <Link to="/locations/city1" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <Typography variant="small">City 1</Typography>
                </Link>
                <Link to="/locations/city2" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <Typography variant="small">City 2</Typography>
                </Link>
                <Link to="/locations/city3" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                  <Typography variant="small">City 3</Typography>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile About Us */}
          <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md">
            <Typography variant="medium">About Us</Typography>
          </Link>

          {/* Mobile Play Now Button */}
          <Link to="/play" className="block px-3 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition text-center mt-4">
            <Typography variant="medium" className="text-white">Play Now</Typography>
          </Link>
        </div>
      </div>
    </nav>
  );    
};

export default Navbar;
