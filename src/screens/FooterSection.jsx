import React from 'react';
import appStoreButton from '../assets/icons/store-badges/App Store download button.svg';
import playStoreButton from '../assets/icons/store-badges/play Store download button.svg';
import facebookIcon from '../assets/icons/social/Facebook.svg';
import instagramIcon from '../assets/icons/social/Instagram.svg';
import vayaLogo from '../assets/logos/Logo_Vaya!.png'; // Updated path to use logos directory

const FooterSection = () => {
  return (
    <footer className="bg-primary-beige py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="font-bold text-primary-orange mb-4 whitespace-nowrap" style={{ fontSize: 'var(--font-size-xlarge)', lineHeight: 'var(--line-height-xlarge)', fontWeight: 'var(--font-weight-semibold)' }}>
              Get the latests updates from Vaya {/* TODO(i18n): "Get the latests updates from Vaya" */}
            </h3>
            <p className="mb-4" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)' }}>
              Sign up for our newsletter {/* TODO(i18n): "Sign up for our newsletter" */}
            </p>
            <div className="flex">
              <div className="relative w-full">
                <input
                  id="email-input"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none pr-24"  
                  style={{ 
                    fontSize: 'var(--font-size-medium)', 
                    lineHeight: 'var(--line-height-medium)', 
                    color: 'var(--color-gray-100)', 
                    fontWeight: 'var(--font-weight-medium)'
                  }}
                />
                <button 
                  className="absolute right-0 top-0 h-full bg-primary-orange text-white px-6 hover:bg-opacity-90 transition-colors rounded-r-md" 
                  style={{ 
                    fontSize: 'var(--font-size-medium)', 
                    lineHeight: 'var(--line-height-medium)', 
                    fontWeight: 'var(--font-weight-medium)'
                  }}
                >
                  Subscribe {/* TODO(i18n): "Subscribe" */}
                </button>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 md:gap-x-24">
            {/* Vaya App Links */}
            <div>
              <h4 className="mb-4" style={{ fontSize: 'var(--font-size-h3)', lineHeight: 'var(--line-height-h3)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-primary-black)' }}>Vaya App</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary-orange transition-colors" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)' }}>Play Football</a></li>
                <li><a href="#" className="hover:text-primary-orange transition-colors" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)' }}>Code of conduct</a></li>
                <li><a href="#" className="hover:text-primary-orange transition-colors" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)' }}>Become an organiser</a></li>
                <li><a href="#" className="hover:text-primary-orange transition-colors" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)' }}>Corporate Football</a></li>
              </ul>
            </div>

            {/* About Vaya Links */}
            <div>
              <h4 className="mb-4 " style={{ fontSize: 'var(--font-size-h3)', lineHeight: 'var(--line-height-h3)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-primary-black)' }}>About Vaya</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary-orange transition-colors" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)' }}>Our Story</a></li>
                <li><a href="#" className="hover:text-primary-orange transition-colors" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)' }}>Contact</a></li>
                <li><a href="#" className="hover:text-primary-orange transition-colors" style={{ fontSize: 'var(--font-size-medium)', lineHeight: 'var(--line-height-medium)', color: 'var(--color-primary-black)' }}>Partner with us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* App Store Buttons and Social Media in same row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          {/* App Store Buttons */}
          <div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:opacity-90 transition-opacity">
                <img src={appStoreButton} alt="Download on the App Store" className="h-10" />
              </a>
              <a href="#" className="hover:opacity-90 transition-opacity">
                <img src={playStoreButton} alt="Get it on Google Play" className="h-10" />
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 md:mt-0">
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-orange rounded-full p-2 text-white hover:opacity-90 transition-colors">
                <img src={facebookIcon} alt="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-orange rounded-full p-2 text-white hover:opacity-90 transition-colors">
                <img src={instagramIcon} alt="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-orange rounded-full p-2 text-white hover:opacity-90 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Logo & Legal */}
        <div className="border-t pt-6 mt-4" style={{ borderColor: 'var(--color-gray-25)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img src={vayaLogo} alt="VAYA!" className="h-8" />
            </div>
            <div style={{ fontSize: 'var(--font-size-small)', lineHeight: 'var(--line-height-small)', color: 'var(--color-primary-black)' }}>
              <a href="#" className="mr-6 hover:text-primary-orange transition-colors" style={{ fontWeight: 'var(--font-weight-medium)' }}>Terms & Conditions</a>
              <a href="#" className="hover:text-primary-orange transition-colors" style={{ fontWeight: 'var(--font-weight-medium)' }}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
