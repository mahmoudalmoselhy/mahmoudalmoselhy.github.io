
import React from 'react';
import { Brain, Search, PenTool, Globe, BarChart3, FileText } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Technology",
      skills: ["Generative AI - Proficient", "Prompt Engineering - Proficient"]
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      skills: ["SEO - Competent", "Semrush & Ahrefs - Expert", "Keyword Analysis"]
    },
    {
      icon: PenTool,
      title: "Content Creation",
      skills: ["Creative Writing - Expert", "Content Review - Expert", "Copywriting"]
    },
    {
      icon: Globe,
      title: "Web & CMS",
      skills: ["WordPress - Expert", "Content Management", "Web Optimization"]
    },
    {
      icon: BarChart3,
      title: "Office & Analytics",
      skills: ["MS Office Suite - Expert", "Data Analysis", "Performance Reporting"]
    },
    {
      icon: FileText,
      title: "Languages",
      skills: ["Arabic - Native/Bilingual", "English - Proficient", "Translation - Expert"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            My <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group border border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-muted-foreground text-center">
                    <span className="inline-block bg-muted/30 rounded-full px-3 py-1 text-sm hover:bg-accent/50 transition-colors duration-300 border border-border">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
