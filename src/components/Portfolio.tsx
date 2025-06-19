
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

  const seoArchives = [
    {
      title: "3arrafni.com Archive",
      description: "Complete collection of tech articles and reviews",
      link: "https://www.3arrafni.com/author/almoselhy/",
      logo: "/lovable-uploads/693924e3-2bc0-456b-8afe-d100ef0390f8.png"
    },
    {
      title: "Android World Archive",
      description: "Mobile technology and Android-focused content",
      link: "https://www.androidworld9.com/author/mahmoud-almoselhy/",
      logo: "/lovable-uploads/693924e3-2bc0-456b-8afe-d100ef0390f8.png"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Top <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-lg max-w-3xl mx-auto px-4">
            A showcase of my diverse content creation work across multiple platforms and industries
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {portfolioSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6 md:space-y-8">
              <div className="text-center px-4">
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">{section.title}</h3>
                <p className="text-gray-400 text-sm md:text-lg">{section.description}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {section.items.map((item, itemIndex) => {
                  return (
                    <a
                      key={itemIndex}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-black/40 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-black/60 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-amber-500/20 hover:border-amber-500/40"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 p-2">
                        <img
                          src={item.logo}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3 group-hover:text-amber-400 transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h4>
                      
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center text-orange-400 text-xs md:text-sm font-medium group-hover:text-orange-300 transition-colors duration-300">
                        <span>View Work</span>
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}

          {/* SEO Archives Section */}
          <div className="space-y-6 md:space-y-8">
            <div className="text-center px-4">
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">SEO Archives</h3>
              <p className="text-gray-400 text-sm md:text-lg">Complete collections of published articles and content</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              {seoArchives.map((archive, archiveIndex) => (
                <a
                  key={archiveIndex}
                  href={archive.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-black/40 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-black/60 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-amber-500/20 hover:border-amber-500/40"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 p-3 mx-auto">
                    <img
                      src={archive.logo}
                      alt={archive.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 group-hover:text-amber-400 transition-colors duration-300 text-center">
                    {archive.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 md:mb-6 text-center">
                    {archive.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-orange-400 text-sm md:text-base font-medium group-hover:text-orange-300 transition-colors duration-300">
                    <span>View Archive</span>
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
