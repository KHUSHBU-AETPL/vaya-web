import React, { useEffect } from "react";

const PickUpGames = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-primary-orange mb-8">Pick-up Games</h2>
          
          <section className="mb-10">
            <div className="mb-12">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Pick-up games are friendly, one-off football matches open to players of all skill levels. You're welcome to join on your own, with friends, or even with your entire team — whatever suits you best. We offer different types of games, such as 5-a-side, 7-a-side, as well as options like women's, mixed-gender, and advanced matches.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Simply register through the app, select your preferred game, and arrive ready to play. Each match is managed by a Vaya organizer, who may adjust teams to help ensure a fair and enjoyable experience for everyone.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  The games are casual and flexible, making it easy to fit football into your schedule. All players are welcome, regardless of experience.
                </p>
              </div>
              
              <div className="flex justify-center my-8">
                <a href="https://play.google.com/store/apps/details?id=com.vaya.app" target="_blank" rel="noopener noreferrer" className="bg-primary-orange hover:bg-primary-orange/90 text-primary-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span className="text-xl font-bold">Join a Game!</span>
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
                  <div className="text-left">Create your player profile</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Browse available pick-up games in your area</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Select a game that fits your schedule and preferences</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Reserve your spot and complete payment</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Arrive at the venue and enjoy playing football!</div>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary-black mb-4">Game Types</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">5-a-side</h4>
                  <p className="text-primary-black">Fast-paced games on smaller pitches, perfect for quick matches and developing technical skills.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">7-a-side</h4>
                  <p className="text-primary-black">A balanced format that offers more space and tactical options while maintaining an accessible pace.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Women's Games</h4>
                  <p className="text-primary-black">Dedicated sessions for women players of all skill levels in a supportive environment.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Mixed-Gender</h4>
                  <p className="text-primary-black">Inclusive games where everyone plays together, focusing on fun and community.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Advanced</h4>
                  <p className="text-primary-black">Higher-intensity matches for experienced players looking for a competitive challenge.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Casual</h4>
                  <p className="text-primary-black">Relaxed games focused on enjoyment and participation rather than competition.</p>
                </div>
              </div>
            </div> */}

            <div className="mt-12 p-8 bg-gradient-to-r from-primary-beige via-primary-orange/10 to-primary-beige rounded-2xl shadow-inner">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-primary-black mb-4">Ready to Play?</h3>
                <p className="text-primary-black text-lg mb-8 leading-relaxed">
                  Download the Vaya app today and join our community of football enthusiasts. Find games that match your schedule and preferences, and enjoy the beautiful game without the hassle of organizing everything yourself.
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

export default PickUpGames;
