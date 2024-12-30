import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0">
      {/* Base color */}
      <div className="absolute inset-0 bg-[#E2E6E7]" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E2E6E7] via-[#E2E6E7]/90 to-[#D1D5D6]" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full">
          <pattern
            id="hero-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40L40 0M0 0L40 40"
              stroke="#091235"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
    </div>
  );
}