import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Portfolio = () => {
  const projects = [{
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
  }, {
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
  }, {
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
  }];
  return <section id="portfolio" className="py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Advanced futuristic background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/10 via-transparent to-pink-500/10 animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
        </div>

        {/* Geometric grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
            <defs>
              <pattern id="futuristicGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#gridGradient)" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="1" fill="url(#gridGradient)" opacity="0.5" />
              </pattern>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#futuristicGrid)" />
          </svg>
        </div>

        {/* Floating orbs with advanced animations */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => <div key={i} className="absolute rounded-full opacity-20 animate-pulse" style={{
          width: `${60 + i * 20}px`,
          height: `${60 + i * 20}px`,
          left: `${10 + i * 12}%`,
          top: `${15 + i % 4 * 25}%`,
          background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(16, 185, 129, 0.3)' : i % 3 === 1 ? 'rgba(6, 182, 212, 0.3)' : 'rgba(139, 92, 246, 0.3)'}, transparent 70%)`,
          animationDelay: `${i * 0.8}s`,
          animationDuration: `${4 + i * 0.5}s`,
          filter: 'blur(1px)'
        }}></div>)}
        </div>

        {/* Scanning lines effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent animate-pulse top-1/4"></div>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse top-2/3" style={{
          animationDelay: '1.5s'
        }}></div>
        </div>

        {/* Hexagonal pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hexPattern" width="10" height="8.66" patternUnits="userSpaceOnUse">
                <polygon points="5,0 9.33,2.5 9.33,7.5 5,10 0.67,7.5 0.67,2.5" fill="none" stroke="#10b981" strokeWidth="0.2" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced header section */}
        <div className="max-w-4xl mb-24 text-center mx-auto">
          <div className="inline-flex items-center justify-center text-sm font-medium text-emerald-400 uppercase tracking-[0.2em] mb-8 animate-fade-in">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mr-6"></div>
            <span className="px-4 py-2 border border-emerald-400/30 rounded-full bg-emerald-400/5 backdrop-blur-sm">
              Case Studies
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent ml-6"></div>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-extralight text-white mb-8 leading-[1.1] tracking-tight animate-fade-in" style={{
          animationDelay: '300ms'
        }}>
            Featured
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-light">
              success stories
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto animate-fade-in" style={{
          animationDelay: '500ms'
        }}>
            Discover how we've helped businesses across various industries 
            achieve transformational growth through strategic digital innovation and cutting-edge technology solutions.
          </p>
        </div>

        {/* Ultra-premium project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {projects.map((project, index) => <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-gray-900/80 via-slate-900/90 to-gray-900/80 backdrop-blur-xl shadow-2xl hover:shadow-emerald-500/20 transition-all duration-700 cursor-pointer animate-fade-in" style={{
          animationDelay: `${index * 200}ms`,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.8) 100%)'
        }}>
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              <div className="absolute inset-[1px] rounded-lg bg-gradient-to-br from-gray-900/90 via-slate-900/95 to-gray-900/90 backdrop-blur-xl"></div>
              
              {/* Content wrapper */}
              <div className="relative z-10">
                {/* Enhanced image section */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img src={project.image} alt={project.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-1000" />
                  
                  {/* Advanced overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Floating category badge */}
                  <div className="absolute top-6 left-6">
                    <span className="text-xs font-medium text-white bg-gradient-to-r from-emerald-600/90 to-cyan-600/90 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Scan line effect on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                </div>

                <CardContent className="p-8 space-y-6">
                  {/* Enhanced title */}
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-emerald-400 transition-colors duration-500 leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Description with subtle glow */}
                  <p className="text-gray-300 mb-8 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-500">
                    {project.description}
                  </p>
                  
                  {/* Premium metrics display */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-lg bg-gradient-to-r from-gray-800/50 via-slate-800/60 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-emerald-500/30 transition-all duration-500">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => <div key={metricIndex} className="text-center">
                        <div className="text-lg font-light text-emerald-400 group-hover:text-emerald-300 transition-colors duration-500 mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize leading-tight">
                          {key}
                        </div>
                      </div>)}
                  </div>
                  
                  {/* Enhanced tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="text-xs text-gray-300 bg-gray-800/60 border border-gray-600/50 px-3 py-2 rounded-full group-hover:bg-emerald-900/30 group-hover:border-emerald-500/50 group-hover:text-emerald-300 transition-all duration-500 backdrop-blur-sm">
                        {tag}
                      </span>)}
                  </div>
                  
                  {/* Ultra-premium CTA button */}
                  <Button variant="outline" size="sm" className="w-full bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border-emerald-500/50 text-emerald-300 hover:from-emerald-600/40 hover:to-cyan-600/40 hover:border-emerald-400 hover:text-white transition-all duration-500 backdrop-blur-sm shadow-lg hover:shadow-emerald-500/25 group/btn">
                    <span className="relative z-10 text-slate-950">View case study</span>
                    <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-cyan-500/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded"></div>
                  </Button>
                </CardContent>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-lg"></div>
            </Card>)}
        </div>

        {/* Enhanced main CTA */}
        <div className="text-center">
          <Button variant="outline" className="bg-gradient-to-r from-emerald-600/30 to-cyan-600/30 border-emerald-500/60 text-emerald-300 hover:from-emerald-600/50 hover:to-cyan-600/50 hover:border-emerald-400 hover:text-white px-12 py-4 text-lg font-light group transition-all duration-700 backdrop-blur-sm shadow-2xl hover:shadow-emerald-500/25 relative overflow-hidden">
            <span className="relative z-10">View all case studies</span>
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </Button>
        </div>
      </div>
    </section>;
};
export default Portfolio;