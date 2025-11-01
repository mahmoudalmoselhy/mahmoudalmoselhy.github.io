import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Clients } from '@/components/Clients';
import { Contact } from '@/components/Contact';
import { FloatingNav } from '@/components/FloatingNav';

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingNav />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="clients">
        <Clients />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
