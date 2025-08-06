import React from 'react';
import { Badge } from '@/components/ui/badge';
import { PenTool, Search, Users, Lightbulb, Target, TrendingUp } from 'lucide-react';

const skills = [
  { 
    name: 'Content Strategy', 
    icon: PenTool,
    category: 'Core Skills'
  },
  { 
    name: 'SEO Optimization', 
    icon: Search,
    category: 'Core Skills'
  },
  { 
    name: 'Team Leadership', 
    icon: Users,
    category: 'Core Skills'
  },
  { 
    name: 'Creative Writing', 
    icon: Lightbulb,
    category: 'Content Creation'
  },
  { 
    name: 'Performance Analysis', 
    icon: Target,
    category: 'Analytics'
  },
  { 
    name: 'Growth Marketing', 
    icon: TrendingUp,
    category: 'Strategy'
  },
  { 
    name: 'Arabic Translation', 
    icon: PenTool,
    category: 'Languages'
  },
  { 
    name: 'Tech Content', 
    icon: Lightbulb,
    category: 'Specialization'
  },
  { 
    name: 'Project Management', 
    icon: Target,
    category: 'Leadership'
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive set of skills built over 13+ years of content creation and team leadership experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 card-hover group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <Badge variant="outline" className="text-xs mt-1">
                      {skill.category}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};