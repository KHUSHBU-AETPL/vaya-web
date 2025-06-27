import React, { useEffect } from "react";

const PrivateSessions = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-primary-orange mb-8">Private Sessions</h2>
          
          <section className="mb-10">
            <div className="mb-12">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Private sessions are exclusive football matches you can create for your group.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  We can set up a private game for you in the app that's only visible and accessible to people with a specific link.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  This way, you control who joins, making it perfect for friends, teams, or special events.
                </p>
              </div>
              
              <div className="flex justify-center my-8">
                <a href="https://play.google.com/store/apps/details?id=com.vaya.app" target="_blank" rel="noopener noreferrer" className="bg-primary-orange hover:bg-primary-orange/90 text-primary-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span className="text-xl font-bold">Request Private Session</span>
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
                  <div className="text-left">Download the Vaya app from your app store</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Contact us through the app or website to request a private session</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Specify your preferred date, time, location, and number of players</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">We'll create a private game visible only to those with the link</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Share the link with your group to allow them to join</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Enjoy your exclusive football session!</div>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary-black mb-6 text-center">Benefits of Private Sessions</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Exclusive Access</h4>
                  <p className="text-primary-black">Only the people you invite can join your game, ensuring you play with your preferred group.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Customized Experience</h4>
                  <p className="text-primary-black">Choose your preferred time, location, and format to suit your group's needs.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Perfect for Events</h4>
                  <p className="text-primary-black">Ideal for birthdays, team building, or regular sessions with friends or colleagues.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Professional Organization</h4>
                  <p className="text-primary-black">We handle all the logistics while you focus on enjoying the game with your group.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-primary-beige via-primary-orange/10 to-primary-beige rounded-2xl shadow-inner">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-primary-black mb-4">Ready to Organize Your Private Session?</h3>
                <p className="text-primary-black text-lg mb-8 leading-relaxed">
                  Download the Vaya app today and request your private football session. It's the perfect way to enjoy the beautiful game with your chosen group in a controlled, exclusive environment.
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

export default PrivateSessions;
