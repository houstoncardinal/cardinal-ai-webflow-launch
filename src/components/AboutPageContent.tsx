
import { Target, Users, Award, Lightbulb, MessageCircle, Users2, Rocket, CheckCircle, Star, Shield, Clock, TrendingUp, ArrowRight, Globe, Zap } from "lucide-react";
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
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance standards"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "98% of projects delivered on schedule with transparent tracking"
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Average 300% return on investment within first year"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Senior developers with 10+ years average experience"
  }
];

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Enterprise Clients" },
  { number: "24/7", label: "Support Available" }
];

const testimonials = [
  {
    quote: "Cardinal transformed our digital presence completely. The results exceeded all expectations.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    rating: 5
  },
  {
    quote: "Professional, reliable, and incredibly skilled. They delivered exactly what we needed.",
    author: "Michael Chen",
    role: "CEO, InnovateLabs",
    rating: 5
  },
  {
    quote: "Best investment we've made. The platform has revolutionized our business operations.",
    author: "Emily Rodriguez",
    role: "Director of Operations, GlobalTech",
    rating: 5
  }
];

const AboutPageContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)] animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm font-medium text-green-400 uppercase tracking-[0.2em] mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-green-400 to-blue-400 mr-6"></div>
              <span>About Cardinal</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-extralight text-white mb-8 leading-tight">
              Defining the
              <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent">
                future of digital
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cardinal Consulting is a premier digital transformation consultancy 
              delivering enterprise-grade solutions to Fortune 500 companies worldwide.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center text-sm font-medium text-green-400 uppercase tracking-[0.2em] mb-8">
              <span>Our Process</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extralight text-white mb-8">
              From concept to
              <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                launch excellence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven 7-step methodology ensures every project delivers exceptional results, 
              on time and within budget.
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl p-4 flex items-center justify-center`}>
                      <step.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-wide">Step {step.number}</div>
                      <h3 className="text-2xl text-white font-medium">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400">Duration:</span>
                    <span className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Progress Visualization Side */}
                <div className="flex-1 max-w-lg">
                  <Card className="bg-gray-800/30 border-gray-700/30 backdrop-blur-xl">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-2xl font-light text-white">{step.number}</span>
                        <span className="text-sm text-gray-400">Progress Step</span>
                      </div>
                      
                      <Progress 
                        value={(parseInt(step.number) / 7) * 100} 
                        className={`h-3 mb-6 bg-gray-700`}
                      />
                      
                      <div className="space-y-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${i < parseInt(step.number) ? 'bg-green-400' : 'bg-gray-600'}`}></div>
                            <div className={`h-2 flex-1 rounded-full ${i < parseInt(step.number) ? 'bg-gradient-to-r ' + step.color : 'bg-gray-700'}`}></div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-extralight text-white mb-8">
              Why choose <span className="text-green-400">Cardinal</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700/30 backdrop-blur-xl hover:bg-gray-800/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl text-white font-medium mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-extralight text-white mb-8">
              Client <span className="text-green-400">success stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700/30 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div>
                    <div className="text-white font-medium">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-extralight text-white mb-8">
            Ready to transform your
            <span className="block text-green-400">digital presence?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join hundreds of successful companies who have transformed their business with Cardinal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-xl">
              Schedule Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageContent;
