import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const BookingPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-primary-orange mb-8">Booking Policy</h2>
          
          <section className="mb-10">
            <div className="mb-12">
              <p className="text-primary-black text-lg mb-4 ml-8 md:ml-12">
                To participate in a game, please follow these steps:
              </p>
              <ul className="ml-8 md:ml-12 text-primary-black text-lg space-y-4">
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Reserve your spot through the Vaya app.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Complete the payment in order to confirm your booking is confirmed once payment is completed.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Payments must be made in advance, using either your preferred payment method or by redeeming your available game credits.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">After booking is completed, your name will appear on the player list for that game.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">You will receive a confirmation notification via app.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">You can view all your reserved spots anytime under the 'My Games' section, located in the bottom navigation bar of the app.</div>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 p-6 bg-gray-100 rounded-xl">
              <p className="text-primary-black text-lg">
                If you have any questions or require assistance regarding bookings, please do not hesitate to contact us at <a href="mailto:support@vaya-sports.com" className="text-primary-orange font-semibold hover:underline">support@vaya-sports.com</a>. We respond to all inquiries within 48 hours on weekdays.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BookingPolicy;
