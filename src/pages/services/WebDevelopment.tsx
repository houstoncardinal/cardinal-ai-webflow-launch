import { Code, CheckCircle, ArrowRight, Globe, Database, Shield, Zap, Rocket, Users, Target, TrendingUp, Clock, Star, Award, ChevronRight, Play, Phone, Mail, MapPin, Sparkles, Zap as Lightning, Eye, Brain, Cpu, Server, Wifi, Lock, Globe as World, Smartphone, Monitor, Laptop, MessageSquare, BarChart3, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { useState, useEffect, useRef } from "react";

const WebDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: Rocket,
      title: "Lightning-Fast Performance",
      description: "Websites that load in under 2 seconds with 99.9% uptime guarantee",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SSL encryption, DDoS protection, and regular security audits",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces that convert visitors into customers",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "SEO Optimized",
      description: "Built for search engines to rank higher and drive organic traffic",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];
  
  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, target audience, and competitive landscape to create a winning strategy",
      icon: Target,
      duration: "1-2 weeks",
      deliverables: ["Market Analysis", "Technical Requirements", "Project Roadmap"]
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create stunning mockups and interactive prototypes that bring your vision to life",
      icon: Globe,
      duration: "2-3 weeks",
      deliverables: ["UI/UX Designs", "Interactive Prototypes", "Brand Guidelines"]
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Expert developers build your website with clean code, rigorous testing, and continuous optimization",
      icon: Code,
      duration: "4-6 weeks",
      deliverables: ["Responsive Website", "Performance Testing", "Security Audits"]
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "We launch your website and provide ongoing support, analytics, and performance optimization",
      icon: Rocket,
      duration: "Ongoing",
      deliverables: ["Live Website", "Analytics Setup", "Ongoing Support"]
    }
  ];
  
  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Framework" },
    { name: "TypeScript", icon: "📘", category: "Language" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "GraphQL", icon: "🔗", category: "API" },
    { name: "Vue.js", icon: "💚", category: "Frontend" },
    { name: "Laravel", icon: "🔥", category: "Backend" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Firebase", icon: "🔥", category: "Backend" }
  ];

  const advancedFeatures = [
    {
      icon: MessageSquare,
      title: "Live Chat Integration",
      description: "Real-time customer support with AI-powered chatbots and human agents",
      benefits: ["24/7 Customer Support", "AI Chatbot", "Lead Generation", "Customer Satisfaction"]
    },
    {
      icon: Brain,
      title: "AI-Powered SEO (AEO)",
      description: "Advanced SEO optimization using artificial intelligence for better rankings",
      benefits: ["Content Optimization", "Keyword Research", "Performance Tracking", "Competitive Analysis"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive tracking and reporting for data-driven decisions",
      benefits: ["User Behavior Tracking", "Conversion Funnels", "A/B Testing", "ROI Measurement"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store setup with payment processing and inventory management",
      benefits: ["Payment Gateways", "Inventory Management", "Order Processing", "Customer Accounts"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with GDPR, HIPAA, and SOC2 compliance",
      benefits: ["SSL Encryption", "Data Protection", "Regular Audits", "Backup Systems"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds with CDN and caching strategies",
      benefits: ["CDN Integration", "Caching", "Image Optimization", "Code Minification"]
    }
  ];

  const seoFeatures = [
    {
      title: "Technical SEO",
      features: ["Schema Markup", "XML Sitemaps", "Robots.txt", "Core Web Vitals", "Mobile Optimization"]
    },
    {
      title: "Content SEO",
      features: ["Keyword Research", "Content Strategy", "Meta Tags", "Internal Linking", "Blog Integration"]
    },
    {
      title: "Local SEO",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Keywords", "Map Optimization"]
    },
    {
      title: "E-commerce SEO",
      features: ["Product Schema", "Category Pages", "Filter Optimization", "Review Integration", "Shopping Feeds"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Houston Medical Group",
      content: "Cardinal transformed our online presence. Our patient bookings increased by 300% in just 3 months!",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Mike Chen",
      company: "Texas Energy Solutions",
      content: "The team delivered our e-commerce platform ahead of schedule. Sales are up 150% year-over-year.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Rodriguez",
      company: "Houston Real Estate Partners",
      content: "Professional, responsive, and results-driven. Our website now generates 50+ qualified leads monthly.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  const pricing = [
    {
      name: "Starter Website",
      price: "$2,500",
      duration: "2-3 weeks",
      features: [
        "5-10 Pages",
        "Mobile Responsive",
        "Contact Forms",
        "SEO Optimization",
        "Google Analytics",
        "1 Month Support"
      ],
      popular: false
    },
    {
      name: "Business Website",
      price: "$5,000",
      duration: "4-5 weeks",
      features: [
        "10-20 Pages",
        "E-commerce Integration",
        "Blog System",
        "Advanced SEO",
        "Performance Optimization",
        "3 Months Support"
      ],
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "$15,000+",
      duration: "6-8 weeks",
      features: [
        "Unlimited Pages",
        "Custom Features",
        "API Integration",
        "Advanced Analytics",
        "Priority Support",
        "1 Year Support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="🚀 Houston Web Development & Design Services | #1 Custom Websites | Cardinal Consulting"
        description="🔥 Houston's #1 web development agency! Custom websites, e-commerce platforms & web applications that drive RESULTS. 500+ projects completed. AI-powered SEO, live chat, analytics & more. FREE consultation & quote! Serving Houston, TX & surrounding areas."
        keywords="Houston web development, Houston website design, custom websites Houston, Houston web developer, Houston e-commerce development, Houston responsive web design, web development Houston TX, Houston website builder, Houston web design company, Houston web development services, Houston custom website design, Houston e-commerce website, Houston SEO services, Houston digital marketing, Houston web agency, Houston website development, Houston web design agency, Houston web development company, Houston website designer, Houston web development firm"
        servicePage={true}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Web Development", url: "/services/web-development" }
        ]}
        serviceDetails={{
          name: "Web Development Services",
          description: "Custom website development, e-commerce platforms, and responsive web design services for Houston businesses with AI-powered SEO, live chat integration, and advanced analytics",
          priceRange: "$2,500 - $25,000",
          category: "Web Development"
        }}
        url="/services/web-development"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden min-h-screen">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0">
          {/* Parallax Background */}
          <div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          ></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/15 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-green-500/15 rounded-full blur-2xl animate-pulse delay-1500"></div>
          
          {/* Mouse-following gradient */}
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              opacity: isHovering ? 0.3 : 0.1
            }}
          ></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
                 style={{
                   transform: `translateY(${scrollY * 0.2}px)`
                 }}
            ></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center text-sm font-medium text-blue-400 uppercase tracking-wide mb-8 animate-fade-in-up">
                <Sparkles className="w-5 h-5 mr-3 animate-pulse" />
                Houston Web Development Service
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Build Your
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  Digital Empire
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Transform your Houston business with cutting-edge web solutions that drive results. 
                From stunning designs to powerful functionality, we build websites that convert visitors into customers.
              </p>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div className="text-center group animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="animate-count-up" data-target="500">0</span>+
                  </div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center group animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                  <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="animate-count-up" data-target="98">0</span>%
                  </div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center group animate-fade-in-up" style={{animationDelay: '1s'}}>
                  <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="animate-count-up" data-target="72">0</span>hrs
                  </div>
                  <div className="text-sm text-gray-400">Fastest Delivery</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact?service=custom-website">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-blue-500/25">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950 hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Advanced Hero Visual */}
            <div className="relative group" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              {/* 3D Container */}
              <div 
                className="relative bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-y-2"
                style={{
                  transform: `perspective(1000px) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl"></div>
                <div className="relative z-10">
                  {/* Browser Window */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 animate-float">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                      </div>
                      <div className="text-white/70 text-sm font-mono">cardinalhtx.com</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-white/20 rounded animate-pulse"></div>
                      <div className="h-4 bg-white/20 rounded w-3/4 animate-pulse delay-100"></div>
                      <div className="h-4 bg-white/20 rounded w-1/2 animate-pulse delay-200"></div>
                    </div>
                  </div>
                  
                  {/* Code Blocks */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 animate-slide-in-right">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg mb-2 animate-pulse"></div>
                      <div className="h-3 bg-white/20 rounded w-full mb-2"></div>
                      <div className="h-2 bg-white/20 rounded w-2/3"></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 animate-slide-in-left">
                      <div className="w-8 h-8 bg-cyan-500 rounded-lg mb-2 animate-pulse delay-100"></div>
                      <div className="h-3 bg-white/20 rounded w-full mb-2"></div>
                      <div className="h-2 bg-white/20 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Advanced Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-float delay-500 shadow-lg">
                <Lightning className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-1/2 -left-6 w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center animate-float delay-1000 shadow-lg">
                <Brain className="w-5 h-5 text-white" />
              </div>
              
              {/* Particle Effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute top-1/4 right-0 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-1/4 left-0 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-600"></div>
                <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping delay-900"></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
              <Award className="w-4 h-4 mr-2" />
              Why Choose Cardinal
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              We Don't Just Build Websites,
              <span className="block text-blue-600">We Build Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every website we create is designed to convert visitors into customers and drive measurable business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center relative">
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 group-hover:shadow-2xl relative`}>
                      <feature.icon className={`w-10 h-10 ${feature.iconColor} group-hover:scale-110 group-hover:rotate-12 transition-all duration-700`} />
                      {/* Sparkle effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-pulse" />
                        <Sparkles className="absolute -bottom-2 -left-2 w-3 h-3 text-blue-400 animate-pulse delay-200" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                  </div>
                  
                  {/* Advanced hover effects */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Our Proven Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              From Concept to
              <span className="block text-blue-600">Launch in 4 Steps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative group">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-blue-200 to-gray-200 z-0 group-hover:from-blue-400 group-hover:to-blue-200 transition-all duration-500"></div>
                )}
                
                <div className={`relative bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-700 z-10 group-hover:border-blue-200 group-hover:-translate-y-4 group-hover:rotate-1 ${activeStep === index ? 'ring-2 ring-blue-500 ring-opacity-50 scale-105' : ''}`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg relative overflow-hidden">
                    <item.icon className="w-8 h-8 relative z-10" />
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    {/* Sparkle effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 animate-pulse" />
                      <Sparkles className="absolute -bottom-1 -left-1 w-2 h-2 text-white animate-pulse delay-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  
                  {/* Duration */}
                  <div className="flex items-center text-sm text-blue-600 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    {item.duration}
                  </div>
                  
                  {/* Deliverables */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700">Deliverables:</h4>
                    <ul className="space-y-1">
                      {item.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
              <Code className="w-4 h-4 mr-2" />
              Cutting-Edge Technologies
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Built with Modern
              <span className="block text-blue-600">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use the latest technologies to ensure your website is fast, secure, and future-proof.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm px-6 py-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-105 hover:rotate-2 transition-all duration-700 group text-center relative overflow-hidden animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{tech.name}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{tech.category}</p>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Advanced Features
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Powerful Features That
              <span className="block text-blue-600">Drive Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond basic web development, we integrate advanced features that transform your website into a powerful business tool.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 relative">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                    
                    {/* Benefits */}
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Advanced hover effects */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered SEO Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center text-sm font-medium text-indigo-600 uppercase tracking-wide mb-4">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered SEO
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Advanced SEO That
                <span className="block text-indigo-600">Ranks & Converts</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our AI-powered SEO (AEO) system continuously optimizes your website for search engines, 
                driving organic traffic and increasing conversions through intelligent content and technical optimization.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {seoFeatures.map((category, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:border-indigo-300 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
                    <div className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/contact?service=seo">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-indigo-500/25">
                  Get SEO Analysis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative group">
              {/* SEO Dashboard Mockup */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-2xl relative overflow-hidden group-hover:shadow-3xl transition-all duration-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">SEO Performance Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                
                {/* SEO Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl">
                    <div className="text-2xl font-bold">#1</div>
                    <div className="text-sm">Google Ranking</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl">
                    <div className="text-2xl font-bold">+300%</div>
                    <div className="text-sm">Organic Traffic</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl">
                    <div className="text-2xl font-bold">95</div>
                    <div className="text-sm">PageSpeed Score</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl">
                    <div className="text-2xl font-bold">+150%</div>
                    <div className="text-sm">Conversions</div>
                  </div>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Technical SEO</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full animate-pulse" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Content Quality</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-pulse" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>User Experience</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm font-medium text-blue-400 uppercase tracking-wide mb-4">
              <Play className="w-4 h-4 mr-2" />
              See Our Work In Action
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Watch Your Vision
              <span className="block text-blue-400">Come to Life</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our web development process through this real project showcase.
            </p>
          </div>
          
          <div className="flex justify-center">
            {/* MacBook Pro Mockup */}
            <div className="relative group animate-macbook-float">
              {/* MacBook Body */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl transform perspective-1000 group-hover:rotate-y-12 transition-all duration-1000 animate-screen-glow">
                {/* Screen Bezel */}
                <div className="bg-black rounded-2xl p-3 shadow-inner">
                  {/* Screen */}
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                    {/* Video Container */}
                    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-cyan-50 animate-video-pulse">
                      <video 
                        className="w-full h-full object-cover rounded-xl"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        poster="/placeholder.svg"
                      >
                        <source src="/epssite.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Video Overlay Effects */}
                      <div className="absolute inset-0 video-overlay pointer-events-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                      
                      {/* Screen Reflection */}
                      <div className="absolute inset-0 screen-reflection pointer-events-none"></div>
                      
                      {/* Browser UI */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                        </div>
                        <div className="text-white/70 text-sm font-mono bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">epssite.com</div>
                      </div>
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      
                      {/* Video Progress Bar */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-full bg-black/30 backdrop-blur-sm rounded-full h-1">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1 rounded-full animate-pulse" style={{width: '45%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* MacBook Base */}
                <div className="mt-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl p-2">
                  <div className="w-32 h-1 bg-gray-600 rounded-full mx-auto"></div>
                </div>
                
                {/* MacBook Hinge */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-float delay-500 shadow-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-1/2 -left-6 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-float delay-1000 shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
            </div>
          </div>
          
          {/* Project Details */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-400">Completed in just 3 weeks</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
              <p className="text-gray-400">98/100 PageSpeed Score</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">User Experience</h3>
              <p className="text-gray-400">Mobile-first responsive design</p>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce & Analytics Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-4">
              <ShoppingCart className="w-4 h-4 mr-2" />
              E-commerce & Analytics
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Complete Business
              <span className="block text-green-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From online stores to advanced analytics, we provide everything you need to run a successful digital business.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* E-commerce Features */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                      <ShoppingCart className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">E-commerce Platform</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Complete online store setup with payment processing, inventory management, and customer accounts.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Payment Gateways
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Inventory Management
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Order Processing
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Customer Accounts
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-3xl border border-blue-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-700">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Advanced Analytics</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive tracking and reporting for data-driven decisions and business growth.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      User Behavior
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      Conversion Funnels
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      A/B Testing
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                      ROI Measurement
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Analytics Dashboard Mockup */}
            <div className="relative group">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-2xl relative overflow-hidden group-hover:shadow-3xl transition-all duration-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Business Analytics Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                
                {/* Sales Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl">
                    <div className="text-2xl font-bold">$45.2K</div>
                    <div className="text-sm">Monthly Sales</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl">
                    <div className="text-2xl font-bold">1,247</div>
                    <div className="text-sm">Orders</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl">
                    <div className="text-2xl font-bold">+23%</div>
                    <div className="text-sm">Growth</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl">
                    <div className="text-2xl font-bold">4.8★</div>
                    <div className="text-sm">Rating</div>
                  </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <div className="text-gray-500 text-sm">Interactive Sales Chart</div>
                  </div>
                  <div className="h-24 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                    <div className="text-gray-500 text-sm">Customer Analytics</div>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">98%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">2.1s</div>
                    <div className="text-xs text-gray-600">Load Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">15K</div>
                    <div className="text-xs text-gray-600">Visitors</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
              <Star className="w-4 h-4 mr-2" />
              Client Success Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              What Our Clients
              <span className="block text-blue-600">Say About Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
              <Award className="w-4 h-4 mr-2" />
              Transparent Pricing
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Choose Your
              <span className="block text-blue-600">Perfect Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no surprises. Choose the plan that fits your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-8">{plan.duration}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button className={`w-full py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white'}`}>
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-sm font-medium text-blue-400 uppercase tracking-wide mb-4">
              <Award className="w-4 h-4 mr-2" />
              Why Houston Chooses Cardinal
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              The Houston Web Development
              <span className="block text-blue-400">Company You Can Trust</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another web development company. We're your strategic partner in digital success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-700">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-700">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Local Houston Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Deep understanding of Houston's business landscape, local SEO, and market dynamics.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-700">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-700">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Fast Turnaround</h3>
              <p className="text-gray-300 leading-relaxed">
                Quick project delivery without compromising quality. Most projects completed in 2-4 weeks.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-700">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Bank-level security with SSL encryption, DDoS protection, and regular security audits.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-700">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-700">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Results-Driven</h3>
              <p className="text-gray-300 leading-relaxed">
                Every website we build is designed to increase conversions and drive measurable ROI.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-700">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-700">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Cutting-edge AI integration for SEO, analytics, and customer engagement automation.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-700">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-700">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">5-Star Service</h3>
              <p className="text-gray-300 leading-relaxed">
                Exceptional customer service with 98% client satisfaction rate and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                Ready to Build Your
                <span className="block text-blue-200">Digital Empire?</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join 500+ Houston businesses who've transformed their online presence with Cardinal Consulting. 
                Let's create something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-white/25">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative overflow-hidden group hover:bg-white/15 transition-all duration-700">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-6 group-hover:scale-105 transition-transform duration-700">Get Your Free Consultation</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-pulse" />
                    <span>Free website audit worth $2,500</span>
                  </div>
                  <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300 delay-100">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-pulse delay-100" />
                    <span>Custom project roadmap</span>
                  </div>
                  <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300 delay-200">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-pulse delay-200" />
                    <span>No-obligation quote</span>
                  </div>
                  <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300 delay-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 animate-pulse delay-300" />
                    <span>72-hour response guarantee</span>
                  </div>
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="mt-8 flex items-center justify-center space-x-4">
                <div className="flex items-center text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">(281) 901-7016</span>
                </div>
                <div className="flex items-center text-white">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">hello@cardinalhtx.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;