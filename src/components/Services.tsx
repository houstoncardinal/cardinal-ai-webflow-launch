import { Code, Smartphone, Search, Megaphone, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      category: "WEB DEVELOPMENT",
      title: "Web Development",
      description: "High-performance websites engineered for conversion, credibility, and scale.",
      gradient: "from-blue-500/10 via-cyan-400/15 to-blue-600/10",
      accentColor: "text-blue-600",
      link: "/services/web-development"
    },
    {
      icon: Smartphone,
      category: "MOBILE & WEB APPS",
      title: "Mobile & Web Applications",
      description: "Custom applications built to automate workflows, enhance user experience, and support long-term growth.",
      gradient: "from-emerald-500/10 via-green-400/15 to-emerald-600/10",
      accentColor: "text-emerald-600",
      link: "/services/mobile-applications"
    },
    {
      icon: Search,
      category: "SEO & GROWTH",
      title: "SEO & Digital Growth",
      description: "Search visibility and inbound systems that generate qualified leads predictably and sustainably.",
      gradient: "from-purple-500/10 via-violet-400/15 to-purple-600/10",
      accentColor: "text-purple-600",
      link: "/services/seo-insights"
    },
    {
      icon: Megaphone,
      category: "DIGITAL MARKETING",
      title: "Digital Marketing Campaigns",
      description: "Integrated marketing campaigns designed to drive engagement, revenue, and brand loyalty across platforms.",
      gradient: "from-orange-500/10 via-amber-400/15 to-orange-600/10",
      accentColor: "text-orange-600",
      link: "/services/digital-campaigns"
    },
    {
      icon: Palette,
      category: "BRAND IDENTITY",
      title: "Brand Identity & Experience",
      description: "Cohesive brand identity systems that establish trust, recognition, and market differentiation.",
      gradient: "from-pink-500/10 via-rose-400/15 to-pink-600/10",
      accentColor: "text-pink-600",
      link: "/services/brand-identity"
    },
    {
      icon: Zap,
      category: "UX/UI OPTIMIZATION",
      title: "UX/UI Experience Optimization",
      description: "User-centered interface design that improves clarity, engagement, and conversion across web and mobile experiences.",
      gradient: "from-indigo-500/10 via-blue-400/15 to-indigo-600/10",
      accentColor: "text-indigo-600",
      link: "/services/experience-optimization"
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">
              End-to-End Digital Transformation.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
              We design, build, and scale digital systems that drive measurable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group relative block h-full">
                {/* Subtle luxury glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 blur-sm`}></div>
                
                {/* Card with consistent height */}
                <Card className="relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.015] overflow-hidden h-full flex flex-col">
                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.accentColor}`} />
                    </div>
                    
                    {/* Category */}
                    <div className={`text-xs sm:text-sm font-semibold ${service.accentColor} uppercase tracking-wide mb-2 sm:mb-3`}>
                      {service.category}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Description - flex-grow to push CTA to bottom */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* CTA Link - always at bottom */}
                    <div className="flex items-center mt-auto">
                      <div className="flex items-center text-sm sm:text-base font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                        Explore Service
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
