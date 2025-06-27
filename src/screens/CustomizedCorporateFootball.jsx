import React, { useEffect } from "react";

const CustomizedCorporateFootball = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-primary-orange mb-8">Customized Corporate Football</h2>
          
          <section className="mb-10">
            <div className="mb-12">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Vaya makes it possible for companies, organizations, or co-working spaces to organize football activities for their staff.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  We offer private sessions, field rentals, tournaments, and leagues tailored to your needs and schedule.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Whether you want a one-time event or a regular competition, we'll work with you to create the right football experience for your team.
                </p>
                
                <p className="text-primary-black text-lg mb-6 leading-relaxed">
                  Once a slot is confirmed, payment can be made through the app or by bank transfer, with an invoice provided if needed.
                </p>
              </div>
              
              <div className="flex justify-center my-8">
                <a href="mailto:support@vaya-sports.com" target="_blank" rel="noopener noreferrer" className="bg-primary-orange hover:bg-primary-orange/90 text-primary-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span className="text-xl font-bold">Contact our Support</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary-black mb-6 text-center">Our Corporate Offerings</h3>
              <ul className="max-w-2xl mx-auto text-primary-black text-lg space-y-5">
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Team building football sessions</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Inter-department tournaments</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Regular corporate leagues</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Special event matches</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Customized football experiences</div>
                </li>
                <li className="flex items-start pl-4">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-2 h-2 bg-primary-orange rounded-full mt-2.5 mr-3"></span>
                  </div>
                  <div className="text-left">Professional organization and management</div>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary-black mb-6 text-center">Benefits for Your Organization</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Team Building</h4>
                  <p className="text-primary-black">Strengthen relationships and improve communication between team members through shared sporting experiences.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Employee Wellness</h4>
                  <p className="text-primary-black">Promote physical activity and mental well-being among your staff with regular football sessions.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Company Culture</h4>
                  <p className="text-primary-black">Foster a positive company culture that values work-life balance and employee engagement.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary-orange mb-3">Hassle-Free Organization</h4>
                  <p className="text-primary-black">We handle all the logistics, allowing you to focus on enjoying the experience with your team.</p>
                </div>
              </div>
            </div> */}

            <div className="mt-12 p-8 bg-gradient-to-r from-primary-beige via-primary-orange/10 to-primary-beige rounded-2xl shadow-inner">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-primary-black mb-4">Ready to Organize Corporate Football?</h3>
                <p className="text-primary-black text-lg mb-8 leading-relaxed">
                  Contact our support team today to discuss your corporate football needs. We'll create a customized solution that perfectly matches your organization's goals and preferences.
                </p>
                <div className="flex justify-center mt-6">
                  <a href="mailto:support@vaya-sports.com" target="_blank" rel="noopener noreferrer" className="bg-primary-orange text-primary-white px-10 py-4 rounded-xl hover:bg-warning-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xl font-bold">Contact Support</span>
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

export default CustomizedCorporateFootball;
