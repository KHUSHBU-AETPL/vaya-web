import './App.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ScrollToTop from './components/ScrollToTop'

// Font imports
import '@fontsource/dm-sans'; // Defaults to weight 400
import '@fontsource/dm-sans/500.css'; // Medium
import '@fontsource/dm-sans/600.css'; // Semi Bold
import '@fontsource/dm-sans/900.css'; // Black

// Layout components
import Layout from './components/layout'

// Lazy-loaded page components
// New page components using reusable sections
const HomePage = lazy(() => import('./pages/Home'))
const FAQPage = lazy(() => import('./pages/FAQ'))
const PlayFootballPage = lazy(() => import('./pages/PlayFootball'))
const AboutPage = lazy(() => import('./pages/About'))
const ContactPage = lazy(() => import('./pages/Contact'))
const SupportPage = lazy(() => import('./pages/Support/SupportPage'))

// PlayFootball subpages
const PlayPage = lazy(() => import('./pages/PlayFootball/Play'))
const CorporatePage = lazy(() => import('./pages/PlayFootball/Corporate'))
const PickupGamesPage = lazy(() => import('./pages/PlayFootball/PickupGames'))
const LeaguesTournamentsPage = lazy(() => import('./pages/PlayFootball/LeaguesTournaments'))
const PrivateSessionsPage = lazy(() => import('./pages/PlayFootball/PrivateSessions/PrivateSessionsPage'))
const FieldRentalsPage = lazy(() => import('./pages/PlayFootball/FieldRentals/FieldRentalsPage'))

// Legacy page components
const SupportSection = lazy(() => import('./screens/SupportSection'))
const PrivateSessionsSection = lazy(() => import('./screens/PrivateSessionsSection'))
const FieldRentalsScreen = lazy(() => import('./screens/FieldRentalsScreen'))

// Legal pages
const RefundPolicyPage = lazy(() => import('./pages/Legal/RefundPolicy/RefundPolicyPage'))
const BookingPolicyPage = lazy(() => import('./pages/Legal/BookingPolicy/BookingPolicyPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/Legal/PrivacyPolicy'))

// Legacy components for backward compatibility
const AboutScreen = lazy(() => import('./screens/AboutScreen'))
const PlayFootballWithVaya = lazy(() => import('./screens/PlayFootballWithVaya'))
const PickupGamesSection = lazy(() => import('./screens/PickupGamesSection'))
const PibeLeaguesTournamentsScreen = lazy(() => import('./screens/PibeLeaguesTournamentsScreen'))
const CorporateFootballScreen = lazy(() => import('./screens/CorporateFootballScreen'))
const ContactScreen = lazy(() => import('./screens/ContactScreen'))

// For backward compatibility
const HeroSection = lazy(() => import('./screens/HeroSection'))
const FAQSection = lazy(() => import('./screens/FAQSection'))
const PlayFootballSection = lazy(() => import('./screens/PlayFootballSection'))
// LoadingSpinner component is now imported in Layout

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

// Layout component is now imported from './components/layout'

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Routes>
      {/* Main routes using new page components */}
      <Route path="/" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        </Layout>
      } />
      <Route path="/faq" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <FAQPage />
          </Suspense>
        </Layout>
      } />
      <Route path="/about" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <AboutPage />
          </Suspense>
        </Layout>
      } />
      <Route path="/contact" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <ContactPage />
          </Suspense>
        </Layout>
      } />
      
      {/* Play Football main page and subpages */}
      <Route path="/play-football" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <PlayFootballPage />
          </Suspense>
        </Layout>
      } />
      
      {/* Play Football subpages */}
      <Route path="/play-football/*">
        <Route index element={<Navigate to="/play-football" replace />} />
        <Route path="play" element={
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <PlayPage />
            </Suspense>
          </Layout>
        } />
        <Route path="pickup-games" element={
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <PickupGamesPage />
            </Suspense>
          </Layout>
        } />
        <Route path="leagues-tournaments" element={
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <LeaguesTournamentsPage />
            </Suspense>
          </Layout>
        } />
        <Route path="corporate" element={
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <CorporatePage />
            </Suspense>
          </Layout>
        } />
        
        {/* Private Sessions and Field Rentals pages */}
        <Route path="private-sessions" element={
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateSessionsPage />
            </Suspense>
          </Layout>
        } />
        <Route path="field-rentals" element={
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <FieldRentalsPage />
            </Suspense>
          </Layout>
        } />
      </Route>
      
      {/* Legal routes */}
      <Route path="/refund-policy" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <RefundPolicyPage />
          </Suspense>
        </Layout>
      } />
      <Route path="/booking-policy" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <BookingPolicyPage />
          </Suspense>
        </Layout>
      } />
      <Route path="/privacy-policy" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <PrivacyPolicyPage />
          </Suspense>
        </Layout>
      } />
      <Route path="/support" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <SupportPage />
          </Suspense>
        </Layout>
      } />
      
      {/* Legacy routes for backward compatibility */}
      <Route path="/hero" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <HeroSection />
          </Suspense>
        </Layout>
      } />
      <Route path="/faq-old" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <FAQSection />
          </Suspense>
        </Layout>
      } />
      <Route path="/about-old" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <AboutScreen />
          </Suspense>
        </Layout>
      } />
      <Route path="/contact-old" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <ContactScreen />
          </Suspense>
        </Layout>
      } />
      <Route path="/play-football-old" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <PlayFootballSection />
          </Suspense>
        </Layout>
      } />
      
      {/* Redirect for old URLs */}
      <Route path="/play-football/play-football" element={<Navigate to="/play-football/play" replace />} />
      <Route path="/play-football/corporate-football" element={
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <CorporateFootballScreen />
          </Suspense>
        </Layout>
      } />
      
      {/* 404 route */}
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
    </>
  );
}

export default App
