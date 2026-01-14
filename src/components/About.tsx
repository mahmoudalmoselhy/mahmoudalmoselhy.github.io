
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
    <div>
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          About <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">Me</span>
        </h2>
      </div>
      
      <section className="bg-card/30 backdrop-blur-lg rounded-3xl border border-border p-8 md:p-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-card/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-border hover:border-accent"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">{item.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
