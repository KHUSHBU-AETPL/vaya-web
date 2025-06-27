import React, { useState } from "react";

const faqData = [
  {
    q: "How does Vaya work?",
    a: "Vaya connects football lovers to local games and venues, making it easy to join or organize matches in your area.",
  },
  {
    q: "How can I join a game?",
    a: "If you found a game that you want to join, simply click the 'Join game' button. Make sure your name appears in the attendance list and you are good to go.",
  },
  {
    q: "Can anybody create a new game?",
    a: "Yes – you can help build the Vaya community!",
  },
];

const Questions = () => {
  const [open, setOpen] = useState(null);

  return (
    <div
      className="bg-primary-beige py-8 px-4 font-sans text-primary-black flex justify-center items-center"
    >
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-[0_6px_24px_rgba(0,0,0,0.06)] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left: Heading & Description */}
        <div className="p-10 md:p-12 flex flex-col justify-center bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-black leading-tight mb-4">
            Any questions? <br /> We got you.
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-md">
            Our FAQ section is a great place to start if you’ve got a question about your local football games, how we operate, what to expect, or want more details on partnering with us.
          </p>
          <a href="#" className="text-primary-orange font-semibold hover:underline">More FAQs →</a>
        </div>

        {/* Right: FAQ Accordion */}
        <div className="p-8 md:p-10 flex flex-col gap-4">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl bg-white p-5 hover:bg-orange-50 transition-colors cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center font-semibold text-primary-black text-base">
                {item.q}
                <span className="text-xl">{open === i ? "−" : "+"}</span>
              </div>
              {open === i && (
                <div className="mt-3 text-gray-700 text-sm leading-relaxed">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
