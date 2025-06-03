
import { Search, CheckCircle, ArrowRight, BarChart3, Target, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOAnalyzer from "@/components/SEOAnalyzer";
import { Link } from "react-router-dom";

const SEOInsights = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive data analysis and performance tracking"
    },
    {
      icon: Target,
      title: "Keyword Strategy",
      description: "Strategic keyword research and competitive analysis"
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "Continuous optimization for sustained growth"
    },
    {
      icon: Eye,
      title: "Visibility Enhancement",
      description: "Increase online visibility and search rankings"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-rose-900 via-pink-900 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-rose-400 uppercase tracking-wide mb-8">
              <Search className="w-5 h-5 mr-3" />
              Analytics Service
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              SEO &
              <span className="block bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              Strategic optimization and comprehensive analytics to maximize performance. 
              Drive organic growth with data-driven SEO strategies and actionable insights 
              that deliver measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Try Free SEO Analyzer
              </Button>
              <Link to="/#contact">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 rounded-lg font-medium">
                  Get Professional Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Analyzer Tool */}
      <section className="py-16 bg-gray-50">
        <SEOAnalyzer />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Professional SEO <span className="text-rose-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond our free analyzer, we provide comprehensive SEO services for businesses serious about growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-600 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-rose-600 group-hover:text-white transition-colors duration-300" />
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
      <section className="py-24 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-rose-100 mb-12 leading-relaxed">
            Get a professional SEO strategy that drives real results. Our experts will analyze your site and create a custom optimization plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Get Professional Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOInsights;
