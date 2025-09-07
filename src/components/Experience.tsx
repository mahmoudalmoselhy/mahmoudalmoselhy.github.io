import React from 'react';
import { Calendar, MapPin, Diamond } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tiye Solutions",
      positions: [
        {
          role: "Senior Content Creator and SEO Specialist",
          employmentType: "Full-time",
          period: "Sep 2025 - Present",
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
      positions: [
        {
          role: "Content team leader",
          employmentType: "Full-time",
          period: "Jan 2024 - present",
          location: "Mansoura, Egypt",
          responsibilities: [
            "Team Leadership and Development: Leading team of content writers, providing them with guidance and mentoring, training them to improve their skills in SEO and content",
            "Planning Content Strategies: Work on content strategies for clients to improve their websites' blogs and traffic",
            "Quality Assurance: Follow up with the team to make sure they always give their best and their output at its best state",
            "Content Optimization: Regularly update and optimize existing content to improve search rankings, readability, and user engagement",
            "Project Management: Assign and manage tasks, ensuring timely delivery of content projects, maintaining clear communication and efficient workflows",
            "Team Performance Monitoring: Keeping my team at 80% of their performance so they can always give their best to their writings without having any kind of drop",
            "Innovative Approaches: Stay updated on SEO trends and best practices, introducing innovative strategies to maintain a competitive edge in search rankings",
            "Reporting: Prepare detailed reports for management on content performance, team productivity, and SEO outcomes, providing insights and recommendations for future improvements",
            "Social media content Manager: Manage a group of social media team content creators ensuring they deliver posting calendars on time with no mistakes with a suitable content for marketing and campaigns"
          ]
        },
        {
          role: "SEO Specialist",
          employmentType: "Full-time",
          period: "Jan 2024 - present", 
          location: "Mansoura, Egypt",
          responsibilities: [
            "On Page Optimization: Implement different SEO techniques such as meta tag creation, content optimization, and internal linking to enhance website visibility",
            "Technical Optimization: Work with developer to make sure websites have no technical problems that affect its visibility",
            "Keyword Analysis: Conduct in-depth keyword research to identify opportunities for driving organic traffic and optimizing website content",
            "Competitor Analysis: Conduct competitive analysis to identify industry trends and incorporate insights into SEO strategies",
            "Content Collaboration: Work with content team that I also manage to create SEO-friendly content aligned with business goals and target audiences",
            "Algorithm Updates: Stay updated on search engine algorithm changes and adjust strategies to maintain or improve rankings",
            "Local SEO: Optimize local business listings and content to improve visibility in local search results",
            "Reporting: Prepare detailed performance reports showcasing keyword rankings, traffic trends, and ROI to stakeholders"
          ]
        }
      ]
    },
    {
      id: 3,
      company: "3arrafni website",
      positions: [
        {
          role: "Editor in chief",
          employmentType: "Full-time",
          period: "Oct 2022 - present",
          location: "Mansoura, Egypt",
          responsibilities: [
            "NVIDIA MENA News Translator: Work with NVIDIA on their news translation from English to Arabic which a lot of Arabian websites copy and use on their blogs",
            "Manage Team of Content Writers: Work with 2 teams of content creators on the website (Freelance and full time teams) to make sure they develop powerful content. Tech field",
            "News Coverage: Cover technology news from all over the world on the website",
            "Write Articles: Write powerful tech articles that are SEO-friendly with a lot of information which help readers",
            "Tech Gadget/ Products/ Software Review: Try and give an honest opinion on several technological products like: Mobile phones, Accessories, Games, Applications, and Gadgets",
            "SEO work: Follow up with latest SEO Trends and updates to improve the website performance"
          ]
        }
      ]
    },
    {
      id: 4,
      company: "Reviewology YouTube channel",
      positions: [
        {
          role: "Scriptwriter",
          employmentType: "Contract",
          period: "Jan 2024 - Aug 2024",
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
      company: "Devolum",
      positions: [
        {
          role: "SEO Specialist Intern",
          employmentType: "Internship",
          period: "Sep 2023 - Jan 2024",
          location: "Mansoura, Egypt",
          responsibilities: []
        }
      ]
    },
    {
      id: 6,
      company: "Freelance",
      positions: [
        {
          role: "Freelance YouTube script writer",
          employmentType: "Freelance",
          period: "Oct 2022 - Aug 2023",
          location: "Remote",
          responsibilities: []
        }
      ]
    },
    {
      id: 7,
      company: "Android World website",
      positions: [
        {
          role: "Senior Editor",
          employmentType: "Full-time",
          period: "Aug 2021 - Jan 2023",
          location: "Egypt",
          responsibilities: []
        }
      ]
    },
    {
      id: 8,
      company: "3arrafni.com website", 
      positions: [
        {
          role: "Senior Editor",
          employmentType: "Full-time",
          period: "Aug 2018 - Oct 2022",
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
        
        <div className="space-y-0">
          {experiences.map((exp, expIndex) => (
            <div key={exp.id}>
              {/* Company Experience Block */}
              <div className="relative">
                {exp.positions.map((position, posIndex) => (
                  <div key={posIndex} className="flex gap-4 pb-8">
                    {/* Logo Section - Removed for now */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted/20 border border-border flex items-center justify-center">
                        <div className="w-6 h-6 bg-muted-foreground/20 rounded"></div>
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
                      
                      {/* Dates */}
                      <p className="text-xs text-muted-foreground/80 mb-1">
                        {position.period}
                      </p>
                      
                      {/* Location */}
                      <p className="text-xs text-muted-foreground/80 mb-3">
                        {position.location}
                      </p>
                      
                      {/* Responsibilities */}
                      {position.responsibilities && position.responsibilities.length > 0 && (
                        <div className="space-y-2 mb-3">
                          {position.responsibilities.map((responsibility, respIndex) => (
                            <div key={respIndex} className="flex items-start gap-2 text-sm text-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{responsibility}</span>
                            </div>
                          ))}
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
