
import { BarChart3, CheckCircle, ArrowRight, Brain, Zap, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-violet-400 uppercase tracking-wide mb-8">
              <BarChart3 className="w-5 h-5 mr-3" />
              AI Service
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
              <Button className="bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Optimize Experience
              </Button>
              <Link to="/#contact">
                <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950">
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
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-violet-600 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-violet-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready for AI-Powered Optimization?
          </h2>
          <p className="text-xl text-violet-100 mb-12 leading-relaxed">
            Let's optimize your user experience for the future of AI-driven interactions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Start AEO Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950">
              Explore AEO
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExperienceOptimization;
