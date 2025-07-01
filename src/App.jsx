import './App.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'

// Font imports
import '@fontsource/dm-sans'; // Defaults to weight 400
import '@fontsource/dm-sans/500.css'; // Medium
import '@fontsource/dm-sans/600.css'; // Semi Bold
import '@fontsource/dm-sans/900.css'; // Black

// Layout components
import Navbar from './screens/Navbar'
import FooterSection from './screens/FooterSection'

// Lazy-loaded page components
const HeroSection = lazy(() => import('./screens/HeroSection'))
const FAQ = lazy(() => import('./screens/FAQ'))
const AboutScreen = lazy(() => import('./screens/AboutScreen'))
const DownloadApp = lazy(() => import('./screens/DownloadApp'))
const Support = lazy(() => import('./screens/Support'))
const PrivacyPolicy = lazy(() => import('./screens/PrivacyPolicy'))
const DataDeletion = lazy(() => import('./screens/DataDeletion'))
const PlayFootballSection = lazy(() => import('./screens/PlayFootballSection'))
const PlayFootballWithVaya = lazy(() => import('./screens/PlayFootballWithVaya'))
const PickupGamesSection = lazy(() => import('./screens/PickupGamesSection'))
const PrivateSessionsSection = lazy(() => import('./screens/PrivateSessionsSection'))
// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

// 404 Not Found page
const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <button onClick={() => window.location.href = '/'} className="back-home-btn">
        Back to Home
      </button>
    </div>
  );
};

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

function App() {
  const location = useLocation();

  return (
    <Routes>
      {/* Main routes */}
      <Route path="/" element={<Layout><HeroSection /></Layout>} />
      <Route path="/faq" element={<Layout><FAQ /></Layout>} />
      <Route path="/about" element={<Layout><AboutScreen /></Layout>} />
      <Route path="/download" element={<Layout><DownloadApp /></Layout>} />
      <Route path="/support" element={<Layout><Support /></Layout>} />
      
      {/* Legal routes */}
      <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
      <Route path="/data-deletion" element={<Layout><DataDeletion /></Layout>} />
      
      {/* Play Football section with nested routes */}
      <Route path="/play-football" element={<Layout><PlayFootballSection /></Layout>} />
      <Route path="/play-football/*">
        <Route index element={<Navigate to="/play-football" replace />} />
        <Route path="play" element={<Layout><PlayFootballWithVaya /></Layout>} />
        <Route path="pickup-games" element={<Layout><PickupGamesSection /></Layout>} />
        <Route path="leagues-tournaments" element={<Layout><PlayFootballSection /></Layout>} />
        <Route path="private-sessions" element={<Layout><PrivateSessionsSection /></Layout>} />
        <Route path="field-rentals" element={<Layout><PlayFootballSection /></Layout>} />
        <Route path="corporate" element={<Layout><PlayFootballSection /></Layout>} />
      </Route>
      
      {/* Redirect for old URLs */}
      <Route path="/play-football/play-football" element={<Navigate to="/play-football/play" replace />} />
      <Route path="/play-football/corporate-football" element={<Navigate to="/play-football/corporate" replace />} />
      
      {/* 404 route */}
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}

export default App
