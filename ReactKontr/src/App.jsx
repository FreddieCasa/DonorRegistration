
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
// import Donor from './components/Donor'
import Form from './components/Form'
import NavBar from './components/NavBar';
function App() {


  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<Form />} />
        {/* <Route path="/donor" element={<Donor />} /> */}
        
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </>
  )
}

export default App
