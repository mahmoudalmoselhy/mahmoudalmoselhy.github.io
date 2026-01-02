import React from 'react';

export const Clients = () => {
  const clients = [
    { name: "Al-Shathri", logo: "/lovable-uploads/66dec386-84b2-43af-b57b-a9919a4a9926.png" },
    { name: "Devolum", logo: "/lovable-uploads/453d7ce1-407f-46fe-884b-05af41e99c14.png" },
    { name: "HSI", logo: "/lovable-uploads/03735d6c-6d4c-4ddf-9c0f-f0bdb61a6bb8.png" },
    { name: "Dr. Omar Elmetwally Clinic", logo: "/lovable-uploads/deb923d3-abd8-4177-9c25-339f515659c7.png" },
    { name: "Lecce", logo: "/lovable-uploads/bdce145b-3541-4998-9381-9eb3a9a81b01.png" },
    { name: "Menusbee", logo: "/lovable-uploads/c8892c9f-d780-4825-a3b1-b1e017d5bd62.png" },
    { name: "Saabeel", logo: "/lovable-uploads/93f2b810-f780-4736-a0b8-e5d6fea5babb.png" },
    { name: "Shefaa", logo: "/lovable-uploads/7e6d1a1b-60ce-445d-9c6a-26cc95a62421.png" },
    { name: "3arrafni", logo: "/lovable-uploads/8cd0ad5b-d116-4da8-a678-fabadb04760b.png" },
    { name: "International Students", logo: "/lovable-uploads/0b6b1991-3ad0-4aea-aff4-ff458ada5d61.png" },
    { name: "Beskltawy Bike Shop", logo: "/lovable-uploads/a07cbbb5-9fe0-4c9f-8ba4-abebc9f98050.png" },
    { name: "Ottica Optics & Watches", logo: "/lovable-uploads/a644e5d7-7e19-4981-a7ab-c5815f82ef9e.png" },
    { name: "SAFA Student Services", logo: "/lovable-uploads/5f845450-ce56-4116-9df2-14701f0412bc.png" },
    { name: "FTI - Fintech Indicator", logo: "/lovable-uploads/a9650bae-ee96-448c-af28-54bb60a5b98c.png" },
    { name: "SIAI - Systems Innovation for Artificial Intelligence", logo: "/lovable-uploads/44db3aeb-8aa0-45e3-895d-9ae051699228.png" },
    { name: "El-Bahkery", logo: "/lovable-uploads/c08f2423-1b5a-4e94-ab0d-311133f1c61e.png" }
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 animate-fade-in-up">
          <span className="text-primary">Accounts</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto px-4">
          Trusted partnerships with leading brands and organizations across various industries
        </p>
        <div className="w-10 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
      </div>
      
      <section className="bg-card rounded-3xl border border-border p-6 md:p-10 shadow-m3-1">
        <div className="container mx-auto max-w-5xl">
          {/* Infinite scrolling slider */}
          <div className="overflow-hidden relative">
            <div className="flex animate-step-scroll">
              {/* First set of clients */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="group relative bg-surface-container rounded-xl p-3 transition-all duration-200 ease-m3-standard hover:bg-surface-container-high hover:shadow-m3-2 border border-border flex-shrink-0 w-32 md:w-40 h-24 md:h-32 mx-2 flex items-center justify-center overflow-hidden"
                >
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-1">
                    <img
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      width={160}
                      height={128}
                      className="max-w-full max-h-full object-contain transition-all duration-200"
                    />
                  </div>
                  
                  {/* Hover overlay with client name */}
                  <div className="absolute inset-x-0 bottom-0 bg-card p-1.5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-m3-standard rounded-b-xl border-t border-border">
                    <p className="text-foreground text-xs font-medium text-center truncate">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
              {/* Second set of clients for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="group relative bg-surface-container rounded-xl p-3 transition-all duration-200 ease-m3-standard hover:bg-surface-container-high hover:shadow-m3-2 border border-border flex-shrink-0 w-32 md:w-40 h-24 md:h-32 mx-2 flex items-center justify-center overflow-hidden"
                >
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-1">
                    <img
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      width={160}
                      height={128}
                      className="max-w-full max-h-full object-contain transition-all duration-200"
                    />
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 bg-card p-1.5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-m3-standard rounded-b-xl border-t border-border">
                    <p className="text-foreground text-xs font-medium text-center truncate">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center mt-5 space-x-1.5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary/40"
              ></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
