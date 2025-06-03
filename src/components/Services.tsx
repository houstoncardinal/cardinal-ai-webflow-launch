
import { Code, Smartphone, Globe, Server, Search, Palette, Share2, Brain, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Technology",
      subtitle: "Web Development",
      description: "Enterprise-grade solutions built with cutting-edge technologies for optimal performance."
    },
    {
      icon: Smartphone,
      title: "Digital",
      subtitle: "Mobile Applications",
      description: "Native and cross-platform mobile solutions that deliver exceptional user experiences."
    },
    {
      icon: Globe,
      title: "Innovation",
      subtitle: "Web Applications",
      description: "Complex applications with enterprise architecture and intuitive user interfaces."
    },
    {
      icon: Server,
      title: "Infrastructure",
      subtitle: "Cloud Solutions",
      description: "Scalable, secure cloud hosting solutions with enterprise-level support."
    },
    {
      icon: Search,
      title: "Analytics",
      subtitle: "SEO & Insights",
      description: "Strategic optimization and comprehensive analytics to maximize performance."
    },
    {
      icon: Palette,
      title: "Strategy",
      subtitle: "Brand Identity",
      description: "Complete brand development from positioning to visual identity systems."
    },
    {
      icon: Share2,
      title: "Marketing",
      subtitle: "Digital Campaigns",
      description: "Data-driven strategies that build communities and drive measurable ROI."
    },
    {
      icon: Brain,
      title: "AI",
      subtitle: "Experience Optimization",
      description: "Pioneer AEO services optimizing for next-generation AI systems."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide mb-6">
            <div className="w-8 h-px bg-green-500 mr-4"></div>
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Comprehensive solutions
            <span className="block text-green-600 font-normal">
              for digital transformation
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            We deliver end-to-end digital solutions that position organizations 
            for sustained growth in an increasingly connected world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group border-gray-200 hover:border-green-500 transition-all duration-300 bg-white shadow-none hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <service.icon className="w-8 h-8 text-green-600 mb-4" />
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    {service.title}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {service.subtitle}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
                    Learn more
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            Ready to transform your business?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive digital solutions can accelerate your growth.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Get started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
