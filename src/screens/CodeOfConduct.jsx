import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CodeOfConduct = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-orange mb-8 text-center">Code of Conduct</h1>
          
          <p className="text-primary-black text-lg mb-6">
            Are you a club, bar, association, brand, or sports venue interested in partnering 
            with us? Whether you're looking to collaborate on events, promotions, or unique 
            experiences, we'd love to hear your ideas 👋
          </p>
          
          <p className="text-primary-black text-lg mb-6">
            If you have a proposal or an exciting idea, please don't hesitate to reach out. 
            Contact us at <a href="mailto:support@fcurban.com" className="text-primary-orange font-semibold hover:underline">support@fcurban.com</a>, and let's explore how we can work 
            together!
          </p>
          
          <p className="text-primary-black text-lg">
            We're excited to connect and create something great! ⚡
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
