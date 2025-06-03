
import { Target, Users, Award, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Purpose-driven",
      description: "We deliver solutions that create meaningful impact and drive sustainable business growth."
    },
    {
      icon: Users,
      title: "Human-centered",
      description: "Every solution we build puts people first, creating experiences that truly matter."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards through rigorous quality processes and continuous improvement."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We pioneer emerging technologies to deliver next-generation solutions for our clients."
    }
  ];

  const achievements = [
    { value: "3", label: "Global offices", description: "Houston • Dubai • Irvine", gradient: "from-green-400 to-emerald-400" },
    { value: "150+", label: "Projects delivered", description: "Enterprise solutions", gradient: "from-blue-400 to-cyan-400" },
    { value: "99.9%", label: "Client satisfaction", description: "Proven excellence", gradient: "from-purple-400 to-pink-400" },
    { value: "5+", label: "Years of impact", description: "Industry leadership", gradient: "from-orange-400 to-red-400" }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)] animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Geometric grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-green-500/20 h-full"></div>
            ))}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center text-sm font-medium text-green-400 uppercase tracking-[0.2em] mb-8 animate-fade-in">
            <div className="w-12 h-px bg-gradient-to-r from-green-400 to-blue-400 mr-6 animate-pulse"></div>
            <span className="relative">
              About Cardinal
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-green-400 to-transparent opacity-50"></div>
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-extralight text-white mb-8 leading-tight animate-fade-in tracking-tight" style={{animationDelay: '200ms'}}>
            Making an
            <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent font-light">
              impact that matters
            </span>
          </h2>
          
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '400ms'}}>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              Cardinal Consulting is a <span className="text-green-400 font-medium">premier digital transformation consultancy</span> with global reach 
              and local expertise, defining the future of enterprise digital experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          {/* Enhanced Left Content */}
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '600ms'}}>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="relative pl-6 border-l-2 border-green-400/30">
                  Operating from strategic locations in <span className="text-green-400 font-medium">Houston, Dubai, and Irvine</span>, we deliver 
                  enterprise-grade solutions to Fortune 500 companies and emerging market leaders 
                  across multiple industries and geographies.
                </p>
                
                <p className="relative pl-6 border-l-2 border-blue-400/30">
                  As pioneers in <span className="text-blue-400 font-medium">AI Experience Optimization (AEO)</span>, we're defining the future of digital 
                  interaction by optimizing content and experiences for next-generation AI systems.
                </p>
                
                <p className="relative pl-6 border-l-2 border-emerald-400/30">
                  Our comprehensive approach combines strategic consulting, cutting-edge technology, 
                  and deep industry expertise to deliver <span className="text-emerald-400 font-medium">transformational outcomes</span>.
                </p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 border border-green-500/20">
              <span className="relative z-10">Learn more about us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Redesigned Achievements Grid with Progress Rings */}
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '800ms'}}>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-gray-800/20 via-gray-900/30 to-black/40 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/30 overflow-hidden hover:border-green-400/50 transition-all duration-700 hover:scale-105"
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Floating orb effect */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"></div>
                  
                  {/* Content with animated progress ring */}
                  <div className="relative z-10 text-center">
                    <div className="mb-4 relative flex justify-center">
                      {/* Animated progress ring */}
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                          <circle 
                            cx="32" 
                            cy="32" 
                            r="28" 
                            fill="none" 
                            stroke="rgba(255,255,255,0.1)" 
                            strokeWidth="2"
                          />
                          <circle 
                            cx="32" 
                            cy="32" 
                            r="28" 
                            fill="none" 
                            stroke="url(#gradient-${index})" 
                            strokeWidth="2"
                            strokeDasharray="175.93"
                            strokeDashoffset="44"
                            className="group-hover:stroke-dashoffset-0 transition-all duration-1000"
                          />
                        </svg>
                        
                        {/* Center dot with gradient */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-3 h-3 bg-gradient-to-r ${achievement.gradient} rounded-full group-hover:scale-150 transition-transform duration-500 animate-pulse`}></div>
                        </div>
                      </div>
                      
                      {/* Hidden SVG for gradient definitions */}
                      <svg className="absolute w-0 h-0">
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" className={index === 0 ? "stop-green-400" : index === 1 ? "stop-blue-400" : index === 2 ? "stop-purple-400" : "stop-orange-400"} />
                            <stop offset="100%" className={index === 0 ? "stop-emerald-400" : index === 1 ? "stop-cyan-400" : index === 2 ? "stop-pink-400" : "stop-red-400"} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-2xl font-light text-white mb-1 group-hover:text-green-300 transition-colors duration-500">
                        {achievement.value}
                      </div>
                      <div className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors duration-500">
                        {achievement.label}
                      </div>
                      <div className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors duration-500">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle border animation */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(34,197,94,0.1) 50%, transparent 70%)',
                    animation: 'gradient-shift 3s ease-in-out infinite'
                  }}></div>
                </div>
              ))}
            </div>
            
            {/* Additional visual element */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/30 text-center">
              <div className="text-gray-400 text-sm mb-2">Trusted by industry leaders</div>
              <div className="flex justify-center space-x-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-green-400/60 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Values Section */}
        <div className="relative bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-16 border border-gray-700/30 animate-fade-in" style={{animationDelay: '1000ms'}}>
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_50%)] rounded-2xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-light text-white mb-6">
                Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">values</span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                The principles that guide our approach to delivering exceptional outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group text-center p-6 rounded-xl hover:bg-gray-800/30 transition-all duration-300 hover:scale-105">
                  <div className="relative mb-6">
                    <value.icon className="w-12 h-12 text-green-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-xl font-medium text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
