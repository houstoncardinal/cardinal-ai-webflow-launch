import { Building, Shield, Heart, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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

  return (
    <section id="industries" className="py-32 bg-gray-50 relative overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide mb-8 animate-fade-in">
            <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-6"></div>
            <span className="relative">
              Industries
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight animate-fade-in" style={{animationDelay: '300ms'}}>
            <span className="relative inline-block">
              Sector expertise
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-transparent rounded-full"></div>
            </span>
            <span className="block text-green-600 font-normal mt-2">
              across industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl animate-fade-in" style={{animationDelay: '500ms'}}>
            We understand the unique challenges and requirements of different industries, 
            delivering specialized solutions that meet sector-specific needs and exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Enhanced CTA Section */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-gray-50 to-green-50/50 rounded-3xl"></div>
          <div className="relative bg-gradient-to-r from-gray-50/80 to-green-50/80 backdrop-blur-sm rounded-3xl p-16 text-center border border-gray-200/50 shadow-2xl animate-fade-in" style={{animationDelay: '1200ms'}}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-16 h-16 bg-green-200 rounded-full animate-float"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-gray-300 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-300 rounded-full animate-pulse"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-light text-gray-900 mb-6">
                Ready to transform your industry?
              </h3>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
                Get a comprehensive custom quote tailored to your specific needs. Our enhanced form captures all the details needed for an accurate proposal.
              </p>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="group relative px-16 py-5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl font-medium text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Start Your Comprehensive Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </button>
              <p className="text-sm text-gray-500 mt-4">
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
