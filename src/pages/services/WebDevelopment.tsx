import { Code, CheckCircle, ArrowRight, Globe, Database, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const WebDevelopment = () => {
  const features = [{
    icon: Globe,
    title: "Houston-Focused Design",
    description: "Custom websites designed specifically for Houston businesses and local market preferences"
  }, {
    icon: Database,
    title: "Full-Stack Solutions",
    description: "Complete backend integration with databases and API development for Houston businesses"
  }, {
    icon: Shield,
    title: "Enterprise Security",
    description: "Enterprise-grade security measures and compliance standards for Houston companies"
  }, {
    icon: Zap,
    title: "Performance Optimized",
    description: "Lightning-fast loading times and optimized user experiences for Houston customers"
  }];
  
  const process = [{
    step: "01",
    title: "Houston Market Analysis",
    description: "We analyze your Houston business requirements and create a detailed technical roadmap"
  }, {
    step: "02",
    title: "Local Design & Architecture",
    description: "UI/UX design and technical architecture planning tailored for Houston market scalability"
  }, {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with continuous testing and quality assurance from our Houston team"
  }, {
    step: "04",
    title: "Deployment & Local Support",
    description: "Production deployment with ongoing maintenance and optimization from Houston"
  }];
  
  const technologies = ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs"];
  

  
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="🚀 Houston Web Development Services | #1 Custom Websites | Cardinal Consulting"
        description="🔥 Houston's premier web development agency! Custom websites, e-commerce platforms & web applications that drive RESULTS. 500+ projects completed. FREE consultation & quote!"
        keywords="Houston web development, Houston website design, custom websites Houston, Houston web developer, Houston e-commerce development, Houston responsive web design, web development Houston TX, Houston website builder"
        servicePage={true}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Web Development", url: "/services/web-development" }
        ]}
        serviceDetails={{
          name: "Web Development Services",
          description: "Custom website development, e-commerce platforms, and responsive web design services for Houston businesses",
          priceRange: "$2,500 - $25,000",
          category: "Web Development"
        }}
        url="/services/web-development"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-blue-400 uppercase tracking-wide mb-8">
              <Code className="w-5 h-5 mr-3" />
              Houston Web Development Service
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Houston
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Web Development
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              Enterprise-grade web solutions built with cutting-edge technologies for optimal 
              performance, scalability, and user experience. From simple websites to complex 
              web applications, we deliver solutions that help Houston businesses dominate their market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact?service=custom-website">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-blue-500/25">
                  Start Your Houston Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950 hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                  Get Houston Quote
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
              Why Choose Our <span className="text-blue-600">Houston Web Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with deep Houston market knowledge to deliver web solutions 
              that exceed expectations and drive measurable results for local businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
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
              Our Houston Development <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, timely delivery, and exceptional results for Houston businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative group">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-blue-200 to-gray-200 z-0 group-hover:from-blue-400 group-hover:to-blue-200 transition-all duration-300"></div>
                )}
                
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 z-10 group-hover:border-blue-200 group-hover:-translate-y-2">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-all duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Technologies We <span className="text-blue-600">Master in Houston</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stay at the forefront of technology to deliver cutting-edge solutions for Houston businesses.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-105 transition-all duration-300 group">
                <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Houston Local Focus Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Houston Web Development <span className="text-blue-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand Houston's unique business landscape and deliver web solutions that drive local success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Local Market Expertise</h4>
              <p className="text-gray-600 text-sm">Deep understanding of Houston's business landscape and customer preferences</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">24/7 Houston Support</h4>
              <p className="text-gray-600 text-sm">Round-the-clock support from our Houston-based development team</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Proven Houston Results</h4>
              <p className="text-gray-600 text-sm">Track record of success with 500+ Houston businesses and 98% client satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Transform Your Houston Web Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Let's discuss how our Houston web development expertise can help you achieve your business goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-white/25">
                Start Your Houston Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                View Houston Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;