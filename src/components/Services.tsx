import { Code, Smartphone, Globe, Server, Search, Palette, Share2, Brain, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Technology",
      subtitle: "Web Development",
      description: "Enterprise-grade solutions built with cutting-edge technologies for optimal performance."
    },
    {
      icon: Smartphone,
      title: "Digital",
      subtitle: "Mobile Applications",
      description: "Native and cross-platform mobile solutions that deliver exceptional user experiences."
    },
    {
      icon: Globe,
      title: "Innovation",
      subtitle: "Web Applications",
      description: "Complex applications with enterprise architecture and intuitive user interfaces."
    },
    {
      icon: Server,
      title: "Infrastructure",
      subtitle: "Cloud Solutions",
      description: "Scalable, secure cloud hosting solutions with enterprise-level support."
    },
    {
      icon: Search,
      title: "Analytics",
      subtitle: "SEO & Insights",
      description: "Strategic optimization and comprehensive analytics to maximize performance."
    },
    {
      icon: Palette,
      title: "Strategy",
      subtitle: "Brand Identity",
      description: "Complete brand development from positioning to visual identity systems."
    },
    {
      icon: Share2,
      title: "Marketing",
      subtitle: "Digital Campaigns",
      description: "Data-driven strategies that build communities and drive measurable ROI."
    },
    {
      icon: Brain,
      title: "AI",
      subtitle: "Experience Optimization",
      description: "Pioneer AEO services optimizing for next-generation AI systems."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Animated network background */}
      <div className="absolute inset-0 opacity-20">
        {/* Digital circuit pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            {/* Circuit lines */}
            <g stroke="#059669" strokeWidth="1" fill="none">
              <path d="M50,100 L200,100 L200,200 L350,200" strokeDasharray="10,5">
                <animate attributeName="stroke-dashoffset" values="0;15;0" dur="4s" repeatCount="indefinite"/>
              </path>
              <path d="M350,200 L500,200 L500,300 L650,300" strokeDasharray="10,5">
                <animate attributeName="stroke-dashoffset" values="0;15;0" dur="5s" repeatCount="indefinite"/>
              </path>
              <path d="M100,400 L250,400 L250,500 L400,500" strokeDasharray="10,5">
                <animate attributeName="stroke-dashoffset" values="0;15;0" dur="4.5s" repeatCount="indefinite"/>
              </path>
              <path d="M600,150 L750,150 L750,250 L600,250 Z" strokeDasharray="8,4">
                <animate attributeName="stroke-dashoffset" values="0;12;0" dur="3.5s" repeatCount="indefinite"/>
              </path>
            </g>
            
            {/* Circuit nodes */}
            <g fill="#059669" opacity="0.6">
              <circle cx="200" cy="100" r="4">
                <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="350" cy="200" r="4">
                <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="500" cy="300" r="4">
                <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="250" cy="400" r="4">
                <animate attributeName="r" values="4;6;4" dur="2.2s" repeatCount="indefinite"/>
              </circle>
            </g>
          </svg>
        </div>

        {/* Data flow visualization */}
        <div className="absolute top-0 right-0 w-96 h-96">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Data packets */}
            <g opacity="0.4">
              {[...Array(6)].map((_, i) => (
                <rect
                  key={i}
                  x="10"
                  y="10"
                  width="8"
                  height="8"
                  fill="#059669"
                  rx="2"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,${i * 30};180,${i * 30};0,${i * 30}`}
                    dur={`${3 + i * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              ))}
            </g>
          </svg>
        </div>

        {/* Network topology */}
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-30">
          <svg viewBox="0 0 150 150" className="w-full h-full">
            <g transform="translate(75,75)">
              {/* Central hub */}
              <circle cx="0" cy="0" r="8" fill="#059669">
                <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite"/>
              </circle>
              
              {/* Connected nodes */}
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60) * Math.PI / 180;
                const x = Math.cos(angle) * 40;
                const y = Math.sin(angle) * 40;
                return (
                  <g key={i}>
                    <line x1="0" y1="0" x2={x} y2={y} stroke="#059669" strokeWidth="2" opacity="0.5">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2 + i * 0.2}s`} repeatCount="indefinite"/>
                    </line>
                    <circle cx={x} cy={y} r="4" fill="#059669">
                      <animate attributeName="r" values="4;6;4" dur={`${2.5 + i * 0.1}s`} repeatCount="indefinite"/>
                    </circle>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide mb-6 animate-fade-in">
            <div className="w-8 h-px bg-green-500 mr-4 animate-pulse"></div>
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight animate-fade-in" style={{animationDelay: '300ms'}}>
            Comprehensive solutions
            <span className="block text-green-600 font-normal">
              for digital transformation
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light animate-fade-in" style={{animationDelay: '500ms'}}>
            We deliver end-to-end digital solutions that position organizations 
            for sustained growth in an increasingly connected world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index} 
              className="relative animate-fade-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Subtle luxurious glow border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/20 via-green-400/30 to-green-600/20 rounded-xl blur-md opacity-75"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 via-green-400/20 to-green-500/10 rounded-xl blur-lg"></div>
              
              <Card className="relative bg-white border border-green-500/30 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-105 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <service.icon className="w-8 h-8 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-xs font-medium text-green-600 uppercase tracking-wide mb-2 transition-colors duration-300">
                      {service.title}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {service.subtitle}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="transition-all duration-500">
                    <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50 group/btn">
                      Learn more
                      <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-2xl p-12 text-center relative overflow-hidden animate-fade-in" style={{animationDelay: '1000ms'}}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full animate-bounce"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Ready to transform your business?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive digital solutions can accelerate your growth.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
