// App.js

import './App.css'
import React , { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './NavBar';
import Products from './Products';
import Home from './Home.js';
import Footer from './Footer.js';
import AboutUs from './AboutUs';


function App() {
  useEffect(() => {
    document.title = 'Zero.Circular';
  }, []);
  return (
    
    <Router>
      
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<AboutUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
