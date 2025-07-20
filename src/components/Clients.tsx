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
    },
    {
      name: "Beskltawy Bike Shop",
      logo: "/lovable-uploads/a07cbbb5-9fe0-4c9f-8ba4-abebc9f98050.png"
    },
    {
      name: "Ottica Optics & Watches",
      logo: "/lovable-uploads/a644e5d7-7e19-4981-a7ab-c5815f82ef9e.png"
    },
    {
      name: "SAFA Student Services",
      logo: "/lovable-uploads/5f845450-ce56-4116-9df2-14701f0412bc.png"
    },
    {
      name: "FTI - Fintech Indicator",
      logo: "/lovable-uploads/a9650bae-ee96-448c-af28-54bb60a5b98c.png"
    },
    {
      name: "SIAI - Systems Innovation for Artificial Intelligence",
      logo: "/lovable-uploads/44db3aeb-8aa0-45e3-895d-9ae051699228.png"
    },
    {
      name: "El-Bahkery",
      logo: "/lovable-uploads/c08f2423-1b5a-4e94-ab0d-311133f1c61e.png"
    }
  ];

  return (
    <section className="py-6 md:py-8 px-4 md:px-6 bg-muted/10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3 animate-fade-in">
            <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent animate-gradient">Accounts</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto animate-fade-in animation-delay-1000 px-4">
            Trusted partnerships with leading brands and organizations across various industries
          </p>
          <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto mt-2 md:mt-3 rounded-full animate-scale-in animation-delay-2000"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-card/30 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-border hover:border-accent w-full aspect-square flex items-center justify-center overflow-hidden"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Subtle animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg md:rounded-xl"></div>
              
              {/* Logo container */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-1">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              
              {/* Hover overlay with client name */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent p-1.5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-lg md:rounded-b-xl">
                <p className="text-foreground text-xs font-medium text-center truncate">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="flex justify-center mt-4 md:mt-6 space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end animate-pulse`}
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
