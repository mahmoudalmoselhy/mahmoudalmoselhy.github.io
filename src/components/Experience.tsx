import React from 'react';
import { Calendar, MapPin, Diamond } from 'lucide-react';

export const Experience = () => {
  const getCompanyLogo = (companyName: string) => {
    switch (companyName) {
      case "Tiye Solutions":
        return "/lovable-uploads/1c3dfb5e-81d4-42fa-8bec-0c214221f619.png";
      case "Devolum":
        return "/lovable-uploads/a069e37b-29bd-4935-9c6e-f5b45d64b888.png";
      case "Android World website":
        return "/lovable-uploads/3ea607df-d858-4207-9230-b405980c2a5d.png";
      case "Reviewology YouTube channel":
        return "/lovable-uploads/56f3b136-b633-40c0-af5a-aa3a3f85eaf5.png";
      default:
        return null;
    }
  };

  const experiences = [
    {
      id: 1,
      company: "Tiye Solutions",
      totalDuration: "3 mos",
      positions: [
        {
          role: "Senior Content Creator and SEO Specialist",
          employmentType: "Full-time",
          period: "Sep 2025 - Present",
          duration: "3 mos",
          location: "Maadi, Egypt",
          responsibilities: [
            "Write and Improve: write and improve content for various accounts on social media and websites",
            "Idea suggestion: Suggest ideas for social media campaigns and author campaign content",
            "Team improvement: Help improving the team and their skills under supervision of the team leader and consultant",
            "SEO Analysis: Full website analysis for clients' websites",
            "Rank improvement: Work with the content team to improve website rankings on Search engines",
            "Collaboration: Collaborate with other teams to deliver results for all accounts"
          ]
        }
      ]
    },
    {
      id: 2,
      company: "Devolum",
      totalDuration: "2 yrs 4 mos",
      positions: [
        {
          role: "Content Team Leader",
          employmentType: "Full-time",
          period: "Jan 2024 - Aug 2025",
          duration: "1 yr 8 mos",
          location: "Mansoura, Egypt",
          responsibilities: [
            "Team Leadership and Development: Leading team of content writers, providing them with guidance and mentoring, training them to improve their skills in SEO and content",
            "Planning Content Strategies: Work on content strategies for clients to improve their websites' blogs and traffic",
            "Quality Assurance: Follow up with the team to make sure they always give their best and their output at its best state",
            "Content Optimization: Regularly update and optimize existing content to improve search rankings, readability, and user engagement",
            "Project Management: Assign and manage tasks, ensuring timely delivery of content projects, maintaining clear communication and efficient workflows",
            "Team Performance Monitoring: Keeping my team at 80% of their performance so they can always give their best to their writings without having any level drop",
            "Innovative Approaches: Stay updated on SEO trends and best practices, introducing innovative strategies to maintain a competitive edge in search rankings",
            "Reporting: Prepare detailed reports for management on content performance, team productivity, and SEO outcomes, providing insights and recommendations for future improvements",
            "Social media content: Manage a group of social media team content creators ensuring they deliver posting calendars on time with no mistakes with a suitable content for marketing and campaigns"
          ]
        },
        {
          role: "SEO Specialist",
          employmentType: "Full-time",
          period: "Jan 2024 - Aug 2025",
          duration: "1 yr 8 mos",
          location: "Mansoura, Egypt",
          responsibilities: [
            "On-Page Optimization: Implement different SEO techniques such as meta tag creation, content optimization, and internal linking to enhance website visibility",
            "Technical Optimization: Work with developer to make sure websites have no technical problems that affect its visibility",
            "Keyword Analysis: Conduct in-depth keyword research to identify opportunities for driving organic traffic and optimizing website content",
            "Competitor Analysis: Conduct competitive analysis to identify industry trends and incorporate insights into SEO strategies",
            "Content Collaboration: Work with content team that I also manage to create SEO-friendly content aligned with business goals and target audiences",
            "Algorithm Updates: Stay updated on search engine algorithm changes and adjust strategies to maintain or improve rankings",
            "Local SEO: Optimize local business listings and content to improve visibility in local search results",
            "Reporting: Prepare detailed performance reports showcasing keyword rankings, traffic trends, and ROI to stakeholders"
          ]
        },
        {
          role: "SEO Specialist Intern",
          employmentType: "Internship",
          period: "Sep 2023 - Jan 2024",
          duration: "5 mos",
          location: "Mansoura, Egypt",
          responsibilities: []
        }
      ]
    },
    {
      id: 3,
      company: "3arrafni website",
      totalDuration: "7 yrs",
      positions: [
        {
          role: "Editor in Chief",
          employmentType: "Full-time",
          period: "Oct 2022 - Aug 2025",
          duration: "2 yrs 11 mos",
          location: "Mansoura, Egypt",
          responsibilities: [
            "NVIDIA MENA News Translator: Work with NVIDIA on their news translation from English to Arabic which a lot of Arabian websites copy and use on their blogs",
            "Manage Team of Content Writers: Work with 2 teams of content creators on the website (Freelance and full time teams) to make sure they develop powerful content. Tech field",
            "News Coverage: Cover technology news from all over the world on the website",
            "Write Articles: Write powerful tech articles that are SEO-friendly with a lot of information which help readers",
            "Tech Gadget/ Products/ Software Review: Try and give an honest opinion on several technological products like: Mobile phones, Accessories, Games, Applications, and Gadgets",
            "SEO work: Follow up with latest SEO Trends and updates to improve the website performance"
          ]
        },
        {
          role: "Senior Editor",
          employmentType: "Full-time",
          period: "Aug 2018 - Oct 2022",
          duration: "4 yrs 3 mos",
          location: "Mansoura, Egypt",
          responsibilities: []
        }
      ]
    },
    {
      id: 4,
      company: "Reviewology YouTube channel",
      totalDuration: "8 mos",
      positions: [
        {
          role: "Scriptwriter",
          employmentType: "Contract",
          period: "Jan 2024 - Aug 2024",
          duration: "8 mos",
          location: "Remote",
          responsibilities: [
            "Search and collect information for YouTube videos about how technology works",
            "Give full explanation on how technologies work in the script",
            "Make sure video scripts are informative for both knowledge seeking and Consumer needs with a touch of humor",
            "Put a full vision about the video in terms of recording scenes",
            "Provide suitable inserts for the video",
            "Make sure the video is easy to understand using real life examples and multiple ways to describe everything"
          ]
        }
      ]
    },
    {
      id: 5,
      company: "Freelance",
      totalDuration: "11 mos",
      positions: [
        {
          role: "Freelance YouTube script writer",
          employmentType: "Freelance",
          period: "Oct 2022 - Aug 2023",
          duration: "11 mos",
          location: "Remote",
          responsibilities: []
        }
      ]
    },
    {
      id: 6,
      company: "Android World website",
      totalDuration: "1 yr 6 mos",
      positions: [
        {
          role: "Senior Editor",
          employmentType: "Full-time",
          period: "Aug 2021 - Jan 2023",
          duration: "1 yr 6 mos",
          location: "Egypt",
          responsibilities: []
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
        
        <div className="space-y-6">
          {experiences.map((exp, expIndex) => (
            <div key={exp.id} className="flex gap-3">
              {/* Company Logo Section */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white border border-border flex items-center justify-center">
                  {getCompanyLogo(exp.company) ? (
                    <img 
                      src={getCompanyLogo(exp.company)} 
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-6 h-6 bg-muted-foreground/20 rounded"></div>
                  )}
                </div>
                
                {/* Vertical line connecting multiple positions */}
                {exp.positions.length > 1 && (
                  <div className="w-px bg-border flex-1 mt-2"></div>
                )}
              </div>

              {/* Experience Content */}
              <div className="flex-1 min-w-0">
                {exp.positions.map((position, posIndex) => (
                  <div key={posIndex} className="relative">
                    {/* Position Details */}
                    <div className="pb-4">
                      {/* Job Title */}
                      <h3 className="text-base font-semibold text-foreground leading-tight">
                        {position.role}
                      </h3>
                      
                      {/* Company & Employment Type */}
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.company} · {position.employmentType}
                      </p>
                      
                      {/* Dates & Duration */}
                      <p className="text-xs text-muted-foreground/80 mt-1">
                        {position.period} · {position.duration}
                      </p>
                      
                      {/* Location */}
                      <p className="text-xs text-muted-foreground/80 mt-1">
                        {position.location}
                      </p>
                      
                      {/* Responsibilities */}
                      {position.responsibilities && position.responsibilities.length > 0 && (
                        <div className="mt-3 space-y-1">
                          {position.responsibilities.map((responsibility, respIndex) => (
                            <div key={respIndex} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                              <span className="text-muted-foreground mt-1.5">•</span>
                              <span>{responsibility}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Connector dot for multiple positions */}
                    {exp.positions.length > 1 && posIndex < exp.positions.length - 1 && (
                      <div className="absolute -left-[47px] top-16 w-2 h-2 bg-border rounded-full"></div>
                    )}
                  </div>
                ))}
                
                {/* Total duration for company */}
                {exp.positions.length > 1 && (
                  <div className="text-xs text-muted-foreground/60 mt-2 font-medium">
                    Total: {exp.totalDuration}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
