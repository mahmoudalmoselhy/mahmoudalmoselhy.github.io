
import React from 'react';

export const Clients = () => {
  const clients = [
    {
      name: "Al-Shathri",
      logo: "/lovable-uploads/66dec386-84b2-43af-b57b-a9919a4a9926.png"
    },
    {
      name: "AV",
      logo: "/lovable-uploads/453d7ce1-407f-46fe-884b-05af41e99c14.png"
    },
    {
      name: "Orange Company",
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
      name: "S Company",
      logo: "/lovable-uploads/93f2b810-f780-4736-a0b8-e5d6fea5babb.png"
    },
    {
      name: "Shafa",
      logo: "/lovable-uploads/7e6d1a1b-60ce-445d-9c6a-26cc95a62421.png"
    },
    {
      name: "Red Black Circle",
      logo: "/lovable-uploads/8cd0ad5b-d116-4da8-a678-fabadb04760b.png"
    },
    {
      name: "Education Logo",
      logo: "/lovable-uploads/0b6b1991-3ad0-4aea-aff4-ff458ada5d61.png"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Trusted by leading brands and organizations across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10 hover:border-red-500/40 w-full h-32 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
