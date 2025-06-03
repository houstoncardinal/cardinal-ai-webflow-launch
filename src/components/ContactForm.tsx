
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Mail, Phone, User, Gift, ChevronDown, Code, Smartphone, Search, Palette, Cloud, BarChart } from 'lucide-react';

const serviceOptions = [
  { value: "web-development", label: "Web Development", icon: Code },
  { value: "mobile-apps", label: "Mobile Applications", icon: Smartphone },
  { value: "seo-optimization", label: "SEO & Digital Marketing", icon: Search },
  { value: "brand-identity", label: "Brand Identity & Design", icon: Palette },
  { value: "cloud-solutions", label: "Cloud Solutions", icon: Cloud },
  { value: "digital-campaigns", label: "Digital Campaigns", icon: BarChart },
  { value: "consultation", label: "General Consultation", icon: Gift },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
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
    <section className="py-8 lg:py-12 relative overflow-hidden -mt-20 lg:-mt-24 z-20">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-gray-50/30"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-green-100 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-green-200 rounded-full opacity-30 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Premium Form Container */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-3 bg-gradient-to-r from-green-400/20 via-green-500/20 to-green-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          {/* Main form card */}
          <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-lg overflow-hidden">
            {/* Accent top border */}
            <div className="h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
            
            <div className="p-6 lg:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Gift className="w-5 h-5 text-green-600" />
                  <h3 className="text-xl lg:text-2xl font-light text-gray-900 leading-relaxed">
                    Get Your Free Consultation
                  </h3>
                  <Gift className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
                  Start your digital transformation journey today - no cost, no commitment
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {/* Name Input */}
                  <div className="relative group/input">
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
                  <div className="relative group/input">
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
                  <div className="relative group/input">
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
                  <div className="relative group/input">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                    <div className="relative">
                      <Select onValueChange={handleServiceChange} value={formData.service}>
                        <SelectTrigger className="h-12 bg-white/50 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md">
                          <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-lg shadow-xl z-50">
                          {serviceOptions.map((service) => (
                            <SelectItem 
                              key={service.value} 
                              value={service.value}
                              className="flex items-center gap-2 hover:bg-green-50 focus:bg-green-50 cursor-pointer transition-colors duration-200"
                            >
                              <div className="flex items-center gap-2">
                                <service.icon className="w-4 h-4 text-green-600" />
                                <span>{service.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="relative group/button">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg opacity-0 group-hover/button:opacity-100 transition-all duration-300 blur-lg"></div>
                    <Button
                      type="submit"
                      className="relative w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover/button:scale-105 border-0"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get Free Consultation
                        <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </form>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-200/50">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span>Response within 2 hours</span>
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
