import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PlayFootballWithVaya = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-primary-orange mb-8">Play Football with Vaya</h2>
          
          <section className="mb-10">
            <div className="mb-12">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Football has never been this easy and fun! Whether you're looking to join a quick pick-up game or dive into a league, Vaya makes it simple to get on the pitch and enjoy the game your way.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Explore our options
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto mt-10">
                <div className="grid gap-8">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="inline-block w-3 h-3 bg-primary-orange rounded-full mt-2 mr-4"></span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-black mb-3">Pick-up Games</h3>
                        <p className="text-primary-black mb-4">Join casual matches anytime and meet new players.</p>
                        <Link to="/football/pickup-games" className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium">
                          Learn more
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="inline-block w-3 h-3 bg-primary-orange rounded-full mt-2 mr-4"></span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-black mb-3">Pibe Leagues and Tournaments</h3>
                        <p className="text-primary-black mb-4">Play in short leagues for regular, competitive fun or take part in one-day tournaments designed for action and good vibes.</p>
                        <Link to="/football/leagues-tournaments" className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium">
                          Learn more
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="inline-block w-3 h-3 bg-primary-orange rounded-full mt-2 mr-4"></span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-black mb-3">Private Sessions</h3>
                        <p className="text-primary-black mb-4">Organize exclusive matches with your group.</p>
                        <Link to="/football/private-sessions" className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium">
                          Learn more
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="inline-block w-3 h-3 bg-primary-orange rounded-full mt-2 mr-4"></span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-black mb-3">Field Rentals</h3>
                        <p className="text-primary-black mb-4">Rent top-quality pitches for your own events.</p>
                        <Link to="/football/field-rentals" className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium">
                          Learn more
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="inline-block w-3 h-3 bg-primary-orange rounded-full mt-2 mr-4"></span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-black mb-3">Customized Corporate Football</h3>
                        <p className="text-primary-black mb-4">Tailored games, tournaments, and leagues designed to bring teams together.</p>
                        <Link to="/football/customized-corporate-football" className="inline-flex items-center text-primary-orange hover:text-primary-orange/80 font-medium">
                          Learn more
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto text-center mt-12">
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Whatever your style or schedule, Vaya is here to bring football closer to you.
                </p>
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Below you can read an explanation of all products.
                </p>
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  For each product, the lay our can be like this: EXPLANATION + BUTTON (that leads to the app or support, depending on the product + PHOTO (related to the offer)
                </p>
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  In the case of the section 'Leagues and Tournaments' we can add the FAQ specifically for Leagues and Tournaments
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-primary-beige via-primary-orange/10 to-primary-beige rounded-2xl shadow-inner">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-primary-black mb-4">Ready to Play?</h3>
                <p className="text-primary-black text-lg mb-8 leading-relaxed">
                  Download the Vaya app today and start enjoying football your way. Whether you're looking for casual games or competitive matches, we've got you covered.
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

export default PlayFootballWithVaya;
