import { Code, CheckCircle, ArrowRight, Globe, Database, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
const WebDevelopment = () => {
  const features = [{
    icon: Globe,
    title: "Modern Frameworks",
    description: "React, Next.js, Vue.js, and Angular for cutting-edge web applications"
  }, {
    icon: Database,
    title: "Full-Stack Solutions",
    description: "Complete backend integration with databases and API development"
  }, {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security measures and compliance standards"
  }, {
    icon: Zap,
    title: "Performance Optimized",
    description: "Lightning-fast loading times and optimized user experiences"
  }];
  const process = [{
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed technical roadmap"
  }, {
    step: "02",
    title: "Design & Architecture",
    description: "UI/UX design and technical architecture planning for scalability"
  }, {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with continuous testing and quality assurance"
  }, {
    step: "04",
    title: "Deployment & Support",
    description: "Production deployment with ongoing maintenance and optimization"
  }];
  const technologies = ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs"];
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-blue-400 uppercase tracking-wide mb-8">
              <Code className="w-5 h-5 mr-3" />
              Technology Service
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Web
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              Enterprise-grade web solutions built with cutting-edge technologies for optimal 
              performance, scalability, and user experience. From simple websites to complex 
              web applications, we deliver solutions that drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Start Your Project
              </Button>
              <Link to="/#contact">
                <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Why Choose Our <span className="text-blue-600">Web Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with strategic thinking to deliver web solutions 
              that exceed expectations and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our Development <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, timely delivery, and exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => <div key={index} className="relative">
                {index < process.length - 1 && <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-blue-200 to-gray-200 z-0"></div>}
                
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 z-10">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Technologies We <span className="text-blue-600">Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stay at the forefront of technology to deliver cutting-edge solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => <div key={index} className="bg-white px-6 py-3 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Transform Your Web Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Let's discuss how our web development expertise can help you achieve your business goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default WebDevelopment;