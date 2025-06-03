
import { Code, Smartphone, Globe, Server, Search, Palette, Share2, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Enterprise-grade web solutions built with cutting-edge technologies for optimal performance and scalability."
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile solutions that deliver exceptional user experiences and drive business growth."
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Complex web applications with enterprise architecture, robust functionality and intuitive user interfaces."
    },
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud hosting solutions with 99.9% uptime and enterprise-level support."
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description: "Strategic search optimization and comprehensive analytics to maximize visibility and performance metrics."
    },
    {
      icon: Palette,
      title: "Brand Strategy",
      description: "Complete brand development from strategic positioning to comprehensive visual identity systems."
    },
    {
      icon: Share2,
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies that build engaged communities and drive measurable ROI."
    },
    {
      icon: Brain,
      title: "AI Experience Optimization",
      description: "Pioneer AEO services optimizing content and experiences for next-generation AI systems and platforms."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Comprehensive Digital
            <span className="block font-normal text-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            We deliver end-to-end digital transformation services that position your organization 
            for sustained growth in an increasingly connected world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
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
