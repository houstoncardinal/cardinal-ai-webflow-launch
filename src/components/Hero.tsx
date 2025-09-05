
import { ArrowRight, ChevronDown, Star, ExternalLink, MessageCircle, Facebook, User, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

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
      console.error('Error submitting form:', error);
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section className="min-h-[75vh] bg-white flex items-center relative overflow-hidden pt-4 pb-8 sm:pt-16 lg:pt-20 sm:pb-12">
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
                                        <div className="inline-flex items-center text-xs sm:text-sm font-medium text-green-600 uppercase tracking-wide mb-1 sm:mb-2 animate-fade-in pt-4 sm:pt-0">
                     <div className="w-6 sm:w-8 lg:w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-2 sm:mr-3 lg:mr-4"></div>
                     Premier Digital Agency
                   </div>
                   
                   {/* Main headline with staggered animation */}
                   <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                                     <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.15] tracking-tight">
                  <span className="inline-block animate-fade-in my-0 py-0 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Custom Websites & Mobile Apps</span>
                  <span className="block lg:inline text-green-600 font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-slide-forward relative" style={{
                    animationDelay: '300ms'
                  }}>
                    <span className="text-gray-900">That</span>                     <span className="text-green-600 relative">
                      Drive Business Growth
                      <svg className="absolute -bottom-2 left-0 w-full h-4 animate-draw-underline" viewBox="0 0 100 20" preserveAspectRatio="none">
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
                     
                                     <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-2xl animate-fade-in relative z-10" style={{
                  animationDelay: '500ms',
                  textShadow: '0 0 8px rgba(255, 255, 255, 1), 0 0 16px rgba(255, 255, 255, 0.9), 0 0 24px rgba(255, 255, 255, 0.7)'
                }}>
                  Transform your business into a digital powerhouse with custom websites, mobile apps, and AI-powered marketing that drives measurable ROI. 500+ successful projects completed.
                </p>
                
                                     
              </div>
              
                                               {/* CTA Section with hover animations */}
              <div className="flex justify-start pt-2 sm:pt-3 lg:pt-4">
                <Button 
                  onClick={() => window.location.href = '/strategy-call'} 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto rounded-xl"
                >
                  Book Free Strategy Call
                  <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>
                     
                                 <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-5 lg:mt-6 text-center sm:text-left">
                <span className="text-green-600">✓</span> No obligation <span className="text-green-600">✓</span> No purchase necessary <span className="text-green-600">✓</span> 100% free
              </p>

                                 {/* Animated stats */}
                                 <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-12 pt-4 sm:pt-5 lg:pt-6 border-t border-gray-200 animate-fade-in" style={{
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
            <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md">
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
        </div>
      </section>

                 {/* Evaluate Your Project for Free Form */}
           <section className="-mt-16 sm:py-4 lg:py-2 relative overflow-hidden bg-gradient-to-br from-green-50/50 via-white to-gray-50/30">
        {/* Floating background elements */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-green-100 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-green-200 rounded-full opacity-30 blur-xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Premium Form Container */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-green-400/20 via-green-500/20 to-green-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            {/* Main form card */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-sm overflow-hidden">
              {/* Accent top border */}
              <div className="h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
              
                                 <div className="p-4 sm:p-6 lg:p-8">
                     {/* Header */}
                     <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                       <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-gray-900 leading-relaxed mb-2 sm:mb-3">
                         Evaluate Your Project for Free
                       </h3>
                       <p className="text-gray-600 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed px-2">
                         Get expert insights on your digital transformation opportunities - completely free, no strings attached
                       </p>
                     </div>

                                     {/* Form */}
                     <form onSubmit={handleFormSubmit} className="space-y-4" name="hero-project-evaluation" method="POST" action="/" data-netlify="true" data-netlify-honeypot="bot-field">
                       <input type="hidden" name="form-name" value="hero-project-evaluation" />
                       <input type="hidden" name="bot-field" style={{ display: 'none' }} />
                       
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                    {/* Name Input */}
                    <div className="relative group/input sm:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                                                     <input 
                               type="text" 
                               name="name" 
                               placeholder="Full Name" 
                               className="w-full pl-10 h-10 sm:h-12 bg-white/50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 text-sm sm:text-base" 
                               required 
                               value={formData.name}
                               onChange={handleInputChange}
                             />
                        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="relative group/input sm:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                                                     <input 
                               type="email" 
                               name="email" 
                               placeholder="Email Address" 
                               className="w-full pl-10 h-10 sm:h-12 bg-white/50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 text-sm sm:text-base" 
                               required 
                               value={formData.email}
                               onChange={handleInputChange}
                             />
                        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </div>
                    </div>

                    {/* Phone Input */}
                    <div className="relative group/input sm:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                                                     <input 
                               type="tel" 
                               name="phone" 
                               placeholder="Phone Number" 
                               className="w-full pl-10 h-10 sm:h-12 bg-white/50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400 text-sm sm:text-base" 
                               value={formData.phone}
                               onChange={handleInputChange}
                             />
                        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </div>
                    </div>

                    {/* Service Selection Dropdown */}
                    <div className="relative group/input sm:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                      <div className="relative">
                                                     <select 
                               name="service" 
                               className="w-full h-10 sm:h-12 bg-white/50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md pl-3 pr-10 text-sm sm:text-base"
                               value={formData.service}
                               onChange={handleInputChange}
                             >
                          <option value="">Select Service</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-applications">Mobile Applications</option>
                          <option value="seo-insights">SEO & Digital Marketing</option>
                          <option value="brand-identity">Brand Identity & Design</option>
                          <option value="cloud-solutions">Cloud Solutions</option>
                          <option value="digital-campaigns">Digital Campaigns</option>
                          <option value="experience-optimization">Experience Optimization</option>
                        </select>
                        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="relative group/button sm:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg opacity-0 group-hover/button:opacity-100 transition-all duration-300 blur-lg"></div>
                                                 <button 
                             type="submit" 
                             className="relative w-full h-10 sm:h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover/button:scale-105 border-0 text-sm sm:text-base"
                             disabled={isSubmitting}
                           >
                        <span className="flex items-center justify-center gap-2">
                          {isSubmitting ? 'Submitting...' : 'Get Project Evaluation'}
                          <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>

                                     {/* Trust indicators */}
                     <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200/50">
                       <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                         <span>100% Free</span>
                       </div>
                       <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{
                           animationDelay: '0.5s'
                         }}></div>
                         <span>No obligation</span>
                       </div>
                       <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{
                           animationDelay: '1s'
                         }}></div>
                         <span>Expert insights within 2 hours</span>
                       </div>
                     </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
