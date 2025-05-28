import React from 'react';

const WelcomeScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 px-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-3xl p-12 max-w-lg text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Vaya coming soon!!
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Welcome to your modern sports companion.
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
