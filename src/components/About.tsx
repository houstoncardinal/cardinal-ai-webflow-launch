import { Target, Users, Award, Lightbulb, MessageCircle, Users2, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const workflowSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    description: "We start with a comprehensive consultation to understand your business vision, challenges, and market goals.",
    duration: "30-60 mins",
    gradient: "from-blue-500 to-cyan-500",
    delay: "0ms"
  },
  {
    number: "02",
    icon: Users2,
    title: "Local Strategy & Planning",
    description: "Our team crafts a detailed roadmap with timelines, technology stack, and project milestones tailored to your market.",
    duration: "3-5 days",
    gradient: "from-purple-500 to-pink-500",
    delay: "200ms"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Development Sprint",
    description: "Agile development with regular updates, prototypes, and collaborative feedback sessions from our development team.",
    duration: "72hrs - 2 weeks",
    gradient: "from-green-500 to-emerald-500",
    delay: "400ms"
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Launch & Local Support",
    description: "Seamless deployment with ongoing maintenance, optimization, and dedicated support for your business.",
    duration: "Ongoing",
    gradient: "from-orange-500 to-red-500",
    delay: "600ms"
  }
];

const About = () => {
  const navigate = useNavigate();

  const handleDiscoveryCall = () => {
    navigate('/contact?type=discovery');
  };

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="max-w-4xl mb-10 md:mb-14">
          <div className="inline-flex items-center text-sm font-medium text-green-400 uppercase tracking-[0.2em] mb-4 animate-fade-in">
            <div className="w-6 md:w-8 h-px bg-gradient-to-r from-green-400 to-blue-400 mr-3 md:mr-4 animate-pulse"></div>
            <span className="relative">
              About Cardinal Consulting
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-green-400 to-transparent opacity-50"></div>
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white mb-4 leading-tight animate-fade-in tracking-tight" style={{animationDelay: '200ms'}}>
            trusted
            <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent font-light">
              digital partner
            </span>
          </h2>
          
          <div className="animate-fade-in" style={{animationDelay: '400ms'}}>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              Cardinal Consulting is a <span className="text-green-400 font-medium">premier digital agency</span> specializing in web development, app development, and digital marketing for businesses.
            </p>
          </div>
          
          {/* Expedited Services Highlight */}
          <div className="animate-fade-in mt-6" style={{animationDelay: '500ms'}}>
            <div className="inline-flex items-start sm:items-center px-4 sm:px-6 py-3 sm:py-4 bg-green-900/30 border border-green-400/30 rounded-xl backdrop-blur-sm max-w-full">
              <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 sm:mt-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-green-300 font-medium text-sm sm:text-base leading-relaxed">
                While web and app projects can take weeks, Cardinal specializes in expedited services delivered in less than 72 hours when requested.
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Enhanced Left Content */}
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '600ms'}}>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="relative pl-6 border-l-2 border-green-400/30">
                  We deliver enterprise-grade web development and digital marketing solutions to businesses, 
                  helping them dominate their local market and expand their digital presence across Texas.
                </p>
                
                <p className="relative pl-6 border-l-2 border-blue-400/30">
                  As leading <span className="text-blue-400 font-medium">web development and digital marketing agency</span>, we're defining the future of 
                  local business growth through cutting-edge technology, strategic digital campaigns, and mobile app development.
                </p>
                
                <p className="relative pl-6 border-l-2 border-emerald-400/30">
                  Our comprehensive approach combines strategic consulting, cutting-edge technology, 
                  and deep <span className="text-emerald-400 font-medium">market expertise</span> to deliver transformational outcomes for businesses.
                </p>
              </div>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
              <Link to="/about" className="w-full sm:w-auto">
                <Button className="group relative overflow-hidden bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 hover:from-green-500 hover:via-emerald-500 hover:to-green-400 text-white px-6 sm:px-8 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 border border-green-500/20 text-base sm:text-lg w-full">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Learn more about our agency
                    <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse hidden sm:block"></div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </Button>
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto">
                <Button variant="outline" className="group relative overflow-hidden px-6 sm:px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border-green-500/30 text-green-400 hover:text-green-300 text-base sm:text-lg w-full">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View our portfolio
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* How we work together box - with smaller, more refined icons */}
          <div className="animate-fade-in mt-6 lg:mt-0" style={{animationDelay: '600ms'}}>
            <div className="relative bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-3 sm:p-4 lg:p-6 rounded-2xl border border-gray-700/30 overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0"></div>
              
              {/* Floating orb effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg lg:text-xl font-light text-white mb-1.5">
                    How we <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">work with businesses</span>
                  </h3>
                  <div className="w-10 sm:w-12 h-px bg-gradient-to-r from-green-400 to-blue-400 mx-auto"></div>
                  <p className="text-gray-400 text-xs mt-1.5">Your journey from idea to market dominance</p>
                </div>
                
                {/* Process Steps with smaller, refined icons */}
                <div className="space-y-2 sm:space-y-3">
                  {workflowSteps.map((step, index) => (
                    <div 
                      key={index} 
                      className="group relative animate-fade-in"
                      style={{animationDelay: step.delay}}
                    >
                      {/* Connecting line for non-last items */}
                      {index < workflowSteps.length - 1 && (
                        <div className="absolute left-4 sm:left-5 top-8 sm:top-10 w-px h-2 sm:h-3 bg-gradient-to-b from-gray-600 to-gray-700"></div>
                      )}
                      
                      <div className="flex items-start space-x-2 p-2 rounded-lg bg-gray-800/40 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/60">
                        {/* Step Number & Icon - Made smaller and more refined */}
                        <div className="flex-shrink-0">
                          <div className={`relative w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r ${step.gradient} rounded-full p-1.5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <step.icon className="w-full h-full text-white" strokeWidth={1.5} />
                            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 shadow-sm">
                              <span className="text-[8px] font-bold text-green-400">{step.number}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Step Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-0.5">
                            <h4 className="text-xs sm:text-sm text-white font-medium group-hover:text-green-400 transition-colors duration-300">
                              {step.title}
                            </h4>
                            <span className="text-[10px] text-gray-400 bg-gray-700/50 px-1.5 py-0.5 rounded-full shrink-0">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Call to Action */}
                <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-700/30">
                  <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-green-400/60 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-[11px] sm:text-xs font-medium text-center">Ready to dominate the digital landscape?</span>
                      <div className="w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    <Button 
                      onClick={handleDiscoveryCall}
                      className="group relative overflow-hidden bg-green-600 hover:bg-green-500 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-green-500/30 hover:shadow-xl hover:shadow-green-500/30 w-full sm:w-auto"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-1.5">
                        Schedule Discovery Call
                        <Rocket className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
