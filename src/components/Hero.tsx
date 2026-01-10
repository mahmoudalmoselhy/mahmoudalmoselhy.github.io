import React from 'react';
import { Linkedin, AtSign, Smartphone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Hero = () => {
  return (
    <div className="bg-card/30 backdrop-blur-lg rounded-3xl border border-border overflow-hidden">
      <section className="py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-40 right-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000 dark:mix-blend-lighten"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000 dark:mix-blend-lighten"></div>
        </div>
        
        <div className="container mx-auto relative z-10 px-[20px] bg-inherit">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
            {/* Text content - Left side */}
            <div className="text-center lg:text-left animate-fade-in flex-1">
              <p className="text-lg text-muted-foreground mb-4 font-light md:text-5xl">Content and SEO Specialist</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 text-muted-foreground mb-6">
                <a href="mailto:mahmoudalmoselhy@gmail.com" className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <AtSign className="w-5 h-5 text-primary" />
                  <span className="text-sm md:text-base">mahmoudalmoselhy@gmail.com</span>
                </a>
                <a href="tel:+201001321331" className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <span className="text-sm md:text-base">+201001321331</span>
                </a>
              </div>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                My name is Mahmoud AlMoselhy, and like every true engineer, I can't go five minutes without mentioning my profession, so yes, I'm an engineer. But beyond equations and designs, I've been a content creator since the age of 13, driven by a passion for storytelling and the belief that words carry real power. As Albus Dumbledore wisely said: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic." And that's the kind of magic I aim to create, every day, with every piece of content.
              </p>
            </div>
            
            {/* Buttons - Right side */}
            <div className="flex flex-col items-center lg:items-start space-y-4 lg:min-w-[250px]">
              <a href="#contact" className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-10 py-5 rounded-2xl font-semibold border-2 border-primary shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transform transition-all duration-300 text-center text-lg">
                Get In Touch
              </a>
              <a href="https://linkedin.com/in/mahmoudalmoselhy" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl font-semibold border-2 border-blue-600 shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2 text-lg">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <Link to="/cv" className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground px-10 py-5 rounded-2xl font-semibold border-2 border-accent shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30 hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2 text-lg">
                <FileText className="w-6 h-6" />
                <span>View CV</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};