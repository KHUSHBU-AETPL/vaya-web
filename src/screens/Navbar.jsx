import React from 'react';
import logo from '../assets/images/logo_vaya.png'; 

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><a href="#experiences" className="hover:text-blue-600">Experiences</a></li>
        <li><a href="#locations" className="hover:text-blue-600">Locations</a></li>
        <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
      </ul>

      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
        Play Now
      </button>
    </nav>
  );    
};

export default Navbar;
