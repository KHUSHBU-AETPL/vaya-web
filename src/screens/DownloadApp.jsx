import React from "react";

const appMockup = "https://dummyimage.com/170x340/fff/222&text=App+Mockup";
const appStore = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
const playStore = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";

const socialIcons = [
  {
    href: "#",
    svg: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    href: "#",
    svg: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 15h8M8 12h8M8 9h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const DownloadApp = () => (
  <div className="bg-primary-beige py-8 px-6 flex justify-center items-center font-sans text-primary-black">
    <div className="max-w-6xl w-full bg-primary-white rounded-3xl shadow-[0_12px_36px_rgba(0,0,0,0.08)] flex flex-col-reverse md:flex-row overflow-hidden gap-4 transition-all duration-300">

      {/* Text Section */}
      <div className="flex-1 px-8 py-10 sm:px-12 flex flex-col justify-center gap-6">
        <h2 className="text-primary-orange font-bold text-3xl sm:text-4xl leading-tight">
          Download the Vaya App
        </h2>

        <p className="text-gray-100 text-base leading-relaxed max-w-md">
          Book your football game in seconds. Discover matches near you, connect with local players, and enjoy the sport like never before.
        </p>

        <div className="flex gap-4 mt-2">
          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img src={appStore} alt="Download on App Store" className="h-12" />
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img src={playStore} alt="Get it on Google Play" className="h-12" />
          </a>
        </div>

        <div className="flex gap-4 mt-5">
          {socialIcons.map((icon, idx) => (
            <a
              key={idx}
              href={icon.href}
              className="text-primary-black hover:text-primary-orange transition-colors duration-300 hover:scale-110"
            >
              {icon.svg}
            </a>
          ))}
        </div>
      </div>

      {/* Mockup Image */}
      <div className="flex-1 bg-primary-orange/10 flex items-center justify-center p-8 relative">
        <img
          src={appMockup}
          alt="App Mockup"
          className="w-[170px] h-auto rounded-2xl rotate-[-14deg] shadow-[0_16px_32px_rgba(0,0,0,0.2)] bg-white transition-transform duration-500 hover:rotate-[-6deg] hover:scale-105"
        />
      </div>
    </div>
  </div>
);

export default DownloadApp;
