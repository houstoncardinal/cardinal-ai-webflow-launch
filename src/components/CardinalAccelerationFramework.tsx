import { MessageSquare, Compass, Rocket, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CardinalAccelerationFramework = () => {
  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Define",
      subtitle: "Market Strategy & Digital Blueprint",
      description: "We analyze your market position, define competitive advantages, and create a comprehensive digital roadmap aligned with your business goals.",
      features: ["Market Analysis", "Competitive Research", "Strategic Planning", "Technology Assessment"],
      gradient: "from-blue-600 to-cyan-600",
      delay: "0ms"
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "Design",
      subtitle: "UI/UX, System Wireframes & Architecture",
      description: "Our design team crafts conversion-optimized interfaces with intuitive navigation and engaging user experiences that drive action.",
      features: ["UI/UX Design", "Wireframes", "Information Architecture", "Brand Integration"],
      gradient: "from-purple-600 to-pink-600",
      delay: "150ms"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Build",
      subtitle: "Agile Development Sprint (72hr - 2 weeks)",
      description: "Rapid development cycles with continuous feedback, delivering production-ready solutions with enterprise-grade quality and performance.",
      features: ["Agile Sprints", "Quality Assurance", "Performance Testing", "Security Implementation"],
      gradient: "from-green-600 to-emerald-600",
      delay: "300ms"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Scale",
      subtitle: "Optimization, SEO, Automation & Growth",
      description: "Post-launch optimization, search engine dominance, marketing automation, and continuous growth support to maximize your ROI.",
      features: ["SEO Optimization", "Performance Tuning", "Growth Analytics", "Ongoing Support"],
      gradient: "from-orange-600 to-red-600",
      delay: "450ms"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-green-500 to-green-600 mr-4"></div>
            Our Proven Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Cardinal Acceleration Framework™
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to transforming your business with high-performance digital solutions
          </p>
        </div>

        {/* Framework Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: step.delay }}
            >
              {/* Connecting Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              )}

              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 h-full">
                {/* Icon & Number */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-5xl font-bold text-gray-100 group-hover:text-green-50 transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 pt-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 sm:p-12 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-green-50 mb-6 max-w-2xl mx-auto">
            Get your free project roadmap delivered in 24 hours. No obligation, just actionable insights.
          </p>
          <Link to="/strategy-call">
            <Button className="bg-white text-green-600 hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Get Your Free Project Roadmap
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardinalAccelerationFramework;
