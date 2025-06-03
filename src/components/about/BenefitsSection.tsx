
import { Zap, Shield, Users, TrendingUp, Clock, Award, Lightbulb, Globe } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster Time to Market",
    description: "Our streamlined processes and agile methodology get your products to market 40% faster than industry average.",
    highlight: "40% faster delivery",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Built-in security protocols, compliance standards, and regular audits ensure your data stays protected.",
    highlight: "99.9% uptime guarantee",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Future-proof solutions that grow with your business, handling increased traffic and feature expansion seamlessly.",
    highlight: "10x scalability potential",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Your own dedicated team of experts working exclusively on your project with direct communication channels.",
    highlight: "1:1 expert ratio",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support ensuring your systems are always running optimally.",
    highlight: "< 1hr response time",
    gradient: "from-red-400 to-rose-500"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of delivering award-winning solutions that drive real business growth and user engagement.",
    highlight: "250+ successful projects",
    gradient: "from-indigo-400 to-purple-500"
  }
];

const clientSuccessStories = [
  {
    company: "TechCorp",
    industry: "SaaS",
    result: "300% increase in user engagement",
    description: "Redesigned their entire platform architecture"
  },
  {
    company: "RetailGiant",
    industry: "E-commerce",
    result: "150% boost in conversion rates",
    description: "Optimized checkout flow and mobile experience"
  },
  {
    company: "FinanceFlow",
    industry: "FinTech",
    result: "500% faster processing speed",
    description: "Implemented modern cloud infrastructure"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center text-sm font-medium text-green-400 uppercase tracking-[0.2em] mb-8">
            <Lightbulb className="w-4 h-4 mr-3" />
            Why Choose Cardinal
          </div>
          <h2 className="text-5xl lg:text-7xl font-extralight text-white mb-8 leading-tight">
            Benefits that
            <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent font-light">
              drive real results
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
            We don't just build software—we deliver competitive advantages that transform your business.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${benefit.gradient} rounded-2xl p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-full h-full text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Highlight */}
              <div className={`inline-flex items-center text-sm font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                <div className={`w-2 h-2 bg-gradient-to-r ${benefit.gradient} rounded-full mr-2`}></div>
                {benefit.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Client Success Stories */}
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-xl p-12 rounded-3xl border border-gray-700/30">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-light text-white mb-4">
              Real results for <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">real clients</span>
            </h3>
            <p className="text-gray-300">Success stories that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clientSuccessStories.map((story, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/30 group-hover:border-green-400/50 transition-colors duration-300">
                  <div className="text-2xl font-bold text-green-400 mb-2">{story.result}</div>
                  <div className="text-white font-semibold mb-1">{story.company}</div>
                  <div className="text-sm text-gray-400 mb-3">{story.industry}</div>
                  <div className="text-sm text-gray-300">{story.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Reach */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-green-400" />
              <span>Global Reach</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div>25+ Countries Served</div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div>500+ Projects Delivered</div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div>15+ Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
