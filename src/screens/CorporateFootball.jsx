import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CorporateFootball = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-orange mb-8 text-center">Corporate football</h1>
          
          <p className="text-primary-black text-lg mb-6">
            Do you work for a company, co-working or office and are you looking for 
            private match, field rental or a corporate battle?
          </p>
          
          <p className="text-primary-black text-lg">
            Reach out <Link to="/support" className="text-primary-orange font-semibold hover:underline">here</Link> to find out about the possibilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorporateFootball;
