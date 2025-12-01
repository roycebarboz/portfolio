import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <div className="copyright">
        <p>Copyright © {new Date().getFullYear()} Royce Barboz. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
