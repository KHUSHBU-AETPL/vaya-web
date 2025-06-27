import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import '@fontsource/dm-sans'; // Defaults to weight 400
import '@fontsource/dm-sans/500.css'; // Medium
import '@fontsource/dm-sans/600.css'; // Semi Bold
import '@fontsource/dm-sans/900.css'; // Black

// Import ScrollToTop component
import ScrollToTop from './components/ScrollToTop';

// Import components that are always needed (no lazy loading for layout)
import Navbar from './screens/Navbar';
import Footer from './screens/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import NotFound from './components/NotFound';
import LegalLayout from './components/LegalLayout';
import BusinessLayout from './components/BusinessLayout';
import FootballLayout from './components/FootballLayout';

// Lazy load all page components for better performance
const AllScreens = lazy(() => import('./screens/AllScreens'));
const FAQ = lazy(() => import('./screens/FAQ'));
const AboutUs = lazy(() => import('./screens/AboutUs'));
const AboutUsDetailed = lazy(() => import('./screens/AboutUsDetailed'));
const DownloadApp = lazy(() => import('./screens/DownloadApp'));
const Support = lazy(() => import('./screens/Support'));
const Contact = lazy(() => import('./screens/Contact'));

// Legal & Policy Pages
const PrivacyPolicy = lazy(() => import('./screens/PrivacyPolicy'));
const DataDeletion = lazy(() => import('./screens/DataDeletion'));
const CodeOfConduct = lazy(() => import('./screens/CodeOfConduct'));
const TermsOfUse = lazy(() => import('./screens/TermsOfUse'));
const BookingRefundCanc = lazy(() => import('./screens/BookingRefundCanc'));
const BookingPolicy = lazy(() => import('./screens/BookingPolicy'));

// Business Pages
const BecomeOrganiser = lazy(() => import('./screens/BecomeOrganiser'));
const CorporateFootball = lazy(() => import('./screens/CorporateFootball'));
const PartnerWithUs = lazy(() => import('./screens/PartnerWithUs'));

// Football Services
const PickUpGames = lazy(() => import('./screens/PickUpGames'));
const PrivateSessions = lazy(() => import('./screens/PrivateSessions'));
const FieldRentals = lazy(() => import('./screens/FieldRentals'));
const CustomizedCorporateFootball = lazy(() => import('./screens/CustomizedCorporateFootball'));
const PibeLeaguesTournaments = lazy(() => import('./screens/PibeLeaguesTournaments'));
const PlayFootballWithVaya = lazy(() => import('./screens/PlayFootballWithVaya'));

// Admin (consider moving to separate route file)
const AdminLayout = lazy(() => import('./admin/components/AdminLayout'));
const Dashboard = lazy(() => import('./admin/pages/Dashboard'));

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
       <ScrollToTop />
      <Navbar />
     
      <main className="flex-grow w-full">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<AllScreens />} />
            
            {/* Info & Support Routes */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about/detailed" element={<AboutUsDetailed />} />
            <Route path="/download" element={<DownloadApp />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Legal & Policy Routes */}
            <Route path="/legal" element={<LegalLayout />}>
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="data-deletion" element={<DataDeletion />} />
              <Route path="code-of-conduct" element={<CodeOfConduct />} />
              <Route path="terms-of-use" element={<TermsOfUse />} />
              <Route path="booking-policy" element={<BookingPolicy />} />
              <Route path="refund-cancellation-policy" element={<BookingRefundCanc />} />
            </Route>
            
            {/* Business Routes */}
            <Route path="/business" element={<BusinessLayout />}>
              <Route path="become-organiser" element={<BecomeOrganiser />} />
              <Route path="corporate-football" element={<CorporateFootball />} />
              <Route path="partner-with-us" element={<PartnerWithUs />} />
            </Route>
            
            {/* Football Services Routes */}
            <Route path="/football" element={<FootballLayout />}>
              <Route path="pickup-games" element={<PickUpGames />} />
              <Route path="private-sessions" element={<PrivateSessions />} />
              <Route path="field-rentals" element={<FieldRentals />} />
              <Route path="customized-corporate-football" element={<CustomizedCorporateFootball />} />
              <Route path="leagues-tournaments" element={<PibeLeaguesTournaments />} />
              <Route path="play-with-vaya" element={<PlayFootballWithVaya />} />
            </Route>
            
            {/* Admin Routes - Consider moving to separate router */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              {/* Add more admin routes here as needed */}
            </Route>
            
            {/* Backward compatibility routes (redirects) */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/data-deletion" element={<DataDeletion />} />
            <Route path="/become-organiser" element={<BecomeOrganiser />} />
            <Route path="/corporate-football" element={<CorporateFootball />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/booking-policy" element={<BookingPolicy />} />
            <Route path="/refund-cancellation-policy" element={<BookingRefundCanc />} />
            
            {/* 404 Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;