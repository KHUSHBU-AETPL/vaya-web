import React from "react";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
];

const faqs = [
  "How is the game’s cancellation policy?",
  "Why is my game canceled?",
  "What is the average age of players in our games?",
  "How are games balanced?",
];

const Support = () => (
  <div
    className="bg-primary-beige flex items-center justify-center px-4 py-8"
  >
    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
      
      {/* Left Panel */}
      <div className="bg-primary-white text-primary-black p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-semibold text-large mb-4">Hi there 👋</h2>
          <p className="text-medium text-regular mb-6">How can we help?</p>

          <button className="bg-primary-orange text-white px-4 py-2 rounded-full text-small font-medium mb-4 transition hover:bg-orange-600">
            Send us a message
          </button>

          <input
            className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-orange"
            placeholder="Search for help"
          />

          <ul className="mt-6 space-y-3 max-h-48 overflow-y-auto pr-2">
            {faqs.map((faq, i) => (
              <li
                key={faq}
                className={`text-gray-900 bg-white rounded-xl px-4 py-3 cursor-pointer border transition ${
                  i === faqs.length - 1
                    ? "border-primary-orange bg-orange-50"
                    : "border-gray-200 hover:bg-orange-100"
                }`}
              >
                {faq}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Panel */}
      <div className="p-6 md:w-1/2 flex flex-col items-center justify-center bg-primary-white text-center">
        <div className="flex -space-x-4 mb-4">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Team member"
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
            />
          ))}
        </div>
        <h3 className="text-semibold text-large text-primary-black mb-2">
          STILL HAVE QUESTIONS?
        </h3>
        <p className="text-gray-700 text-medium text-regular mb-6 max-w-xs">
          Can't find the answer you're looking for? Please contact our friendly team.
        </p>
        <button className="bg-primary-orange text-white px-6 py-2 rounded-full text-small font-medium transition hover:bg-orange-600">
          CONTACT
        </button>
      </div>
    </div>
  </div>
);

export default Support;
