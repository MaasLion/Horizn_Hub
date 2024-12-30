import React from 'react';
import { Linkedin } from 'lucide-react';
import ExperiencePoints from './ExperiencePoints';

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <img
        src="/profile.jpg"
        alt="Marius - Horizn Founder"
        className="rounded-lg shadow-xl w-[70%] max-w-sm mb-4"
      />
      <h3 className="text-xl font-semibold text-[#091235] mb-2">Marius</h3>
      <a
        href="https://www.linkedin.com/in/mariusklehr/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-[#091235] hover:text-[#B68D40] transition-colors mb-6"
      >
        <Linkedin className="w-7 h-7" />
        <span>Auf LinkedIn verbinden</span>
      </a>
      
      <ExperiencePoints />
    </div>
  );
}