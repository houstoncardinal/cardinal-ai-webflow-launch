
import { Code, Palette, Search, Cloud, Smartphone, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and technologies",
    features: ["React & Next.js", "TypeScript", "Node.js Backend", "Cloud Deployment"],
    color: "blue",
    href: "/services/web-development"
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile solutions for iOS and Android",
    features: ["React Native", "Flutter", "Native iOS/Android", "API Integration"],
    color: "purple",
    href: "/services/mobile-applications"
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete brand transformation with strategic design thinking",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Digital Assets"],
    color: "pink",
    href: "/services/brand-identity"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that boost your search rankings",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"],
    color: "green",
    href: "/services/seo-insights"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure with enterprise-level security",
    features: ["AWS/Azure/GCP", "DevOps", "Monitoring", "Security"],
    color: "amber",
    href: "/services/cloud-solutions"
  },
  {
    icon: BarChart3,
    title: "Digital Campaigns",
    description: "Performance marketing campaigns that drive measurable results",
    features: ["Paid Advertising", "Social Media", "Email Marketing", "Analytics"],
    color: "orange",
    href: "/services/digital-campaigns"
  }
];

const colorVariants = {
  blue: {
    bg: "bg-blue-50",
    icon: "bg-blue-500",
    text: "text-blue-600",
    border: "border-blue-200",
    hover: "hover:border-blue-300"
  },
  purple: {
    bg: "bg-purple-50",
    icon: "bg-purple-500",
    text: "text-purple-600",
    border: "border-purple-200",
    hover: "hover:border-purple-300"
  },
  pink: {
    bg: "bg-pink-50",
    icon: "bg-pink-500",
    text: "text-pink-600",
    border: "border-pink-200",
    hover: "hover:border-pink-300"
  },
  green: {
    bg: "bg-green-50",
    icon: "bg-green-500",
    text: "text-green-600",
    border: "border-green-200",
    hover: "hover:border-green-300"
  },
  amber: {
    bg: "bg-amber-50",
    icon: "bg-amber-500",
    text: "text-amber-600",
    border: "border-amber-200",
    hover: "hover:border-amber-300"
  },
  orange: {
    bg: "bg-orange-50",
    icon: "bg-orange-500",
    text: "text-orange-600",
    border: "border-orange-200",
    hover: "hover:border-orange-300"
  }
};

const ServiceHighlights = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
            <div className="w-8 h-px bg-gray-300 mr-4"></div>
            Our Expertise
            <div className="w-8 h-px bg-gray-300 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Comprehensive <span className="text-green-600 font-medium">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we deliver end-to-end digital solutions that transform businesses and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = colorVariants[service.color];
            return (
              <div
                key={index}
                className={`group relative bg-white p-8 rounded-2xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-lg animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className={`text-xl font-semibold ${colors.text} mb-3`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className={`w-1.5 h-1.5 ${colors.icon} rounded-full mr-3 flex-shrink-0`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link to={service.href}>
                    <Button 
                      variant="outline" 
                      className={`w-full ${colors.border} ${colors.text} hover:bg-opacity-10 transition-all duration-300 group-hover:scale-105`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
                
                {/* Background pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} rounded-full opacity-20 -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link to="/services">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
