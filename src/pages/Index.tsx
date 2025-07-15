
import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Portfolio } from '@/components/Portfolio';
import { Clients } from '@/components/Clients';
import { Awards } from '@/components/Awards';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Clients />
      <Awards />
      <Contact />
    </div>
  );
};

export default Index;
