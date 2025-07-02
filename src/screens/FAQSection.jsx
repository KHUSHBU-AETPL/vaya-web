import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = () => {
  return (
    <section className="bg-primary-beige py-12 sm:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-secondary-orange-25 text-primary-orange text-xs font-semibold px-3 py-1 rounded-full mb-3 sm:mb-4">
          FAQ {/* TODO(i18n): "FAQ" */}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-primary-dark mb-4 sm:mb-6">
          Any questions? We got you. {/* TODO(i18n): "Any questions? We got you." */}
        </h2>
        <p className="text-base sm:text-lg text-primary-dark-gray max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
          In our FAQ section, you'll find everything you need to know about our football games, how we work, and how to collaborate with us. {/* TODO(i18n): "In our FAQ section, you'll find everything you need to know about our football games, how we work, and how to collaborate with us." */}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Left Column FAQ Items */}
          <div>
            {/* FAQ Item 1 */}
            <FAQItem
              question="How does Vaya work?"
              answer="Vaya makes it possible to play casual football in Barcelona, in a flexible and accessible way. In a few clicks you can play your favorite game: download the app, select a match, sign up and you're ready to go! All games have an organiser that makes sure that the game is flowing. Balls and bibs are provided, you only have to bring excitement and have your celebration dance ready."
            />
            
            {/* FAQ Item 3 */}
            <FAQItem
              question="Can anyone join?"
              answer="Everyone over 18 years can join a game with Vaya."
              className="mt-4 sm:mt-6"
            />
          </div>
          
          {/* Right Column FAQ Items */}
          <div>
            {/* FAQ Item 2 */}
            <FAQItem
              question="Can I play together with friends?"
              answer="Yes! You can either sign them up in the app, or share the game link, so they can join the same match."
            />
            
            {/* FAQ Item 4 */}
            <FAQItem
              question="What's the price per game?"
              answer="Vaya works with a demand base pricing, that means that the prices are variable, based on timing and location. The prices range from XX to XX per match."
              className="mt-4 sm:mt-6"
            />
          </div>
        </div>

        {/* More FAQ's Link */}
        <a href="#" className="inline-flex items-center text-primary-orange font-semibold mt-8 sm:mt-12 group">
          More FAQ's {/* TODO(i18n): "More FAQ's" */}
          {/* TODO(icon): Replace with actual right arrow icon from assets/icons */}
          <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform">&#x2192;</span> {/* Right arrow character */}
        </a>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-white rounded-xl p-4 sm:p-6 shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md ${className}`} onClick={toggleOpen}>
      <div className="flex justify-between items-center gap-3">
        <p className="text-base sm:text-lg font-semibold text-primary-dark">
          {question} {/* TODO(i18n): Localize question */}
        </p>
        {/* TODO(icon): Replace with actual arrow/chevron icon from assets/icons */}
        <FaChevronDown className={`text-primary-dark-gray text-lg sm:text-xl flex-shrink-0 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-3 sm:mt-4' : 'max-h-0 opacity-0'}`}
      > {/* Smooth animation for opening/closing */}
        <p className="text-sm sm:text-base leading-relaxed text-justify text-primary-dark-gray">
          {answer} {/* TODO(i18n): Localize answer */}
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
