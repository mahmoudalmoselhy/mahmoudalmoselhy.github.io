
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      company: "Devolum",
      role: "Content Team Leader",
      period: "Jan 2024 - present",
      location: "Mansoura, Egypt",
      responsibilities: [
        "Leading team of content writers, providing guidance and mentoring",
        "Planning content strategies for clients to improve websites' blogs and traffic",
        "Content optimization to improve search rankings and user engagement",
        "Managing social media content calendars and campaigns"
      ]
    },
    {
      company: "Devolum",
      role: "SEO Specialist",
      period: "Jan 2024 - present",
      location: "Mansoura, Egypt",
      responsibilities: [
        "On-page optimization and technical SEO implementation",
        "Keyword research and competitive analysis",
        "Content collaboration for SEO-friendly content creation",
        "Performance reporting and algorithm updates tracking"
      ]
    },
    {
      company: "3arrafni Website",
      role: "Editor in Chief",
      period: "Oct 2022 - present",
      location: "Mansoura, Egypt",
      responsibilities: [
        "Managing content teams and overseeing content development",
        "Writing SEO-friendly tech articles and product reviews",
        "NVIDIA MENA news translation and content localization"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-black/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 hover:bg-black/50 transition-all duration-500 hover:scale-102 hover:shadow-2xl border border-blue-500/20 hover:border-blue-500/40"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-red-400 font-semibold mb-2">{exp.company}</h4>
                  <div className="flex items-center space-x-4 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
