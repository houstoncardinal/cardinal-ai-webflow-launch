import { useState } from "react";
import { ArrowLeft, Globe, Clock, CheckCircle, BarChart3, Mail, Phone, Calendar, Zap, Target, TrendingUp, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { toast } from "sonner";

const FreeAudit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    businessName: "",
    industry: "",
    currentChallenges: "",
    goals: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('audit-form');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Netlify form submission
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      formDataToSend.append('form-name', 'free-audit');

      await fetch('/', {
        method: 'POST',
        body: formDataToSend,
      });

      setIsSubmitted(true);
      toast.success("Audit request submitted successfully!");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <SEO 
          title="Free Website Audit Submitted | Cardinal Consulting"
          description="Your free website audit request has been submitted. You'll receive your comprehensive audit report within 1 business hour."
          keywords="website audit, SEO audit, free audit, digital marketing audit, Cardinal Consulting"
          url="/free-audit"
        />
        
        <Navigation />
        
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 pt-32 pb-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
              <div className="mb-12">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8">
                  Audit Request Submitted!
                </h1>
                <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
                  Thank you for requesting your free website audit. Our team is already analyzing your website and preparing your comprehensive report.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Email Report</h3>
                        <p className="text-lg text-gray-600">
                          You'll receive a comprehensive audit report via email within <strong className="text-green-600">1 business hour</strong>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">What's Included</h3>
                        <ul className="text-lg text-gray-600 space-y-2">
                          <li>• SEO performance analysis</li>
                          <li>• Website speed optimization</li>
                          <li>• User experience evaluation</li>
                          <li>• Conversion rate insights</li>
                          <li>• Actionable recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-8 h-8 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps</h3>
                        <p className="text-lg text-gray-600">
                          Our team will review your audit and may reach out to discuss implementation strategies and next steps.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Link to="/">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <ArrowLeft className="mr-3 w-6 h-6" />
                    Back to Homepage
                  </Button>
                </Link>
                <p className="text-lg text-gray-500">
                  Questions? Contact us at <a href="mailto:hello@cardinalconsulting.com" className="text-green-600 hover:underline font-medium">hello@cardinalconsulting.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Free Website Audit | Cardinal Consulting"
        description="Get your FREE comprehensive website audit worth $2,500. Receive actionable insights to improve your website's performance, SEO, and conversions."
        keywords="free website audit, SEO audit, website analysis, digital marketing audit, Cardinal Consulting"
        url="/free-audit"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="space-y-8 pt-16">
              <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-8">
                <div className="w-12 h-px bg-gradient-to-r from-green-400 to-green-600 mr-6"></div>
                Limited Time Offer
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
                Get Your FREE Website Audit
                <span className="block text-green-600 font-normal mt-4">
                  Worth $2,500
                </span>
              </h1>
              
              <p className="text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
                Discover hidden opportunities to improve your website's performance, SEO rankings, and conversion rates. 
                Our comprehensive audit will reveal exactly what's holding your business back online.
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="flex items-center space-x-3 text-green-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200/50">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-lg font-medium">No strings attached</span>
                </div>
                <div className="flex items-center space-x-3 text-green-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200/50">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg font-medium">Results in 1 hour</span>
                </div>
                <div className="flex items-center space-x-3 text-green-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200/50">
                  <Globe className="w-5 h-5" />
                  <span className="text-lg font-medium">Any website/platform</span>
                </div>
              </div>
              
              {/* Scroll Down Arrow */}
              <div className="mt-16 flex flex-col items-center space-y-4">
                <div className="text-sm font-medium text-gray-600 uppercase tracking-widest mb-2">
                  Scroll Down
                </div>
                <button
                  onClick={scrollToForm}
                  className="group relative p-6 rounded-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md border border-white/50 hover:border-green-300/50 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                  aria-label="Scroll to form"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <ChevronDown className="relative w-8 h-8 text-gray-700 group-hover:text-green-600 transition-all duration-500 group-hover:scale-110" />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div id="audit-form" className="pt-16 pb-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-light text-gray-900 mb-6">
                  Start Your Free Audit
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Fill out the form below and we'll analyze your website to identify opportunities for improvement.
                </p>
              </div>

              <form 
                name="free-audit" 
                method="POST" 
                action="/"
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value="free-audit" />
                <input type="hidden" name="bot-field" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full h-14 text-lg"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-14 text-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full h-14 text-lg"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessName" className="block text-lg font-medium text-gray-700 mb-3">
                      Business Name *
                    </label>
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full h-14 text-lg"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-lg font-medium text-gray-700 mb-3">
                    Website URL *
                  </label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    required
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full h-14 text-lg"
                    placeholder="https://yourwebsite.com"
                  />
                  <p className="text-base text-gray-500 mt-2">
                    Don't have a website? Enter your social media profile or leave blank.
                  </p>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-lg font-medium text-gray-700 mb-3">
                    Industry
                  </label>
                  <Input
                    id="industry"
                    name="industry"
                    type="text"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full h-14 text-lg"
                    placeholder="e.g., Healthcare, E-commerce, Real Estate"
                  />
                </div>

                <div>
                  <label htmlFor="currentChallenges" className="block text-lg font-medium text-gray-700 mb-3">
                    Current Challenges
                  </label>
                  <Textarea
                    id="currentChallenges"
                    name="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={handleInputChange}
                    className="w-full h-32 text-lg"
                    placeholder="What challenges are you facing with your online presence?"
                  />
                </div>

                <div>
                  <label htmlFor="goals" className="block text-lg font-medium text-gray-700 mb-3">
                    Goals
                  </label>
                  <Textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    className="w-full h-32 text-lg"
                    placeholder="What would you like to achieve with your website?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Submitting Your Request...
                    </>
                  ) : (
                    <>
                      Start My Free Audit
                      <ArrowLeft className="ml-3 w-6 h-6 rotate-180" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <h3 className="text-3xl font-light text-gray-900 mb-8">
                What You'll Get
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Performance Analysis</h4>
                    <p className="text-lg text-gray-600">Website speed, loading times, and technical performance optimization</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">SEO Evaluation</h4>
                    <p className="text-lg text-gray-600">Search engine optimization and ranking opportunities analysis</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">User Experience</h4>
                    <p className="text-lg text-gray-600">Navigation, design, and conversion optimization insights</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Detailed Report</h4>
                    <p className="text-lg text-gray-600">Comprehensive analysis with actionable recommendations</p>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-4">Fast Turnaround</h4>
                      <p className="text-lg text-gray-600">
                        Receive your comprehensive audit report within <strong className="text-green-600">1 business hour</strong>. 
                        No waiting, no delays - just actionable insights to improve your online presence immediately.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-gray-900 mb-4">100% Free & Confidential</h4>
                      <p className="text-lg text-gray-600">
                        Your audit is completely free with no obligations. All information is kept confidential and secure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default FreeAudit; 