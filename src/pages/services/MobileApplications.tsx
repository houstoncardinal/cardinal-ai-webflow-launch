import { Smartphone, CheckCircle, ArrowRight, Monitor, Zap, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const MobileApplications = () => {
  const features = [{
    icon: Monitor,
    title: "Cross-Platform Development",
    description: "React Native and Flutter for iOS and Android from a single codebase"
  }, {
    icon: Zap,
    title: "Native Performance",
    description: "Optimized performance that feels native on every platform"
  }, {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces designed for exceptional user experiences"
  }, {
    icon: Globe,
    title: "Offline Capabilities",
    description: "Apps that work seamlessly even without internet connectivity"
  }];
  const platforms = [{
    name: "iOS",
    description: "Native Swift/SwiftUI development"
  }, {
    name: "Android",
    description: "Native Kotlin/Java development"
  }, {
    name: "React Native",
    description: "Cross-platform development"
  }, {
    name: "Flutter",
    description: "Google's UI toolkit"
  }];
  return <div className="min-h-screen bg-white">
      <SEO 
        title="Mobile App Development Services | Cardinal Consulting"
        description="Professional mobile app development for iOS and Android. Custom mobile applications, cross-platform solutions, and app maintenance services to grow your business."
        keywords="mobile app development, iOS development, Android development, cross-platform apps, custom mobile apps, business mobile applications"
        url="/services/mobile-applications"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-emerald-400 uppercase tracking-wide mb-8">
              <Smartphone className="w-5 h-5 mr-3" />
              Digital Service
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Mobile
              <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Applications
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              Native and cross-platform mobile solutions that deliver exceptional user experiences. 
              From concept to app store, we create mobile applications that engage users and 
              drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Start Your App
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
              Mobile App <span className="text-emerald-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create mobile applications that users love and businesses depend on.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Development <span className="text-emerald-600">Platforms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We master all major mobile development platforms and frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
            Let's create a mobile experience that your users will love and your business will benefit from.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Start Your App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950">
              View App Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default MobileApplications;