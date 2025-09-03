import { useEffect, useState } from "react";

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const clients = [
    {
      name: "ABQ MRI",
      logo: "/abqmrilogo.png",
      alt: "ABQ MRI Logo"
    },
    {
      name: "APN Clinic",
      logo: "/apncliniclogo.png",
      alt: "APN Clinic Logo"
    },
    {
      name: "ClearLedger",
      logo: "/clearledgerlogo.png",
      alt: "ClearLedger Logo"
    },
    {
      name: "HougenPros",
      logo: "/hougenproslogo.png",
      alt: "HougenPros Logo"
    },
    {
      name: "IAC Centers",
      logo: "/iaclogo.png",
      alt: "IAC Centers Logo"
    },

  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-green-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center text-xs font-medium text-gray-600 uppercase tracking-wide mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-green-500 to-green-600 mr-4"></div>
            Trusted By Industry Leaders
          </div>
          <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Companies that trust us to
            <span className="block text-green-600 font-normal">deliver results</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From healthcare to construction, we've helped businesses across industries 
            transform their digital presence and drive growth.
          </p>
        </div>

        {/* Logos Container */}
        <div className="relative">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Logos Grid */}
          <div className={`flex items-center justify-center gap-8 lg:gap-12 xl:gap-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group relative flex-shrink-0"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                                 {/* Logo */}
                 <div className="relative group-hover:scale-105 transition-all duration-500 group-hover:-translate-y-1">
                   <img
                     src={client.logo}
                     alt={client.alt}
                     className="h-8 lg:h-10 w-auto object-contain transition-all duration-500 group-hover:brightness-110"
                     loading="lazy"
                   />
                   
                   {/* Hover indicator */}
                   <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-6 transition-all duration-300"></div>
                 </div>
                
                                 {/* Client name on hover */}
                 <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                   <span className="text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm whitespace-nowrap">
                     {client.name}
                   </span>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200/50">
          <p className="text-gray-600 mb-4">
            Ready to join these industry leaders?
          </p>
          <div className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-300 group cursor-pointer">
            <span>Start your transformation today</span>
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 