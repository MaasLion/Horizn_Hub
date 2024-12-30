import React from 'react';
import { ArrowRight } from 'lucide-react';
import CareerFeatures from './CareerFeatures';

export default function HeroContent() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="w-full md:w-3/5 pt-8 md:pt-16">
        <div className="max-w-xl mx-auto md:mx-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#091235] mb-6 animate-fade-in">
            Erreiche deine Traumkarriere mit Horizn
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 animate-fade-in animation-delay-200">
            Deine Zukunft sieht besser aus als du denkst
          </p>
          <a 
            href="https://horizn-app.beehiiv.com/subscribe"
            className="w-full sm:w-auto bg-[#B68D40] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-[#091235] transition-all duration-300 flex items-center justify-center sm:justify-start group animate-fade-in animation-delay-400"
          >
            <span>Hol dir deinen exklusiven Zugang</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="mt-12">
            <CareerFeatures />
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/5 flex justify-center items-center mt-8 md:mt-0">
        <img
          src="/start1_DE.png"
          alt="Horizn Start"
          className="w-[50%] md:w-[80%] max-w-sm object-contain animate-fade-in animation-delay-200"
        />
      </div>
    </div>
  );
}