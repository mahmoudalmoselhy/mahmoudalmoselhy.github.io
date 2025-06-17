
import React from 'react';

export const Clients = () => {
  const clients = [
    {
      name: "Al-Shathri",
      logo: "/lovable-uploads/66dec386-84b2-43af-b57b-a9919a4a9926.png"
    },
    {
      name: "Devolum",
      logo: "/lovable-uploads/453d7ce1-407f-46fe-884b-05af41e99c14.png"
    },
    {
      name: "HSI",
      logo: "/lovable-uploads/03735d6c-6d4c-4ddf-9c0f-f0bdb61a6bb8.png"
    },
    {
      name: "Dr. Omar Elmetwally Clinic",
      logo: "/lovable-uploads/deb923d3-abd8-4177-9c25-339f515659c7.png"
    },
    {
      name: "Lecce",
      logo: "/lovable-uploads/bdce145b-3541-4998-9381-9eb3a9a81b01.png"
    },
    {
      name: "Menusbee",
      logo: "/lovable-uploads/c8892c9f-d780-4825-a3b1-b1e017d5bd62.png"
    },
    {
      name: "Saabeel",
      logo: "/lovable-uploads/93f2b810-f780-4736-a0b8-e5d6fea5babb.png"
    },
    {
      name: "Shefaa",
      logo: "/lovable-uploads/7e6d1a1b-60ce-445d-9c6a-26cc95a62421.png"
    },
    {
      name: "3arrafni",
      logo: "/lovable-uploads/8cd0ad5b-d116-4da8-a678-fabadb04760b.png"
    },
    {
      name: "International Students",
      logo: "/lovable-uploads/0b6b1991-3ad0-4aea-aff4-ff458ada5d61.png"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white/5 via-blue-900/10 to-red-900/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-600 bg-clip-text text-transparent animate-gradient">Accounts</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto animate-fade-in animation-delay-1000">
            Trusted partnerships with leading brands and organizations across various industries
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto mt-6 rounded-full animate-scale-in animation-delay-2000"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-transparent backdrop-blur-xl rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/20 border border-white/20 hover:border-blue-500/50 w-full h-36 flex items-center justify-center overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Logo container */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Hover overlay with client name */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-3xl">
                <p className="text-white text-xs font-medium text-center truncate">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="flex justify-center mt-16 space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-600 animate-pulse`}
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
