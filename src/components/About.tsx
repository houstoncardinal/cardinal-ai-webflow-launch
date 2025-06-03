import { Target, Users, Award, Lightbulb, MessageCircle, Users2, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const workflowSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    description: "We start with a comprehensive consultation to understand your vision, challenges, and goals.",
    duration: "30-60 mins",
    gradient: "from-blue-500 to-cyan-500",
    delay: "0ms"
  },
  {
    number: "02",
    icon: Users2,
    title: "Strategy & Planning",
    description: "Our team crafts a detailed roadmap with timelines, technology stack, and project milestones.",
    duration: "3-5 days",
    gradient: "from-purple-500 to-pink-500",
    delay: "200ms"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Development Sprint",
    description: "Agile development with regular updates, prototypes, and collaborative feedback sessions.",
    duration: "2-12 weeks",
    gradient: "from-green-500 to-emerald-500",
    delay: "400ms"
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Launch & Support",
    description: "Seamless deployment with ongoing maintenance, optimization, and dedicated support.",
    duration: "Ongoing",
    gradient: "from-orange-500 to-red-500",
    delay: "600ms"
  }
];

const About = () => {

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
              Cardinal Consulting is a <span className="text-green-400 font-medium">premier digital transformation consultancy</span>
              <br />
              defining the future of enterprise digital experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Enhanced Left Content */}
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '600ms'}}>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="relative pl-6 border-l-2 border-green-400/30">
                  We deliver enterprise-grade solutions to Fortune 500 companies and emerging market leaders 
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
            
            <div className="pt-4">
              <Button className="group relative overflow-hidden bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 hover:from-green-500 hover:via-emerald-500 hover:to-green-400 text-white px-10 py-5 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 border border-green-500/20 text-lg">
                <span className="relative z-10 flex items-center gap-3">
                  Learn more about us
                  <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </Button>
            </div>
          </div>

          {/* How we work together box - Aligned to top */}
          <div className="animate-fade-in lg:mt-0" style={{animationDelay: '600ms'}}>
            <div className="relative bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/30 overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0"></div>
              
              {/* Floating orb effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-light text-white mb-2">
                    How we <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">work together</span>
                  </h3>
                  <div className="w-16 h-px bg-gradient-to-r from-green-400 to-blue-400 mx-auto"></div>
                  <p className="text-gray-400 text-sm mt-3">Your journey from idea to launch</p>
                </div>
                
                {/* Process Steps */}
                <div className="space-y-6">
                  {workflowSteps.map((step, index) => (
                    <div 
                      key={index} 
                      className="group relative animate-fade-in"
                      style={{animationDelay: step.delay}}
                    >
                      {/* Connecting line for non-last items */}
                      {index < workflowSteps.length - 1 && (
                        <div className="absolute left-8 top-16 w-px h-6 bg-gradient-to-b from-gray-600 to-gray-700"></div>
                      )}
                      
                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/60">
                        {/* Step Number & Icon */}
                        <div className="flex-shrink-0">
                          <div className={`relative w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full p-3 group-hover:scale-110 transition-transform duration-300`}>
                            <step.icon className="w-full h-full text-white" />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700">
                              <span className="text-xs font-bold text-green-400">{step.number}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Step Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-white font-medium group-hover:text-green-400 transition-colors duration-300">
                              {step.title}
                            </h4>
                            <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t border-gray-700/30 text-center">
                  <div className="flex justify-center items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-green-400/60 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm font-medium">Ready to start your project?</span>
                    <div className="w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  <Button className="group relative overflow-hidden bg-green-600 hover:bg-green-500 text-white px-8 py-4 text-base rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-green-500/30 hover:shadow-xl hover:shadow-green-500/30 min-w-[200px]">
                    <span className="relative z-10 flex items-center gap-2">
                      Schedule Discovery Call
                      <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
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
