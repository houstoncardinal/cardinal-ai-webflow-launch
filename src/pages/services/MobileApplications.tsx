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
    description: "Native Swift/SwiftUI development",
    icon: "🍎"
  }, {
    name: "Android",
    description: "Native Kotlin/Java development",
    icon: "🤖"
  }, {
    name: "React Native",
    description: "Cross-platform development",
    icon: "⚛️"
  }, {
    name: "Flutter",
    description: "Google's UI toolkit",
    icon: "🎯"
  }];
  

  
  const appTypes = [
    "E-commerce Apps", "Social Media Apps", "Business Apps", "Educational Apps",
    "Healthcare Apps", "Entertainment Apps", "Productivity Apps", "Gaming Apps"
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="📱 Mobile App Development Services | iOS & Android Apps | Cardinal Consulting"
        description="🚀 Professional mobile app development for iOS and Android. Custom mobile applications, cross-platform solutions, and app maintenance services to grow your business."
        keywords="mobile app development, iOS development, Android development, cross-platform apps, custom mobile apps, business mobile applications, React Native, Flutter"
        servicePage={true}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Mobile Applications", url: "/services/mobile-applications" }
        ]}
        serviceDetails={{
          name: "Mobile Application Development",
          description: "Native and cross-platform mobile app development for iOS and Android platforms",
          priceRange: "$5,000 - $50,000",
          category: "Mobile Development"
        }}
        url="/services/mobile-applications"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-emerald-400 uppercase tracking-wide mb-8">
              <Smartphone className="w-5 h-5 mr-3" />
              Mobile Development Service
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
              <Link to="/contact?service=cross-platform">
                <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-emerald-500/25">
                  Start Your App
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950 hover:bg-slate-100 transition-all duration-300 hover:scale-105">
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
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-600 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            {platforms.map((platform, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-emerald-50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              App <span className="text-emerald-600">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We develop apps across all major categories and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {appTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center hover:bg-emerald-50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <h3 className="text-gray-900 font-semibold group-hover:text-emerald-600 transition-colors duration-300">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-green-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
            Let's create a mobile experience that your users will love and your business will benefit from.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-white/25">
                Start Your App
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                View App Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileApplications;