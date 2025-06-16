
import React from 'react';
import { ArrowDown, Linkedin, Mail, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements - Barcelona colors with black shades */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-black rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text content - centered */}
          <div className="text-center lg:text-left animate-fade-in flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center lg:text-left">
              <span className="bg-gradient-to-r from-red-400 via-blue-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                Mahmoud
              </span>
              <br />
              <span className="text-white">AlMoselhy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-4 font-light text-center lg:text-left">
              Content Team Leader & SEO Specialist
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 text-gray-200 mb-8">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-red-400" />
                <span>mahmoudalmoselhy@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Cairo, Egypt</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-100 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed text-center lg:text-left">
              "Like Albus Dumbledore said: 'words in my humble opinion are the most inexhaustible source of magic' 
              I do believe in the power of words where a man can invent a whole new world just with his pencil. 
              Working for 13 years now as a content creator."
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-red-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a 
                href="https://linkedin.com/in/mahmoudalmoselhy" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-400 hover:text-white transform transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Photo - centered */}
          <div className="flex justify-center lg:justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-blue-500 rounded-full blur-lg opacity-30 scale-110"></div>
              <img 
                src="/lovable-uploads/bb8e88a2-b0a0-4a5d-993d-c64cfb5c9230.png"
                alt="Mahmoud AlMoselhy"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-200" />
        </div>
      </div>
    </section>
  );
};
