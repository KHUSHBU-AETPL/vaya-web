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
const FAQSection = lazy(() => import('./screens/FAQSection'))
const AboutScreen = lazy(() => import('./screens/AboutScreen'))
const SupportSection = lazy(() => import('./screens/SupportSection'))
const PlayFootballSection = lazy(() => import('./screens/PlayFootballSection'))
const PlayFootballWithVaya = lazy(() => import('./screens/PlayFootballWithVaya'))
const PickupGamesSection = lazy(() => import('./screens/PickupGamesSection'))
const PrivateSessionsSection = lazy(() => import('./screens/PrivateSessionsSection'))
const PibeLeaguesTournamentsScreen = lazy(() => import('./screens/PibeLeaguesTournamentsScreen'))
const FieldRentalsScreen = lazy(() => import('./screens/FieldRentalsScreen'))
const CorporateFootballScreen = lazy(() => import('./screens/CorporateFootballScreen'))
const ContactScreen = lazy(() => import('./screens/ContactScreen'))
const RefundPolicyScreen = lazy(() => import('./screens/RefundPolicyScreen'))
const BookingPolicyScreen = lazy(() => import('./screens/BookingPolicyScreen'))
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
      <Route path="/faq" element={<Layout><FAQSection /></Layout>} />
      <Route path="/about" element={<Layout><AboutScreen /></Layout>} />
      <Route path="/support" element={<Layout><SupportSection /></Layout>} />
      
      {/* Legal routes */}
      <Route path="/contact" element={<Layout><ContactScreen /></Layout>} />
      <Route path="/refund-policy" element={<Layout><RefundPolicyScreen /></Layout>} />
      <Route path="/booking-policy" element={<Layout><BookingPolicyScreen /></Layout>} />
      
      {/* Play Football section with nested routes */}
      <Route path="/play-football" element={<Layout><PlayFootballSection /></Layout>} />
      <Route path="/play-football/*">
        <Route index element={<Navigate to="/play-football" replace />} />
        <Route path="play" element={<Layout><PlayFootballWithVaya /></Layout>} />
        <Route path="pickup-games" element={<Layout><PickupGamesSection /></Layout>} />
        <Route path="leagues-tournaments" element={<Layout><PibeLeaguesTournamentsScreen /></Layout>} />
        <Route path="private-sessions" element={<Layout><PrivateSessionsSection /></Layout>} />
        <Route path="field-rentals" element={<Layout><FieldRentalsScreen /></Layout>} />
        <Route path="corporate" element={<Layout><CorporateFootballScreen /></Layout>} />
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
