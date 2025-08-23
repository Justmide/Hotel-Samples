import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Booking from './Pages/Booking'
import Contacts from './Pages/Contacts'
import Payment from './Pages/Payment'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<h1 className="text-center mt-20 text-3xl">404 - Page Not Found</h1>} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App