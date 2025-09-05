import { ArrowRight, ChevronDown, Star, ExternalLink, MessageCircle, Facebook, User, Mail, Phone, TrendingUp, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const HeroSlider = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  // Auto-slide every 8 seconds with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
        setIsTransitioning(false);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (newSlide: number) => {
    if (newSlide !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(newSlide);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'hero-project-evaluation');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service);

      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast({
          title: "Request submitted successfully! 🚀",
          description: "We'll get back to you within 2 hours with your project evaluation.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const slides = [
    {
      category: "Premier Digital Agency",
      headline: {
        first: "Web Design & Mobile Apps",
        second: "That Drive Global Success"
      },
      description: "Transform your business into a digital powerhouse with custom websites, mobile applications, and AI-powered solutions that deliver measurable ROI. Serving clients worldwide with 500+ successful projects completed.",
      cta: "Start Your Project",
      checkmarks: ["✓ No obligation", "✓ Free consultation", "✓ 100% custom"]
    },
    {
      category: "Client Success Story",
      headline: {
        first: "ABQ MRI Transformation",
        second: "300% Revenue Growth"
      },
      description: "See how we transformed ABQ MRI's digital presence, resulting in 300% revenue growth and 500% increase in online bookings through strategic web design, SEO optimization, and custom patient portal development.",
      cta: "View Case Study",
      checkmarks: ["✓ Real results", "✓ Proven success", "✓ Detailed case study"]
    },
    {
      category: "Digital Marketing Excellence",
      headline: {
        first: "AI-Powered SEO & Analytics",
        second: "That Dominate Search Results"
      },
      description: "Leverage cutting-edge AI technology to optimize your search rankings, track performance metrics, and drive qualified traffic. Our advanced SEO strategies and analytics deliver measurable growth and competitive advantage.",
      cta: "Boost Your Rankings",
      checkmarks: ["✓ AI-powered", "✓ Data-driven", "✓ Measurable results"]
    }
  ];
  return (
    <>
      <section className="min-h-[75vh] bg-white flex items-center relative overflow-hidden hero-mobile-padding pb-8 sm:pt-16 lg:pt-20 sm:pb-12">
        {/* Animated network background */}
        <div className="absolute inset-0">
          {/* Network grid */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#059669" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Animated connection lines */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              <g opacity="0.3">
                <line x1="100" y1="100" x2="300" y2="200" stroke="#059669" strokeWidth="1" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10;0" dur="3s" repeatCount="indefinite" />
                </line>
                <line x1="300" y1="200" x2="500" y2="150" stroke="#059669" strokeWidth="1" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10;0" dur="4s" repeatCount="indefinite" />
                </line>
                <line x1="500" y1="150" x2="700" y2="300" stroke="#059669" strokeWidth="1" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10;0" dur="5s" repeatCount="indefinite" />
                </line>
                <line x1="200" y1="400" x2="400" y2="350" stroke="#059669" strokeWidth="1" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10;0" dur="3.5s" repeatCount="indefinite" />
                </line>
                <line x1="400" y1="350" x2="600" y2="450" stroke="#059669" strokeWidth="1" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10;0" dur="4.5s" repeatCount="indefinite" />
                </line>
              </g>
              
              {/* Network nodes */}
              <g opacity="0.4">
                <circle cx="100" cy="100" r="3" fill="#059669">
                  <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="200" r="3" fill="#059669">
                  <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="500" cy="150" r="3" fill="#059669">
                  <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="700" cy="300" r="3" fill="#059669">
                  <animate attributeName="r" values="3;5;3" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="400" r="3" fill="#059669">
                  <animate attributeName="r" values="3;5;3" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="350" r="3" fill="#059669">
                  <animate attributeName="r" values="3;5;3" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="600" cy="450" r="3" fill="#059669">
                  <animate attributeName="r" values="3;5;3" dur="2.6s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </div>

          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-green-50 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-16 h-16 sm:w-32 sm:h-32 bg-green-100 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-gray-100 rounded-full opacity-15 animate-pulse" style={{
            animationDelay: '1s'
          }}></div>
          
          {/* Web-like pattern */}
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g transform="translate(100,100)">
                {/* Radiating lines */}
                {[...Array(8)].map((_, i) => <line key={i} x1="0" y1="0" x2={Math.cos(i * Math.PI / 4) * 80} y2={Math.sin(i * Math.PI / 4) * 80} stroke="#059669" strokeWidth="1" opacity="0.5">
                    <animate attributeName="stroke-width" values="1;2;1" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                  </line>)}
                {/* Concentric circles */}
                {[20, 40, 60, 80].map((radius, i) => <circle key={i} cx="0" cy="0" r={radius} fill="none" stroke="#059669" strokeWidth="1" opacity="0.3" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;10;0" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                  </circle>)}
              </g>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh]">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Animated category tag */}
              <div className={`inline-flex items-center text-xs sm:text-sm font-medium text-green-600 uppercase tracking-wide mb-1 sm:mb-2 animate-fade-in slide-transition ${isTransitioning ? 'slide-exit' : 'slide-enter'}`}>
                <div className="w-6 sm:w-8 lg:w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-2 sm:mr-3 lg:mr-4"></div>
                {slides[currentSlide].category}
              </div>
              
              {/* Main headline with staggered animation */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                <h1 className={`text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.15] tracking-tight slide-transition ${isTransitioning ? 'slide-exit' : 'slide-enter'}`}>
                  <span className="inline-block animate-fade-in my-0 py-0 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{slides[currentSlide].headline.first}</span>
                  <span className="block text-green-600 font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-slide-forward relative" style={{
                    animationDelay: '300ms'
                  }}>
                    <span className="text-green-600 relative">
                      {slides[currentSlide].headline.second}
                      <svg className="absolute -bottom-2 left-0 w-auto h-3 sm:h-4 animate-draw-underline max-w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
                        <path 
                          d="M0,10 Q25,5 50,10 T100,10" 
                          stroke="url(#underlineGradient)" 
                          strokeWidth="3" 
                          fill="none" 
                          strokeLinecap="round"
                          className="animate-draw-path"
                        />
                        <defs>
                          <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="50%" stopColor="#059669" />
                            <stop offset="100%" stopColor="#047857" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </span>
                </h1>
                
                <p className={`text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-2xl animate-fade-in relative z-10 slide-transition ${isTransitioning ? 'slide-exit' : 'slide-enter'}`} style={{
                  animationDelay: '500ms',
                  textShadow: '0 0 8px rgba(255, 255, 255, 1), 0 0 16px rgba(255, 255, 255, 0.9), 0 0 24px rgba(255, 255, 255, 0.7)'
                }}>
                  {slides[currentSlide].description}
                </p>
                
              </div>
              
              {/* CTA Section with hover animations */}
              <div className="flex justify-start pt-2 sm:pt-3 lg:pt-4">
                <Button 
                  onClick={() => {
                    if (currentSlide === 0) window.location.href = '/strategy-call';
                    else if (currentSlide === 1) window.location.href = '/portfolio/abqmri';
                    else window.location.href = '/services/seo-insights';
                  }} 
                  className={`bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold shadow-xl hover:shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto rounded-xl slide-transition ${isTransitioning ? 'slide-exit' : 'slide-enter'}`}
                >
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>
              
              <p className={`text-xs sm:text-sm text-gray-500 mt-4 sm:mt-5 lg:mt-6 text-center sm:text-left slide-transition ${isTransitioning ? 'slide-exit' : 'slide-enter'}`}>
                <span className="text-green-600">{slides[currentSlide].checkmarks[0]}</span> <span className="text-green-600">{slides[currentSlide].checkmarks[1]}</span> <span className="text-green-600">{slides[currentSlide].checkmarks[2]}</span>
              </p>

              {/* Animated stats */}
              <div className={`flex flex-wrap gap-4 sm:gap-6 lg:gap-12 pt-4 sm:pt-5 lg:pt-6 border-t border-gray-200 animate-fade-in slide-transition ${isTransitioning ? 'slide-exit' : 'slide-enter'}`} style={{
                animationDelay: '1000ms'
              }}>
                <div className="group cursor-pointer flex-1 min-w-[80px]">
                  <div className="text-sm sm:text-base lg:text-lg font-light text-gray-900 group-hover:text-green-600 transition-colors duration-300">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Global Projects</div>
                </div>
                <div className="group cursor-pointer flex-1 min-w-[80px]">
                  <div className="text-sm sm:text-base lg:text-lg font-light text-gray-900 group-hover:text-green-600 transition-colors duration-300">98%</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Client Satisfaction</div>
                </div>
                <div className="group cursor-pointer flex-1 min-w-[80px]">
                  <div className="text-sm sm:text-base lg:text-lg font-light text-gray-900 group-hover:text-green-600 transition-colors duration-300">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Global Support</div>
                </div>
              </div>
            </div>

            {/* Enhanced geometric element with animations - Hidden on mobile, visible on larger screens */}
            <div className="lg:col-span-5 hidden lg:flex justify-center items-center overflow-visible">
              <div className="relative w-full max-w-md overflow-visible">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl border border-gray-200 animate-pulse"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-600 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-900 rounded-full animate-pulse" style={{
                  animationDelay: '500ms'
                }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-green-200 rounded-full animate-spin" style={{
                  animationDuration: '20s'
                }}></div>
              </div>
            </div>
          </div>

          {/* Enhanced scroll indicator - Only visible on larger screens */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="flex flex-col items-center space-y-2">
              <ChevronDown className="w-6 h-6 text-gray-400 animate-pulse" />
              <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-green-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Evaluate Your Project for Free Form - Ultra High Z-Index */}
      <section className="relative mt-8 sm:mt-12 lg:mt-16 mb-20 sm:mb-24 lg:mb-32 z-[50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium Form Container with Enhanced Glow */}
          <div className="relative group">
            {/* Always Visible Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/30 via-green-500/40 to-green-600/30 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
            
            {/* Enhanced Hover Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-green-400/20 via-green-500/30 to-green-600/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            {/* Main form card with enhanced styling */}
            <div className="relative bg-white/95 backdrop-blur-2xl border border-green-200/50 rounded-2xl shadow-lg overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
              {/* Enhanced accent top border */}
              <div className="h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-400 to-green-500 opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Enhanced Header */}
                <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-900 leading-relaxed mb-3 sm:mb-4">
                    Evaluate Your Project for Free
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2">
                    Get expert insights on your digital transformation opportunities - completely free, no strings attached
                  </p>
                </div>

                {/* Enhanced Form */}
                <form onSubmit={handleFormSubmit} className="space-y-5" name="hero-project-evaluation" method="POST" action="/" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="hero-project-evaluation" />
                  <input type="hidden" name="bot-field" style={{ display: 'none' }} />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
                    {/* Enhanced Name Input */}
                    <div className="relative group/input sm:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-green-500/30 rounded-xl opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Full Name" 
                          className="w-full pl-12 h-12 sm:h-14 bg-white/70 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 shadow-lg hover:shadow-xl placeholder:text-gray-400 text-sm sm:text-base font-medium" 
                          required 
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                      </div>
                    </div>

                    {/* Enhanced Email Input */}
                    <div className="relative group/input sm:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-green-500/30 rounded-xl opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Email Address" 
                          className="w-full pl-12 h-12 sm:h-14 bg-white/70 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 shadow-lg hover:shadow-xl placeholder:text-gray-400 text-sm sm:text-base font-medium" 
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                      </div>
                    </div>

                    {/* Enhanced Phone Input */}
                    <div className="relative group/input sm:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-green-500/30 rounded-xl opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                        <input 
                          type="tel" 
                          name="phone" 
                          placeholder="Phone Number" 
                          className="w-full pl-12 h-12 sm:h-14 bg-white/70 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 shadow-lg hover:shadow-xl placeholder:text-gray-400 text-sm sm:text-base font-medium" 
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                      </div>
                    </div>

                    {/* Enhanced Service Selection Dropdown */}
                    <div className="relative group/input sm:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-green-500/30 rounded-xl opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                      <div className="relative">
                        <select 
                          name="service" 
                          className="w-full pl-12 h-12 sm:h-14 bg-white/70 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base font-medium appearance-none" 
                          value={formData.service}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Service</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="SEO Optimization">SEO Optimization</option>
                          <option value="Brand Identity">Brand Identity</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                      </div>
                    </div>

                    {/* Enhanced Submit Button */}
                    <div className="sm:col-span-2 lg:col-span-1">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-12 sm:h-14 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold shadow-xl hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl relative overflow-hidden group/btn"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            Submitting...
                          </div>
                        ) : (
                          <>
                            Get Free Evaluation
                            <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
