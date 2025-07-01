import React from 'react';
import contactImage from '../assets/images/untitled-75 (1).svg'; // Reusing the image, you can replace with a more appropriate one

const ContactScreen = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-primary-beige">
      <div className="max-w-3xl mx-auto">
        {/* Content Container */}
        <div className="flex flex-col items-center">
          {/* Header Section */}
          <h1 className="text-3xl font-bold mb-6 text-center w-full">
            <span className="text-primary-orange">Contact Us</span>
          </h1>
          
          <div className="space-y-6 w-full">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-primary-black mb-2">
                Birgit Ottilie Jeanine Hermans
              </h2>
              <p className="text-base text-primary-black mb-1">
                NIE: Y5696892J
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary-black mb-2">
                Address
              </h3>
              <p className="text-base text-primary-black mb-1">
                Carrer Hartzenbusch 8-10, 1-2
              </p>
              <p className="text-base text-primary-black mb-1">
                08014 Barcelona
              </p>
              <p className="text-base text-primary-black mb-1">
                Spain
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary-black mb-2">
                Contact Details
              </h3>
              <p className="text-base text-primary-black mb-1">
                Email: <a href="mailto:brit@vaya-sports.com" className="text-primary-orange hover:underline transition-all duration-200">brit@vaya-sports.com</a>
              </p>
              <p className="text-base text-primary-black mb-1">
                Tel: <span className="italic">+34 664 251 01</span>
              </p>
            </div>

            
            {/* CTA Button */}
            <div className="mt-6 text-center">
              <a 
                href="mailto:brit@vaya-sports.com" 
                className="inline-block bg-primary-orange text-primary-white px-4 py-2 rounded-md hover:bg-warning-dark transition-colors duration-300"
              >
                <span className="text-semibold text-sm">Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
