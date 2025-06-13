import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Connect to real API
  };

  return (
    <div className="bg-primary-beige flex items-center justify-center px-4 py-8">
      <div className="bg-primary-white   rounded-3xl p-8 sm:p-10 max-w-lg w-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-300">

        {/* Header */}
        <h2 className="text-primary-black text-3xl font-semibold mb-2">Join Us</h2>
        <p className="text-gray-100 text-sm mb-6">
          You’ll find football games every day.
        </p>

        {/* Form or Thank You */}
        {submitted ? (
          <div className="flex items-center gap-3 text-success-dark font-semibold text-center justify-center py-6">
            <FaCheckCircle className="text-xl" />
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label
              htmlFor="newsletter-email"
              className="block text-primary-black text-sm"
            >
              Sign up to the Newsletter
            </label>
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-primary-white text-primary-black placeholder-gray-100 border border-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all"
              />
              <button
                type="submit"
                className="bg-success-dark hover:bg-success-light text-white px-5 py-2 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
