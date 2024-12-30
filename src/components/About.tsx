import React from 'react';
import { Award, Globe, Rocket } from 'lucide-react';
import ProfileSection from './about/ProfileSection';
import ExperienceSection from './about/ExperienceSection';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#E2E6E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ProfileSection />
          <ExperienceSection />
        </div>
      </div>
    </section>
  );
}