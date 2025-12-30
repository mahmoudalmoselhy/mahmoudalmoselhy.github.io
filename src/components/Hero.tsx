import React from 'react';
import { Linkedin, Mail, MessageCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="bg-card rounded-3xl border border-border shadow-m3-2">
      <section className="py-12 md:py-20 flex items-center justify-center">
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
            {/* Text content - Left side */}
            <div className="text-center lg:text-left animate-fade-in-up flex-1">
              <p className="text-lg md:text-4xl text-muted-foreground mb-4 font-medium">
                Content and SEO Specialist
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-5 text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <div className="icon-container">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base">mahmoudalmoselhy@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="icon-container">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base">+201001321331</span>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                My name is Mahmoud AlMoselhy, and like every true engineer, I can't go five minutes without mentioning my profession, so yes, I'm an engineer. But beyond equations and designs, I've been a content creator since the age of 13, driven by a passion for storytelling and the belief that words carry real power. As Albus Dumbledore wisely said: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic." And that's the kind of magic I aim to create, every day, with every piece of content.
              </p>
            </div>
            
            {/* Buttons - Right side */}
            <div className="flex flex-col space-y-3 lg:min-w-[240px] w-full lg:w-auto">
              <a 
                href="#contact" 
                className="m3-button m3-button-filled px-8 py-4 text-base font-medium"
              >
                Get In Touch
              </a>
              <a 
                href="https://linkedin.com/in/mahmoudalmoselhy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="m3-button m3-button-tonal px-8 py-4 text-base font-medium"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <Link 
                to="/cv" 
                className="m3-button m3-button-outlined px-8 py-4 text-base font-medium"
              >
                <FileText className="w-5 h-5" />
                <span>View CV</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
