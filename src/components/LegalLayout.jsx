import React from 'react';
import { Outlet } from 'react-router-dom';

const LegalLayout = () => {
  return (
    <div className="bg-primary-beige min-h-screen py-12 px-4 sm:px-6 lg:px-8 w-full">
      <Outlet />
    </div>
  );
};

export default LegalLayout;
