
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
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide mb-6">
            <div className="w-8 h-px bg-green-500 mr-4"></div>
            Case Studies
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Featured
            <span className="block text-green-600 font-normal">
              success stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Discover how we've helped businesses across various industries 
            achieve transformational growth through strategic digital innovation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
              <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-light text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-gray-200 hover:border-green-500 transition-all duration-300 bg-white shadow-none hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium text-white bg-green-600 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-sm font-medium text-green-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                  View case study
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
            View all case studies
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
