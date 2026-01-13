import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Clients } from '@/components/Clients';
import { Contact } from '@/components/Contact';
import { FloatingNav } from '@/components/FloatingNav';
import portfolioCover from '@/assets/portfolio-cover.png?format=webp&quality=80';
import portfolioCover720 from '@/assets/portfolio-cover.png?format=webp&quality=80&w=720';
import portfolioCover1080 from '@/assets/portfolio-cover.png?format=webp&quality=80&w=1080';
import portfolioCover1440 from '@/assets/portfolio-cover.png?format=webp&quality=80&w=1440';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Full-width portfolio cover at the top */}
      <div className="relative w-full">
        <img 
          src={portfolioCover} 
          srcSet={`${portfolioCover720} 720w, ${portfolioCover1080} 1080w, ${portfolioCover1440} 1440w, ${portfolioCover} 1779w`}
          sizes="100vw"
          alt="Mahmoud AlMoselhy Portfolio Cover" 
          className="w-full h-auto object-cover mix-blend-multiply dark:mix-blend-lighten opacity-90"
          width={1779}
          height={917}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none"></div>
      </div>
      <FloatingNav />
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 px-4 md:px-6 py-8">
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
    </div>
  );
};

export default Index;
