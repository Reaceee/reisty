
import { useState } from 'react'
import "./styles/style.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App