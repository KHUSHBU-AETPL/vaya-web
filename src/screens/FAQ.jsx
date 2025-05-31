import React, { useState } from 'react';

const faqData = [
  {
    question: 'How do I book a pitch?',
    answer: 'Simply search for your desired location, choose a pitch, select your time slot, and confirm your booking.'
  },
  {
    question: 'Can I cancel my booking?',
    answer: 'Yes, you can cancel up to 24 hours before your booking time for a full refund.'
  },
  {
    question: 'Do you charge any extra fees?',
    answer: 'No hidden fees. The price you see is the price you pay.'
  },
  {
    question: 'Is customer support available?',
    answer: 'Yes, our support team is available 24/7 via chat and email.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 via-orange-100 to-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-12 drop-shadow-sm">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-orange-200 shadow-md bg-gradient-to-r from-white via-orange-50 to-white transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-lg font-semibold text-orange-700 hover:text-orange-900 focus:outline-none transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-40 py-3' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700 text-base">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
