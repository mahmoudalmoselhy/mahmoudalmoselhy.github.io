
import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "13+ Years Experience",
      description: "Dedicated content creator with over a decade of expertise"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading content teams and mentoring writers"
    },
    {
      icon: TrendingUp,
      title: "SEO Excellence",
      description: "Driving organic growth through strategic optimization"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 hover:bg-black/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-red-500/20 hover:border-red-500/40"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-700 rounded-full flex items-center justify-center mb-6 mx-auto">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{item.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
