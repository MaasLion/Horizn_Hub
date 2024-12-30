import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#091235] shadow-lg' : 'bg-[#091235]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="/Horizn ..png" 
              alt="Horizn"
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-[#B68D40] transition-colors text-sm">Über Horizn</a>
            <a 
              href="https://horizn-app.beehiiv.com/subscribe" 
              className="bg-[#B68D40] text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#091235] transition-colors text-sm"
            >
              Join Horizn Hub
            </a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#091235] border-t border-white/10">
              <a href="#about" className="block px-3 py-2 text-white hover:text-[#B68D40] text-sm">Über Horizn</a>
              <a 
                href="https://horizn-app.beehiiv.com/subscribe"
                className="w-full text-center bg-[#B68D40] text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#091235] transition-colors text-sm"
              >
                Join Horizn Hub
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}