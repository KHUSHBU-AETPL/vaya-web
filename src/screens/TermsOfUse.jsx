import React, { useEffect } from "react";

const TermsOfUse = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-primary-orange mb-8">Terms of Use</h2>
          
          <section className="mb-10">
            <div className="mb-12">
              <p className="text-primary-black text-lg mb-4 text-center py-16">
                Coming soon...
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;