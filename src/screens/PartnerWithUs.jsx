import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PartnerWithUs = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12">
          <section className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-orange mb-8 text-center">Become a partner</h1>
            
            <p className="text-primary-black text-lg mb-6">
              Do you love or app or support our mission?
            </p>
            
            <p className="text-primary-black text-lg">
              Reach our <Link to="/support" className="text-primary-orange font-semibold hover:underline">here</Link> to discuss a partnership or collaboration.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
