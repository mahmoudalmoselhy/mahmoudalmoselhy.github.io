import React from 'react';
import { Calendar, MapPin, Diamond } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tiye Solutions",
      logo: "/lovable-uploads/95878c89-1346-4176-bb5f-e5d4ee18d9da.png",
      positions: [
        {
          role: "Senior Content Creator and SEO Specialist",
          employmentType: "Full-time",
          period: "Sep 2025 - Present",
          duration: "1 mo",
          location: "Qesm El Maadi, Cairo, Egypt · On-site",
          description: "I craft content and optimize it. Anything else?",
          skills: ["Content Creation", "SEO Copywriting", "+1 skill"]
        }
      ]
    },
    {
      id: 2,
      company: "Devolum",
      logo: "/lovable-uploads/d7329e5d-7d35-4916-ad88-6fe3a8fa2075.png",
      positions: [
        {
          role: "Content Team Leader",
          employmentType: "Full-time", 
          period: "Jan 2024 - Aug 2025",
          duration: "1 yr 8 mos",
          location: "المنصورة · On-site",
          description: "Leading team of content writers, providing guidance and mentoring. Planning content strategies for clients to improve websites' blogs and traffic.",
          skills: ["Atlassian Suite", "E-commerce SEO", "+8 skills"]
        }
      ]
    },
    {
      id: 3,
      company: "عرفني دوت كوم",
      logo: "/lovable-uploads/c4791ce9-d7ef-4eff-833e-6b17a0c7b455.png",
      positions: [
        {
          role: "Editor In Chief",
          employmentType: "Part-time",
          period: "Oct 2022 - Aug 2025",
          duration: "2 yrs 11 mos",
          location: "Egypt - Almansoura · On-site",
          description: "Managing content teams and overseeing content development. Writing SEO-friendly tech articles and product reviews.",
          skills: ["Atlassian Suite", "Technical Writing", "+9 skills"]
        },
        {
          role: "Senior Editor", 
          employmentType: "Part-time",
          period: "Aug 2018 - Oct 2022",
          duration: "4 yrs 3 mos",
          location: "Egypt - Almansoura · On-site",
          description: "NVIDIA MENA news translation and content localization. Tech gadget and product reviews.",
          skills: ["Web Content Writing", "Presentations", "+1 skill"]
        }
      ]
    },
    {
      id: 4,
      company: "Android World",
      logo: "/lovable-uploads/c4791ce9-d7ef-4eff-833e-6b17a0c7b455.png",
      positions: [
        {
          role: "Blogger",
          employmentType: "Full-time",
          period: "Aug 2021 - Jan 2023",
          duration: "1 yr 6 mos",
          location: "El Mansoura, Ad Daqahliyah, Egypt",
          description: "Writing technology articles and product reviews for Android-focused website.",
          skills: ["Technical Writing", "Content Creation", "+2 skills"]
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-2">Experience</h2>
        </div>
        
        <div className="space-y-0">
          {experiences.map((exp, expIndex) => (
            <div key={exp.id}>
              {/* Company Experience Block */}
              <div className="relative">
                {exp.positions.map((position, posIndex) => (
                  <div key={posIndex} className="flex gap-4 pb-8">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-background border border-border">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain p-1"
                          onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iNCIgZmlsbD0iI0Y5RkFGQiIvPgo8L3N2Zz4K';
                          }}
                        />
                      </div>
                      
                      {/* Vertical connector line for multiple positions */}
                      {exp.positions.length > 1 && posIndex < exp.positions.length - 1 && (
                        <div className="flex flex-col items-center mt-2">
                          <div className="w-px h-8 bg-border"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                          <div className="w-px h-8 bg-border"></div>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 min-w-0">
                      {/* Job Title */}
                      <h3 className="text-lg font-semibold text-foreground leading-tight mb-1">
                        {position.role}
                      </h3>
                      
                      {/* Company & Employment Type */}
                      <p className="text-sm text-muted-foreground mb-1">
                        {exp.company} · {position.employmentType}
                      </p>
                      
                      {/* Dates & Duration */}
                      <p className="text-xs text-muted-foreground/80 mb-1">
                        {position.period} · {position.duration}
                      </p>
                      
                      {/* Location */}
                      <p className="text-xs text-muted-foreground/80 mb-3">
                        {position.location}
                      </p>
                      
                      {/* Description */}
                      {position.description && (
                        <p className="text-sm text-foreground mb-3 leading-relaxed">
                          {position.description}
                        </p>
                      )}
                      
                      {/* Skills */}
                      {position.skills && (
                        <div className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Diamond className="w-3 h-3 mt-0.5 flex-shrink-0 fill-current" />
                          <span>{position.skills.join(', ')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Separator between different companies */}
              {expIndex < experiences.length - 1 && (
                <div className="h-px bg-border mb-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
