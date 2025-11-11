import { Shield, Clock, Globe, Award, Headphones, Zap } from "lucide-react";

const TrustSignals = () => {
  const signals = [
    {
      icon: Clock,
      title: "Same-Day Support",
      description: "Guaranteed response within business hours",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Available Nationwide",
      description: "Serving clients across all 50 states",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption & hosting",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "500+ Projects",
      description: "Successfully delivered worldwide",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Direct access to your project team",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "72-hour expedited options available",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="group text-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${signal.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <signal.icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {signal.title}
              </h3>
              <p className="text-xs text-gray-600 leading-tight">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
