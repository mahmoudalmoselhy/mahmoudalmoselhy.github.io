
import React from 'react';
import { ArrowDown, Linkedin, Mail, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Mahmoud
            </span>
            <br />
            <span className="text-white">AlMoselhy</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Content Team Leader & SEO Specialist
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>mahmoudalmoselhy@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Cairo, Egypt</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            "Like Albus Dumbledore said: 'words in my humble opinion are the most inexhaustible source of magic' 
            I do believe in the power of words where a man can invent a whole new world just with his pencil. 
            Working for 13 years now as a content creator."
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a 
              href="https://linkedin.com/in/mahmoudalmoselhy" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transform transition-all duration-300 flex items-center space-x-2"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};
