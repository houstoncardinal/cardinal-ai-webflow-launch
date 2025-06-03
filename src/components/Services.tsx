
import { Code, Smartphone, Globe, Server, Search, Palette, Share2, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth."
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Scalable web applications with robust functionality and seamless user interfaces."
    },
    {
      icon: Server,
      title: "Hosting Solutions",
      description: "Reliable, high-performance hosting infrastructure to keep your digital presence online 24/7."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Strategic search engine optimization to improve visibility and drive organic traffic."
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete branding solutions from logo design to comprehensive brand guidelines."
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engaging social media strategies that build communities and drive conversions."
    },
    {
      icon: Brain,
      title: "AI Experience Optimization",
      description: "Pioneer AEO services optimizing content for AI systems like ChatGPT and CoPilot."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Digital Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we provide end-to-end digital solutions 
            that transform your business and engage your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4">
                  <service.icon className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
