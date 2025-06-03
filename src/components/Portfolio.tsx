
import { ExternalLink, ArrowRight } from "lucide-react";
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

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-emerald-300 to-cyan-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-500 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          ></div>
        ))}
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

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-gray-200 hover:border-green-500 transition-all duration-500 bg-white shadow-none hover:shadow-2xl cursor-pointer hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 200}ms`}}
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
