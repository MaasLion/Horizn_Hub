import React from 'react';
import { Target, Compass, Users } from 'lucide-react';

export default function CareerFeatures() {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Karriererichtung",
      description: "Entdecke deinen idealen Karriereweg"
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Strategische Planung",
      description: "Erstelle umsetzbare Karrierepläne"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Netzwerkaufbau",
      description: "Baue bedeutungsvolle Beziehungen auf"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="p-4 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-[#B68D40] bg-white"
        >
          <div className="text-[#B68D40] mb-3">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-[#091235] mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-sm">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}