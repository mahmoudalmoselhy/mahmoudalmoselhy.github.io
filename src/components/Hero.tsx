import React from 'react';
import { Linkedin, Mail, MessageCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Hero = () => {
  return <>
      {/* Full-width portfolio cover image */}
      <div className="w-full">
        <img src="/portfolio-cover.png" alt="Mahmoud AlMoselhy Portfolio Cover" className="w-full h-auto object-cover" />
      </div>
      
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background px-6 md:px-12 py-16 md:py-24">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-1000 dark:mix-blend-lighten"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000 dark:mix-blend-lighten"></div>
      </div>
      
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-16">
        {/* Text content - Left side */}
        <div className="flex-1 text-left max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              
              <br />
              
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 font-light">Content and SEO Specialist</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm md:text-base">mahmoudalmoselhy@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-accent-foreground" />
                <span className="text-sm md:text-base">+201001321331</span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              My name is Mahmoud AlMoselhy, and like every true engineer, I can't go five minutes without mentioning my profession, so yes, I'm an engineer. But beyond equations and designs, I've been a content creator since the age of 13, driven by a passion for storytelling and the belief that words carry real power. As Albus Dumbledore wisely said: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic." And that's the kind of magic I aim to create, every day, with every piece of content.
            </p>
          </div>
          
          {/* Buttons - Right side */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-gradient-start to-gradient-middle text-background rounded-2xl font-medium shadow-md hover:shadow-lg hover:opacity-90 transition text-center">
              Get In Touch
            </a>
            <a href="https://linkedin.com/in/mahmoudalmoselhy" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-accent-foreground text-accent-foreground rounded-2xl font-medium shadow-md hover:shadow-lg hover:bg-accent-foreground hover:text-background transition flex items-center justify-center space-x-2">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <Link to="/cv" className="px-8 py-3 border-2 border-primary text-primary rounded-2xl font-medium shadow-md hover:shadow-lg hover:bg-primary hover:text-primary-foreground transition flex items-center justify-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>View CV</span>
            </Link>
          </div>
        </div>
    </section>
  </>;
};