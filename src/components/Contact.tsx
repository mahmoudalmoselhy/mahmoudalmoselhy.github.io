
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="bg-card/30 backdrop-blur-lg rounded-3xl border border-border p-8 md:p-12">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Let's <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Ready to create powerful content that drives results? Let's discuss your next project.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-2">
          <div className="bg-card/50 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-12 hover:bg-card/70 transition-all duration-500 border border-border">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8">Get In Touch</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-background" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-xs md:text-sm">Email</p>
                      <a href="mailto:mahmoudalmoselhy@gmail.com" className="text-foreground hover:text-primary transition-colors text-sm md:text-base break-all">
                        mahmoudalmoselhy@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-background" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-xs md:text-sm">Phone</p>
                      <a href="tel:+201001321331" className="text-foreground hover:text-primary transition-colors text-sm md:text-base">
                        +20 100 132 1331
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-background" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-xs md:text-sm">WhatsApp</p>
                      <a 
                        href="https://wa.me/201001321331/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors flex items-center space-x-1 text-sm md:text-base"
                      >
                        <span>+20 100 132 1331</span>
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-background" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-xs md:text-sm">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/mahmoudalmoselhy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors flex items-center space-x-1 text-sm md:text-base"
                      >
                        <span className="break-all">mahmoudalmoselhy</span>
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/20 rounded-xl md:rounded-2xl p-4 md:p-8 border border-border">
                <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">What I Offer</h4>
                <ul className="space-y-3 md:space-y-4 text-muted-foreground">
                  <li className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Content Strategy & Planning</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">SEO Optimization & Analysis</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Team Leadership & Training</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Content Creation & Copywriting</span>
                  </li>
                  <li className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gradient-start to-gradient-middle rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">Performance Analytics & Reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 md:mt-12 px-4">
          <p className="text-muted-foreground text-sm md:text-base">
            © 2024 Mahmoud AlMoselhy. Crafted with passion for great content.
          </p>
        </div>
      </div>
    </section>
  );
};
