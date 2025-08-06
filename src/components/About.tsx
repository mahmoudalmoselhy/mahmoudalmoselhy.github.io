
import React from 'react';
import { Award, Users, TrendingUp, MapPin } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-20 px-6" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 13 years of experience in content creation and digital marketing, 
            I've helped countless brands tell their stories and connect with their audiences through the power of words.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Main Bio Card */}
          <div className="glass-card p-8 card-hover">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/lovable-uploads/504d32e0-6560-4ee8-938f-660d9a49b785.png"
                  alt="Mahmoud AlMoselhy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mahmoud AlMoselhy</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A passionate Content Team Leader who believes in the transformative power of words. 
              Like Dumbledore said, words are the most inexhaustible source of magic, and I've spent 
              over 13 years mastering this craft to help brands create compelling digital experiences.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 card-hover text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">13+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="glass-card p-6 card-hover text-center">
              <Users className="w-8 h-8 text-gradient-accent mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Content Projects</div>
            </div>
            
            <div className="glass-card p-6 card-hover text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">300%</div>
              <div className="text-sm text-muted-foreground">Growth Achieved</div>
            </div>
            
            <div className="glass-card p-6 card-hover text-center">
              <Award className="w-8 h-8 text-gradient-accent mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Team Members Led</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
