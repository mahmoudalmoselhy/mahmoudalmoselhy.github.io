
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
    <section className="py-20 px-6 bg-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-amber-200 to-teal-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-teal-400/30 hover:border-amber-300/50"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-200 to-cyan-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <item.icon className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{item.title}</h3>
              <p className="text-gray-200 text-center leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
