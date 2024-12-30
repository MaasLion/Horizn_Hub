import React from 'react';
import type { ButtonProps } from './types';

export default function PrimaryButton({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-[#B68D40] text-white px-8 py-4 rounded-lg
        hover:bg-[#091235] transition-all duration-300
        flex items-center group animate-fade-in animation-delay-400
        ${className}
      `}
    >
      {children}
    </button>
  );
}