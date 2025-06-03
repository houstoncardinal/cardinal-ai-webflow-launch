
import { Target, Users, Award, Lightbulb, MessageCircle, Users2, Rocket, CheckCircle, Star, Shield, Clock, TrendingUp, ArrowRight, Globe, Zap, Brain, Cpu, Database, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery & Strategy",
    description: "Deep dive into your business goals, challenges, and vision through comprehensive stakeholder interviews.",
    details: ["Business analysis", "Stakeholder mapping", "Technical assessment", "Market research"],
    duration: "1-2 weeks",
    color: "from-blue-500 to-purple-600"
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Planning & Architecture",
    description: "Craft detailed project roadmap with technology stack, timelines, and resource allocation.",
    details: ["Technical architecture", "Project timeline", "Resource planning", "Risk assessment"],
    duration: "1-2 weeks",
    color: "from-purple-500 to-pink-600"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Design & Prototyping",
    description: "Create stunning user experiences with interactive prototypes and design systems.",
    details: ["UI/UX design", "Interactive prototypes", "Design systems", "User testing"],
    duration: "2-3 weeks",
    color: "from-pink-500 to-red-600"
  },
  {
    number: "04",
    icon: Users2,
    title: "Development Sprint",
    description: "Agile development with regular updates, code reviews, and collaborative feedback sessions.",
    details: ["Frontend development", "Backend integration", "Quality assurance", "Performance optimization"],
    duration: "4-12 weeks",
    color: "from-green-500 to-emerald-600"
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing across devices, browsers, and user scenarios.",
    details: ["Cross-browser testing", "Mobile responsiveness", "Security audits", "Performance testing"],
    duration: "1-2 weeks",
    color: "from-emerald-500 to-teal-600"
  },
  {
    number: "06",
    icon: Globe,
    title: "Deployment & Launch",
    description: "Seamless deployment with monitoring, analytics setup, and go-live support.",
    details: ["Production deployment", "Analytics setup", "Monitoring configuration", "Launch support"],
    duration: "1 week",
    color: "from-teal-500 to-cyan-600"
  },
  {
    number: "07",
    icon: TrendingUp,
    title: "Optimization & Support",
    description: "Ongoing maintenance, performance optimization, and feature enhancements.",
    details: ["Performance monitoring", "Feature updates", "Technical support", "Growth optimization"],
    duration: "Ongoing",
    color: "from-cyan-500 to-blue-600"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Quantum Security",
    description: "Military-grade encryption with quantum-resistant algorithms",
    gradient: "from-cyan-400 to-blue-600"
  },
  {
    icon: Clock,
    title: "Neural Efficiency",
    description: "AI-powered workflows deliver 10x faster execution times",
    gradient: "from-purple-400 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Exponential ROI",
    description: "Advanced analytics predict 500% average growth metrics",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    icon: Brain,
    title: "Cognitive AI",
    description: "Self-learning systems adapt to your business patterns",
    gradient: "from-orange-400 to-red-600"
  }
];

const stats = [
  { number: "500+", label: "Neural Networks Deployed", icon: Network },
  { number: "99.9%", label: "Quantum Uptime", icon: Cpu },
  { number: "50+", label: "Fortune 500 Clients", icon: Globe },
  { number: "24/7", label: "AI Monitoring", icon: Brain }
];

const testimonials = [
  {
    quote: "Cardinal's quantum computing solutions revolutionized our data processing capabilities beyond imagination.",
    author: "Dr. Sarah Chen",
    role: "Chief AI Officer, QuantumTech Industries",
    rating: 5,
    avatar: "SC"
  },
  {
    quote: "The neural network implementation exceeded our wildest projections. Truly next-generation technology.",
    author: "Marcus Rodriguez",
    role: "Director of Innovation, CyberDyne Corp",
    rating: 5,
    avatar: "MR"
  },
  {
    quote: "Cardinal transformed our entire digital ecosystem with bleeding-edge AI that actually thinks.",
    author: "Elena Volkov",
    role: "CTO, NeoTech Enterprises",
    rating: 5,
    avatar: "EV"
  }
];

const AboutPageContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-black relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Scanning Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center text-sm font-medium text-green-400 uppercase tracking-[0.3em] mb-8 relative">
              <div className="absolute -inset-2 bg-green-400/10 blur-xl rounded-full"></div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-4 animate-pulse"></div>
                <span className="relative z-10">Neural Network Cardinal</span>
                <div className="w-2 h-2 bg-green-400 rounded-full ml-4 animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-7xl lg:text-9xl font-extralight text-white mb-12 leading-tight relative">
              <span className="relative inline-block">
                Architecting
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-20 blur-2xl"></div>
              </span>
              <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent relative">
                tomorrow's digital
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 opacity-30 blur-3xl"></div>
              </span>
              <span className="block text-white/80">consciousness</span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Cardinal Quantum Labs pioneers the convergence of artificial intelligence, 
              quantum computing, and neural networks to forge the future of enterprise transformation.
            </p>

            {/* Holographic Stats Display */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 blur-3xl rounded-3xl"></div>
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="relative mb-4">
                        <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${index === 0 ? 'from-green-400 to-emerald-500' : index === 1 ? 'from-blue-400 to-cyan-500' : index === 2 ? 'from-purple-400 to-pink-500' : 'from-orange-400 to-red-500'} rounded-2xl p-4 group-hover:scale-110 transition-all duration-300`}>
                          <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-xl rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      </div>
                      <div className="text-4xl lg:text-5xl font-light text-white mb-2 group-hover:text-green-400 transition-colors duration-300">{stat.number}</div>
                      <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section with Advanced Visualization */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center text-sm font-medium text-green-400 uppercase tracking-[0.3em] mb-8">
              <Cpu className="w-4 h-4 mr-3" />
              <span>Neural Workflow Architecture</span>
              <Database className="w-4 h-4 ml-3" />
            </div>
            <h2 className="text-6xl lg:text-7xl font-extralight text-white mb-12">
              Quantum-powered
              <span className="block bg-gradient-to-r from-green-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                transformation pipeline
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our AI-orchestrated methodology leverages quantum computing principles 
              to deliver exponential results through parallel processing dimensions.
            </p>
          </div>

          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side with Holographic Enhancement */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl p-5 flex items-center justify-center relative z-10`}>
                        <step.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-30 blur-2xl rounded-3xl animate-pulse`}></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-sm text-green-400 uppercase tracking-wide font-mono">Phase {step.number}</div>
                        <div className="w-12 h-px bg-gradient-to-r from-green-400 to-transparent"></div>
                      </div>
                      <h3 className="text-3xl text-white font-light">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-400 group-hover:text-green-400 transition-colors duration-300">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="text-gray-400">Neural Processing Time:</span>
                    <div className="bg-gray-800/50 border border-green-400/30 text-green-400 px-4 py-2 rounded-full text-sm font-mono backdrop-blur-sm">
                      {step.duration}
                    </div>
                  </div>
                </div>

                {/* Futuristic Progress Visualization */}
                <div className="flex-1 max-w-lg">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 blur-2xl rounded-3xl"></div>
                    <Card className="bg-gray-900/30 border-gray-700/30 backdrop-blur-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-blue-400/5"></div>
                      <CardContent className="p-10 relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <span className="text-3xl font-light text-white font-mono">{step.number}</span>
                          <span className="text-sm text-green-400 uppercase tracking-wide">Neural Phase</span>
                        </div>
                        
                        <div className="relative mb-8">
                          <Progress 
                            value={(parseInt(step.number) / 7) * 100} 
                            className="h-4 bg-gray-800 rounded-full overflow-hidden"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-sm rounded-full"></div>
                        </div>
                        
                        <div className="space-y-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="flex items-center gap-4">
                              <div className={`w-4 h-4 rounded-full relative ${i < parseInt(step.number) ? 'bg-green-400' : 'bg-gray-700'}`}>
                                {i < parseInt(step.number) && (
                                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                                )}
                              </div>
                              <div className={`h-3 flex-1 rounded-full overflow-hidden ${i < parseInt(step.number) ? 'bg-gradient-to-r ' + step.color : 'bg-gray-700'} relative`}>
                                {i < parseInt(step.number) && (
                                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-50 blur-sm`}></div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Quantum Processing Indicator */}
                        <div className="mt-8 flex items-center justify-center">
                          <div className="flex space-x-1">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <div key={i} className={`w-2 h-2 bg-green-400 rounded-full animate-pulse`} style={{animationDelay: `${i * 0.2}s`}}></div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-slate-900/50"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-12">
              Quantum advantages of <span className="text-green-400">Cardinal</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl`}></div>
                <Card className="bg-gray-900/20 border-gray-700/30 backdrop-blur-xl hover:bg-gray-800/30 transition-all duration-500 group relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 text-center relative z-10 h-full flex flex-col">
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-r ${benefit.gradient} rounded-3xl p-5 mx-auto group-hover:scale-110 transition-all duration-500`}>
                        <benefit.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-30 blur-2xl rounded-3xl transition-all duration-500`}></div>
                    </div>
                    <h3 className="text-2xl text-white font-light mb-4 group-hover:text-green-400 transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-grow">{benefit.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Futuristic Testimonials Section */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-12">
              Neural <span className="text-green-400">testimonials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-3xl"></div>
                <Card className="bg-gray-900/20 border-gray-700/30 backdrop-blur-xl group-hover:bg-gray-800/30 transition-all duration-500 relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 100}ms`}} />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-300 mb-8 italic text-lg leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-white font-medium group-hover:text-green-400 transition-colors duration-300">{testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="relative mb-12">
            <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-8">
              Initialize quantum
              <span className="block bg-gradient-to-r from-green-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                transformation protocol
              </span>
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-cyan-300/20 to-blue-400/20 blur-3xl"></div>
          </div>
          
          <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Engage with our neural network architects to design your organization's 
            evolutionary pathway through the quantum digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300 rounded-2xl"></div>
              <Button className="relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-10 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 border border-green-400/30">
                Initiate Neural Interface
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300 rounded-2xl"></div>
              <Button variant="outline" className="relative border-gray-600 text-white hover:bg-gray-800/50 px-10 py-6 text-lg rounded-2xl backdrop-blur-sm">
                Access Quantum Portal
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageContent;
