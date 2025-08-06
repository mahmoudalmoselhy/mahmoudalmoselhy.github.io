import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Content Strategy at 3arrafni.com',
    description: 'Leading NVIDIA MENA news translation and tech content creation, driving engagement through strategic content planning.',
    image: '/lovable-uploads/cc0ed4c2-86a5-4d8e-8065-cac902b8bc16.png',
    tags: ['Content Strategy', 'Translation', 'Tech News'],
    link: 'https://www.3arrafni.com',
    date: '2023 - Present'
  },
  {
    title: 'SEO Content Optimization',
    description: 'Comprehensive SEO strategy implementation resulting in 300% organic traffic growth and improved search rankings.',
    image: '/lovable-uploads/50a63b2f-f4a6-4af1-b9fa-180df9e12233.png',
    tags: ['SEO', 'Analytics', 'Growth'],
    link: '#',
    date: '2022 - 2023'
  },
  {
    title: 'Script Writing Portfolio',
    description: 'Creative scriptwriting for various digital platforms, focusing on engaging storytelling and brand narrative.',
    image: '/lovable-uploads/8ef3ab80-42b8-4ce4-b280-e4a0c812617b.png',
    tags: ['Scriptwriting', 'Creative', 'Storytelling'],
    link: '#',
    date: '2021 - Present'
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and achievements in content creation and digital strategy
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card card-hover ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full">
            All Projects →
          </Button>
        </div>
      </div>
    </section>
  );
};