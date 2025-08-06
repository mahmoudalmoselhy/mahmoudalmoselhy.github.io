
import React from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 pb-12">
      {/* Gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 rounded-full overflow-hidden glass-card">
              <img
                src="/lovable-uploads/504d32e0-6560-4ee8-938f-660d9a49b785.png"
                alt="Mahmoud AlMoselhy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-6 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="block mb-2">Hello there!</span>
              <span className="gradient-text">Mahmoud here!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Content Team Leader who crafts digital experiences with a perfect blend of creativity and functionality. With an eye for detail and a love for clean, user-friendly content, I bring websites to life that not only look stunning but also deliver seamless and enjoyable user journeys.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold"
            >
              <Link to="#about">More about Me →</Link>
            </Button>
          </div>
          
          {/* Location and Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Location Card */}
            <div className="glass-card p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-gradient-accent" />
                <h3 className="font-semibold text-lg">Location</h3>
              </div>
              <p className="text-muted-foreground">Cairo, Egypt</p>
            </div>
            
            {/* Contact Card */}
            <div className="glass-card p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Contact</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>mahmoudalmoselhy@gmail.com</p>
                <p>+20 112 152 9292</p>
              </div>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mt-12 max-w-3xl mx-auto">
            <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
              "Like Albus Dumbledore said: 'words in my humble opinion are the most inexhaustible source of magic' 
              I do believe in the power of words where a man can invent a whole new world just with his pencil. 
              Working for 13 years now as a content creator."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
