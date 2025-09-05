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
      alt: "ABQ MRI Logo",
      url: "https://www.abqmri.com"
    },
    {
      name: "APN Clinic",
      logo: "/apncliniclogo.png",
      alt: "APN Clinic Logo",
      url: "https://www.apnclinic.com"
    },
    {
      name: "CCR",
      logo: "/ccrlogo.jpg",
      alt: "CCR Logo",
      url: "https://www.unitedccr.com"
    },
    {
      name: "ClearLedger",
      logo: "/clearledgerlogo.png",
      alt: "ClearLedger Logo",
      url: "https://www.yourclearledger.com"
    },
    {
      name: "HougenPros",
      logo: "/hougenproslogo.png",
      alt: "HougenPros Logo",
      url: "https://www.hougenpros.com"
    },
    {
      name: "IAC Centers",
      logo: "/iaclogo.png",
      alt: "IAC Centers Logo",
      url: "https://www.injuryassistancecenters.com"
    },
    {
      name: "RE Logo",
      logo: "/relogo.png",
      alt: "RE Logo",
      url: "https://www.reactivatedallas.com"
    },
    {
      name: "HE Logo",
      logo: "/helogo.png",
      alt: "HE Logo",
      url: "https://www.houinc.com"
    },
  ];

  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-green-400/10 to-blue-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center text-xs font-medium text-gray-600 uppercase tracking-wide mb-2 sm:mb-3">
            <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-green-500 to-green-600 mr-3 sm:mr-4"></div>
            Trusted By Industry Leaders
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 mb-2 sm:mb-3">
            Companies that trust us to
            <span className="block text-green-600 font-normal">deliver results</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            From healthcare to construction, we've helped businesses across industries 
            transform their digital presence and drive growth.
          </p>
        </div>

        {/* Logos Container */}
        <div className="relative">
          {/* Gradient Overlays for Smooth Edges - Hidden on mobile */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Mobile Grid Layout */}
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group relative flex-shrink-0 flex flex-col items-center justify-center"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Logo */}
                <a 
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group-hover:scale-105 transition-all duration-500 group-hover:-translate-y-1 cursor-pointer"
                >
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="h-6 sm:h-8 lg:h-10 w-auto object-contain transition-all duration-500 group-hover:brightness-110"
                    loading="lazy"
                  />
                  
                  {/* Hover indicator - Hidden on mobile */}
                  <div className="hidden sm:block absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-6 transition-all duration-300"></div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200/50">
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 px-4">
            Ready to join these industry leaders?
          </p>
          <a href="/contact" className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-300 group cursor-pointer">
            <span>Start your transformation today</span>
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 