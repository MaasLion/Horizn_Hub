import React from 'react';
import { ArrowRight } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

export default function HeroHeadline() {
  return (
    <div className="flex flex-col items-start space-y-12 py-12 md:py-0">
      <img 
        src="/Horizn ..png" 
        alt="Horizn"
        className="h-12 w-auto mb-8 animate-fade-in"
      />
      
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#091235] animate-fade-in">
          Willkommen bei Horizn
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 animate-fade-in animation-delay-200">
          Deine Zukunft sieht besser aus als du denkst
        </p>
        
        <PrimaryButton onClick={() => console.log('Create account clicked')}>
          <span>Account erstellen</span>
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </PrimaryButton>
      </div>
    </div>
  );
}