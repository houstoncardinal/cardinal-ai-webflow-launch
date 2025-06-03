
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Phone, User, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-gray-50/30"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-green-200 rounded-full opacity-30 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Premium Form Container */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 via-green-500/20 to-green-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          {/* Main form card */}
          <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden">
            {/* Accent top border */}
            <div className="h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
            
            <div className="p-8 lg:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-3 leading-relaxed">
                  Ready to transform your business?
                </h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                  Get a free consultation and discover how we can accelerate your digital growth
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Name Input */}
                  <div className="relative group/input">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-xl opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-xl"></div>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                      <Input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-12 h-14 bg-white/50 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-lg hover:shadow-xl placeholder:text-gray-400"
                        required
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative group/input">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-xl opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-xl"></div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-12 h-14 bg-white/50 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-lg hover:shadow-xl placeholder:text-gray-400"
                        required
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="relative group/input">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-xl opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-xl"></div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-12 h-14 bg-white/50 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-lg hover:shadow-xl placeholder:text-gray-400"
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="relative group/button">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl opacity-0 group-hover/button:opacity-100 transition-all duration-300 blur-xl"></div>
                    <Button
                      type="submit"
                      className="relative w-full h-14 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover/button:scale-105 border-0"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Message Input - Full Width */}
                <div className="relative group/input">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-xl opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-xl"></div>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300" />
                    <textarea
                      name="message"
                      placeholder="Tell us about your project (optional)"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-lg hover:shadow-xl placeholder:text-gray-400 resize-none"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>
              </form>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-gray-200/50">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span>Response within 24h</span>
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
