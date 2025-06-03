
import { Globe, CheckCircle, ArrowRight, Database, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const WebApplications = () => {
  const features = [
    {
      icon: Database,
      title: "Enterprise Architecture",
      description: "Scalable, robust architecture designed for enterprise-level demands"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Built-in security measures and compliance with industry standards"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed, efficiency, and seamless user experiences"
    },
    {
      icon: Users,
      title: "User-Focused Design",
      description: "Intuitive interfaces that prioritize user experience and accessibility"
    }
  ];

  const capabilities = [
    "Custom Web Portals",
    "Enterprise Dashboards", 
    "E-commerce Platforms",
    "Content Management Systems",
    "API Development",
    "Database Design",
    "Cloud Integration",
    "Real-time Applications"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-purple-400 uppercase tracking-wide mb-8">
              <Globe className="w-5 h-5 mr-3" />
              Innovation Service
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Web
              <span className="block bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Applications
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              Complex applications with enterprise architecture and intuitive user interfaces. 
              From custom portals to comprehensive platforms, we build web applications that 
              transform how businesses operate and engage with their customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Start Your Application
              </Button>
              <Link to="/#contact">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 rounded-lg font-medium">
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
              Application <span className="text-purple-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build sophisticated web applications that handle complex business logic with elegance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our <span className="text-purple-600">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple web apps to complex enterprise solutions, we deliver comprehensive functionality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-2xl text-center hover:bg-purple-100 transition-colors duration-300">
                <h3 className="text-gray-900 font-semibold">{capability}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-xl text-purple-100 mb-12 leading-relaxed">
            Let's create a powerful web application that drives your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium">
              View Applications
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebApplications;
