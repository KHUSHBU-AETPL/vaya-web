import React, { Suspense } from 'react';
import Navbar from './Navbar';
import FooterSection from './Footer';
import LoadingSpinner from '../common/LoadingSpinner';

// Layout component that includes common elements like Navbar and Footer
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="content-container">
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
      </main>
      <FooterSection />
    </>
  );
};

export default Layout;
