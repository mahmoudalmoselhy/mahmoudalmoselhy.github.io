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
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          About <span className="text-primary">Me</span>
        </h2>
      </div>
      
      <section className="bg-card rounded-3xl border border-border p-6 md:p-10 shadow-m3-1">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="m3-card p-6 hover:shadow-m3-3 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="icon-container icon-container-lg mx-auto mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
