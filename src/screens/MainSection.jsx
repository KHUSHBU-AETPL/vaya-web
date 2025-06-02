import React from 'react';
import { Link } from 'react-router';
import FAQ from './FAQ';
import Footer from './Footer';

const MainSection = () => {

  const availablePitches = [
    {
      id: 1,
      name: 'Central Sports Complex',
      location: 'Barcelona',
      sport: 'Football',
      image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185_1280.jpg',
      rating: 4.8,
      availableSlots: ['10:00 AM', '2:00 PM', '6:00 PM'],
      capacity: '5v5'
    },
    {
      id: 2,
      name: 'Riverside Courts',
      location: 'Germany',
      sport: 'Basketball',
      image: 'https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_960_720.jpg',
      rating: 4.6,
      availableSlots: ['9:00 AM', '1:00 PM', '7:00 PM'],
      capacity: '3v3'
    },
    {
      id: 3,
      name: 'Green Field Arena',
      location: 'Spain',
      sport: 'Cricket',
      image: 'https://cdn.pixabay.com/photo/2020/11/18/10/18/goalkeeper-5754865_1280.jpg',
      rating: 4.9,
      availableSlots: ['8:00 AM', '3:00 PM', '5:00 PM'],
      capacity: '11v11'
    },
  ];

  return (
    <div className="relative">
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-orange via-warning-light to-primary-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-black/80 via-warning-dark/70 to-primary-black/60 z-10"></div>
          <img
            src="https://cdn.pixabay.com/photo/2021/10/16/21/37/garbarnia-krakow-6716100_1280.jpg"
            alt="Playground Football Background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-semibold text-xlarge text-5xl md:text-6xl font-black text-primary-white mb-6 leading-tight drop-shadow-lg animate-fade-in-up">
              FIND AND BOOK SPORTS PITCHES NEAR YOU
            </h1>

            {/* Enhanced Tagline Content */}
            <div className="animate-fade-in-up delay-300 mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-white mb-3 leading-snug">
                DISCOVER & JOIN LOCAL SPORTS GAMES – FAST.
              </h2>
              <p className="text-lg md:text-xl text-primary-white font-medium mb-2">
                Vaya Sports brings your favorite games right to your fingertips.
              </p>
              <p className="text-base md:text-lg text-primary-white">
                From casual football matches to weekend basketball, cricket leagues to volleyball tournaments — find, book, and play with ease.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up delay-400">
              {/* Gradient "Join a Game" Button */}
              {/* <button className="px-8 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r from-primary-secondary-orange-50 via-warning-dark to-warning-light shadow-xl hover:scale-105 transition-all duration-300">
                JOIN A GAME
              </button> */}
              <button
                className="px-8 py-3 rounded-full font-bold text-primary-white text-lg shadow-xl transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(90deg, var(--color-secondary-orange-50), var(--color-warning-dark), var(--color-warning-light))`
                }}
              >
                JOIN A GAME
              </button>


              {/* App Store + Play Store */}
              <div className="flex gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </a>

                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-orange-25 via-primary-beige to-secondary-25">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-semibold text-large text-3xl font-bold mb-4 text-primary-black">
              HOW IT WORKS
            </h2>
            <p className="text-medium-weight text-medium text-lg max-w-2xl mx-auto text-gray-100">
              Book your favorite sports pitch in just three simple steps testing purposes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="text-center bg-gradient-to-b from-white/80 via-primary-beige/70 to-secondary-orange-25/60 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-tr from-primary-orange to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <h2 className="text-semibold text-large text-primary-white font-bold">1</h2>
              </div>
              <h3 className="text-semibold text-medium text-xl font-bold mb-2 text-warning-dark ">
                FIND A PITCH NEAR YOU
              </h3>
              <p className="text-medium-weight text-medium text-gray-100">
                Open the app, choose your city, sport, and find a pitch that's convenient for you.
              </p>
            </div>

            <div className="text-center bg-gradient-to-b from-white/80 via-primary-beige/70 to-secondary-orange-25/60 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-xl transition-all duration-300">
              {/* <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"> */}
              <div className="w-16 h-16 bg-gradient-to-tr from-primary-orange to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <h2 className="text-semibold text-large text-primary-white font-bold">2</h2>
              </div>
              <h3 className="text-semibold text-medium text-xl font-bold text-warning-dark mb-2">
                BOOK YOUR SLOT
              </h3>
              <p className="text-medium-weight text-medium text-gray-100">
                Select your preferred time slot, duration, and number of players.
              </p>
            </div>

            <div className="text-center bg-gradient-to-b from-white/80 via-primary-beige/70 to-secondary-orange-25/60 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-tr from-primary-orange to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">

                {/* <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"> */}
                <h2 className="text-semibold text-large text-primary-white font-bold">3</h2>
              </div>
              <h3 className="text-semibold text-medium text-xl font-bold text-warning-dark mb-2">
                PLAY AND ENJOY
              </h3>
              <p className="text-medium-weight text-medium text-gray-100">
                Show up at the pitch, meet other players, and enjoy your game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* upcoming pickup games Section */}
      <section className="py-16 bg-gradient-to-br from-primary-beige via-primary-orange/20 to-secondary-25">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-semibold text-large text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-primary-orange via-warning-dark to-primary-black bg-clip-text text-primary-black">
              UPCOMING PICKUP GAMES
            </h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1 bg-gradient-to-r from-primary-orange via-warning-dark to-primary-black rounded-full mb-4"></span>
            </div>
            <p className="text-medium-weight text-medium text-lg text-gray-700 max-w-2xl mx-auto mb-2">
              Discover and join the best pickup games happening soon in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {availablePitches.map((pitch) => (
              <div key={pitch.id} className="bg-gradient-to-br from-white via-primary-beige to-warning-light rounded-3xl shadow-2xl overflow-hidden hover:scale-105 hover:brightness-105 hover:shadow-2xl transition-transform duration-300">
                <div className="relative h-48">
                  <img src={pitch.image} alt={pitch.name} className="w-full h-full object-cover opacity-80" />

                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-medium-weight text-small text-primary-black font-bold">
                      {pitch.capacity}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-semibold text-medium text-xl font-bold text-primary-black">
                      {pitch.name}
                    </h3>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="text-medium-weight text-small text-warning-dark font-medium ml-1">
                        {pitch.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-start text-medium-weight text-medium text-gray-700">
                    {pitch.location}
                  </p>

                  <div className="flex items-center">
                    <Link to={`/book/${pitch.id}`} className="bg-gradient-to-r from-primary-orange via-warning-dark to-warning-light hover:brightness-110 text-warning-dark px-10 py-3 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300">
                      JOIN VIA APP
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/pitches" className="inline-block bg-gradient-to-r from-primary-orange/20 via-warning-light/20 to-primary-beige/20 text-primary-black px-8 py-3 rounded-lg font-medium transition-all shadow hover:shadow-lg border border-primary-orange/20 hover:scale-105">
              View All Games
            </Link>


          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-25 via-primary-beige to-secondary-orange-25/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-semibold text-large text-3xl font-bold text-primary-black mb-4">
              WHY BOOK WITH US?
            </h2>
            <p className="text-medium-weight text-medium text-lg text-gray-100 max-w-2xl mx-auto">
              We make it easy to find and book sports facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-beige/70 via-white to-secondary-orange-25/70 p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border border-primary-orange/10">
              <div className="w-12 h-12 bg-secondary-orange-50/30 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-semibold text-medium text-xl font-bold text-warning-dark mb-2">
                Easy and Convenient
              </h3>
              <p className="text-medium-weight text-medium text-gray-100">
                Book pitches anytime, anywhere with just a few taps on your phone.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-beige/70 via-white to-secondary-orange-25/70 p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border border-primary-orange/10">
              <div className="w-12 h-12 bg-secondary-orange-50/30 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <h3 className="text-semibold text-medium text-xl font-bold text-warning-dark mb-2">
                Zero Commitment
              </h3>
              <p className="text-medium-weight text-medium text-gray-100">
                No long-term contracts or memberships. Book only when you want to play.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-beige/70 via-white to-secondary-orange-25/70 p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 border border-primary-orange/10">
              <div className="w-12 h-12 bg-secondary-orange-50/30 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-6 h-6 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-semibold text-medium text-xl font-bold text-warning-dark mb-2">
                Verified Quality
              </h3>
              <p className="text-medium-weight text-medium text-gray-100">
                All pitches are verified and rated by real players to ensure quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-black via-primary-orange to-warning-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-semibold text-large text-3xl md:text-4xl font-bold text-primary-black drop-shadow mb-4">
                Ready to Find Your Perfect Pitch?
              </h2>
              <p className="text-medium-weight text-medium text-secondary-orange-50 mb-6">
                Download our app now and start booking sports facilities in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="bg-warning-dark hover:bg-warning-light text-white px-8 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg border border-white/20">
                  Download App
                </Link>
                <Link to="/learn-more" className="bg-gradient-to-r from-white via-primary-beige to-secondary-orange-25 text-primary-black px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl border border-primary-white/40 hover:scale-105 duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-gradient-to-br from-white via-primary-beige to-secondary-orange-25 rounded-2xl p-8 shadow-2xl border border-secondary-orange-50/30 animate-fade-in">
                <h3 className="text-semibold text-medium text-xl font-bold text-primary-black mb-4">
                  Join thousands of players already using Vaya
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-warning-dark mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="text-medium-weight text-medium text-primary-black">
                      500+ sports facilities across India
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-warning-dark mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="text-medium-weight text-medium text-primary-black">
                      10,000+ bookings every month
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-warning-dark mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="text-medium-weight text-medium text-primary-black">
                      4.8/5 average rating from users
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default MainSection;