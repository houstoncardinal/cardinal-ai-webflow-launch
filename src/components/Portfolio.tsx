
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
    { icon: Award, value: "150+", label: "Projects Delivered", gradient: "from-blue-500 to-cyan-500" },
    { icon: Users, value: "50+", label: "Enterprise Clients", gradient: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, value: "99.9%", label: "Client Satisfaction", gradient: "from-green-500 to-emerald-500" }
  ];

  return (
    <section id="portfolio" className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-blue-50/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-tl from-slate-50/50 to-transparent"></div>
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-slate-100 to-blue-50 text-slate-800 text-sm font-semibold px-6 py-3 rounded-full mb-8 border border-slate-200/50">
            Portfolio Showcase
          </div>
          <h2 className="text-5xl md:text-6xl font-thin text-slate-900 mb-8 tracking-tight">
            Featured
            <span className="block font-light bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Discover how we've helped businesses across various industries 
            achieve transformational growth through strategic digital innovation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gradient-to-br from-white to-slate-50/50 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-light text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-3xl transition-all duration-700 border-0 shadow-xl bg-white hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
                    <ExternalLink className="w-6 h-6 text-slate-700" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed font-light">
                  {project.description}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-50/50 rounded-xl">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-semibold text-blue-600">{value}</div>
                      <div className="text-xs text-slate-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all duration-300 rounded-xl">
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-400 px-12 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            Explore Complete Portfolio
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
