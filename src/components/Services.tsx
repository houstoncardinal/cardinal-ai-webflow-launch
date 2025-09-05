import { Code, Smartphone, Search, Palette, ShoppingCart, BarChart3, MessageCircle, Zap, Shield, Clock, TrendingUp, Brain, Network, Cpu, Globe, Users, Award, CheckCircle, XCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with cutting-edge technology and optimized for performance",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"],
      price: "Starting at $2,500",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences",
      features: ["iOS & Android", "Cross-Platform", "App Store Ready", "Push Notifications"],
      price: "Starting at $5,000",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "AI-powered SEO strategies and digital marketing campaigns that drive real results",
      features: ["AI-Powered SEO", "Local SEO", "PPC Campaigns", "Analytics"],
      price: "Starting at $1,500",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand identity packages that make your business stand out from the competition",
      features: ["Logo Design", "Brand Guidelines", "Business Cards", "Marketing Materials"],
      price: "Starting at $1,200",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Full-featured online stores with secure payment processing and inventory management",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics"],
      price: "Starting at $3,500",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive analytics and business intelligence solutions for data-driven decisions",
      features: ["Custom Dashboards", "Real-time Data", "Predictive Analytics", "Reports"],
      price: "Starting at $2,000",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "72 hours to 2 weeks vs 3-6 months",
      highlight: "10x Faster"
    },
    {
      icon: MessageCircle,
      title: "Instant Support",
      description: "Instant to 2 hours vs 24-48 hours",
      highlight: "24x Faster"
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge AI integration",
      highlight: "Future-Ready"
    },
    {
      icon: Shield,
      title: "98% Success Rate",
      description: "vs 85% industry average",
      highlight: "+13% Higher"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-blue-600 mr-4"></div>
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Digital Solutions That
              <span className="block text-blue-600 font-normal">Drive Business Growth</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From custom web development to AI-powered marketing, we deliver comprehensive digital solutions that transform businesses and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-6 sm:p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Price */}
                  <div className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                    {service.price}
                  </div>
                  
                  {/* CTA Button */}
                  <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold py-3 sm:py-4 rounded-xl transition-all duration-300 group-hover:scale-105`}>
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Cardinal Advantage - Simplified Mobile-Friendly Design */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center text-sm font-medium text-green-100 uppercase tracking-wide mb-3 sm:mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-white to-green-200 mr-4"></div>
              The Cardinal Advantage
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 sm:mb-4">
              Why Businesses Choose
              <span className="block text-green-200 font-normal">Cardinal Consulting</span>
            </h2>
            <p className="text-sm sm:text-base text-green-100 max-w-2xl mx-auto">
              We're not just another agency. We're your premier digital partner, combining cutting-edge AI technology with deep market expertise to deliver results that traditional agencies simply can't match.
            </p>
          </div>
          
          {/* Simplified Comparison - Mobile-First Design */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Mobile-First Comparison Cards */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="space-y-4 sm:space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                          <advantage.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                              {advantage.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {advantage.description}
                            </p>
                          </div>
                          
                          {/* Highlight Badge */}
                          <div className="flex-shrink-0">
                            <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1 text-xs sm:text-sm font-medium">
                              {advantage.highlight}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA Section */}
              <div className="mt-8 sm:mt-10 text-center">
                <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl">
                  Experience the Cardinal Difference
                  <Award className="ml-3 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our track record speaks for itself with measurable results and satisfied clients across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2 group-hover:text-green-400 transition-colors duration-300">500+</div>
              <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2 group-hover:text-green-400 transition-colors duration-300">98%</div>
              <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2 group-hover:text-green-400 transition-colors duration-300">24/7</div>
              <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wide">Global Support</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2 group-hover:text-green-400 transition-colors duration-300">50+</div>
              <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wide">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl">
              Get Free Consultation
              <MessageCircle className="ml-3 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 rounded-xl">
              View Our Portfolio
              <Star className="ml-3 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
