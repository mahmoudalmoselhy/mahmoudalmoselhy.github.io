
import React from 'react';
import { ExternalLink, FileText, Youtube } from 'lucide-react';

export const Portfolio = () => {
  const portfolioSections = [
    {
      title: "Content Writing - 3arrafni.com",
      description: "Leading NVIDIA MENA news translation and tech content creation",
      items: [
        {
          title: "Samsung Galaxy Watch 4 Review",
          description: "5000+ word comprehensive review (27 hours of writing)",
          link: "https://www.3arrafni.com/samsung-galaxy-watch-4-review/",
          type: "article"
        },
        {
          title: "Honey Scam Explained",
          description: "Technical news article with detailed explanations",
          link: "https://www.3arrafni.com/honey-scam-explained/",
          type: "article"
        },
        {
          title: "Samsung Galaxy Buds FE Review",
          description: "First personal photography experience for product review",
          link: "https://www.3arrafni.com/samsung-galaxy-buds-fe-review/",
          type: "article"
        },
        {
          title: "UGREEN Nexode 65W GaN Charging Station",
          description: "Product review with original photography",
          link: "https://www.3arrafni.com/ugreen-nexode-65w-gan-charging-station/",
          type: "article"
        },
        {
          title: "Black Myth: Wukong Review",
          description: "Gaming review exploring new content territory",
          link: "https://www.3arrafni.com/black-myth-wukong-review/",
          type: "article"
        }
      ]
    },
    {
      title: "Script Writing",
      description: "YouTube content creation and script development",
      items: [
        {
          title: "ExVar YouTube Scripts",
          description: "Script writing for Lamees El-Husseini's diverse video content",
          link: "https://youtube.com/playlist?list=PLsMyTdtr0IJlgBBuxRdba1NkyHHUpQPgm",
          type: "video"
        },
        {
          title: "Revieology Channel Scripts",
          description: "Script writing for review-focused YouTube content",
          link: "https://www.youtube.com/playlist?list=PLvHCxZoUkHSaflZiicOpeOcBvr84u50Fk",
          type: "video"
        }
      ]
    },
    {
      title: "Social Media Campaigns - Menusbee",
      description: "Complete campaign management targeting diverse business sectors",
      items: [
        {
          title: "Tourism Companies Campaign",
          description: "Targeted advertising for travel and tourism businesses",
          link: "https://www.facebook.com/menusbee/posts/pfbid0sUPtVyCZPXH1ZZ17tpsSgv4WrG6Stwq83AoKDZQ2zdkmTrcS7RacRqEcJejE1u1Ll",
          type: "social"
        },
        {
          title: "Cafes & Restaurants Campaign",
          description: "Food service industry social media strategy",
          link: "https://www.facebook.com/menusbee/posts/pfbid0gYKbwHD5H4hGLoJtoYVAAfk7iunBid9G5MAHLG1ny47PYHEqmP8p7GhZGn3tatV8l",
          type: "social"
        },
        {
          title: "Butcher Shops Campaign",
          description: "Specialized campaign for meat retailers",
          link: "https://www.facebook.com/menusbee/posts/pfbid02yBxPnp34eVP5aZzVK2YCUAUEiMAUotMTFx31mb39QP6h7XqYYMSVRxCtqZCRCgCal",
          type: "social"
        }
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'article': return FileText;
      case 'video': return Youtube;
      case 'social': return ExternalLink;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'from-red-500 to-red-600';
      case 'video': return 'from-blue-500 to-blue-600';
      case 'social': return 'from-red-400 to-blue-500';
      default: return 'from-red-500 to-blue-500';
    }
  };

  return (
    <section className="py-20 px-6 bg-blue-500/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            A showcase of my diverse content creation work across multiple platforms and industries
          </p>
        </div>

        <div className="space-y-16">
          {portfolioSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">{section.title}</h3>
                <p className="text-gray-200 text-lg">{section.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => {
                  const Icon = getIcon(item.type);
                  return (
                    <a
                      key={itemIndex}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-red-400/30 hover:border-red-400/50"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-red-300 transition-colors duration-300">
                        {item.title}
                      </h4>
                      
                      <p className="text-gray-200 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center text-blue-300 text-sm font-medium group-hover:text-blue-200 transition-colors duration-300">
                        <span>View Work</span>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
