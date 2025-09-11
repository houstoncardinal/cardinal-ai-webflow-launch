import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, ArrowRight, CheckCircle, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";

const StrategyCall = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    projectDetails: '',
    preferredDate: '',
    preferredTime: '',
    budget: '',
    timeline: '',
    goals: ''
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'strategy-call-booking');
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key as keyof typeof formData]);
      });

      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast({
          title: "Strategy Call Booked Successfully! 🚀",
          description: "We'll send you a calendar invite within 2 hours. Get ready to transform your business!",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          projectDetails: '',
          preferredDate: '',
          preferredTime: '',
          budget: '',
          timeline: '',
          goals: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Booking failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const projectTypes = [
    "Web Development",
    "Mobile App Development", 
    "E-commerce Platform",
    "Digital Marketing",
    "SEO & Content Strategy",
    "Brand Identity & Design",
    "Cloud Solutions",
    "Business Consulting",
    "Other"
  ];

  const timeSlots = [
    "9:00 AM - 9:30 AM",
    "10:00 AM - 10:30 AM", 
    "11:00 AM - 11:30 AM",
    "1:00 PM - 1:30 PM",
    "2:00 PM - 2:30 PM",
    "3:00 PM - 3:30 PM",
    "4:00 PM - 4:30 PM"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000", 
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+"
  ];

  const timelineOptions = [
    "ASAP - Within 2 weeks",
    "1-2 months",
    "3-6 months",
    "6+ months",
    "Still planning"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <SEO 
        title="🚀 Book Your Free Strategy Call | Houston Web Development & Digital Marketing | Cardinal Consulting"
        description="🔥 Book your FREE 30-minute strategy call with Houston's #1 digital agency! Get expert insights on web development, mobile apps, SEO & digital marketing. Transform your business today. 500+ successful projects completed."
        keywords="Houston strategy call, Houston web development consultation, Houston digital marketing consultation, Houston business strategy, Houston web design consultation, Houston SEO consultation, Houston mobile app consultation, Houston digital agency consultation, strategy call Houston, business consultation Houston"
        url="/strategy-call"
        servicePage={true}
        pageType="service"
        serviceDetails={{
          name: "Free Strategy Call",
          description: "30-minute consultation with Houston's premier digital agency",
          priceRange: "Free",
          category: "Business Consultation"
        }}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50/50 via-white to-gray-50/30 relative overflow-hidden" style={{ paddingTop: 'calc(5rem + 50px)' }}>
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-100 rounded-full opacity-30 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-50 to-blue-50 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Animated Network Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#059669" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-6 animate-fade-in">
              <div className="w-8 h-px bg-gradient-to-r from-green-500 to-green-600 mr-3"></div>
              Free Strategy Call
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Book Your Free
              <span className="block text-green-600 font-normal animate-fade-in" style={{animationDelay: '300ms'}}>Strategy Call</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '500ms'}}>
              Get expert insights on your digital transformation opportunities. Our 30-minute strategy call will help you understand how to leverage technology to grow your Houston business.
            </p>
            
            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{animationDelay: '700ms'}}>
              <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                <span>Expert Insights</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                <span>30 Minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-4 bg-gradient-to-br from-gray-50/50 via-white to-green-50/30 relative">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-green-100 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-blue-100 rounded-full opacity-30 blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50/50 overflow-hidden hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-0">
                  {/* Enhanced Form Header */}
                  <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 p-8 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5"></div>
                    <div className="relative z-10">
                      <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Schedule Your Strategy Call</h2>
                      <p className="text-green-100 text-lg">Complete the form below to book your free 30-minute consultation</p>
                    </div>
                  </div>
                  
                  {/* Form Content */}
                  <div className="p-8 lg:p-10">
                    <form onSubmit={handleFormSubmit} className="space-y-8" name="strategy-call-booking" method="POST" action="/" data-netlify="true" data-netlify-honeypot="bot-field">
                      <input type="hidden" name="form-name" value="strategy-call-booking" />
                      <input type="hidden" name="bot-field" style={{ display: 'none' }} />
                      
                      {/* Contact Information */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                          <User className="w-6 h-6 text-green-600 mr-3" />
                          Contact Information
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="relative group">
                            <label className="block text-sm font-medium text-gray-700 mb-3">Full Name *</label>
                            <div className="relative">
                              <input 
                                type="text" 
                                name="name" 
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                placeholder="Your full name"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition-all duration-300 blur-lg"></div>
                            </div>
                          </div>
                          
                          <div className="relative group">
                            <label className="block text-sm font-medium text-gray-700 mb-3">Email Address *</label>
                            <div className="relative">
                              <input 
                                type="email" 
                                name="email" 
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                placeholder="your@email.com"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition-all duration-300 blur-lg"></div>
                            </div>
                          </div>
                          
                          <div className="relative group">
                            <label className="block text-sm font-medium text-gray-700 mb-3">Phone Number</label>
                            <div className="relative">
                              <input 
                                type="tel" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                placeholder="(555) 123-4567"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition-all duration-300 blur-lg"></div>
                            </div>
                          </div>
                          
                          <div className="relative group">
                            <label className="block text-sm font-medium text-gray-700 mb-3">Company Name</label>
                            <div className="relative">
                              <input 
                                type="text" 
                                name="company" 
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                placeholder="Your company name"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-xl opacity-0 group-focus-within:opacity-100 transition-all duration-300 blur-lg"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                          <MessageSquare className="w-5 h-5 text-green-600 mr-2" />
                          Project Information
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
                            <select 
                              name="projectType" 
                              required
                              value={formData.projectType}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                            >
                              <option value="">Select project type</option>
                              {projectTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                            <select 
                              name="budget" 
                              value={formData.budget}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                            >
                              <option value="">Select budget range</option>
                              {budgetRanges.map(budget => (
                                <option key={budget} value={budget}>{budget}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                            <select 
                              name="timeline" 
                              value={formData.timeline}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                            >
                              <option value="">Select timeline</option>
                              {timelineOptions.map(timeline => (
                                <option key={timeline} value={timeline}>{timeline}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Business Goals</label>
                            <input 
                              type="text" 
                              name="goals" 
                              value={formData.goals}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                              placeholder="e.g., Increase sales, improve efficiency"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                          <textarea 
                            name="projectDetails" 
                            rows={4}
                            value={formData.projectDetails}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                            placeholder="Tell us about your project, challenges, and what you hope to achieve..."
                          />
                        </div>
                      </div>
                      
                      {/* Scheduling */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                          <Calendar className="w-5 h-5 text-green-600 mr-2" />
                          Schedule Your Call
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                            <input 
                              type="date" 
                              name="preferredDate" 
                              required
                              value={formData.preferredDate}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                              min={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                            <select 
                              name="preferredTime" 
                              required
                              value={formData.preferredTime}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                            >
                              <option value="">Select time slot</option>
                              {timeSlots.map(time => (
                                <option key={time} value={time}>{time}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      
                      {/* Submit Button */}
                      <div className="pt-8">
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-5 text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          {isSubmitting ? (
                            <span className="flex items-center justify-center relative z-10">
                              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                              Booking Your Call...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center relative z-10">
                              Book My Free Strategy Call
                              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* What You'll Get */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      What You'll Get
                    </h3>
                    <p className="text-green-100 text-sm">Expert insights and strategic guidance</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="text-sm text-gray-700 leading-relaxed">Expert analysis of your current digital presence</span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="text-sm text-gray-700 leading-relaxed">Strategic recommendations for growth</span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="text-sm text-gray-700 leading-relaxed">Technology stack recommendations</span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="text-sm text-gray-700 leading-relaxed">Budget and timeline estimates</span>
                      </li>
                      <li className="flex items-start group/item">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="text-sm text-gray-700 leading-relaxed">Next steps roadmap</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              {/* Why Choose Us */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Why Choose Us
                    </h3>
                    <p className="text-blue-100 text-sm">Proven track record of success</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center group/item">
                        <div className="text-2xl font-bold text-blue-600 mr-3 group-hover/item:scale-110 transition-transform duration-300">500+</div>
                        <div className="text-sm text-gray-700">Successful Houston Projects</div>
                      </div>
                      <div className="flex items-center group/item">
                        <div className="text-2xl font-bold text-blue-600 mr-3 group-hover/item:scale-110 transition-transform duration-300">98%</div>
                        <div className="text-sm text-gray-700">Client Satisfaction Rate</div>
                      </div>
                      <div className="flex items-center group/item">
                        <div className="text-2xl font-bold text-blue-600 mr-3 group-hover/item:scale-110 transition-transform duration-300">24/7</div>
                        <div className="text-sm text-gray-700">Houston-Based Support</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Contact Info */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Need Immediate Help?</h3>
                    <p className="text-gray-100 text-sm">Get in touch with our team</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center group/item">
                        <Phone className="w-4 h-4 text-green-600 mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                        <a href="tel:281-901-7016" className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-300">281-901-7016</a>
                      </div>
                      <div className="flex items-center group/item">
                        <Mail className="w-4 h-4 text-green-600 mr-3 group-hover/item:scale-110 transition-transform duration-300" />
                        <a href="mailto:hunain@cardinalhtx.com" className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-300">hunain@cardinalhtx.com</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <div className="py-16"></div>
      
      <Footer />
    </div>
  );
};

export default StrategyCall; 