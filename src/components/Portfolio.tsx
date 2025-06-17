
import React from 'react';
import { ExternalLink } from 'lucide-react';

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
          logo: "/lovable-uploads/693924e3-2bc0-456b-8afe-d100ef0390f8.png"
        },
        {
          title: "Honey Scam Explained",
          description: "Technical news article with detailed explanations",
          link: "https://www.3arrafni.com/honey-scam-explained/",
          logo: "/lovable-uploads/693924e3-2bc0-456b-8afe-d100ef0390f8.png"
        },
        {
          title: "Samsung Galaxy Buds FE Review",
          description: "First personal photography experience for product review",
          link: "https://www.3arrafni.com/samsung-galaxy-buds-fe-review/",
          logo: "/lovable-uploads/693924e3-2bc0-456b-8afe-d100ef0390f8.png"
        },
        {
          title: "UGREEN Nexode 65W GaN Charging Station",
          description: "Product review with original photography",
          link: "https://www.3arrafni.com/ugreen-nexode-65w-gan-charging-station/",
          logo: "/lovable-uploads/693924e3-2bc0-456b-8afe-d100ef0390f8.png"
        },
        {
          title: "Black Myth: Wukong Review",
          description: "Gaming review exploring new content territory",
          link: "https://www.3arrafni.com/black-myth-wukong-review/",
          logo: "/lovable-uploads/693924e3-2bc0-456b-8afe-d100ef0390f8.png"
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
          logo: "/lovable-uploads/106b69a1-42a2-4bf5-9caa-e9f4a854f21a.png"
        },
        {
          title: "Revieology Channel Scripts",
          description: "Script writing for review-focused YouTube content",
          link: "https://www.youtube.com/playlist?list=PLvHCxZoUkHSaflZiicOpeOcBvr84u50Fk",
          logo: "/lovable-uploads/b53bf9e1-ad4a-433a-984c-7c8fb6a6187d.png"
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
          logo: "/lovable-uploads/c8892c9f-d780-4825-a3b1-b1e017d5bd62.png"
        },
        {
          title: "Cafes & Restaurants Campaign",
          description: "Food service industry social media strategy",
          link: "https://www.facebook.com/menusbee/posts/pfbid0gYKbwHD5H4hGLoJtoYVAAfk7iunBid9G5MAHLG1ny47PYHEqmP8p7GhZGn3tatV8l",
          logo: "/lovable-uploads/c8892c9f-d780-4825-a3b1-b1e017d5bd62.png"
        },
        {
          title: "Butcher Shops Campaign",
          description: "Specialized campaign for meat retailers",
          link: "https://www.facebook.com/menusbee/posts/pfbid02yBxPnp34eVP5aZzVK2YCUAUEiMAUotMTFx31mb39QP6h7XqYYMSVRxCtqZCRCgCal",
          logo: "/lovable-uploads/c8892c9f-d780-4825-a3b1-b1e017d5bd62.png"
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Top <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of my diverse content creation work across multiple platforms and industries
          </p>
        </div>

        <div className="space-y-16">
          {portfolioSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">{section.title}</h3>
                <p className="text-gray-400 text-lg">{section.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => {
                  return (
                    <a
                      key={itemIndex}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-black/40 backdrop-blur-lg rounded-2xl p-6 hover:bg-black/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-red-500/20 hover:border-red-500/40"
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-2">
                        <img
                          src={item.logo}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                        {item.title}
                      </h4>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
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
