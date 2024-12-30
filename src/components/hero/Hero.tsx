import React from 'react';
import type { HeroProps } from './types';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

export default function Hero({ className = '' }: HeroProps) {
  return (
    <section className={`relative w-full overflow-hidden pt-20 pb-16 ${className}`}>
      <HeroBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroContent />
      </div>
    </section>
  );
}