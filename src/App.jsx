import './App.css'
import WelcomeScreen from './screens/WelcomeScreen'
import Navbar from './screens/Navbar'
import { Routes, Route } from 'react-router'
import '@fontsource/dm-sans'; // Defaults to weight 400
import '@fontsource/dm-sans/500.css'; // Medium
import '@fontsource/dm-sans/600.css'; // Semi Bold
import '@fontsource/dm-sans/900.css'; // Black

function App() {

  return (
    <>
    <Navbar/>
  <Routes>
    <Route path="/" element={<WelcomeScreen/>}/>
    
    </Routes>
    </>
  )
}

export default App
