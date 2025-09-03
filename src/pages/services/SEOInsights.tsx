import { Search, CheckCircle, ArrowRight, BarChart3, Target, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOAnalyzer from "@/components/SEOAnalyzer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const SEOInsights = () => {
  const features = [{
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive data analysis and performance tracking"
  }, {
    icon: Target,
    title: "Keyword Strategy",
    description: "Strategic keyword research and competitive analysis"
  }, {
    icon: TrendingUp,
    title: "Growth Optimization",
    description: "Continuous optimization for sustained growth"
  }, {
    icon: Eye,
    title: "Visibility Enhancement",
    description: "Increase online visibility and search rankings"
  }];
  

  
  const services = [
    "Technical SEO", "On-Page Optimization", "Content Strategy", "Link Building",
    "Local SEO", "E-commerce SEO", "Mobile Optimization", "Voice Search SEO"
  ];
  
  const tools = [
    { name: "Google Analytics", icon: "📊", description: "Performance tracking" },
    { name: "Search Console", icon: "🔍", description: "Search monitoring" },
    { name: "SEMrush", icon: "📈", description: "Competitive analysis" },
    { name: "Ahrefs", icon: "🔗", description: "Backlink analysis" }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="🔍 SEO & Analytics Services | Search Engine Optimization | Cardinal Consulting"
        description="🚀 Strategic optimization and comprehensive analytics to maximize performance. Drive organic growth with data-driven SEO strategies and actionable insights that deliver measurable results."
        keywords="SEO services, search engine optimization, SEO analytics, keyword research, technical SEO, on-page optimization, local SEO"
        servicePage={true}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "SEO & Insights", url: "/services/seo-insights" }
        ]}
        serviceDetails={{
          name: "SEO & Analytics Services",
          description: "Strategic optimization and comprehensive analytics to maximize performance",
          priceRange: "$1,500 - $15,000",
          category: "SEO & Analytics"
        }}
        url="/services/seo-insights"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-rose-900 via-pink-900 to-red-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-rose-400 uppercase tracking-wide mb-8">
              <Search className="w-5 h-5 mr-3" />
              SEO Analytics Service
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
              <Link to="/contact?service=seo-optimization">
                <Button className="bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-rose-500/25">
                  Try Free SEO Analyzer
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium text-slate-950 bg-slate-50 hover:bg-slate-100 transition-all duration-300 hover:scale-105">
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-600 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="w-8 h-8 text-rose-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              SEO <span className="text-rose-600">Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional SEO tools and platforms we use for comprehensive analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl hover:bg-rose-50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors duration-300">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              SEO <span className="text-rose-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive SEO services to improve your search rankings and drive organic traffic.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-rose-50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <h3 className="text-gray-900 font-semibold group-hover:text-rose-600 transition-colors duration-300">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-rose-600 to-pink-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-rose-100 mb-12 leading-relaxed">
            Get a professional SEO strategy that drives real results. Our experts will analyze your site and create a custom optimization plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-white/25">
                Get Professional Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOInsights;