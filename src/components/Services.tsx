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
    <section id="services" className="pt-12 sm:pt-16 lg:pt-20 pb-0 bg-white relative overflow-hidden">
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
                    
                    {/* Learn more indicator - now just visual since entire card is clickable */}
                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
                      <div className={`inline-flex items-center text-xs sm:text-sm font-medium ${service.accentColor} group-hover:translate-x-1 transition-all duration-300`}>
                        Learn more
                        <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
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

        {/* The Cardinal Advantage - Green Background Design */}
        <div className="relative w-screen left-1/2 -ml-[50vw] mt-20 sm:mt-24 lg:mt-32 pt-8 sm:pt-12 lg:pt-16 pb-0 bg-gradient-to-br from-green-600 to-emerald-700 overflow-hidden" style={{marginBottom: '0'}}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>
          
          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center text-xs sm:text-sm font-medium text-green-100 uppercase tracking-wide mb-2 sm:mb-3">
                <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-white to-green-200 mr-3 sm:mr-4"></div>
                The Cardinal Advantage
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-2 sm:mb-3">
                Why Businesses Choose
                <span className="block text-green-200 font-normal">Cardinal Consulting</span>
              </h3>
              <p className="text-sm sm:text-base text-green-100">
                We're not just another agency. We're your premier digital partner, combining cutting-edge AI technology with deep market expertise to deliver results that traditional agencies simply can't match.
              </p>
            </div>
            
            {/* Enhanced Comparison Table */}
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 border-b border-gray-200">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
                  <div className="text-left">
                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">Cardinal's Unique Advantages</h4>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">Traditional Agencies</h4>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-green-600">Cardinal Consulting</h4>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900">The Difference</h4>
                  </div>
                </div>
              </div>
              
              {/* Table Rows */}
              <div className="divide-y divide-gray-100">
                {/* AI Optimization */}
                <div className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 hover:bg-gray-50/50 transition-colors">
                  <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6 items-center">
                    <div className="text-left">
                      <h5 className="text-xs sm:text-sm lg:text-base font-medium text-gray-900">AI Experience Optimization (AEO)</h5>
                      <p className="text-xs text-gray-600 mt-1">Future-proof content for AI search engines</p>
                    </div>
                                          <div className="text-center">
                        <div className="flex justify-center">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="flex justify-center">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-800">
                          Industry First
                        </span>
                      </div>
                  </div>
                </div>
                
                {/* Houston Market Expertise */}
                <div className="px-6 sm:px-8 py-4 sm:py-6 hover:bg-gray-50/50 transition-colors">
                  <div className="grid grid-cols-4 gap-4 sm:gap-6 items-center">
                    <div className="text-left">
                      <h5 className="text-sm sm:text-base font-medium text-gray-900">Market Specialization</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Deep understanding of global business landscape</p>
                    </div>
                    <div className="text-center">
                      <span className="text-sm sm:text-base text-gray-600">Generic</span>
                    </div>
                    <div className="text-center">
                      <span className="text-sm sm:text-base font-semibold text-green-600">Specialized</span>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800">
                        Local Expert
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Project Timeline */}
                <div className="px-6 sm:px-8 py-4 sm:py-6 hover:bg-gray-50/50 transition-colors">
                  <div className="grid grid-cols-4 gap-4 sm:gap-6 items-center">
                    <div className="text-left">
                      <h5 className="text-sm sm:text-base font-medium text-gray-900">Project Delivery Timeline</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">From concept to launch</p>
                    </div>
                    <div className="text-center">
                      <span className="text-sm sm:text-base text-gray-600">3-6 months</span>
                    </div>
                    <div className="text-center">
                      <span className="text-sm sm:text-base font-semibold text-green-600">72 hours - 2 weeks</span>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-emerald-100 text-emerald-800">
                        10x Faster
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Support Availability */}
                <div className="px-6 sm:px-8 py-4 sm:py-6 hover:bg-gray-50/50 transition-colors">
                  <div className="grid grid-cols-4 gap-4 sm:gap-6 items-center">
                    <div className="text-left">
                      <h5 className="text-sm sm:text-base font-medium text-gray-900">Support Response Time</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">When you need immediate assistance</p>
                    </div>
                    <div className="text-center">
                      <span className="text-sm sm:text-base text-gray-600">24-48 hours</span>
                    </div>
                    <div className="text-center">
                      <span className="text-sm sm:text-base font-semibold text-green-600">Instant - 2 hours</span>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800">
                        24x Faster
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Technology Stack */}
                <div className="px-6 sm:px-8 py-4 sm:py-6 hover:bg-gray-50/50 transition-colors">
                  <div className="grid grid-cols-4 gap-4 sm:gap-6 items-center">
                    <div className="text-left">
                      <h5 className="text-sm sm:text-base font-medium text-gray-900">Cutting-Edge Technology</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Latest frameworks and AI integration</p>
                    </div>
                    <div className="text-center">
                      <span className="text-sm sm:text-base text-gray-600">Standard</span>
                    </div>
                    <div className="text-center">
                      <span className="text-sm sm:text-base font-semibold text-green-600">AI-Powered</span>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-800">
                        Future-Ready
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Client Success Rate */}
                <div className="px-6 sm:px-8 py-4 sm:py-6 hover:bg-gray-50/50 transition-colors">
                  <div className="grid grid-cols-4 gap-4 sm:gap-6 items-center">
                    <div className="text-left">
                      <h5 className="text-sm sm:text-base font-medium text-gray-900">Client Success Rate</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Projects completed successfully</p>
                    </div>
                    <div className="text-center">
                      <span className="text-sm sm:text-base text-gray-600">85%</span>
                    </div>
                    <div className="text-center">
                      <span className="text-sm sm:text-base font-semibold text-green-600">98%</span>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800">
                        +13% Higher
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Pricing Transparency */}
                <div className="px-6 sm:px-8 py-4 sm:py-6 hover:bg-gray-50/50 transition-colors">
                  <div className="grid grid-cols-4 gap-4 sm:gap-6 items-center">
                    <div className="text-left">
                      <h5 className="text-sm sm:text-base font-medium text-gray-900">Pricing Transparency</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">No hidden fees or surprise charges</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800">
                        Full Transparency
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Performance Guarantees */}
                <div className="px-6 sm:px-8 py-4 sm:py-6 hover:bg-gray-50/50 transition-colors">
                  <div className="grid grid-cols-4 gap-4 sm:gap-6 items-center">
                    <div className="text-left">
                      <h5 className="text-sm sm:text-base font-medium text-gray-900">Performance Guarantees</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Guaranteed results or money back</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800">
                        Risk-Free
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Simple Text CTA */}
            <div className="text-center mt-6 sm:mt-8 mb-6 sm:mb-8">
              <p className="text-green-100 text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 px-4">
                Ready to experience the Cardinal difference?
              </p>
              <a href="/contact" className="inline-flex items-center text-white font-semibold text-base sm:text-lg lg:text-xl hover:text-green-200 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-200 px-4 text-center">
                Get your FREE consultation and project evaluation today
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;