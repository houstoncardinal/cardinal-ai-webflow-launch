import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Mail, Phone, User, Gift, ChevronDown, Code, Smartphone, Search, Palette, Cloud, BarChart, Target } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const serviceCategories = [
  {
    category: "Web Solutions",
    services: [
      {
        value: "custom-website",
        label: "Custom Website Development",
        description: "Professional, responsive websites built with modern technologies",
        icon: Code
      },
      {
        value: "ecommerce",
        label: "E-commerce Solutions",
        description: "Full-featured online stores with secure payment processing",
        icon: Code
      },
      {
        value: "web-application",
        label: "Web Applications",
        description: "Complex web apps with enterprise architecture",
        icon: Code
      }
    ]
  },
  {
    category: "Mobile & Apps",
    services: [
      {
        value: "ios-development",
        label: "iOS App Development",
        description: "Native iOS applications for iPhone and iPad",
        icon: Smartphone
      },
      {
        value: "android-development",
        label: "Android App Development",
        description: "Native Android applications for all devices",
        icon: Smartphone
      },
      {
        value: "cross-platform",
        label: "Cross-Platform Apps",
        description: "Hybrid apps that work on both iOS and Android",
        icon: Smartphone
      }
    ]
  },
  {
    category: "Digital Marketing",
    services: [
      {
        value: "seo-optimization",
        label: "SEO Optimization",
        description: "Improve your search engine rankings and visibility",
        icon: Search
      },
      {
        value: "social-media",
        label: "Social Media Marketing",
        description: "Strategic social media presence and campaigns",
        icon: BarChart
      },
      {
        value: "ppc-advertising",
        label: "PPC Advertising",
        description: "Targeted paid advertising campaigns",
        icon: Target
      }
    ]
  },
  {
    category: "Design & Branding",
    services: [
      {
        value: "brand-identity",
        label: "Brand Identity Design",
        description: "Complete brand development and visual identity",
        icon: Palette
      },
      {
        value: "ui-ux-design",
        label: "UI/UX Design",
        description: "User-centered interface and experience design",
        icon: Palette
      }
    ]
  },
  {
    category: "Infrastructure",
    services: [
      {
        value: "cloud-solutions",
        label: "Cloud Infrastructure",
        description: "Scalable, secure cloud hosting solutions",
        icon: Cloud
      },
      {
        value: "devops",
        label: "DevOps Services",
        description: "Streamlined development and deployment processes",
        icon: Cloud
      }
    ]
  },
  {
    category: "Other Services",
    services: [
      {
        value: "consulting",
        label: "Digital Consulting",
        description: "Strategic technology and digital transformation advice",
        icon: Target
      },
      {
        value: "custom-solution",
        label: "Custom Solution",
        description: "Multiple or specialized services not listed above",
        icon: Gift
      }
    ]
  }
];

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('project_evaluations')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          service: formData.service as any
        });

      if (error) throw error;

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
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-green-50/50 via-white to-gray-50/30">
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
            
            <div className="p-6 lg:p-8">
              {/* Header */}
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 leading-relaxed mb-3">
                  Evaluate Your Project for Free
                </h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                  Get expert insights on your digital transformation opportunities - completely free, no strings attached
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4" name="contact-form" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact-form" />
                <input type="hidden" name="bot-field" style={{ display: 'none' }} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {/* Name Input */}
                  <div className="relative group/input sm:col-span-2 lg:col-span-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                      <Input 
                        type="text" 
                        name="name" 
                        placeholder="Full Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="pl-10 h-12 bg-white/50 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400" 
                        required 
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative group/input sm:col-span-2 lg:col-span-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                      <Input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="pl-10 h-12 bg-white/50 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400" 
                        required 
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="relative group/input sm:col-span-2 lg:col-span-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                      <Input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone Number" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="pl-10 h-12 bg-white/50 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400" 
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </div>

                  {/* Service Selection Dropdown */}
                  <div className="relative group/input sm:col-span-2 lg:col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                    <div className="relative">
                      <Select onValueChange={handleServiceChange} value={formData.service} name="service">
                        <SelectTrigger className="h-12 bg-white/50 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md">
                          <SelectValue placeholder="Select Service(s)" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-lg shadow-xl z-50 max-h-[300px]">
                          {serviceCategories.map((category, idx) => (
                            <div key={idx}>
                              <div className="px-2 py-1.5 text-sm font-semibold text-gray-500 bg-gray-50/50">
                                {category.category}
                              </div>
                              {category.services.map(service => (
                                <SelectItem 
                                  key={service.value} 
                                  value={service.value} 
                                  className="flex items-start gap-2 py-2 hover:bg-green-50 focus:bg-green-50 cursor-pointer transition-colors duration-200"
                                >
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                      <service.icon className="w-4 h-4 text-green-600 flex-shrink-0" />
                                      <span className="font-medium">{service.label}</span>
                                    </div>
                                    <span className="text-xs text-gray-500 pl-6">{service.description}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </div>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="relative group/button sm:col-span-2 lg:col-span-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg opacity-0 group-hover/button:opacity-100 transition-all duration-300 blur-lg"></div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="relative w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover/button:scale-105 border-0"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {isSubmitting ? 'Submitting...' : 'Get Project Evaluation'}
                        <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </form>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-gray-200/50">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{
                    animationDelay: '0.5s'
                  }}></div>
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
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
  );
};

export default ContactForm;