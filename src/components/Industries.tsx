import { Building, Shield, Heart, Scale, CheckCircle, Users, Award, TrendingUp, Lock, Globe, Smartphone, Cloud, Search, Palette, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransformationForm from "./TransformationForm";
import { useState } from "react";

const Industries = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const industries = [
    {
      icon: Building,
      title: "Real Estate",
      description: "Innovative digital solutions for property management, listings, and client engagement platforms.",
      gradient: "from-blue-500/20 via-cyan-400/30 to-blue-600/20",
      accentColor: "text-blue-600",
      hoverGradient: "group-hover:from-blue-50 group-hover:to-cyan-50"
    },
    {
      icon: Shield,
      title: "Government",
      description: "Secure, compliant digital infrastructure and citizen service portals for public sector organizations.",
      gradient: "from-purple-500/20 via-violet-400/30 to-purple-600/20",
      accentColor: "text-purple-600",
      hoverGradient: "group-hover:from-purple-50 group-hover:to-violet-50"
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Professional websites and case management systems for law firms and legal professionals.",
      gradient: "from-amber-500/20 via-yellow-400/30 to-amber-600/20",
      accentColor: "text-amber-600",
      hoverGradient: "group-hover:from-amber-50 group-hover:to-yellow-50"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant digital solutions for healthcare providers and medical professionals.",
      gradient: "from-rose-500/20 via-pink-400/30 to-rose-600/20",
      accentColor: "text-rose-600",
      hoverGradient: "group-hover:from-rose-50 group-hover:to-pink-50"
    }
  ];

  const industryExpertise = {
    "Real Estate": {
      overview: "We transform the real estate industry through cutting-edge digital solutions that streamline operations, enhance client experiences, and drive business growth.",
      services: [
        {
          icon: Globe,
          title: "Property Listing Platforms",
          description: "Advanced search functionality, virtual tours, and interactive maps for seamless property discovery."
        },
        {
          icon: Users,
          title: "CRM & Lead Management",
          description: "Automated lead tracking, client communication tools, and pipeline management systems."
        },
        {
          icon: Smartphone,
          title: "Mobile Applications",
          description: "Native iOS and Android apps for property viewing, client management, and on-the-go operations."
        },
        {
          icon: Cloud,
          title: "Property Management Systems",
          description: "Comprehensive platforms for rental management, maintenance tracking, and tenant communication."
        }
      ],
      specialties: [
        "MLS Integration & Data Synchronization",
        "Virtual Reality Property Tours",
        "Automated Property Valuation Models",
        "Real Estate Investment Analytics",
        "Commission & Transaction Management",
        "Digital Document Management"
      ],
      stats: [
        { number: "500+", label: "Properties Listed" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "24/7", label: "System Uptime" }
      ]
    },
    "Government": {
      overview: "We partner with government agencies to create secure, accessible, and efficient digital services that serve citizens and streamline public sector operations.",
      services: [
        {
          icon: Lock,
          title: "Secure Citizen Portals",
          description: "Multi-factor authentication, encrypted data transmission, and compliance with government security standards."
        },
        {
          icon: Globe,
          title: "Public Service Platforms",
          description: "Online permit applications, license renewals, and citizen service request management systems."
        },
        {
          icon: Cloud,
          title: "Government Cloud Solutions",
          description: "FedRAMP compliant cloud infrastructure with disaster recovery and data backup capabilities."
        },
        {
          icon: TrendingUp,
          title: "Data Analytics & Reporting",
          description: "Real-time dashboards, performance metrics, and transparency reporting for public accountability."
        }
      ],
      specialties: [
        "Section 508 Accessibility Compliance",
        "FISMA Security Framework Implementation",
        "Open Data Initiatives & APIs",
        "Digital Identity Management",
        "Interagency System Integration",
        "Emergency Response Systems"
      ],
      stats: [
        { number: "99.9%", label: "Security Uptime" },
        { number: "50K+", label: "Citizens Served" },
        { number: "100%", label: "Compliance Rate" }
      ]
    },
    "Legal": {
      overview: "We empower law firms and legal professionals with sophisticated digital tools that enhance practice efficiency, client service, and case management.",
      services: [
        {
          icon: Scale,
          title: "Case Management Systems",
          description: "Comprehensive platforms for case tracking, document management, and deadline monitoring."
        },
        {
          icon: Lock,
          title: "Secure Client Portals",
          description: "Attorney-client privileged communication channels with end-to-end encryption and audit trails."
        },
        {
          icon: Search,
          title: "Legal Research Platforms",
          description: "AI-powered legal research tools with case law analysis and precedent identification."
        },
        {
          icon: Globe,
          title: "Professional Websites",
          description: "Attorney marketing websites with practice area showcases and client intake automation."
        }
      ],
      specialties: [
        "Attorney-Client Privilege Protection",
        "Legal Document Automation",
        "Court Filing System Integration",
        "Time & Billing Management",
        "Conflict of Interest Checking",
        "Legal Marketing & SEO"
      ],
      stats: [
        { number: "1000+", label: "Cases Managed" },
        { number: "95%", label: "Time Savings" },
        { number: "24/7", label: "Support Available" }
      ]
    },
    "Healthcare": {
      overview: "We deliver HIPAA-compliant healthcare solutions that improve patient outcomes, streamline operations, and enhance the quality of care delivery.",
      services: [
        {
          icon: Heart,
          title: "Patient Management Systems",
          description: "Electronic health records, appointment scheduling, and patient communication platforms."
        },
        {
          icon: Lock,
          title: "HIPAA-Compliant Infrastructure",
          description: "End-to-end encryption, audit logging, and compliance monitoring for patient data protection."
        },
        {
          icon: Smartphone,
          title: "Telemedicine Platforms",
          description: "Secure video consultations, remote monitoring, and digital health assessment tools."
        },
        {
          icon: TrendingUp,
          title: "Healthcare Analytics",
          description: "Population health insights, treatment outcome analysis, and operational efficiency metrics."
        }
      ],
      specialties: [
        "Electronic Health Records (EHR)",
        "Medical Device Integration",
        "Clinical Decision Support Systems",
        "Healthcare Interoperability (HL7/FHIR)",
        "Medical Billing & Claims Processing",
        "Patient Engagement Platforms"
      ],
      stats: [
        { number: "10K+", label: "Patients Served" },
        { number: "100%", label: "HIPAA Compliance" },
        { number: "30%", label: "Efficiency Increase" }
      ]
    }
  };

  return (
    <section id="industries" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 opacity-30">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon 
              points="50,10 90,50 50,90 10,50" 
              fill="url(#diamond-gradient)" 
              opacity="0.4"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 50 50;360 50 50"
                dur="20s"
                repeatCount="indefinite"
              />
            </polygon>
            <defs>
              <linearGradient id="diamond-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#059669" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute top-40 right-20 w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#059669" strokeWidth="2" opacity="0.3">
              <animate attributeName="r" values="40;45;40" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="50" r="25" fill="#10b981" opacity="0.2">
              <animate attributeName="r" values="25;30;25" dur="3s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        <div className="absolute bottom-32 left-1/4 w-40 h-40">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <g opacity="0.2">
              {[...Array(6)].map((_, i) => (
                <rect
                  key={i}
                  x="55"
                  y="10"
                  width="10"
                  height="30"
                  fill="#059669"
                  transform={`rotate(${i * 60} 60 60)`}
                >
                  <animate
                    attributeName="opacity"
                    values="0.2;0.8;0.2"
                    dur={`${2 + i * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              ))}
            </g>
          </svg>
        </div>

        {/* Flowing particles */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            {[...Array(12)].map((_, i) => (
              <circle
                key={i}
                r="3"
                fill="#059669"
                opacity="0.4"
              >
                <animateMotion
                  path={`M${100 + i * 80},${200 + Math.sin(i) * 100} Q${300 + i * 60},${150 + Math.cos(i) * 80} ${500 + i * 40},${250 + Math.sin(i * 2) * 120} T${900 + i * 20},${300 + Math.cos(i * 3) * 100}`}
                  dur={`${15 + i * 2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.4;0.8;0.4"
                  dur={`${3 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </svg>
        </div>

        {/* Abstract tech pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <pattern id="tech-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" stroke="#059669" strokeWidth="0.5"/>
                <circle cx="20" cy="20" r="2" fill="#10b981">
                  <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite"/>
                </circle>
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#tech-pattern)">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;-40,-40;0,0"
                dur="10s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide mb-8 animate-fade-in">
            <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-6"></div>
            <span className="relative">
              Industries
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 md:mb-8 leading-tight animate-fade-in" style={{animationDelay: '300ms'}}>
            <span className="relative inline-block">
              Sector expertise
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-transparent rounded-full"></div>
            </span>
            <span className="block text-green-600 font-normal mt-2">
              across industries
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light max-w-3xl animate-fade-in" style={{animationDelay: '500ms'}}>
            We understand the unique challenges and requirements of different industries, 
            delivering specialized solutions that meet sector-specific needs and exceed expectations.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-32">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative animate-fade-in group"
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Luxurious multi-layer glow effect - reduced intensity */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${industry.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700`}></div>
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${industry.gradient} rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-all duration-700`}></div>
              
              {/* Animated border highlight */}
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent">
                  <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-r from-green-500/10 via-green-400/20 to-green-500/10"></div>
                </div>
              </div>
              
              <Card className={`relative bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer hover:scale-[1.02] group overflow-hidden rounded-2xl ${industry.hoverGradient}`}>
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
                </div>
                
                <CardContent className="p-10 relative z-10">
                  <div className="mb-8">
                    <div className={`w-16 h-16 ${industry.accentColor} mb-6 relative group-hover:scale-110 transition-all duration-500`}>
                      <industry.icon className="w-full h-full" />
                      <div className={`absolute inset-0 ${industry.accentColor} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500`}>
                        <industry.icon className="w-full h-full" />
                      </div>
                    </div>
                    <h3 className={`text-xl font-semibold text-gray-900 mb-4 group-hover:${industry.accentColor} transition-colors duration-500`}>
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {industry.description}
                  </p>
                  
                  {/* Subtle progress indicator */}
                  <div className="mt-8 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${industry.gradient} w-0 group-hover:w-full transition-all duration-1000 rounded-full`}></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Industry Expertise Deep Dive */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6">
              Industry Expertise & 
              <span className="block text-green-600 font-normal">Service Specialties</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Discover our deep domain knowledge and specialized services tailored to each industry's unique requirements.
            </p>
          </div>

          <Tabs defaultValue="Real Estate" className="w-full">
            {/* Enhanced TabsList with better mobile responsiveness */}
            <div className="relative mb-8 md:mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-gray-50 to-green-50/50 rounded-3xl blur-xl"></div>
              <TabsList className="relative w-full grid grid-cols-2 lg:grid-cols-4 gap-2 bg-white/80 backdrop-blur-sm border-2 border-gray-100/50 p-3 rounded-3xl shadow-2xl shadow-green-500/5 min-h-[60px] md:min-h-[80px]">
                {Object.keys(industryExpertise).map((industry) => (
                  <TabsTrigger 
                    key={industry} 
                    value={industry}
                    className="relative group data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-green-500/25 rounded-2xl transition-all duration-500 hover:scale-[1.02] text-xs sm:text-sm md:text-base font-medium px-3 sm:px-4 md:px-6 py-3 md:py-4 h-auto min-h-[50px] md:min-h-[65px] flex items-center justify-center text-center leading-tight"
                  >
                    <span className="relative z-10">{industry}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-data-[state=active]:opacity-100 animate-pulse"></div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(industryExpertise).map(([industry, data]) => (
              <TabsContent key={industry} value={industry} className="space-y-8 md:space-y-12 animate-fade-in">
                {/* Enhanced Overview Section */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-green-400/30 to-green-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-gray-100/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 md:mb-8">
                      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-0">
                        Our {industry} Expertise
                      </h3>
                      <div className="flex items-center space-x-2 text-green-600">
                        <Award className="w-6 h-6" />
                        <span className="text-sm font-medium">Industry Leader</span>
                      </div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">{data.overview}</p>
                    
                    {/* Enhanced Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8 border-t border-gray-200/50">
                      {data.stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                          <div className="relative mb-3">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                              {stat.number}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-700/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Services Grid */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 md:mb-8 text-center lg:text-left">
                    Our {industry} Services
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                    {data.services.map((service, index) => (
                      <Card key={index} className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:scale-[1.02] rounded-2xl overflow-hidden">
                        <CardContent className="p-6 md:p-8">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-all duration-500 flex-shrink-0 mx-auto sm:mx-0">
                              <service.icon className="w-7 h-7 md:w-8 md:h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                                {service.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Enhanced Specialties Section */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 md:mb-8 text-center lg:text-left">
                    Technical Specialties
                  </h3>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-gray-50/50 to-green-50/80 rounded-3xl"></div>
                    <div className="relative bg-gradient-to-br from-green-50/60 to-gray-50/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 border border-green-100/50">
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
                        {data.specialties.map((specialty, index) => (
                          <div key={index} className="group flex items-center space-x-3 p-4 md:p-5 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100/50">
                            <div className="flex-shrink-0">
                              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <span className="text-gray-700 font-medium text-sm md:text-base leading-snug group-hover:text-gray-900 transition-colors duration-300">
                              {specialty}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-16 md:mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-gray-50 to-green-50/50 rounded-3xl"></div>
          <div className="relative bg-gradient-to-r from-gray-50/80 to-green-50/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-16 text-center border border-gray-200/50 shadow-2xl animate-fade-in" style={{animationDelay: '1200ms'}}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-16 h-16 bg-green-200 rounded-full animate-float"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-gray-300 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-300 rounded-full animate-pulse"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 md:mb-6">
                Ready to transform your industry?
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto font-light px-4">
                Get a comprehensive custom quote tailored to your specific needs. Our enhanced form captures all the details needed for an accurate proposal.
              </p>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="group relative w-full sm:w-auto min-w-[280px] px-6 sm:px-8 md:px-12 lg:px-16 py-4 md:py-5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl md:rounded-2xl font-medium text-base sm:text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden shadow-lg hover:shadow-green-500/25"
              >
                <span className="relative z-10">Start Your Comprehensive Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </button>
              <p className="text-xs sm:text-sm text-gray-500 mt-4 px-4">
                ✓ Detailed 6-step process ✓ Instant estimate ✓ 24-hour response
              </p>
            </div>
          </div>
        </div>
      </div>

      <TransformationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </section>
  );
};

export default Industries;
