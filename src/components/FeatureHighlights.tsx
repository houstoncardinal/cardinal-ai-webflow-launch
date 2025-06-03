
import { Brain, Zap, Shield, Globe, Target, Rocket } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Cutting-edge artificial intelligence integration for smarter business decisions",
    gradient: "from-purple-500 to-pink-500",
    delay: "0ms"
  },
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Rapid development cycles with agile methodologies and proven frameworks",
    gradient: "from-yellow-500 to-orange-500",
    delay: "200ms"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance with industry standards",
    gradient: "from-green-500 to-emerald-500",
    delay: "400ms"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Worldwide deployment capabilities with multi-timezone support",
    gradient: "from-blue-500 to-cyan-500",
    delay: "600ms"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Data-driven strategies that hit your exact business objectives",
    gradient: "from-red-500 to-pink-500",
    delay: "800ms"
  },
  {
    icon: Rocket,
    title: "Scalable Growth",
    description: "Future-proof solutions that grow with your business needs",
    gradient: "from-indigo-500 to-purple-500",
    delay: "1000ms"
  }
];

const FeatureHighlights = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-4">
            <div className="w-8 h-px bg-green-600 mr-4"></div>
            Why Choose Cardinal
            <div className="w-8 h-px bg-green-600 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Exceptional <span className="text-green-600 font-medium">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes Cardinal the preferred choice for Fortune 500 companies and innovative startups worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 animate-fade-in hover:-translate-y-2"
              style={{ animationDelay: feature.delay }}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative line */}
                <div className={`w-0 h-1 bg-gradient-to-r ${feature.gradient} mt-6 group-hover:w-full transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
