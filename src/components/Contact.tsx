import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Let's <span className="text-primary">Connect</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
          Ready to create powerful content that drives results? Let's discuss your next project.
        </p>
      </div>
      
      <section id="contact" className="bg-card rounded-3xl border border-border p-6 md:p-10 shadow-m3-1">
        <div className="container mx-auto max-w-5xl">
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface-container-low rounded-2xl p-5 md:p-10 border border-border">
              <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
                  <div className="space-y-5">
                    <a href="mailto:mahmoudalmoselhy@gmail.com" className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-destructive/10 text-destructive rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-105">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-muted-foreground text-xs">Email</p>
                        <span className="text-foreground group-hover:text-primary transition-colors text-sm break-all">
                          mahmoudalmoselhy@gmail.com
                        </span>
                      </div>
                    </a>
                    
                    <a href="tel:+201001321331" className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-tertiary/10 text-tertiary rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-105">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-muted-foreground text-xs">Phone</p>
                        <span className="text-foreground group-hover:text-primary transition-colors text-sm">
                          +20 100 132 1331
                        </span>
                      </div>
                    </a>
                    
                    <a 
                      href="https://wa.me/201001321331/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-10 h-10 bg-success/10 text-success rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-105">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-muted-foreground text-xs">WhatsApp</p>
                        <span className="text-foreground group-hover:text-primary transition-colors flex items-center space-x-1 text-sm">
                          <span>+20 100 132 1331</span>
                          <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        </span>
                      </div>
                    </a>
                    
                    <a 
                      href="https://linkedin.com/in/mahmoudalmoselhy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-105">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-muted-foreground text-xs">LinkedIn</p>
                        <span className="text-foreground group-hover:text-primary transition-colors flex items-center space-x-1 text-sm">
                          <span className="break-all">mahmoudalmoselhy</span>
                          <ExternalLink className="w-3 h-3 flex-shrink-0" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="bg-secondary rounded-xl p-5 md:p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-5">What I Offer</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Content Strategy & Planning</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">SEO Optimization & Analysis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Team Leadership & Training</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Content Creation & Copywriting</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Performance Analytics & Reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              © 2024 Mahmoud AlMoselhy. Crafted with passion for great content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
