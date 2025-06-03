import { Zap, CheckCircle, ArrowRight, Cloud, Shield, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
const CloudSolutions = () => {
  const features = [{
    icon: Cloud,
    title: "Multi-Cloud Strategy",
    description: "AWS, Azure, and Google Cloud expertise for optimal performance"
  }, {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced security measures and compliance standards"
  }, {
    icon: Database,
    title: "Data Management",
    description: "Secure, scalable database solutions and backup strategies"
  }, {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Worldwide deployment with edge computing capabilities"
  }];
  const services = ["Cloud Migration", "Infrastructure as Code", "Container Orchestration", "Serverless Architecture", "DevOps Implementation", "Monitoring & Analytics", "Disaster Recovery", "Cost Optimization"];
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-amber-400 uppercase tracking-wide mb-8">
              <Zap className="w-5 h-5 mr-3" />
              Infrastructure Service
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Cloud
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              Scalable, secure cloud hosting solutions with enterprise-level support. 
              Transform your infrastructure with cloud-native architectures that deliver 
              reliability, performance, and cost efficiency at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Migrate to Cloud
              </Button>
              <Link to="/#contact">
                <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950">
                  Get Assessment
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
              Cloud <span className="text-amber-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions that scale with your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Cloud <span className="text-amber-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end cloud services to modernize your infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => <div key={index} className="bg-amber-50 p-6 rounded-2xl text-center hover:bg-amber-100 transition-colors duration-300">
                <h3 className="text-gray-900 font-semibold">{service}</h3>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-amber-100 mb-12 leading-relaxed">
            Let's modernize your infrastructure with scalable, secure cloud solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Start Migration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950">
              Cloud Assessment
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default CloudSolutions;