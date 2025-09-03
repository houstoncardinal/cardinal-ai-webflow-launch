
import { BarChart3, CheckCircle, ArrowRight, Brain, Zap, Target, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const ExperienceOptimization = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms to analyze and optimize user experiences"
    },
    {
      icon: Zap,
      title: "Real-time Optimization",
      description: "Continuous optimization based on real-time user behavior data"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Highly targeted optimization for specific user segments"
    },
    {
      icon: TrendingUp,
      title: "Future-Ready AEO",
      description: "Pioneer AEO services for next-generation AI systems"
    }
  ];



  const services = [
    "AI Experience Analysis", "Behavioral Optimization", "Personalization Engine", "A/B Testing",
    "User Journey Mapping", "Conversion Optimization", "Performance Analytics", "AI Content Optimization"
  ];

  const technologies = [
    { name: "Machine Learning", icon: "🤖", description: "AI-powered insights" },
    { name: "Predictive Analytics", icon: "📊", description: "Future behavior modeling" },
    { name: "Real-time Processing", icon: "⚡", description: "Instant optimization" },
    { name: "Neural Networks", icon: "🧠", description: "Deep learning algorithms" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="🧠 AI Experience Optimization (AEO) | Future-Ready UX | Cardinal Consulting"
        description="🚀 Pioneer AEO services optimizing for next-generation AI systems. Transform user experiences with cutting-edge AI Experience Optimization that anticipates user needs and delivers personalized interactions."
        keywords="AI experience optimization, AEO, user experience optimization, AI-powered UX, behavioral optimization, personalization, machine learning UX"
        servicePage={true}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Experience Optimization", url: "/services/experience-optimization" }
        ]}
        serviceDetails={{
          name: "AI Experience Optimization (AEO)",
          description: "Pioneer AEO services optimizing for next-generation AI systems",
          priceRange: "$3,000 - $30,000",
          category: "AI & UX"
        }}
        url="/services/experience-optimization"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-violet-400 uppercase tracking-wide mb-8">
              <BarChart3 className="w-5 h-5 mr-3" />
              AI Experience Service
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Experience
              <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Optimization
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              Pioneer AEO services optimizing for next-generation AI systems. 
              Transform user experiences with cutting-edge AI Experience Optimization 
              that anticipates user needs and delivers personalized interactions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact?service=ai-optimization">
                <Button className="bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-violet-500/25">
                  Optimize Experience
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950 hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                  Learn About AEO
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
              AEO <span className="text-violet-600">Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the future of user experience with AI Experience Optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-violet-600 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="w-8 h-8 text-violet-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-violet-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              AI <span className="text-violet-600">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI technologies powering our AEO solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-violet-50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors duration-300">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
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
              AEO <span className="text-violet-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI Experience Optimization services for the future.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center hover:bg-violet-50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <h3 className="text-gray-900 font-semibold group-hover:text-violet-600 transition-colors duration-300">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-violet-600 to-purple-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready for AI-Powered Optimization?
          </h2>
          <p className="text-xl text-violet-100 mb-12 leading-relaxed">
            Let's optimize your user experience for the future of AI-driven interactions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-white/25">
                Start AEO Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Explore AEO
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExperienceOptimization;
