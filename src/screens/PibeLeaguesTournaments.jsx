import React, { useEffect } from "react";

const PibeLeaguesTournaments = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-primary-orange mb-8">PIBE Leagues & Tournaments</h2>
          
          <section className="mb-10">
            <div className="mb-12">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  We bring together football lovers of all levels in a structured, 7-a-side format that's both competitive and community-driven. Whether you're looking to test your team's strength or simply enjoy the thrill of organized competition, there's a place for you here.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Our leagues and tournaments are open to players of all skill levels, and focus on creating a friendly yet competitive atmosphere where fair play and quality organization come first. You can sign up with your team or join solo — we'll help you find the right squad or spot.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  All games are managed by the PIBE team, ensuring a professional matchday experience, smooth logistics, and a great vibe on and off the pitch. Expect clear schedules, and a strong sense of community from kickoff to final whistle.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  And for those who love to keep track of their progress, you can follow live statistics through the app, including league standings, top goalscorers, MVPs, and more.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Simply register through the app, select the competition that suits you, and get ready to play.
                </p>
              </div>
              
              <div className="flex justify-center my-8">
                <a href="https://play.google.com/store/apps/details?id=com.vaya.app" target="_blank" rel="noopener noreferrer" className="bg-primary-orange hover:bg-primary-orange/90 text-primary-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span className="text-xl font-bold">Join a league!</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary-black mb-6 text-center">League Information</h3>
              <ul className="max-w-2xl mx-auto text-primary-black text-lg space-y-5">
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">For more information, see the League Rules and FAQ;</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">General League Rules and Conditions</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">League FAQ</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">
                    <a href="mailto:julianandres4343@gmail.com" className="text-primary-orange hover:underline">
                      julianandres4343@gmail.com
                    </a>
                    , I added 2 links here so people can find all info on your League Section
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary-black mb-6 text-center">Benefits of Joining Our Leagues</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Professional Organization</h4>
                  <p className="text-primary-black">Enjoy well-organized matches with referees, proper equipment, and clear communication.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Community Experience</h4>
                  <p className="text-primary-black">Meet fellow football enthusiasts and build lasting connections both on and off the pitch.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Performance Tracking</h4>
                  <p className="text-primary-black">Follow your statistics, standings, and achievements through our dedicated app.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">All Skill Levels Welcome</h4>
                  <p className="text-primary-black">Whether you're a beginner or experienced player, we have competitions suited to your level.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-primary-beige via-primary-orange/10 to-primary-beige rounded-2xl shadow-inner">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-primary-black mb-4">Ready to Join a League?</h3>
                <p className="text-primary-black text-lg mb-8 leading-relaxed">
                  Download the Vaya app today and sign up for our next league or tournament. Experience football the way it's meant to be played - with passion, fair play, and great organization.
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

export default PibeLeaguesTournaments;
