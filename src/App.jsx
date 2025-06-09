import './App.css'
import MainSection from './screens/MainSection'
import Navbar from './screens/Navbar'
import FAQ from './screens/FAQ' // Added import statement for FAQ
import { Routes, Route } from 'react-router'
import AdminLayout from './admin/components/AdminLayout'
import Dashboard from './admin/pages/Dashboard'
import '@fontsource/dm-sans'; // Defaults to weight 400
import '@fontsource/dm-sans/500.css'; // Medium
import '@fontsource/dm-sans/600.css'; // Semi Bold
import '@fontsource/dm-sans/900.css'; // Black

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<MainSection/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
