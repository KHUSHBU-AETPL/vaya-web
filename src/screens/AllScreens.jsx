import React from 'react';
import AboutUs from './AboutUs';
import AppInfo from './AppInfo';
import DownloadApp from './DownloadApp';
import Footer from './Footer';
import Newsletter from "./Newsletter";
import Questions from './Questions';
import Support from "./Support";

const AllScreens = () => (
  <div>
    <AppInfo />
    <AboutUs />
    <DownloadApp />
    <Questions />
      <Support />
      <Newsletter />
    <Footer />
  </div>
);

export default AllScreens;
