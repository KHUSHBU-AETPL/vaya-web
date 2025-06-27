import React, { useEffect } from "react";

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary-beige py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="bg-primary-white rounded-3xl shadow-lg overflow-hidden p-8 sm:p-12 w-full md:w-3/4 lg:w-2/3">
          <h2 className="text-3xl font-bold text-primary-orange mb-8">Contact Us</h2>
          
          <section className="mb-10">
            <div className="mb-12">
              <div className="flex justify-center">
                {/* Contact Information */}
                <div className="space-y-6 flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-primary-black mb-4 text-center">Get in Touch</h3>
                  
                  <div className="space-y-4 text-center">
                    <div>
                      <h4 className="text-lg font-semibold text-primary-black">Address:</h4>
                      <p className="text-primary-black">
                        Carrer Hartzenbusch 8-10, 1-2<br />
                        08014 Barcelona<br />
                        Spain
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-primary-black">Email:</h4>
                      <a href="mailto:brit@vaya-sports.com" className="text-primary-orange hover:underline">
                        brit@vaya-sports.com
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-primary-black">Phone:</h4>
                      <p className="text-primary-black">Tel: pending</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-primary-black">Contact Person:</h4>
                      <p className="text-primary-black">
                        Birgit Ottilie Jeanine Hermans<br />
                        NIE: Y5696892J
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Map or Image */}
                {/* <div className="bg-gray-100 rounded-lg flex items-center justify-center min-h-[300px]">
                  <div className="text-center p-6">
                    <p className="text-lg text-gray-500">Map will be integrated here</p>
                    <p className="text-sm text-gray-400 mt-2">Coming soon</p>
                  </div>
                </div> */}
              </div>
            </div>
            
            <div className="border-t border-gray-200 my-8"></div>
            
            {/* <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary-black mb-4">Contact Form</h3>
              <p className="text-primary-black text-lg mb-6 ml-8 md:ml-12">
                Have a question or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form className="space-y-6 ml-8 md:ml-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary-orange text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div> */}
            
            {/* <div className="mt-12 p-6 bg-gray-100 rounded-xl">
              <h3 className="text-xl font-bold text-primary-black mb-4">Follow Us</h3>
              <p className="text-primary-black text-lg">
                Stay connected with us on social media for updates, events, and more.
              </p>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-primary-orange hover:text-orange-600">
                  Instagram
                </a>
                <a href="#" className="text-primary-orange hover:text-orange-600">
                  Facebook
                </a>
                <a href="#" className="text-primary-orange hover:text-orange-600">
                  LinkedIn
                </a>
                <a href="#" className="text-primary-orange hover:text-orange-600">
                  TikTok
                </a>
              </div>
            </div> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
