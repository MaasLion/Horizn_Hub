import React from 'react';

export default function HeroImage() {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="w-full max-w-sm aspect-[3/4] relative">
        <img
          src="/start1_DE.png"
          alt="Horizn Start"
          className="w-full h-full object-contain rounded-lg animate-fade-in animation-delay-200"
          loading="eager"
        />
      </div>
    </div>
  );
}