
import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

export const Awards = () => {
  const awards = [
    {
      title: "First Place Winner at Innovation Catalyst Competition",
      organization: "ISF Egypt",
      date: "Dec 2023",
      icon: Trophy
    },
    {
      title: "First Place Winner at Egypt Industry 4.0 Challenge",
      organization: "Egypt Industry 4.0 Challenge",
      date: "25 Oct 2023",
      icon: Award
    }
  ];

  const courses = [
    "SEO Basics - Udemy",
    "What Is Generative AI - LinkedIn Learning",
    "Using AI as Your SEO Assistant - LinkedIn Learning",
    "Storytelling and Content Creation to Transform Your Personal Brand - LinkedIn Learning"
  ];

  return (
    <section className="py-20 px-6 bg-white/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Awards & <span className="bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent">Learning</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Awards Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center justify-center md:justify-start">
              <Trophy className="w-6 h-6 mr-3 text-red-400" />
              Awards & Recognition
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-red-400/30"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <award.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{award.title}</h4>
                      <p className="text-red-300 font-medium">{award.organization}</p>
                      <p className="text-gray-300 text-sm mt-1">{award.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Courses Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center justify-center md:justify-start">
              <Star className="w-6 h-6 mr-3 text-blue-400" />
              Professional Development
            </h3>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-102 border border-blue-400/30"
                >
                  <p className="text-gray-200">{course}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
