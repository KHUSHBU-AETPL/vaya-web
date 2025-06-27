import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// No need to import images from public folder
import AboutUs from './AboutUs';
import AppInfo from './AppInfo';
import DownloadApp from './DownloadApp';
import Newsletter from "./Newsletter";
import Questions from './Questions';
import Support from "./Support";

const AllScreens = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="all-screens-container w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-section py-20 px-4 sm:px-6 lg:px-8 relative" style={{ minHeight: '600px' }}>
        {/* Background Image Container with Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jY2VyJTIwZmllbGR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Football Field" 
            className="w-full h-full object-cover animate-float" 
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black/50 via-primary-black/40 to-primary-black/70"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-orange/20 blur-3xl animate-float2"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary-orange/20 blur-3xl animate-float"></div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h1 className="text-semibold text-xlarge md:text-5xl lg:text-6xl text-primary-white mb-6 glow-text">Welcome to Vaya</h1>
          <p className="text-medium-weight text-medium md:text-large text-primary-white mb-10">Your Ultimate Football Experience</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/football/play-with-vaya" className="bg-primary-orange hover:bg-warning-dark text-primary-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:scale-105 glow-btn animated-border">
              <span className="text-semibold text-medium">Play Football</span>
            </a>
            <a href="/download" className="bg-primary-white hover:bg-primary-beige text-primary-orange px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:scale-105">
              <span className="text-semibold text-medium">Download App</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        <AppInfo />
        <AboutUs />
        <DownloadApp />
        <Questions />
        <Support />
        <Newsletter />
      </div>
    </div>
  );
};

export default AllScreens;
