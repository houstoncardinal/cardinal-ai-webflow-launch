
import { Palette, CheckCircle, ArrowRight, Lightbulb, Eye, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const BrandIdentity = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Strategic Positioning",
      description: "Define your unique market position and competitive advantage"
    },
    {
      icon: Eye,
      title: "Visual Identity",
      description: "Compelling visual systems that communicate your brand essence"
    },
    {
      icon: Heart,
      title: "Emotional Connection",
      description: "Create meaningful connections with your target audience"
    },
    {
      icon: Target,
      title: "Brand Consistency",
      description: "Maintain consistent brand experience across all touchpoints"
    }
  ];



  const services = [
    "Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy",
    "Brand Messaging", "Color Palettes", "Typography", "Brand Collateral"
  ];

  const process = [
    {
      step: "01",
      title: "Brand Discovery",
      description: "Deep dive into your business, values, and target audience"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create comprehensive brand strategy and positioning"
    },
    {
      step: "03",
      title: "Visual Design",
      description: "Design compelling visual identity and brand elements"
    },
    {
      step: "04",
      title: "Brand Guidelines",
      description: "Complete brand guidelines for consistent implementation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="🎨 Brand Identity Design Services | Logo Design & Branding | Cardinal Consulting"
        description="✨ Complete brand development from positioning to visual identity systems. Create a powerful brand that resonates with your audience and drives business growth."
        keywords="brand identity, logo design, brand strategy, visual identity, brand guidelines, branding services, brand positioning, corporate identity"
        servicePage={true}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Brand Identity", url: "/services/brand-identity" }
        ]}
        serviceDetails={{
          name: "Brand Identity Design",
          description: "Complete brand development including strategy, visual identity, and brand guidelines",
          priceRange: "$2,000 - $15,000",
          category: "Brand Design"
        }}
        url="/services/brand-identity"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-indigo-400 uppercase tracking-wide mb-8">
              <Palette className="w-5 h-5 mr-3" />
              Brand Strategy Service
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Brand
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Identity
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              Complete brand development from positioning to visual identity systems. 
              Create a powerful brand that resonates with your audience and drives 
              business growth through strategic design and compelling storytelling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact?service=brand-identity">
                <Button className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-indigo-500/25">
                  Build Your Brand
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950 hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                  Get Consultation
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
              Brand <span className="text-indigo-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create a brand that stands out and connects deeply with your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-600 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our Brand <span className="text-indigo-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your brand resonates with your audience and drives business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative group">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-indigo-200 to-gray-200 z-0 group-hover:from-indigo-400 group-hover:to-indigo-200 transition-all duration-300"></div>
                )}
                
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 z-10 group-hover:border-indigo-200 group-hover:-translate-y-2">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-all duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Brand <span className="text-indigo-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive brand services to create a powerful and memorable identity.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center hover:bg-indigo-50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <h3 className="text-gray-900 font-semibold group-hover:text-indigo-600 transition-colors duration-300">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
            Let's create a brand identity that tells your story and drives meaningful connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-white/25">
                Start Branding
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                View Brand Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandIdentity;
