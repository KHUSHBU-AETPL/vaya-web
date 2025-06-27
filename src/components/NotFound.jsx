import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary-beige flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-md w-full bg-primary-white rounded-3xl shadow-lg p-8 text-center">
        <h1 className="text-6xl font-bold text-primary-orange mb-4">404</h1>
        <h2 className="text-2xl font-bold text-primary-black mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-primary-orange text-primary-white px-6 py-3 rounded-xl hover:bg-warning-dark transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
