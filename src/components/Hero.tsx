
import React from 'react';
import { ArrowDown, Linkedin, Mail, MessageCircle, FileText } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse dark:mix-blend-lighten"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000 dark:mix-blend-lighten"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000 dark:mix-blend-lighten"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="order-1 lg:order-2 animate-scale-in">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm bg-gradient-to-br from-background/50 to-muted/30">
                <img 
                  src="/lovable-uploads/acd4617b-aabd-46fe-9dbb-a619a771fdfc.png" 
                  alt="Mahmoud AlMoselhy - Content Team Leader & SEO Specialist"
                  className="w-full h-full object-cover object-center mix-blend-multiply dark:mix-blend-normal opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                {/* Subtle overlay for better blending */}
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/10 via-transparent to-gradient-end/10 pointer-events-none"></div>
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-gradient-start/30 to-gradient-middle/30 rounded-full animate-pulse blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-gradient-middle/30 to-gradient-end/30 rounded-full animate-pulse animation-delay-1000 blur-sm"></div>
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-gradient-to-r from-gradient-end/30 to-gradient-start/30 rounded-full animate-pulse animation-delay-2000 blur-sm"></div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left animate-fade-in max-w-2xl order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent animate-gradient">
                Mahmoud
              </span>
              <br />
              <span className="text-foreground">AlMoselhy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 font-light">
              Content Team Leader & SEO Specialist
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm md:text-base">mahmoudalmoselhy@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-accent-foreground" />
                <span className="text-sm md:text-base">+20 112 152 9292</span>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              "Like Albus Dumbledore said: 'words in my humble opinion are the most inexhaustible source of magic' 
              I do believe in the power of words where a man can invent a whole new world just with his pencil. 
              Working for 13 years now as a content creator."
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-gradient-start to-gradient-middle text-background px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a 
                href="https://linkedin.com/in/mahmoudalmoselhy" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-accent-foreground text-accent-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent-foreground hover:text-background transform transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <Link
                to="/cv"
                className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transform transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>View CV</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
