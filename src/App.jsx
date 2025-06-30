import './App.css'
import MainSection from './screens/MainSection'
import Navbar from './screens/Navbar'
import FAQ from './screens/FAQ' // Added import statement for FAQ
import { Routes, Route } from 'react-router'
import '@fontsource/dm-sans'; // Defaults to weight 400
import '@fontsource/dm-sans/500.css'; // Medium
import '@fontsource/dm-sans/600.css'; // Semi Bold
import '@fontsource/dm-sans/900.css'; // Black
import HeroSection from './screens/HeroSection';
import AboutScreen from './screens/AboutScreen';
import DownloadApp from './screens/DownloadApp'
import Support from './screens/Support'
import PrivacyPolicy from './screens/PrivacyPolicy';
import DataDeletion from './screens/DataDeletion';
import PlayFootballSection from './screens/PlayFootballSection';
import PlayFootballWithVaya from './screens/PlayFootballWithVaya';
import PickupGamesSection from './screens/PickupGamesSection';
import PrivateSessionsSection from './screens/PrivateSessionsSection';
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HeroSection/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/about" element={<AboutScreen/>}/>
      <Route path="/download" element={<DownloadApp/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/data-deletion" element={<DataDeletion/>}/>
      <Route path="/play-football" element={<PlayFootballSection/>}/>
      <Route path="/play-football/play-football" element={<PlayFootballWithVaya/>}/>
      <Route path="/play-football/pickup-games" element={<PickupGamesSection/>}/>
      <Route path="/play-football/leagues-tournaments" element={<PlayFootballSection/>}/>
      <Route path="/play-football/private-sessions" element={<PrivateSessionsSection/>}/>
      <Route path="/play-football/field-rentals" element={<PlayFootballSection/>}/>
      <Route path="/play-football/corporate-football" element={<PlayFootballSection/>}/>
    </Routes>
    </>
  )
}

export default App
