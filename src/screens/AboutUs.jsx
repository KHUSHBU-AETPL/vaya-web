import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => (
  <div className="bg-primary-beige py-8 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
    {/* Content Card */}
    <div className="relative z-10 w-full max-w-6xl bg-primary-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 sm:p-8 lg:p-10 transition-all duration-300">
      
      {/* Section Header */}
      <h2 className="text-primary-orange font-bold text-3xl sm:text-4xl mb-6">
        About Vaya
      </h2>

      {/* Intro Paragraph */}
      <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
        We’re all about high quality games and community feeling. Our mission is to make it possible for everyone to play football, regardless of gender, level, or budget.
      </p>

      {/* Focus Section */}
      <h3 className="text-gray-950 font-semibold text-2xl mb-4">
        Focus and Values
      </h3>

      {/* Feature List */}
      <ul className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          "Inclusive and affordable",
          "Great venues and devoted organisers",
          "Development of Women’s and Mixed Football",
          "Social aspects",
          "No global app, but local quality",
          "Rewarding loyalty",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-3 group">
            <FaCheckCircle className="text-primary-orange mt-1 text-lg group-hover:scale-110 transition-transform" />
            <span className="text-gray-800 text-sm sm:text-base">{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="text-center">
        <a
          href="#"
          className="inline-block bg-primary-orange text-primary-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-all hover:bg-opacity-90 hover:shadow-lg"
        >
          Learn more
        </a>
      </div>
    </div>
  </div>
);

export default AboutUs;
