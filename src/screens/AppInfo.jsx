import React from "react";
import { FaDownload, FaMapMarkerAlt, FaFutbol } from "react-icons/fa";

const AppInfo = () => (
  <div className="bg-primary-beige py-8 px-4 flex justify-center items-center">
    <div className="w-full max-w-6xl bg-primary-white rounded-3xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-8 sm:p-12 md:flex md:items-center gap-4 relative overflow-hidden">

      {/* App Mockup */}
      <div className="flex justify-center md:justify-start">
        <div className="w-40 h-80 bg-gray-100 border border-gray-50 rounded-2xl flex items-center justify-center text-center text-gray-300 font-medium text-sm shadow-inner">
          Mobile<br />App<br />Mockup
        </div>
      </div>

      {/* Text & Steps */}
      <div className="flex-1">
        <h2 className="text-primary-orange text-3xl font-bold mb-4">The Vaya App</h2>
        <p className="text-black text-base mb-6 leading-relaxed">
          At <span className="font-semibold text-primary-orange">Vaya</span>, we’re building a community where football is inclusive and accessible to everyone. Book a game in just a few taps and join players near you!
        </p>

        <ul className="space-y-6 text-secondary-orange-50 text-base">
          {/* Step 1 */}
          <li>
            <a
              href="https://apps.apple.com/" // Replace with your App Store link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group transition-all duration-300 hover:text-primary-orange"
            >
              <span className="w-12 h-12 flex items-center justify-center bg-primary-orange/10 text-primary-orange rounded-full shadow-md group-hover:shadow-[0_0_0_4px_rgba(255,125,36,0.2)] group-hover:scale-110 transition-all duration-300">
                <FaDownload className="text-xl group-hover:rotate-12 transition-transform" />
              </span>
              <span className="font-medium group-hover:underline group-hover:decoration-2">
                Download the Vaya app
              </span>
            </a>
          </li>

          {/* Step 2 */}
          <li>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group transition-all duration-300 hover:text-primary-orange"
            >
              <span className="w-12 h-12 flex items-center justify-center bg-primary-orange/10 text-primary-orange rounded-full shadow-md group-hover:shadow-[0_0_0_4px_rgba(255,125,36,0.2)] group-hover:scale-110 transition-all duration-300">
                <FaMapMarkerAlt className="text-xl group-hover:-rotate-12 transition-transform" />
              </span>
              <span className="font-medium group-hover:underline group-hover:decoration-2">
                Find your game
              </span>
            </a>
          </li>

          {/* Step 3 */}
          <li>
            <a
              href="https://vaya-booking-page.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group transition-all duration-300 hover:text-primary-orange"
            >
              <span className="w-12 h-12 flex items-center justify-center bg-primary-orange/10 text-primary-orange rounded-full shadow-md group-hover:shadow-[0_0_0_4px_rgba(255,125,36,0.2)] group-hover:scale-110 transition-all duration-300">
                <FaFutbol className="text-xl group-hover:rotate-6 transition-transform" />
              </span>
              <span className="font-medium group-hover:underline group-hover:decoration-2">
                Book and enjoy!
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default AppInfo;
