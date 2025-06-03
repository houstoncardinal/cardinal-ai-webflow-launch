
import { Code, Smartphone, Globe, Server, Search, Palette, Share2, Brain, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Enterprise-grade web solutions built with cutting-edge technologies for optimal performance and scalability.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile solutions that deliver exceptional user experiences and drive business growth.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Complex web applications with enterprise architecture, robust functionality and intuitive user interfaces.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud hosting solutions with 99.9% uptime and enterprise-level support.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description: "Strategic search optimization and comprehensive analytics to maximize visibility and performance metrics.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Palette,
      title: "Brand Strategy",
      description: "Complete brand development from strategic positioning to comprehensive visual identity systems.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Share2,
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies that build engaged communities and drive measurable ROI.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Experience Optimization",
      description: "Pioneer AEO services optimizing content and experiences for next-generation AI systems and platforms.",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-gradient-to-tr from-cyan-50/30 to-transparent"></div>
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-50 text-blue-800 text-sm font-semibold px-6 py-3 rounded-full mb-8 border border-blue-200/50 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-5xl md:text-7xl font-thin text-slate-900 mb-8 tracking-tight leading-tight">
            Comprehensive Digital
            <span className="block font-light bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mt-2">
              Solutions Portfolio
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed">
            We deliver end-to-end digital transformation services that position your organization 
            for sustained growth in an increasingly connected world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-3xl transition-all duration-700 border-0 shadow-xl hover:-translate-y-3 bg-white/80 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="p-10 text-center relative z-10">
                <div className="mb-8 relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                  {service.description}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl">
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-16 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-light">
            Let's discuss how our comprehensive digital solutions can accelerate your growth and market position.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
            Start Your Journey
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
