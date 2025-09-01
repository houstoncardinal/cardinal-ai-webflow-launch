import { Code, Smartphone, Globe, BarChart3, Palette, Share2, Search, Zap, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
const Services = () => {
  const services = [
    {
      icon: Code,
      category: "WEB DEVELOPMENT",
      title: "Custom Website Development",
      description: "Professional, responsive websites built with modern technologies. From simple business sites to complex e-commerce platforms, we create digital experiences that convert visitors into customers.",
      gradient: "from-blue-500/10 via-cyan-400/15 to-blue-600/10",
      accentColor: "text-blue-600",
      glowColor: "blue-500/20",
      link: "/services/web-development"
    },
    {
      icon: Smartphone,
      category: "MOBILE APPS",
      title: "Mobile & Web Applications",
      description: "Custom mobile apps and web applications that streamline your business operations. Built for performance, scalability, and exceptional user experience across all devices and platforms.",
      gradient: "from-emerald-500/10 via-green-400/15 to-emerald-600/10",
      accentColor: "text-emerald-600",
      glowColor: "emerald-500/20",
      link: "/services/mobile-applications"
    },
    {
      icon: Globe,
      category: "WEB APPLICATIONS",
      title: "Custom Web Applications",
      description: "Complex web applications with enterprise architecture and modern frameworks. Built to streamline operations and boost efficiency for businesses of all sizes and industries.",
      gradient: "from-purple-500/10 via-violet-400/15 to-purple-600/10",
      accentColor: "text-purple-600",
      glowColor: "purple-500/20",
      link: "/services/web-applications"
    },
    {
      icon: Zap,
      category: "CLOUD SOLUTIONS",
      title: "Cloud Infrastructure Solutions",
      description: "Scalable, secure cloud hosting solutions with enterprise-level reliability and performance. Optimized for security, speed, and cost-effectiveness across all business types.",
      gradient: "from-amber-500/10 via-yellow-400/15 to-amber-600/10",
      accentColor: "text-amber-600",
      glowColor: "amber-500/20",
      link: "/services/cloud-solutions"
    },
    {
      icon: Search,
      category: "SEO & ANALYTICS",
      title: "SEO & Analytics Services",
      description: "Comprehensive SEO optimization and analytics solutions that drive real results. Help businesses rank higher in search results and drive more qualified traffic to their websites.",
      gradient: "from-rose-500/10 via-pink-400/15 to-rose-600/10",
      accentColor: "text-rose-600",
      glowColor: "rose-500/20",
      link: "/services/seo-insights"
    },
    {
      icon: Palette,
      category: "BRAND STRATEGY",
      title: "Brand Identity & Strategy",
      description: "Complete brand development from positioning to visual identity and marketing materials. Help businesses stand out in their market with memorable brand experiences.",
      gradient: "from-indigo-500/10 via-blue-400/15 to-indigo-600/10",
      accentColor: "text-indigo-600",
      glowColor: "indigo-500/20",
      link: "/services/brand-identity"
    },
    {
      icon: Share2,
      category: "DIGITAL MARKETING",
      title: "Digital Marketing Strategies",
      description: "Data-driven digital marketing strategies that deliver measurable results and ROI. PPC, social media, and content marketing campaigns that drive qualified leads.",
      gradient: "from-teal-500/10 via-cyan-400/15 to-teal-600/10",
      accentColor: "text-teal-600",
      glowColor: "teal-500/20",
      link: "/services/digital-campaigns"
    },
    {
      icon: BarChart3,
      category: "AI OPTIMIZATION",
      title: "AI Experience Optimization",
      description: "Pioneer AEO services optimizing for next-generation AI systems and search engines. Future-proof your business with AI-ready content and intelligent user experiences.",
      gradient: "from-violet-500/10 via-purple-400/15 to-violet-600/10",
      accentColor: "text-violet-600",
      glowColor: "violet-500/20",
      link: "/services/experience-optimization"
    }
  ];
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-4 sm:mr-6"></div>
            Digital Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Digital solutions that
            <span className="block text-green-600 font-normal">
              grow your business
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-3xl">
            We deliver end-to-end digital solutions designed to transform businesses. 
            From custom websites to comprehensive digital marketing, we help companies 
            dominate their market and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="group relative block">
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
              
              <Card className="relative h-full min-h-[380px] sm:min-h-[420px] bg-white/95 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer group-hover:scale-[1.02] rounded-2xl overflow-hidden">
                {/* Refined hover background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-40 transition-all duration-700`}></div>
                
                <CardContent className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                  <div>
                    {/* Category badge */}
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 sm:mb-4 opacity-70">
                      {service.category}
                    </div>
                    
                    {/* Icon with subtle glow */}
                    <div className="mb-4 sm:mb-6 relative">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 ${service.accentColor} relative group-hover:scale-110 transition-all duration-500`}>
                        <service.icon className="w-full h-full" strokeWidth={1.5} />
                        {/* Very subtle icon glow */}
                        <div className={`absolute inset-0 bg-${service.glowColor} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 rounded-full`}></div>
                      </div>
                    </div>
                    
                    {/* Title with consistent sizing */}
                    <h3 className={`text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:${service.accentColor} transition-colors duration-500 leading-tight min-h-[48px] sm:min-h-[56px] flex items-center`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description with consistent height */}
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 min-h-[80px] sm:min-h-[96px] flex items-start">
                      {service.description}
                    </p>
                    
                    {/* Learn more link - now always visible */}
                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
                      <Link 
                        to={service.link}
                        className={`inline-flex items-center text-xs sm:text-sm font-medium ${service.accentColor} group-hover:translate-x-1 transition-all duration-300 cursor-pointer`}
                      >
                        Learn more
                        <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Subtle progress indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100">
                    <div className={`h-full bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-1000 ease-out`}></div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

                     {/* Business Focus Section */}
             <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
               <div className="max-w-3xl mx-auto">
                 <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4 sm:mb-6">
                   Why Businesses Choose Cardinal Consulting
                 </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Industry Expertise</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Deep understanding of business landscapes and market dynamics across industries</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">24/7 Support</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Round-the-clock support from our team for immediate assistance when you need it</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Track record of success with 500+ businesses and 98% client satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;