import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Code, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette, 
  Share2, 
  Search, 
  Zap, 
  TrendingUp,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: (open: boolean) => void;
  setIsHoveringMegaMenu?: (hovering: boolean) => void;
}

const ServicesMegaMenu = ({ isOpen, onClose, setIsOpen, setIsHoveringMegaMenu }: ServicesMegaMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const services = [
    {
      id: "web-development",
      icon: Code,
      title: "Custom Website Development",
      description: "Professional, responsive websites built with modern technologies",
      gradient: "from-blue-500/20 via-cyan-400/25 to-blue-600/20",
      accentColor: "text-blue-600",
      glowColor: "blue-500/30",
      link: "/services/web-development",
      features: ["Responsive Design", "E-commerce", "CMS Integration", "Performance Optimization"]
    },
    {
      id: "mobile-apps",
      icon: Smartphone,
      title: "Mobile & Web Applications",
      description: "Custom mobile apps and web applications for all devices",
      gradient: "from-emerald-500/20 via-green-400/25 to-emerald-600/20",
      accentColor: "text-emerald-600",
      glowColor: "emerald-500/30",
      link: "/services/mobile-applications",
      features: ["iOS & Android", "React Native", "Web Apps", "Cross-Platform"]
    },
    {
      id: "seo-analytics",
      icon: Search,
      title: "SEO & Analytics Services",
      description: "Comprehensive SEO optimization and analytics solutions",
      gradient: "from-purple-500/20 via-violet-400/25 to-purple-600/20",
      accentColor: "text-purple-600",
      glowColor: "purple-500/30",
      link: "/services/seo-insights",
      features: ["Technical SEO", "Content Strategy", "Analytics", "Conversion Tracking"]
    },
    {
      id: "digital-marketing",
      icon: BarChart3,
      title: "Digital Marketing Campaigns",
      description: "Strategic digital marketing campaigns that drive growth",
      gradient: "from-orange-500/20 via-red-400/25 to-orange-600/20",
      accentColor: "text-orange-600",
      glowColor: "orange-500/30",
      link: "/services/digital-campaigns",
      features: ["PPC Advertising", "Social Media", "Content Marketing", "Email Campaigns"]
    },
    {
      id: "brand-identity",
      icon: Palette,
      title: "Brand Identity Design",
      description: "Complete brand identity solutions that make you stand out",
      gradient: "from-pink-500/20 via-rose-400/25 to-pink-600/20",
      accentColor: "text-pink-600",
      glowColor: "pink-500/30",
      link: "/services/brand-identity",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
      id: "ux-ui-optimization",
      icon: TrendingUp,
      title: "UX/UI Experience Optimization",
      description: "User-centered design that improves conversions and engagement",
      gradient: "from-teal-500/20 via-cyan-400/25 to-teal-600/20",
      accentColor: "text-teal-600",
      glowColor: "teal-500/30",
      link: "/services/experience-optimization",
      features: ["User Research", "Interface Design", "Usability Testing", "Conversion Optimization"]
    }
  ];



  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef}
      className="absolute top-full left-0 right-0 z-[10001] animate-in slide-in-from-top-2 duration-500 ease-out mega-menu-container"
      onMouseEnter={() => {
        setIsOpen(true);
        setIsHoveringMegaMenu?.(true);
      }}
      onMouseLeave={(e) => {
        // Only close if mouse is actually leaving the mega menu area
        const rect = menuRef.current?.getBoundingClientRect();
        if (rect) {
          // Add a much larger buffer zone to prevent premature closing
          const buffer = 50; // 50px buffer
          const isActuallyLeaving = (
            e.clientY < rect.top - buffer ||
            e.clientX < rect.left - buffer ||
            e.clientX > rect.right + buffer ||
            e.clientY > rect.bottom + buffer
          );
          
          if (isActuallyLeaving) {
            setTimeout(() => {
              setIsHoveringMegaMenu?.(false);
            }, 800);
          }
        }
      }}
    >
      {/* Backdrop blur */}
      <div 
        className="absolute inset-0 bg-black/5 backdrop-blur-sm pointer-events-none"
        onMouseEnter={() => {
          setIsHoveringMegaMenu?.(true);
        }}
      />
      
      {/* Main menu container */}
      <div className="relative bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-xl pointer-events-auto">
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 animate-pulse"></div>
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
        </div>

                <div 
          className="max-w-5xl mx-auto px-6 lg:px-8 py-6 relative z-10"
          onMouseEnter={() => {
            setIsHoveringMegaMenu?.(true);
          }}
          onMouseLeave={() => {
            // Don't clear hover state immediately - let the main container handle it
          }}
        >
          {/* Compact Header */}
          <div className="text-center mb-4">
            <h2 className="text-xl font-light text-gray-900 mb-1">
              Complete digital solutions
            </h2>
            <p className="text-gray-600 text-xs">
              End-to-end solutions that drive real business growth
            </p>
          </div>

          {/* Core Services Grid - Optimized for 6 services */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="animate-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link
                  to={service.link}
                  onClick={onClose}
                  className="group relative block pointer-events-auto"
                >
                {/* Glass morphism effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl backdrop-blur-[2px]"></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-white/30 via-transparent to-white/20 rounded-2xl"></div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                </div>

                <div className="relative h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg p-3 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1 overflow-hidden">
                  {/* Service gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-all duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon and Title Row */}
                    <div className="flex items-center mb-2">
                      <div className={`w-6 h-6 ${service.accentColor} relative group-hover:scale-110 transition-all duration-300 mr-2`}>
                        <service.icon className="w-full h-full" strokeWidth={1.5} />
                        <div className={`absolute inset-0 bg-${service.glowColor} opacity-0 group-hover:opacity-30 blur-md transition-all duration-300 rounded-full`}></div>
                      </div>
                      <h3 className={`text-xs font-semibold text-gray-900 group-hover:${service.accentColor} transition-colors duration-300`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-xs mb-2 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Feature */}
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full mr-1"></div>
                      {service.features[0]}
                    </div>

                    {/* CTA */}
                    <div className={`inline-flex items-center text-xs font-medium ${service.accentColor} group-hover:translate-x-1 transition-all duration-300`}>
                      Learn more
                      <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100">
                    <div className={`h-full bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-1000 ease-out`}></div>
                  </div>
                </div>
              </Link>
              </div>
            ))}
          </div>

          {/* Compact Bottom CTA */}
          <div className="text-center mt-4 pt-3 border-t border-gray-200/30">
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-green-500/25 group"
            >
              <Sparkles className="mr-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMegaMenu; 