import React from 'react';
import Header from './components/Header';
import Hero from './components/hero/Hero';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="font-[Poppins] antialiased">
      <Header />
      <Hero />
      <About />
      <ScrollToTop />
      
      <footer className="bg-[#091235] text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Horizn. All rights reserved.</p>
      </footer>
    </div>
  );
}