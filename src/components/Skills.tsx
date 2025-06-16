
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
    <section className="py-20 px-6 bg-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group border border-blue-400/30 hover:border-blue-400/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-red-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-gray-200 text-center">
                    <span className="inline-block bg-white/10 rounded-full px-3 py-1 text-sm hover:bg-red-500/30 transition-colors duration-300 border border-red-400/20">
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
