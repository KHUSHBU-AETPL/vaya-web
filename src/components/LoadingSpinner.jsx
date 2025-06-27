import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-primary-beige">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-orange"></div>
    </div>
  );
};

export default LoadingSpinner;
