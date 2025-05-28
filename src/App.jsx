import './App.css'
import WelcomeScreen from './screens/WelcomeScreen'
import Navbar from './screens/Navbar'
import { Routes, Route } from 'react-router'
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
