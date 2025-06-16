
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to create powerful content that drives results? Let's discuss your next project.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 hover:bg-white/15 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:mahmoudalmoselhy@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                        mahmoudalmoselhy@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+201121529292" className="text-white hover:text-blue-400 transition-colors">
                        +20 112 152 9292
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Cairo, Egypt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/mahmoudalmoselhy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors flex items-center space-x-1"
                      >
                        <span>mahmoudalmoselhy</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-6">What I Offer</h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                    <span>Content Strategy & Planning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                    <span>SEO Optimization & Analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                    <span>Team Leadership & Training</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                    <span>Content Creation & Copywriting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2"></div>
                    <span>Performance Analytics & Reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400">
            © 2024 Mahmoud AlMoselhy. Crafted with passion for great content.
          </p>
        </div>
      </div>
    </section>
  );
};
