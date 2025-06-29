
import React from 'react';
import { Trophy, Award, Star, ExternalLink } from 'lucide-react';

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
    {
      title: "SEO Basics - Udemy",
      link: "https://drive.google.com/file/d/1g3_nU7xunN2eUbj54CJLC1490RuyoG4_/view?usp=drive_link"
    },
    {
      title: "What Is Generative AI - LinkedIn Learning",
      link: "https://drive.google.com/file/d/1R9Kbw-fmEEZjpkegQEmqzrKvr3ysilg_/view?usp=drive_link"
    },
    {
      title: "Using AI as Your SEO Assistant - LinkedIn Learning",
      link: "https://drive.google.com/file/d/1WrZvzBsJnxlJPwMO29qosQFg7nuesGwF/view?usp=drive_link"
    },
    {
      title: "Storytelling and Content Creation to Transform Your Personal Brand - LinkedIn Learning",
      link: "https://drive.google.com/file/d/1d18Up4gGy6_PXZi3cuhtN6Sr3fwsYI1v/view?usp=drive_link"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Awards & <span className="bg-gradient-to-r from-amber-200 to-teal-400 bg-clip-text text-transparent">Learning</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Awards Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center justify-center md:justify-start">
              <Trophy className="w-6 h-6 mr-3 text-amber-300" />
              Awards & Recognition
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-teal-400/30"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-200 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <award.icon className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{award.title}</h4>
                      <p className="text-teal-300 font-medium">{award.organization}</p>
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
              <Star className="w-6 h-6 mr-3 text-teal-400" />
              Professional Development
            </h3>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <a
                  key={index}
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-102 border border-teal-400/30 block group"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-gray-200 group-hover:text-white transition-colors">{course.title}</p>
                    <ExternalLink className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
