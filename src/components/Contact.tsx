
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import TransformationForm from "./TransformationForm";

const Contact = () => {
  const { toast } = useToast();
  const [isTransformationFormOpen, setIsTransformationFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          message: formData.message
        });

      if (error) throw error;

      toast({
        title: "Message sent successfully! 🚀",
        description: "We'll get back to you within 24 hours."
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["hello@cardinalhtx.com", "support@cardinalhtx.com"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(832) 989-2163", "Available 24/7"],
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["2100 West Loop S Fwy", "Houston, TX 77027"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat-Sun: By appointment"],
      color: "text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide mb-8 animate-fade-in">
            <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-6"></div>
            <span className="relative">
              Contact
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight animate-fade-in" style={{
            animationDelay: '300ms'
          }}>
            <span className="relative inline-block">
              Let's start your
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-transparent rounded-full"></div>
            </span>
            <span className="block text-green-600 font-normal mt-2">
              digital transformation
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl animate-fade-in" style={{
            animationDelay: '500ms'
          }}>
            Ready to elevate your business with cutting-edge digital solutions? 
            We're here to turn your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm animate-fade-in" style={{
                  animationDelay: `${index * 150}ms`
                }}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${info.color} mb-4 group-hover:scale-110 transition-all duration-300`}>
                      <info.icon className="w-full h-full" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact Form */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-50 to-white animate-fade-in" style={{
              animationDelay: '600ms'
            }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Contact</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                        First name *
                      </Label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName} 
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))} 
                        placeholder="John" 
                        className="h-11 border-gray-300 focus:border-green-500 focus:ring-green-500" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                        Last name *
                      </Label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName} 
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))} 
                        placeholder="Doe" 
                        className="h-11 border-gray-300 focus:border-green-500 focus:ring-green-500" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email address *
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} 
                      placeholder="john@company.com" 
                      className="h-11 border-gray-300 focus:border-green-500 focus:ring-green-500" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Company name *
                    </Label>
                    <Input 
                      id="company" 
                      value={formData.company} 
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))} 
                      placeholder="Your Company" 
                      className="h-11 border-gray-300 focus:border-green-500 focus:ring-green-500" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      How can we help? *
                    </Label>
                    <Textarea 
                      id="message" 
                      value={formData.message} 
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} 
                      placeholder="Tell us about your project, goals, and timeline..." 
                      rows={4} 
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500" 
                      required 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Transformation Form CTA */}
          <div className="space-y-8">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 via-white to-gray-50 animate-fade-in" style={{
              animationDelay: '800ms'
            }}>
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                    Start your transformation
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    Get a comprehensive quote tailored to your specific needs with our detailed multi-step form.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Project type selection
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Budget range options
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Timeline preferences
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Feature requirements
                    </div>
                  </div>

                  <Button 
                    onClick={() => setIsTransformationFormOpen(true)} 
                    className="w-full h-14 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl group"
                  >
                    <span className="relative z-10">Get Comprehensive Quote</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    ✓ Multi-step process ✓ Instant estimates ✓ 24-hour response ✓ No commitment required
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional CTA for immediate contact */}
            <Card className="border-0 shadow-lg bg-gray-900 text-white animate-fade-in" style={{
              animationDelay: '1000ms'
            }}>
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold mb-4">Need immediate assistance?</h4>
                <p className="text-gray-300 mb-6">
                  Speak directly with our team for urgent projects or complex requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-white hover:bg-white text-slate-950"
                    onClick={() => window.location.href = 'tel:(832) 989-2163'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-white hover:bg-white text-slate-950"
                    onClick={() => window.location.href = 'mailto:hello@cardinalhtx.com'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <TransformationForm 
        isOpen={isTransformationFormOpen} 
        onClose={() => setIsTransformationFormOpen(false)} 
      />
    </section>
  );
};

export default Contact;
