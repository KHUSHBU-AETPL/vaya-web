import './App.css'
import MainSection from './screens/MainSection'
import Navbar from './screens/Navbar'
import Footer from './screens/Footer'
import FAQ from './screens/FAQ' // Added import statement for FAQ
import { Routes, Route } from 'react-router'
import AdminLayout from './admin/components/AdminLayout'
import Dashboard from './admin/pages/Dashboard'
import '@fontsource/dm-sans'; // Defaults to weight 400
import '@fontsource/dm-sans/500.css'; // Medium
import '@fontsource/dm-sans/600.css'; // Semi Bold
import '@fontsource/dm-sans/900.css'; // Black
import AllScreens from './screens/AllScreens'
import AboutUs from './screens/AboutUs'
import AboutUsDetailed from './screens/AboutUsDetailed'
import DownloadApp from './screens/DownloadApp'
import Support from './screens/Support'
import PrivacyPolicy from './screens/PrivacyPolicy';
import DataDeletion from './screens/DataDeletion';
import BecomeOrganiser from './screens/BecomeOrganiser';
import CorporateFootball from './screens/CorporateFootball';
import PartnerWithUs from './screens/PartnerWithUs';
import CodeOfConduct from './screens/CodeOfConduct';
import TermsOfUse from './screens/TermsOfUse';
import BookingRefundCanc from './screens/BookingRefundCanc';
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<AllScreens/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/about/detailed" element={<AboutUsDetailed/>}/>
      <Route path="/download" element={<DownloadApp/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
      </Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/data-deletion" element={<DataDeletion/>}/>
      <Route path="/become-organiser" element={<BecomeOrganiser/>}/>
      <Route path="/corporate-football" element={<CorporateFootball/>}/>
      <Route path="/partner-with-us" element={<PartnerWithUs/>}/>
      <Route path="/code-of-conduct" element={<CodeOfConduct/>}/>
      <Route path="/terms-of-use" element={<TermsOfUse/>}/>
      <Route path="/booking-refund-policy" element={<BookingRefundCanc/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
