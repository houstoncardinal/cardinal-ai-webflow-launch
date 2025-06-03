
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
      metrics: {
        users: "50K+",
        uptime: "99.9%",
        satisfaction: "4.9/5"
      }
    },
    {
      title: "Real Estate CRM System",
      category: "Real Estate", 
      description: "Comprehensive property management and client relationship platform with AI-powered market analytics and lead scoring.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      tags: ["Vue.js", "Python", "AI", "Analytics"],
      metrics: {
        properties: "10K+",
        deals: "$2.5B+",
        agents: "500+"
      }
    },
    {
      title: "Legal Case Management",
      category: "Legal",
      description: "Streamlined case tracking and document management system with advanced search capabilities and compliance automation.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["Angular", "MongoDB", "Cloud", "Compliance"],
      metrics: {
        cases: "25K+",
        firms: "150+",
        efficiency: "+40%"
      }
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Ultra-advanced futuristic background */}
      <div className="absolute inset-0">
        {/* Multi-layered animated mesh gradients */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/30 via-transparent to-cyan-500/30 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/20 via-transparent to-pink-500/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500/15 via-transparent to-teal-500/15 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Advanced geometric grid with glow effects */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
            <defs>
              <pattern id="advancedGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="url(#advancedGradient)" strokeWidth="0.8" />
                <circle cx="0" cy="0" r="2" fill="url(#advancedGradient)" opacity="0.8" />
                <circle cx="30" cy="30" r="1" fill="url(#glowGradient)" opacity="0.6" />
              </pattern>
              <linearGradient id="advancedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#advancedGrid)" />
          </svg>
        </div>

        {/* Dynamic floating orbs with enhanced animations */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-25 animate-pulse"
              style={{
                width: `${80 + i * 15}px`,
                height: `${80 + i * 15}px`,
                left: `${5 + i * 8}%`,
                top: `${10 + (i % 5) * 20}%`,
                background: `radial-gradient(circle, ${
                  i % 4 === 0 ? 'rgba(16, 185, 129, 0.4)' : 
                  i % 4 === 1 ? 'rgba(6, 182, 212, 0.4)' : 
                  i % 4 === 2 ? 'rgba(139, 92, 246, 0.4)' : 
                  'rgba(236, 72, 153, 0.4)'
                }, transparent 70%)`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${5 + i * 0.3}s`,
                filter: 'blur(2px)',
                transform: `scale(${0.8 + Math.sin(i) * 0.3})`
              }}
            ></div>
          ))}
        </div>

        {/* Enhanced scanning lines with multiple layers */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent animate-pulse top-1/5"></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse top-2/5" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse top-3/5" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-pink-400/60 to-transparent animate-pulse top-4/5" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Advanced hexagonal pattern with depth */}
        <div className="absolute inset-0 opacity-8">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hexPatternAdvanced" width="12" height="10.39" patternUnits="userSpaceOnUse">
                <polygon points="6,0 11.196,3 11.196,9 6,12 0.804,9 0.804,3" fill="none" stroke="#10b981" strokeWidth="0.3" opacity="0.7" />
                <polygon points="6,2 9.464,4 9.464,8 6,10 2.536,8 2.536,4" fill="none" stroke="#06b6d4" strokeWidth="0.2" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPatternAdvanced)" />
          </svg>
        </div>

        {/* Particle effect simulation */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Redesigned premium header section */}
        <div className="max-w-5xl mb-32 text-center mx-auto">
          <div className="inline-flex items-center justify-center text-sm font-medium text-emerald-400 uppercase tracking-[0.3em] mb-12 animate-fade-in">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mr-8"></div>
            <span className="px-6 py-3 border border-emerald-400/40 rounded-full bg-emerald-400/10 backdrop-blur-md shadow-lg shadow-emerald-500/20">
              Portfolio Showcase
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent ml-8"></div>
          </div>
          
          <h2 className="text-6xl lg:text-8xl font-extralight text-white mb-12 leading-[0.9] tracking-tight animate-fade-in" style={{ animationDelay: '300ms' }}>
            Featured
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-light mt-4">
              success stories
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '500ms' }}>
            Discover how we've helped businesses across various industries 
            achieve transformational growth through strategic digital innovation and cutting-edge technology solutions.
          </p>
        </div>

        {/* Ultra-premium redesigned project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-gray-900/90 via-slate-900/95 to-gray-900/90 backdrop-blur-xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-1000 cursor-pointer animate-fade-in"
              style={{
                animationDelay: `${index * 300}ms`,
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(15, 23, 42, 0.9) 100%)'
              }}
            >
              {/* Enhanced glowing border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/60 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-sm"></div>
              <div className="absolute inset-[2px] rounded-xl bg-gradient-to-br from-gray-900/95 via-slate-900/98 to-gray-900/95 backdrop-blur-xl"></div>
              
              {/* Content wrapper */}
              <div className="relative z-10">
                {/* Premium image section with enhanced effects */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-1200" 
                  />
                  
                  {/* Advanced overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  
                  {/* Enhanced floating category badge */}
                  <div className="absolute top-8 left-8">
                    <span className="text-sm font-medium text-white bg-gradient-to-r from-emerald-600/95 to-cyan-600/95 px-5 py-3 rounded-full backdrop-blur-md border border-white/30 shadow-xl shadow-emerald-500/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Multiple scan line effects on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-1000"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-1000" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <CardContent className="p-10 space-y-8">
                  {/* Enhanced title with premium typography */}
                  <h3 className="text-3xl font-light text-white mb-6 group-hover:text-emerald-400 transition-colors duration-700 leading-tight tracking-wide">
                    {project.title}
                  </h3>
                  
                  {/* Enhanced description */}
                  <p className="text-gray-300 mb-10 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-700 tracking-wide">
                    {project.description}
                  </p>
                  
                  {/* Ultra-premium metrics display */}
                  <div className="grid grid-cols-3 gap-6 mb-10 p-8 rounded-xl bg-gradient-to-r from-gray-800/60 via-slate-800/70 to-gray-800/60 backdrop-blur-md border border-gray-700/60 group-hover:border-emerald-500/40 transition-all duration-700 shadow-lg">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-xl font-light text-emerald-400 group-hover:text-emerald-300 transition-colors duration-700 mb-2 tracking-wide">
                          {value}
                        </div>
                        <div className="text-sm text-gray-400 capitalize leading-tight tracking-wide">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced premium tags */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-sm text-gray-300 bg-gray-800/70 border border-gray-600/60 px-4 py-3 rounded-full group-hover:bg-emerald-900/40 group-hover:border-emerald-500/60 group-hover:text-emerald-300 transition-all duration-700 backdrop-blur-md shadow-md tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Ultra-premium CTA button */}
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-emerald-600/30 to-cyan-600/30 border-emerald-500/60 text-emerald-300 hover:from-emerald-600/50 hover:to-cyan-600/50 hover:border-emerald-400 hover:text-white transition-all duration-700 backdrop-blur-md shadow-xl hover:shadow-emerald-500/30 group/btn py-4 text-base tracking-wide"
                  >
                    <span className="relative z-10">View case study</span>
                    <ArrowRight className="ml-3 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-cyan-500/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700 rounded-lg"></div>
                  </Button>
                </CardContent>
              </div>

              {/* Enhanced glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/15 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl rounded-xl"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced main CTA with premium styling */}
        <div className="text-center">
          <Button 
            variant="outline" 
            className="bg-gradient-to-r from-emerald-600/40 to-cyan-600/40 border-emerald-500/70 text-emerald-300 hover:from-emerald-600/60 hover:to-cyan-600/60 hover:border-emerald-400 hover:text-white px-16 py-6 text-xl font-light group transition-all duration-1000 backdrop-blur-md shadow-2xl hover:shadow-emerald-500/30 relative overflow-hidden tracking-wide"
          >
            <span className="relative z-10">View all case studies</span>
            <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-1 transition-transform duration-500 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
