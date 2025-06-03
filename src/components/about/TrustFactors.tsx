
import { Shield, Award, Users, Globe, CheckCircle, Star } from "lucide-react";

const trustMetrics = [
  {
    icon: Users,
    number: "500+",
    label: "Clients Served",
    description: "Fortune 500 companies trust us"
  },
  {
    icon: Globe,
    number: "25+",
    label: "Countries",
    description: "Global reach, local expertise"
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Proven track record of success"
  },
  {
    icon: CheckCircle,
    number: "99.8%",
    label: "Success Rate",
    description: "Projects delivered on time"
  }
];

const certifications = [
  "ISO 27001 Certified",
  "SOC 2 Type II Compliant",
  "AWS Advanced Partner",
  "Google Cloud Premier Partner",
  "Microsoft Gold Partner"
];

const TrustFactors = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Trust Metrics */}
        <div className="text-center mb-16">
          <h3 className="text-4xl lg:text-5xl font-light text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">industry leaders</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven track record speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-full h-full text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{metric.number}</div>
              <div className="text-lg font-medium text-green-400 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-400">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Ratings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Google Reviews */}
          <div className="bg-gray-800/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/30 text-center hover:border-gray-600/50 transition-colors duration-300">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-300 mb-2">Google Reviews</div>
            <div className="text-sm text-gray-400">Based on 250+ reviews</div>
          </div>

          {/* Clutch */}
          <div className="bg-gray-800/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/30 text-center hover:border-gray-600/50 transition-colors duration-300">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
            <div className="text-gray-300 mb-2">Clutch Rating</div>
            <div className="text-sm text-gray-400">Top 1% of agencies</div>
          </div>

          {/* Client Satisfaction */}
          <div className="bg-gray-800/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/30 text-center hover:border-gray-600/50 transition-colors duration-300">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-green-400" strokeWidth={1.5} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-300 mb-2">Client Retention</div>
            <div className="text-sm text-gray-400">Long-term partnerships</div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h4 className="text-xl font-semibold text-white mb-6">Certifications & Partnerships</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800/30 px-4 py-2 rounded-full border border-gray-700/30 text-sm text-gray-300 hover:border-green-400/50 hover:text-green-400 transition-colors duration-300">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustFactors;
