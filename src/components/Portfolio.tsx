
import { ExternalLink, ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "Healthcare Portal Platform",
      category: "Healthcare",
      description: "HIPAA-compliant patient portal with secure messaging, appointment scheduling, and integrated telehealth capabilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Node.js", "Security", "HIPAA"],
      metrics: { users: "50K+", uptime: "99.9%", satisfaction: "4.9/5" }
    },
    {
      title: "Real Estate CRM System",
      category: "Real Estate",
      description: "Comprehensive property management and client relationship platform with AI-powered market analytics and lead scoring.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      tags: ["Vue.js", "Python", "AI", "Analytics"],
      metrics: { properties: "10K+", deals: "$2.5B+", agents: "500+" }
    },
    {
      title: "Legal Case Management",
      category: "Legal",
      description: "Streamlined case tracking and document management system with advanced search capabilities and compliance automation.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Angular", "MongoDB", "Cloud", "Compliance"],
      metrics: { cases: "25K+", firms: "150+", efficiency: "+40%" }
    }
  ];

  const stats = [
    { icon: Award, value: "150+", label: "Projects Delivered" },
    { icon: Users, value: "50+", label: "Enterprise Clients" },
    { icon: TrendingUp, value: "99.9%", label: "Client Satisfaction" }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Animated web infrastructure background */}
      <div className="absolute inset-0 opacity-15">
        {/* Server rack visualization */}
        <div className="absolute top-1/4 right-1/4 w-64 h-96">
          <svg viewBox="0 0 100 150" className="w-full h-full">
            {/* Server units */}
            {[...Array(8)].map((_, i) => (
              <g key={i}>
                <rect x="20" y={10 + i * 16} width="60" height="12" fill="#059669" opacity="0.3" rx="2">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2 + i * 0.2}s`} repeatCount="indefinite"/>
                </rect>
                {/* Status lights */}
                <circle cx="75" cy={16 + i * 16} r="2" fill="#059669">
                  <animate attributeName="fill" values="#059669;#10b981;#059669" dur={`${1.5 + i * 0.1}s`} repeatCount="indefinite"/>
                </circle>
              </g>
            ))}
          </svg>
        </div>

        {/* Data center connectivity */}
        <div className="absolute bottom-1/4 left-1/4 w-96 h-64">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            {/* Connection paths */}
            <g stroke="#059669" strokeWidth="2" fill="none" opacity="0.4">
              <path d="M20,20 Q60,10 100,20 T180,20" strokeDasharray="5,3">
                <animate attributeName="stroke-dashoffset" values="0;8;0" dur="3s" repeatCount="indefinite"/>
              </path>
              <path d="M20,50 Q60,40 100,50 T180,50" strokeDasharray="5,3">
                <animate attributeName="stroke-dashoffset" values="0;8;0" dur="3.5s" repeatCount="indefinite"/>
              </path>
              <path d="M20,80 Q60,70 100,80 T180,80" strokeDasharray="5,3">
                <animate attributeName="stroke-dashoffset" values="0;8;0" dur="4s" repeatCount="indefinite"/>
              </path>
            </g>
            
            {/* Data flow indicators */}
            <g fill="#059669" opacity="0.6">
              {[20, 50, 80].map((y, i) => (
                <circle key={i} cx="20" cy={y} r="3">
                  <animate attributeName="cx" values="20;180;20" dur={`${4 + i * 0.5}s`} repeatCount="indefinite"/>
                  <animate attributeName="r" values="3;1;3" dur={`${4 + i * 0.5}s`} repeatCount="indefinite"/>
                </circle>
              ))}
            </g>
          </svg>
        </div>

        {/* Cloud infrastructure */}
        <div className="absolute top-0 left-0 w-72 h-48 opacity-20">
          <svg viewBox="0 0 150 80" className="w-full h-full">
            {/* Cloud shapes */}
            <g fill="#059669" opacity="0.3">
              <ellipse cx="40" cy="30" rx="20" ry="12">
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite"/>
              </ellipse>
              <ellipse cx="70" cy="25" rx="25" ry="15">
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4.5s" repeatCount="indefinite"/>
              </ellipse>
              <ellipse cx="100" cy="30" rx="18" ry="10">
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3.5s" repeatCount="indefinite"/>
              </ellipse>
            </g>
            
            {/* Data streams from cloud */}
            <g stroke="#059669" strokeWidth="1" opacity="0.4">
              {[...Array(5)].map((_, i) => (
                <line key={i} x1={50 + i * 10} y1="45" x2={50 + i * 10} y2="70" strokeDasharray="3,2">
                  <animate 
                    attributeName="stroke-dashoffset" 
                    values="0;5;0" 
                    dur={`${2 + i * 0.2}s`} 
                    repeatCount="indefinite"
                  />
                </line>
              ))}
            </g>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide mb-6 animate-fade-in">
            <div className="w-8 h-px bg-green-500 mr-4 animate-pulse"></div>
            Case Studies
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight animate-fade-in" style={{animationDelay: '300ms'}}>
            Featured
            <span className="block text-green-600 font-normal">
              success stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light animate-fade-in" style={{animationDelay: '500ms'}}>
            Discover how we've helped businesses across various industries 
            achieve transformational growth through strategic digital innovation.
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-green-50 rounded-xl border border-gray-200 hover:border-green-500 transition-all duration-500 cursor-pointer group hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-light text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-gray-200 hover:border-green-500 transition-all duration-500 bg-white shadow-none hover:shadow-2xl cursor-pointer hover:scale-105 animate-fade-in"
              style={{animationDelay: `${(index + 3) * 200}ms`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium text-white bg-green-600 px-3 py-1 rounded-full animate-pulse">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Enhanced Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-gray-50 to-green-50 rounded-lg group-hover:from-green-50 group-hover:to-gray-50 transition-all duration-300">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-sm font-medium text-green-600 group-hover:scale-110 transition-transform duration-300">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-green-100 group-hover:text-green-700 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full border-green-600 text-green-600 hover:bg-green-50 group/btn transition-all duration-300 hover:scale-105">
                  View case study
                  <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View all case studies
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
