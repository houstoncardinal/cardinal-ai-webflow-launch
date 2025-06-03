
import { Code, Smartphone, Globe, BarChart3, Palette, Share2, Search, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      category: "TECHNOLOGY",
      title: "Web Development",
      description: "Enterprise-grade solutions built with cutting-edge technologies for optimal performance.",
      gradient: "from-blue-500/10 via-cyan-400/15 to-blue-600/10",
      accentColor: "text-blue-600",
      glowColor: "blue-500/20"
    },
    {
      icon: Smartphone,
      category: "DIGITAL",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
      gradient: "from-emerald-500/10 via-green-400/15 to-emerald-600/10",
      accentColor: "text-emerald-600",
      glowColor: "emerald-500/20"
    },
    {
      icon: Globe,
      category: "INNOVATION",
      title: "Web Applications",
      description: "Complex applications with enterprise architecture and intuitive user interfaces.",
      gradient: "from-purple-500/10 via-violet-400/15 to-purple-600/10",
      accentColor: "text-purple-600",
      glowColor: "purple-500/20"
    },
    {
      icon: Zap,
      category: "INFRASTRUCTURE",
      title: "Cloud Solutions",
      description: "Scalable, secure cloud hosting solutions with enterprise-level support.",
      gradient: "from-amber-500/10 via-yellow-400/15 to-amber-600/10",
      accentColor: "text-amber-600",
      glowColor: "amber-500/20"
    },
    {
      icon: Search,
      category: "ANALYTICS",
      title: "SEO & Insights",
      description: "Strategic optimization and comprehensive analytics to maximize performance.",
      gradient: "from-rose-500/10 via-pink-400/15 to-rose-600/10",
      accentColor: "text-rose-600",
      glowColor: "rose-500/20"
    },
    {
      icon: Palette,
      category: "STRATEGY",
      title: "Brand Identity",
      description: "Complete brand development from positioning to visual identity systems.",
      gradient: "from-indigo-500/10 via-blue-400/15 to-indigo-600/10",
      accentColor: "text-indigo-600",
      glowColor: "indigo-500/20"
    },
    {
      icon: Share2,
      category: "MARKETING",
      title: "Digital Campaigns",
      description: "Data-driven strategies that build communities and drive measurable ROI.",
      gradient: "from-teal-500/10 via-cyan-400/15 to-teal-600/10",
      accentColor: "text-teal-600",
      glowColor: "teal-500/20"
    },
    {
      icon: BarChart3,
      category: "AI",
      title: "Experience Optimization",
      description: "Pioneer AEO services optimizing for next-generation AI systems.",
      gradient: "from-violet-500/10 via-purple-400/15 to-violet-600/10",
      accentColor: "text-violet-600",
      glowColor: "violet-500/20"
    }
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-6"></div>
            Services
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Digital solutions that
            <span className="block text-green-600 font-normal">
              drive growth
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl">
            We deliver end-to-end digital solutions that position organizations for sustained growth in 
            an increasingly connected world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[420px]"
            >
              {/* Subtle luxury glow - much more refined */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 blur-sm`}></div>
              
              {/* Glass morphism effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl backdrop-blur-[2px]"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-2xl"></div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500 ease-out"></div>
              </div>
              
              <Card className="relative h-full bg-white/95 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer group-hover:scale-[1.02] rounded-2xl overflow-hidden">
                {/* Refined hover background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-40 transition-all duration-700`}></div>
                
                <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
                  <div>
                    {/* Category badge */}
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 opacity-70">
                      {service.category}
                    </div>
                    
                    {/* Icon with subtle glow */}
                    <div className="mb-6 relative">
                      <div className={`w-14 h-14 ${service.accentColor} relative group-hover:scale-110 transition-all duration-500`}>
                        <service.icon className="w-full h-full" strokeWidth={1.5} />
                        {/* Very subtle icon glow */}
                        <div className={`absolute inset-0 bg-${service.glowColor} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 rounded-full`}></div>
                      </div>
                    </div>
                    
                    {/* Title with consistent sizing */}
                    <h3 className={`text-xl font-semibold text-gray-900 mb-4 group-hover:${service.accentColor} transition-colors duration-500 leading-tight min-h-[56px] flex items-center`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description with consistent height */}
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 min-h-[84px]">
                      {service.description}
                    </p>
                    
                    {/* Learn more link */}
                    <div className="mt-6">
                      <button className={`inline-flex items-center text-sm font-medium ${service.accentColor} group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100`}>
                        Learn more
                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Subtle progress indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100">
                    <div className={`h-full bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-1000 ease-out`}></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
