
import { Share2, CheckCircle, ArrowRight, Target, TrendingUp, Users, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const DigitalCampaigns = () => {
  const features = [
    {
      icon: Target,
      title: "Targeted Strategy",
      description: "Precision-targeted campaigns that reach your ideal audience"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Campaigns designed to drive measurable business growth"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Build engaged communities around your brand"
    },
    {
      icon: BarChart3,
      title: "Data-Driven ROI",
      description: "Comprehensive analytics and proven return on investment"
    }
  ];



  const services = [
    "Social Media Marketing", "PPC Advertising", "Content Marketing", "Email Campaigns",
    "Influencer Marketing", "Video Marketing", "SEO Campaigns", "Retargeting"
  ];

  const platforms = [
    { name: "Facebook", icon: "📘", description: "Social Media Marketing" },
    { name: "Google Ads", icon: "🔍", description: "PPC & Search Marketing" },
    { name: "Instagram", icon: "📷", description: "Visual Content Marketing" },
    { name: "LinkedIn", icon: "💼", description: "B2B Marketing" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="📈 Digital Marketing Campaigns | Social Media & PPC | Cardinal Consulting"
        description="🚀 Data-driven strategies that build communities and drive measurable ROI. Transform your marketing with comprehensive digital campaigns that engage audiences and deliver exceptional business results."
        keywords="digital marketing, social media marketing, PPC advertising, content marketing, email campaigns, influencer marketing, digital campaigns"
        servicePage={true}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Digital Campaigns", url: "/services/digital-campaigns" }
        ]}
        serviceDetails={{
          name: "Digital Marketing Campaigns",
          description: "Data-driven strategies that build communities and drive measurable ROI",
          priceRange: "$1,000 - $25,000",
          category: "Digital Marketing"
        }}
        url="/services/digital-campaigns"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-teal-400 uppercase tracking-wide mb-8">
              <Share2 className="w-5 h-5 mr-3" />
              Digital Marketing Service
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Digital
              <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Campaigns
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              Data-driven strategies that build communities and drive measurable ROI. 
              Transform your marketing with comprehensive digital campaigns that engage 
              audiences and deliver exceptional business results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact?service=social-media">
                <Button className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-teal-500/25">
                  Launch Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950 hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                  Get Strategy
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
              Campaign <span className="text-teal-600">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drive engagement and growth with strategic digital marketing campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-600 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">{feature.title}</h3>
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
              Marketing <span className="text-teal-600">Platforms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We master all major digital marketing platforms and channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-teal-50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
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
              Marketing <span className="text-teal-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing services to grow your business.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center hover:bg-teal-50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                <h3 className="text-gray-900 font-semibold group-hover:text-teal-600 transition-colors duration-300">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Launch Your Campaign?
          </h2>
          <p className="text-xl text-teal-100 mb-12 leading-relaxed">
            Let's create digital campaigns that build communities and drive measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-white/25">
                Start Campaign
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
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

export default DigitalCampaigns;
