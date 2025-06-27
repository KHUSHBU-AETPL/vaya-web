import React, { useEffect } from "react";

const BookingRefundCanc = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-primary-orange mb-8"> Booking, Refund, and Game Cancellation Policy</h2>
          
          <section className="mb-10">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary-black mb-4">Booking Policy</h3>
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

            <div className="border-t border-gray-200 my-8"></div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary-black mb-4">Refund Policy</h3>
              <p className="text-primary-black text-lg mb-6 ml-8 md:ml-12">
                At Vaya, we are committed to providing the best possible experience for all players. To ensure fairness and facilitate smooth organization of games, we have established the following refund and cancellation policy:
              </p>
              
              <h4 className="text-xl font-bold text-primary-black mb-4">Cancellation Window</h4>
              <ul className="ml-8 md:ml-12 text-primary-black text-lg space-y-4 mb-6">
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">You may cancel your participation in a game up to 12 hours before kick-off and receive a full refund in the form of in-game credits.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Cancellations made less than 12 hours before kick-off are not eligible for a refund.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">All cancellations must be done through Vaya app.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Refunds are issued instantly at the moment you cancel and they will be awarded to you as game credits in the app.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Refunded game credits will be available in your Profile, accessible via the bottom navigation bar of the app.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Please note that refunds are provided exclusively in game credits, which can be used to book future games on Vaya platform. Monetary refunds will not be issued.</div>
                </li>
              </ul>
              
              <h4 className="text-xl font-bold text-primary-black mb-4">No-Shows</h4>
              <p className="text-primary-black text-lg ml-8 md:ml-12">
                We strongly encourage players to cancel their spot, even if it's too late for a refund, as this helps us keep the game information accurate and assists us in completing the game successfully.
              </p>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary-black mb-4">Game Cancellation Policy</h3>
              <p className="text-primary-black text-lg mb-4 ml-8 md:ml-12">
                If Vaya cancels a game for any reason, such as adverse weather conditions, field-related issues, or insufficient number of players:
              </p>
              <ul className="ml-8 md:ml-12 text-primary-black text-lg space-y-4">
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">All registered participants will receive a full refund in game credits.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Refunds will be processed instantly once the game is officially cancelled within the app.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">You will receive a push notification informing you of the cancellation.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Full cancellation details can be reviewed under Game Messages, which are found on the Game information page within the app.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">No further action is required on your part, as credits are automatically added to your account and can be applied toward any future Vaya games.</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">You can view your updated game credits in your Profile via the bottom navigation bar.</div>
                </li>
              </ul>
            </div>
            <div className="mt-12 p-6 bg-gray-100 rounded-xl">
              <p className="text-primary-black text-lg">
                If you have any questions or require assistance regarding bookings, cancellations, or refunds, please do not hesitate to contact us at <a href="mailto:support@vaya-sports.com" className="text-primary-orange font-semibold hover:underline">support@vaya-sports.com</a>. We respond to all inquiries within 48 hours on weekdays.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BookingRefundCanc;
