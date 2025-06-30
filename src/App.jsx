import './App.css'
import MainSection from './screens/MainSection'
import Navbar from './screens/Navbar'
import FAQ from './screens/FAQ' // Added import statement for FAQ
import { Routes, Route } from 'react-router'
import '@fontsource/dm-sans'; // Defaults to weight 400
import '@fontsource/dm-sans/500.css'; // Medium
import '@fontsource/dm-sans/600.css'; // Semi Bold
import '@fontsource/dm-sans/900.css'; // Black
import AllScreens from './screens/AllScreens'
import AboutUs from './screens/AboutUs'
import DownloadApp from './screens/DownloadApp'
import Support from './screens/Support'
import PrivacyPolicy from './screens/PrivacyPolicy';
import DataDeletion from './screens/DataDeletion';
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<AllScreens/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/download" element={<DownloadApp/>}/>
      <Route path="/support" element={<Support/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/data-deletion" element={<DataDeletion/>}/>
    </Routes>
    </>
  )
}

export default App
