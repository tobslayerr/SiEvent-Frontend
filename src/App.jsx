import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Global/Navbar'
import Footer from './components/Global/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App