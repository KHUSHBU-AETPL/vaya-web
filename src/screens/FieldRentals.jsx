import React, { useEffect } from "react";

const FieldRentals = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-primary-orange mb-8">Field Rentals</h2>
          
          <section className="mb-10">
            <div className="mb-12">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Field rentals allow you to book a pitch for your own event.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  You can share your preferred time and location with our support team, and we'll do our best to find a suitable offer.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  This option is perfect if you want to organize games that fit your wishes.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Once a slot is confirmed, payment can be made through the app or by bank transfer, with an invoice available if desired.
                </p>
              </div>
              
              <div className="flex justify-center my-8">
                <a href="https://play.google.com/store/apps/details?id=com.vaya.app" target="_blank" rel="noopener noreferrer" className="bg-primary-orange hover:bg-primary-orange/90 text-primary-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span className="text-xl font-bold">Request Field Rental</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary-black mb-6 text-center">How It Works</h3>
              <ul className="max-w-2xl mx-auto text-primary-black text-lg space-y-5">
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Contact our support team through the app or website</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Provide details about your preferred location, date, time, and duration</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Our team will search for available fields that match your requirements</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">We'll present you with options and pricing</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Once you confirm, we'll secure the booking for you</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Pay through the app or via bank transfer (invoice available upon request)</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Enjoy your exclusive field rental!</div>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary-black mb-6 text-center">Benefits of Field Rentals</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Complete Control</h4>
                  <p className="text-primary-black">Organize your own games or events exactly how you want them, with full control over who participates.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Quality Venues</h4>
                  <p className="text-primary-black">Access to our network of high-quality football pitches in convenient locations.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Flexible Options</h4>
                  <p className="text-primary-black">Choose from various field sizes, indoor or outdoor options, and different time slots to suit your needs.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Hassle-Free Booking</h4>
                  <p className="text-primary-black">We handle all the negotiations and booking details with the venue, saving you time and effort.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-primary-beige via-primary-orange/10 to-primary-beige rounded-2xl shadow-inner">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-primary-black mb-4">Ready to Book Your Field?</h3>
                <p className="text-primary-black text-lg mb-8 leading-relaxed">
                  Download the Vaya app today and request a field rental. Whether it's for a friendly match, a tournament, or regular training sessions, we'll help you find the perfect pitch.
                </p>
                <div className="flex justify-center mt-6">
                  <a href="https://play.google.com/store/apps/details?id=com.vaya.app" target="_blank" rel="noopener noreferrer" className="bg-primary-orange text-primary-white px-10 py-4 rounded-xl hover:bg-warning-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xl font-bold">Download the App</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FieldRentals;
