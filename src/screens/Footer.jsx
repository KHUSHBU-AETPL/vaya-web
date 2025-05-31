import React from 'react';
import { Link } from 'react-router';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-primary-black via-primary-beige to-primary-orange text-primary-white pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary-orange">Vaya</h3>
          <p className="text-sm text-gray-200 max-w-xs leading-relaxed">
            Finding and booking sports facilities made easy.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-primary-orange">Company</h4>
          <ul className="space-y-2 text-sm text-gray-100">
            <li>
              <Link to="/about" className="hover:text-white hover:translate-x-1 transition-all duration-300">About Us</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-white hover:translate-x-1 transition-all duration-300">Careers</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white hover:translate-x-1 transition-all duration-300">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-primary-orange">Support</h4>
          <ul className="space-y-2 text-sm text-gray-100">
            <li>
              <Link to="/faq" className="hover:text-white hover:translate-x-1 transition-all duration-300">FAQ</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all duration-300">Contact Us</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white hover:translate-x-1 transition-all duration-300">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center text-center mt-8 md:mt-0 md:items-end md:text-right justify-between">
          <h4 className="text-xl font-bold mb-4 text-primary-orange tracking-wide">Follow Us</h4>
          <div className="flex space-x-4">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="group rounded-full p-3 bg-white shadow-md hover:bg-primary-orange transition-all duration-300"
            >
              <FaInstagram className="w-6 h-6 text-primary-orange group-hover:text-white transition-colors duration-300" />
            </a>
            {/* Twitter */}
            <a
              href="#"
              aria-label="Twitter"
              className="group rounded-full p-3 bg-white shadow-md hover:bg-primary-orange transition-all duration-300"
            >
              <FaTwitter className="w-6 h-6 text-primary-orange group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} <span className="text-primary-orange font-semibold">Vaya</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
