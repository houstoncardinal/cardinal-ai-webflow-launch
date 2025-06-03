
import { MessageCircle, Users2, Rocket, CheckCircle, Lightbulb, Settings, Eye, Headphones } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery & Strategy",
    description: "Deep dive into your business goals, challenges, and vision through comprehensive stakeholder interviews.",
    details: ["Business analysis", "Stakeholder mapping", "Technical assessment", "Market research"],
    duration: "1-2 weeks",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Planning & Architecture",
    description: "Craft detailed project roadmap with technology stack, timelines, and resource allocation.",
    details: ["Technical architecture", "Project timeline", "Resource planning", "Risk assessment"],
    duration: "1 week",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    icon: Settings,
    title: "Design & Prototyping",
    description: "Create intuitive user experiences with wireframes, prototypes, and visual design systems.",
    details: ["UX/UI design", "Interactive prototypes", "Design system", "User testing"],
    duration: "2-3 weeks",
    gradient: "from-orange-500 to-red-500"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Development Sprint",
    description: "Agile development with regular updates, code reviews, and continuous integration.",
    details: ["Frontend development", "Backend architecture", "API integration", "Quality assurance"],
    duration: "4-12 weeks",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    number: "05",
    icon: Eye,
    title: "Testing & Optimization",
    description: "Comprehensive testing across devices, browsers, and performance optimization.",
    details: ["Cross-browser testing", "Performance optimization", "Security audit", "Load testing"],
    duration: "1-2 weeks",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    number: "06",
    icon: CheckCircle,
    title: "Launch & Deployment",
    description: "Seamless go-live with monitoring, backup systems, and launch strategy execution.",
    details: ["Production deployment", "DNS configuration", "SSL setup", "Analytics integration"],
    duration: "1 week",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    number: "07",
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, monitoring, and optimization for sustained success.",
    details: ["24/7 monitoring", "Regular updates", "Performance optimization", "Technical support"],
    duration: "Ongoing",
    gradient: "from-pink-500 to-rose-500"
  }
];

const ProcessWorkflow = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 h-full">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border-r border-green-500/20 h-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center text-sm font-medium text-green-400 uppercase tracking-[0.2em] mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-green-400 to-blue-400 mr-6"></div>
            Our Process
          </div>
          <h2 className="text-5xl lg:text-7xl font-extralight text-white mb-8 leading-tight">
            From concept to
            <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent font-light">
              launch excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
            Our proven 7-step methodology ensures every project delivers exceptional results, 
            on time and within budget.
          </p>
        </div>

        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <div key={index} className="group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content - Left side for odd, right side for even */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-full h-full text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-400 mb-1">STEP {step.number}</div>
                      <h3 className="text-2xl lg:text-3xl font-light text-white">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${step.gradient} rounded-full`}></div>
                        <span className="text-sm text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium text-white bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/30">
                      Duration: {step.duration}
                    </div>
                  </div>
                </div>

                {/* Visual - Right side for odd, left side for even */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/30 group-hover:border-gray-600/50 transition-all duration-300">
                    {/* Step number display */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gray-900 border-4 border-gray-700 rounded-2xl flex items-center justify-center">
                      <span className={`text-xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Progress indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm text-gray-400">Progress Step</div>
                      <div className="flex space-x-2">
                        {[...Array(7)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-1 rounded-full ${
                              i <= index ? `bg-gradient-to-r ${step.gradient}` : 'bg-gray-700'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Mockup content */}
                    <div className="space-y-3">
                      <div className={`h-2 bg-gradient-to-r ${step.gradient} rounded-full opacity-60`}></div>
                      <div className="h-1 bg-gray-600 rounded-full w-3/4"></div>
                      <div className="h-1 bg-gray-600 rounded-full w-1/2"></div>
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="h-8 bg-gray-700/50 rounded-lg"></div>
                        <div className="h-8 bg-gray-700/50 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connecting line to next step */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gray-600 to-gray-700"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessWorkflow;
