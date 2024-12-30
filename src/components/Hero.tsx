import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#091235] opacity-60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            From Ambition to Achievement
          </h1>
          <h2 className="text-xl md:text-2xl text-white mb-8 opacity-90">
            Mentoring young professionals and students to unlock extraordinary careers
          </h2>
          <button className="bg-[#B68D40] text-white px-8 py-3 rounded-md hover:bg-[#88A9C3] transition-all duration-300 flex items-center space-x-2 group">
            <span>Book Your Free Intro Session</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}