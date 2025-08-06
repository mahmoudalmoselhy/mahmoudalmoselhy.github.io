
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Portfolio } from '@/components/Portfolio';
import { Clients } from '@/components/Clients';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <Portfolio />
      <Clients />
      <Contact />
    </div>
  );
};

export default Index;
