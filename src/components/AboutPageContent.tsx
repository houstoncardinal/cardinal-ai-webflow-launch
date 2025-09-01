
import { Target, Users, Award, Lightbulb, MessageCircle, Users2, Rocket, CheckCircle, Star, Shield, Clock, TrendingUp, ArrowRight, Globe, Zap, Brain, Cpu, Database, Network, ExternalLink, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery & Strategy",
    description: "Deep dive into your business goals, challenges, and vision through comprehensive stakeholder interviews and market analysis.",
    details: ["Business analysis", "Market research", "Technical assessment", "Strategy development"],
    duration: "1-2 weeks",
    color: "from-blue-500 to-purple-600",
    progress: 14
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Planning & Design",
    description: "Create detailed project roadmaps with technology recommendations, timelines, and resource allocation for optimal results.",
    details: ["Technical architecture", "Project timeline", "Resource planning", "Risk assessment"],
    duration: "1-2 weeks",
    color: "from-purple-500 to-pink-600",
    progress: 28
  },
  {
    number: "03",
    icon: Rocket,
    title: "Design & Prototyping",
    description: "Craft stunning user experiences with interactive prototypes and comprehensive design systems that convert visitors.",
    details: ["UI/UX design", "Interactive prototypes", "Design systems", "User testing"],
    duration: "2-3 weeks",
    color: "from-pink-500 to-red-600",
    progress: 42
  },
  {
    number: "04",
    icon: Users2,
    title: "Development & Integration",
    description: "Agile development process with regular updates, code reviews, and seamless third-party integrations.",
    details: ["Frontend development", "Backend integration", "API development", "Performance optimization"],
    duration: "4-12 weeks",
    color: "from-green-500 to-emerald-600",
    progress: 56
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing across all devices, browsers, and user scenarios to ensure flawless performance.",
    details: ["Cross-browser testing", "Mobile responsiveness", "Security audits", "Performance testing"],
    duration: "1-2 weeks",
    color: "from-emerald-500 to-teal-600",
    progress: 70
  },
  {
    number: "06",
    icon: Globe,
    title: "Launch & Deployment",
    description: "Seamless deployment with monitoring setup, analytics configuration, and comprehensive launch support.",
    details: ["Production deployment", "Analytics setup", "Monitoring configuration", "Launch support"],
    duration: "1 week",
    color: "from-teal-500 to-cyan-600",
    progress: 84
  },
  {
    number: "07",
    icon: TrendingUp,
    title: "Growth & Optimization",
    description: "Ongoing maintenance, performance monitoring, feature enhancements, and growth optimization strategies.",
    details: ["Performance monitoring", "Feature updates", "Technical support", "Growth optimization"],
    duration: "Ongoing",
    color: "from-cyan-500 to-blue-600",
    progress: 100
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security protocols with advanced encryption and compliance standards",
    gradient: "from-cyan-400 to-blue-600"
  },
  {
    icon: Clock,
    title: "Rapid Development",
    description: "Agile methodologies deliver projects 3x faster than traditional approaches",
    gradient: "from-purple-400 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Data-driven solutions that deliver measurable business growth and results",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    icon: Brain,
    title: "Smart Solutions",
    description: "AI-powered automation and intelligent systems that scale with your business",
    gradient: "from-orange-400 to-red-600"
  }
];

const stats = [
  { number: "500+", label: "Projects Delivered", icon: Network },
  { number: "99.9%", label: "Uptime Guarantee", icon: Cpu },
  { number: "50+", label: "Enterprise Clients", icon: Globe },
  { number: "24/7", label: "Support Available", icon: Brain }
];

const testimonials = [
  {
    quote: "Cardinal transformed our digital presence with a stunning website that increased our conversions by 300%.",
    author: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    rating: 5,
    avatar: "SC"
  },
  {
    quote: "The mobile app Cardinal built for us has over 100k downloads and 4.8-star rating. Exceptional work.",
    author: "Marcus Rodriguez",
    role: "Founder, StartupHub",
    rating: 5,
    avatar: "MR"
  },
  {
    quote: "Cardinal's cloud solutions reduced our infrastructure costs by 60% while improving performance significantly.",
    author: "Elena Volkov",
    role: "CTO, DataCore Industries",
    rating: 5,
    avatar: "EV"
  }
];

const AboutPageContent = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section - Light Background with Animated Particles */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 opacity-30">
          {/* Floating Particles */}
          <div className="absolute top-20 left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-54 sm:h-54 lg:w-72 lg:h-72 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center text-xs sm:text-sm font-medium text-green-600 uppercase tracking-[0.3em] mb-6 sm:mb-8 relative">
              <div className="absolute -inset-2 bg-green-400/10 blur-xl rounded-full"></div>
              <div className="relative flex items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3 sm:mr-4 animate-pulse"></div>
                <span className="relative z-10">Digital Excellence Since 2015</span>
                <div className="w-2 h-2 bg-green-600 rounded-full ml-3 sm:ml-4 animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight text-gray-900 mb-8 sm:mb-12 leading-relaxed relative">
              <span className="relative inline-block">
                Building
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-20 blur-2xl"></div>
              </span>
              <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent relative">
                tomorrow's digital
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600 opacity-30 blur-3xl"></div>
              </span>
              <span className="block text-gray-700">experiences today</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
              Cardinal is a leading digital agency specializing in web development, mobile applications, 
              cloud solutions, and digital marketing that drives real business growth.
            </p>

            {/* Stats Display */}
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 blur-3xl rounded-3xl"></div>
              <div className="relative bg-white/60 backdrop-blur-xl border border-gray-300/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="relative mb-3 sm:mb-4">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto bg-gradient-to-r ${index === 0 ? 'from-green-500 to-emerald-600' : index === 1 ? 'from-blue-500 to-cyan-600' : index === 2 ? 'from-purple-500 to-pink-600' : 'from-orange-500 to-red-600'} rounded-xl sm:rounded-2xl p-3 sm:p-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                          <stat.icon className="w-full h-full text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-1 sm:mb-2 group-hover:text-green-600 transition-colors duration-300 leading-relaxed">{stat.number}</div>
                      <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Dark Background */}
      <section className="py-32 lg:py-40 relative px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-gray-950 to-black overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Floating Neural Network Nodes */}
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50" style={{animationDelay: '3s'}}></div>
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path d="M100 200 Q 300 100 500 300 T 900 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M200 100 Q 400 300 600 150 T 1000 400" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto lg:px-8 relative z-10">
          <div className="text-center mb-20 lg:mb-28">
            <div className="inline-flex items-center text-xs sm:text-sm font-medium text-green-400 uppercase tracking-[0.3em] mb-8 relative">
              <div className="absolute -inset-4 bg-green-400/10 blur-2xl rounded-full"></div>
              <Cpu className="w-4 h-4 mr-3 relative z-10" />
              <span className="relative z-10">Our Development Process</span>
              <Database className="w-4 h-4 ml-3 relative z-10" />
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white mb-12 leading-relaxed">
              Proven methodology
              <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                for digital success
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              Our systematic approach ensures every project delivers exceptional results 
              through careful planning, expert execution, and continuous optimization.
            </p>
          </div>

          {/* Enhanced Process Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-cyan-400 to-blue-400 rounded-full opacity-30 hidden lg:block"></div>
            
            <div className="space-y-24 lg:space-y-32">
              {processSteps.map((step, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full shadow-lg shadow-green-400/50 hidden lg:block z-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 w-full max-w-2xl">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-cyan-400/10 blur-2xl rounded-3xl group-hover:from-green-400/20 group-hover:to-cyan-400/20 transition-all duration-700"></div>
                      
                      <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 lg:p-10 group-hover:bg-gray-900/60 transition-all duration-500 shadow-2xl">
                        <div className="flex items-start gap-6 mb-8">
                          <div className="relative">
                            <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl p-5 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                              <step.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <span className="text-sm text-green-400 font-mono uppercase tracking-wide">Phase {step.number}</span>
                              <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent"></div>
                            </div>
                            <h3 className="text-3xl text-white font-light mb-4 group-hover:text-green-400 transition-colors duration-300 leading-relaxed">{step.title}</h3>
                            <p className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center gap-3 group/item">
                              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                              <span className="text-gray-400 group-hover/item:text-green-400 transition-colors duration-300 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Duration Badge */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-400 text-sm">Timeline:</span>
                            <div className="bg-green-400/10 border border-green-400/30 text-green-400 px-4 py-2 rounded-full text-sm font-mono backdrop-blur-sm">
                              {step.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase Progress Card */}
                  <div className="flex-1 w-full max-w-sm">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-2xl rounded-2xl group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-700"></div>
                      
                      <Card className="bg-white/5 border-gray-700/30 backdrop-blur-2xl relative overflow-hidden group-hover:bg-white/10 transition-all duration-500 shadow-xl">
                        <CardContent className="p-6 relative z-10">
                          <div className="flex items-center justify-between mb-6">
                            <span className="text-2xl font-light text-white font-mono group-hover:text-green-400 transition-colors duration-300">{step.number}</span>
                            <span className="text-xs text-green-400 uppercase tracking-wide">{step.title}</span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="relative mb-6">
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000 relative`}
                                style={{ width: `${step.progress}%` }}
                              >
                                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Progress Indicators */}
                          <div className="space-y-2 mb-6">
                            {processSteps.slice(0, 7).map((_, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full transition-all duration-500 relative ${
                                  i < parseInt(step.number) 
                                    ? 'bg-green-400 scale-110 shadow-sm shadow-green-400/50' 
                                    : i === parseInt(step.number) - 1 
                                      ? 'bg-yellow-400 animate-pulse shadow-sm shadow-yellow-400/50'
                                      : 'bg-gray-600'
                                }`}></div>
                                <div className={`h-1 flex-1 rounded-full overflow-hidden transition-all duration-500 ${
                                  i < parseInt(step.number) 
                                    ? `bg-gradient-to-r ${step.color}` 
                                    : i === parseInt(step.number) - 1 
                                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                                      : 'bg-gray-700'
                                } group-hover:scale-105`}></div>
                                <div className="text-xs text-gray-400 font-mono w-6 group-hover:text-green-400 transition-colors duration-300">
                                  {String(i + 1).padStart(2, '0')}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Status */}
                          <div className="flex items-center justify-center p-3 bg-gray-900/30 rounded-lg border border-gray-700/30">
                            <div className="flex items-center gap-3">
                              <div className="flex space-x-1">
                                {Array.from({ length: 3 }).map((_, i) => (
                                  <div key={i} className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse group-hover:bg-cyan-400 transition-colors duration-300 shadow-sm shadow-green-400/50" style={{animationDelay: `${i * 0.2}s`}}></div>
                                ))}
                              </div>
                              <span className="text-xs text-gray-400 uppercase tracking-wide group-hover:text-green-400 transition-colors duration-300">
                                Active
                              </span>
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
        </div>
      </section>

      {/* Benefits Section - Light Background */}
      <section className="py-24 sm:py-32 lg:py-40 relative px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-gray-900 mb-8 sm:mb-12 leading-relaxed">
              Why choose <span className="text-green-600">Cardinal</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional digital solutions that drive measurable business results through proven expertise and innovative approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl`}></div>
                <Card className="bg-white/80 border-gray-200/50 backdrop-blur-xl hover:bg-white/90 transition-all duration-500 group relative overflow-hidden h-full shadow-lg">
                  <CardContent className="p-6 sm:p-8 text-center relative z-10 h-full flex flex-col">
                    <div className="relative mb-6 sm:mb-8">
                      <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-r ${benefit.gradient} rounded-2xl sm:rounded-3xl p-4 sm:p-5 mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                        <benefit.icon className="w-full h-full text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-gray-900 font-light mb-3 sm:mb-4 group-hover:text-green-600 transition-colors duration-300 leading-relaxed">{benefit.title}</h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 flex-grow text-sm sm:text-base">{benefit.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Dark Background */}
      <section className="py-24 sm:py-32 lg:py-40 relative px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-gray-950 to-black">
        <div className="max-w-7xl mx-auto lg:px-8">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white mb-8 sm:mb-12 leading-relaxed">
              Client <span className="text-green-400">success stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <Card className="bg-gray-900/20 border-gray-700/30 backdrop-blur-xl group-hover:bg-gray-800/30 transition-all duration-500 relative overflow-hidden h-full">
                  <CardContent className="p-6 sm:p-8 relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-6 sm:mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-300 mb-6 sm:mb-8 italic text-base sm:text-lg leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm sm:text-base">{testimonial.author}</div>
                        <div className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews & Social Proof Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-green-400 to-green-600 mr-6"></div>
              Client Reviews & Social Proof
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Trusted by Houston Businesses
              <span className="block text-green-600 font-normal">
                for Over 7+ Years
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients say about our services and join hundreds of satisfied businesses 
              who have transformed their digital presence with Cardinal Consulting.
            </p>
          </div>

          {/* Google Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Featured Review 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Cardinal Consulting transformed our business with a stunning website and powerful SEO. 
                Our online presence has never been stronger, and we're seeing real results!"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">CEO, Houston Tech Solutions</div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-lg">S</span>
                </div>
              </div>
            </div>

            {/* Featured Review 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The team at Cardinal Consulting is exceptional. They delivered our mobile app on time 
                and exceeded our expectations. Highly recommend for any digital project!"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-600">Founder, Chen Innovations</div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-lg">M</span>
                </div>
              </div>
            </div>

            {/* Featured Review 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Outstanding service and results! Our digital marketing campaigns have increased 
                our leads by 300%. Cardinal Consulting is the real deal in Houston."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">Lisa Rodriguez</div>
                  <div className="text-sm text-gray-600">Marketing Director, Rodriguez Group</div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-lg">L</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action for Reviews */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-4">
                Share Your Experience
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Help other Houston businesses discover the power of Cardinal Consulting. 
                Leave us a review and let the world know about your success story!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Google Review CTA */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4285F4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Google Review</h4>
                    <p className="text-gray-600">Share your experience on Google</p>
                  </div>
                </div>
                <a 
                  href="https://share.google/WtjXp4pjFrRe1T39L" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-white text-green-600 hover:bg-green-50 border border-green-300 hover:border-green-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-md inline-flex items-center justify-center"
                >
                  Leave Google Review
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>

              {/* Facebook Review CTA */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-sm">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Facebook Review</h4>
                    <p className="text-gray-600">Share your experience on Facebook</p>
                  </div>
                </div>
                <a 
                  href="https://www.facebook.com/cardinalad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 border border-blue-300 hover:border-blue-400 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-md inline-flex items-center justify-center"
                >
                  Visit Our Facebook
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>7+ Years in Business</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>500+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>98% Satisfaction Rate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Serving All of America</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Light Background */}
      <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto lg:px-8 text-center relative z-10">
          <div className="relative mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 sm:mb-8 leading-relaxed">
              Ready to transform
              <span className="block bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                your digital presence?
              </span>
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project and create a digital solution that drives real business growth and success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto shadow-lg">
              Start Your Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
            </Button>
            
            <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-100 px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-2xl w-full sm:w-auto">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageContent;
