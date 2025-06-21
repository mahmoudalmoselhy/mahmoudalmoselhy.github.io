
import React from 'react';
import { ArrowDown, Linkedin, Mail, MessageCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements - Sand & Aqua colors */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-amber-200 via-teal-400 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                Mahmoud
              </span>
              <br />
              <span className="text-white">AlMoselhy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
              Content Team Leader & SEO Specialist
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 text-gray-300 mb-8">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-amber-300" />
                <span>mahmoudalmoselhy@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-teal-400" />
                <span>+20 112 152 9292</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              "Like Albus Dumbledore said: 'words in my humble opinion are the most inexhaustible source of magic' 
              I do believe in the power of words where a man can invent a whole new world just with his pencil. 
              Working for 13 years now as a content creator."
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-amber-200 to-teal-400 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a 
                href="https://linkedin.com/in/mahmoudalmoselhy" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-teal-400 text-teal-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-400 hover:text-slate-900 transform transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Right side - Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-cyan-600 rounded-full blur-lg opacity-30 scale-110"></div>
              <img 
                src="/lovable-uploads/45b256f3-6cbd-4bbc-b16e-0c4039fc89ef.png"
                alt="Mahmoud AlMoselhy"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-300" />
        </div>
      </div>
    </section>
  );
};
