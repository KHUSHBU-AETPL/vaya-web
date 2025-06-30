import React from 'react';
import appStoreButton from '../assets/App Store download button.svg';
import playStoreButton from '../assets/images/play Store download button.svg';
import facebookIcon from '../assets/icons/Facebook.svg';
import instagramIcon from '../assets/icons/Instagram.svg';
import vayaLogo from '../../public/Logo_Vaya!.png';

const FooterSection = () => {
  return (
    <footer className="bg-primary-beige py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-2xl font-bold text-primary-orange mb-4 whitespace-nowrap">
              Get the latests updates from Vaya {/* TODO(i18n): "Get the latests updates from Vaya" */}
            </h3>
            <p className="text-primary-dark mb-4">
              Sign up for our newsletter {/* TODO(i18n): "Sign up for our newsletter" */}
            </p>
            <div className="flex">
              <div className="flex w-full shadow-sm rounded-md overflow-hidden">
                <input
                  id="email-input"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white border-none rounded-l-md text-[var(--color-gray-100)] text-base font-medium leading-6 focus:outline-none"
                />
                <button className="bg-[var(--color-primary-orange)] text-white px-6 py-3 font-medium hover:bg-opacity-90 transition-colors">
                  Subscribe {/* TODO(i18n): "Subscribe" */}
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 md:gap-x-24">
            {/* Vaya App Links */}
            <div>
              <h4 className="font-semibold text-primary-dark mb-4">Vaya App</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-dark-gray hover:text-primary-orange transition-colors">Play Football</a></li>
                <li><a href="#" className="text-primary-dark-gray hover:text-primary-orange transition-colors">Code of conduct</a></li>
                <li><a href="#" className="text-primary-dark-gray hover:text-primary-orange transition-colors">Become an organiser</a></li>
                <li><a href="#" className="text-primary-dark-gray hover:text-primary-orange transition-colors">Corporate Football</a></li>
              </ul>
            </div>

            {/* About Vaya Links */}
            <div>
              <h4 className="font-semibold text-primary-dark mb-4">About Vaya</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-dark-gray hover:text-primary-orange transition-colors">Our Story</a></li>
                <li><a href="#" className="text-primary-dark-gray hover:text-primary-orange transition-colors">Contact</a></li>
                <li><a href="#" className="text-primary-dark-gray hover:text-primary-orange transition-colors">Partner wit us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* App Store Buttons & Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="block">
              <img src={appStoreButton} alt="Download on App Store" className="h-12" />
            </a>
            <a href="#" className="block">
              <img src={playStoreButton} alt="Get it on Google Play" className="h-12" />
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="bg-primary-orange rounded-full p-2 text-white hover:bg-primary-orange-dark transition-colors">
              <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="#" className="bg-primary-orange rounded-full p-2 text-white hover:bg-primary-orange-dark transition-colors">
              <img src={facebookIcon} alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" className="bg-primary-orange rounded-full p-2 text-white hover:bg-primary-orange-dark transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Logo & Legal */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img src={vayaLogo} alt="VAYA!" className="h-10" />
            </div>
            <div className="text-sm text-primary-dark-gray">
              <a href="#" className="mr-6 hover:text-primary-orange transition-colors font-medium">Terms & Conditions</a>
              <a href="#" className="hover:text-primary-orange transition-colors font-medium">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
