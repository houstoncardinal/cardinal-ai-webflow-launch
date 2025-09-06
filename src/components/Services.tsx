import { Code, Smartphone, Globe, BarChart3, Palette, Share2, Search, Zap, TrendingUp, Users, ArrowRight } from "lucide-react";
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
      link: "/services/web-development",
      startingPrice: "$2,500"
    },
    {
      icon: Smartphone,
      category: "MOBILE APPS",
      title: "Mobile & Web Applications",
      description: "Custom mobile apps and web applications that streamline your business operations. Built for performance, scalability, and exceptional user experience across all devices and platforms.",
      gradient: "from-emerald-500/10 via-green-400/15 to-emerald-600/10",
      accentColor: "text-emerald-600",
      glowColor: "emerald-500/20",
      link: "/services/mobile-applications",
      startingPrice: "$5,000"
    },
    {
      icon: Search,
      category: "SEO & ANALYTICS",
      title: "SEO & Analytics Services",
      description: "Comprehensive SEO optimization and analytics solutions that drive real results. Help businesses rank higher in search results and drive more qualified traffic to their websites.",
      gradient: "from-purple-500/10 via-violet-400/15 to-purple-600/10",
      accentColor: "text-purple-600",
      glowColor: "purple-500/20",
      link: "/services/seo-insights",
      startingPrice: "$1,500"
    },
    {
      icon: BarChart3,
      category: "DIGITAL MARKETING",
      title: "Digital Marketing Campaigns",
      description: "Strategic digital marketing campaigns that drive growth and engagement. From social media to email marketing, we create comprehensive strategies that deliver measurable results.",
      gradient: "from-orange-500/10 via-red-400/15 to-orange-600/10",
      accentColor: "text-orange-600",
      glowColor: "orange-500/20",
      link: "/services/digital-campaigns",
      startingPrice: "$2,000"
    },
    {
      icon: Palette,
      category: "BRAND IDENTITY",
      title: "Brand Identity Design",
      description: "Complete brand identity solutions that make your business stand out. From logo design to brand guidelines, we create cohesive visual identities that resonate with your target audience.",
      gradient: "from-pink-500/10 via-rose-400/15 to-pink-600/10",
      accentColor: "text-pink-600",
      glowColor: "pink-500/20",
      link: "/services/brand-identity",
      startingPrice: "$1,200"
    },
    {
      icon: TrendingUp,
      category: "EXPERIENCE OPTIMIZATION",
      title: "Experience Optimization",
      description: "Data-driven optimization strategies that improve user experience and conversion rates. We analyze user behavior and implement changes that drive real business growth.",
      gradient: "from-teal-500/10 via-cyan-400/15 to-teal-600/10",
      accentColor: "text-teal-600",
      glowColor: "teal-500/20",
      link: "/services/experience-optimization",
      startingPrice: "$1,800"
    }
  ];
  return (
    <>
      <section id="services" className="pt-12 sm:pt-16 lg:pt-20 pb-40 sm:pb-44 lg:pb-48 bg-white relative">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center text-xs sm:text-sm font-medium text-green-600 uppercase tracking-wide mb-2 sm:mb-3">
              <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-green-500 to-green-600 mr-3 sm:mr-4"></div>
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Digital solutions that
              <span className="block text-green-600 font-normal">
                grow your business
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              We deliver end-to-end digital solutions designed to transform businesses. 
              From custom websites to comprehensive digital marketing, we help companies 
              dominate their market and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group relative block h-full">
                {/* Subtle luxury glow - much more refined */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 blur-sm`}></div>
                
                {/* Glass morphism effect */}
                <Card className="relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] overflow-hidden h-full flex flex-col">
                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    {/* Icon with enhanced glow */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${service.accentColor}`} />
                    </div>
                    
                    {/* Category */}
                    <div className={`text-xs sm:text-sm font-semibold ${service.accentColor} uppercase tracking-wide mb-2 sm:mb-3`}>
                      {service.category}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Description - flex-grow to fill space */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Learn More Link - always at bottom */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center text-sm sm:text-base font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                        Learn More
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      
                      {/* Luxury Pricing Display - Smaller */}
                      <div className="relative">
                        {/* Premium glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-400/15 to-emerald-500/15 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Pricing container */}
                        <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 group-hover:border-green-300/70 transition-all duration-300">
                          <div className="text-xs text-green-700/80 uppercase tracking-wide font-medium mb-0.5">Starting at</div>
                          <div className="flex items-baseline">
                            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                              {service.startingPrice}
                            </span>
                            <span className="text-xs text-green-600/70 ml-1 font-medium">USD</span>
                          </div>
                          
                          {/* Subtle accent line */}
                          <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-60"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* View All Services Link */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <Link 
              to="/services" 
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg sm:text-xl transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <span className="mr-3">Explore All Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <p className="text-gray-600 text-sm sm:text-base mt-4 font-light">
              Discover how we can transform your business with our complete suite of digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* The Cardinal Advantage - Full Width Clean Design */}
      <div className="relative w-full pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 bg-gradient-to-br from-green-600 to-emerald-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center text-xs sm:text-sm font-medium text-green-100 uppercase tracking-wide mb-3 sm:mb-4">
              <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-white to-green-200 mr-3 sm:mr-4"></div>
              The Cardinal Advantage
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 sm:mb-4">
              Why Businesses Choose
              <span className="block text-green-200 font-normal">Cardinal Consulting</span>
            </h3>
            <p className="text-base sm:text-lg text-green-100 max-w-3xl mx-auto">
              We're not just another agency. We're your premier digital partner, combining cutting-edge AI technology with deep market expertise to deliver results that traditional agencies simply can't match.
            </p>
          </div>
          
          {/* Clean Comparison Table */}
          <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 border-b border-gray-200">
              <div className="grid grid-cols-4 gap-1 sm:gap-2 lg:gap-4">
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900">Service Features</h4>
                </div>
                <div className="text-center">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-500">Traditional Agencies</h4>
                </div>
                <div className="text-center">
                  <h4 className="text-xs sm:text-sm font-semibold text-green-600">Cardinal Consulting</h4>
                </div>
                <div className="text-center">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900">Our Advantage</h4>
                </div>
              </div>
            </div>
            
            {/* Table Rows */}
            <div className="divide-y divide-gray-100">
              {/* Transparent Pricing */}
              <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50/50 transition-colors">
                <div className="grid grid-cols-4 gap-1 sm:gap-2 lg:gap-4 items-center">
                  <div className="text-left">
                    <h5 className="text-xs sm:text-sm font-medium text-gray-900">Transparent Pricing</h5>
                    <p className="text-xs text-gray-600 mt-1 hidden sm:block">Clear, upfront costs</p>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-gray-500">Hidden fees & surprises</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-green-600 font-semibold">100% Transparent</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      No Surprises
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Quick Delivery */}
              <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50/50 transition-colors">
                <div className="grid grid-cols-4 gap-1 sm:gap-2 lg:gap-4 items-center">
                  <div className="text-left">
                    <h5 className="text-xs sm:text-sm font-medium text-gray-900">Project Delivery</h5>
                    <p className="text-xs text-gray-600 mt-1 hidden sm:block">From concept to launch</p>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-gray-500">3-6 months</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-green-600 font-semibold">2-4 weeks</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Lightning Fast
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Custom Solutions */}
              <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50/50 transition-colors">
                <div className="grid grid-cols-4 gap-1 sm:gap-2 lg:gap-4 items-center">
                  <div className="text-left">
                    <h5 className="text-xs sm:text-sm font-medium text-gray-900">Custom Solutions</h5>
                    <p className="text-xs text-gray-600 mt-1 hidden sm:block">Tailored to your needs</p>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-gray-500">Template-based</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-green-600 font-semibold">Fully Custom</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Bespoke Design
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Managed Services */}
              <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50/50 transition-colors">
                <div className="grid grid-cols-4 gap-1 sm:gap-2 lg:gap-4 items-center">
                  <div className="text-left">
                    <h5 className="text-xs sm:text-sm font-medium text-gray-900">Monthly Management</h5>
                    <p className="text-xs text-gray-600 mt-1 hidden sm:block">Hands-free operations</p>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-gray-500">Project-only</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-green-600 font-semibold">Full Management</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Hands-Free
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Support Quality */}
              <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50/50 transition-colors">
                <div className="grid grid-cols-4 gap-1 sm:gap-2 lg:gap-4 items-center">
                  <div className="text-left">
                    <h5 className="text-xs sm:text-sm font-medium text-gray-900">Support Quality</h5>
                    <p className="text-xs text-gray-600 mt-1 hidden sm:block">When you need assistance</p>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-gray-500">24-48 hour response</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-green-600 font-semibold">Same-day response</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Premium Support
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Technology Stack */}
              <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50/50 transition-colors">
                <div className="grid grid-cols-4 gap-1 sm:gap-2 lg:gap-4 items-center">
                  <div className="text-left">
                    <h5 className="text-xs sm:text-sm font-medium text-gray-900">Technology Stack</h5>
                    <p className="text-xs text-gray-600 mt-1 hidden sm:block">Modern, scalable solutions</p>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-gray-500">Outdated tools</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs sm:text-sm text-green-600 font-semibold">Cutting-edge</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      Future-Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Simple Text CTA */}
          <div className="text-center mt-8 sm:mt-12 mb-6 sm:mb-8">
            <p className="text-green-100 text-lg sm:text-xl mb-4 px-4">
              Ready to experience the Cardinal difference?
            </p>
            <a href="/contact" className="inline-flex items-center text-white font-semibold text-lg sm:text-xl hover:text-green-200 transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-green-200 px-4 text-center">
              Get your FREE consultation and project evaluation today
              <svg className="ml-2 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;