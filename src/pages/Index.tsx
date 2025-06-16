
import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Portfolio } from '@/components/Portfolio';
import { Awards } from '@/components/Awards';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-red-400 to-blue-600">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Awards />
      <Contact />
    </div>
  );
};

export default Index;
