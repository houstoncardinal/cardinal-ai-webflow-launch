
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Clock, Sparkles, Star, MessageCircle, ExternalLink, Facebook, Code, Smartphone, Search, Palette, Cloud, BarChart, Target, Globe, Zap, Check, ChevronsUpDown } from "lucide-react";
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
    phone: "",
    company: "",
    services: [] as string[],
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
          phone: formData.phone,
          company: formData.company,
          services: formData.services,
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
        phone: "",
        company: "",
        services: [],
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

  const serviceCategories = [
  {
    category: "Web Development",
    services: [
      {
        id: "custom-website",
        label: "Custom Website Development",
        description: "Professional, responsive websites built with modern technologies",
        icon: Code
      },
      {
        id: "web-application",
        label: "Web Applications",
        description: "Complex web apps with enterprise architecture",
        icon: Globe
      },
      {
        id: "ecommerce",
        label: "E-commerce Solutions",
        description: "Full-featured online stores with secure payment processing",
        icon: Code
      }
    ]
  },
  {
    category: "Mobile Development",
    services: [
      {
        id: "ios-development",
        label: "iOS App Development",
        description: "Native iOS applications for iPhone and iPad",
        icon: Smartphone
      },
      {
        id: "android-development",
        label: "Android App Development",
        description: "Native Android applications for all devices",
        icon: Smartphone
      },
      {
        id: "cross-platform",
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
        id: "seo-optimization",
        label: "SEO Optimization",
        description: "Improve your search engine rankings and visibility",
        icon: Search
      },
      {
        id: "ppc-advertising",
        label: "PPC Advertising",
        description: "Targeted paid advertising campaigns",
        icon: Target
      },
      {
        id: "social-media",
        label: "Social Media Marketing",
        description: "Strategic social media presence and campaigns",
        icon: BarChart
      }
    ]
  },
  {
    category: "Design & Branding",
    services: [
      {
        id: "brand-identity",
        label: "Brand Identity Design",
        description: "Complete brand development and visual identity",
        icon: Palette
      },
      {
        id: "ui-ux-design",
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
        id: "cloud-solutions",
        label: "Cloud Infrastructure",
        description: "Scalable, secure cloud hosting solutions",
        icon: Cloud
      },
      {
        id: "ai-optimization",
        label: "AI & Optimization",
        description: "AI-powered solutions and performance optimization",
        icon: Zap
      }
    ]
  }
];

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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Powerful Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center text-xs sm:text-sm font-medium text-green-600 uppercase tracking-wide mb-3 sm:mb-4">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-4 sm:mr-6"></div>
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-3 sm:mb-4 leading-tight">
            Let's start your
            <span className="block text-green-600 font-normal mt-1">
              digital transformation
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto px-2">
            Ready to elevate your business with cutting-edge digital solutions? 
            <span className="font-medium text-gray-800"> We're here to turn your vision into reality.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Streamlined Contact Form */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Get Started Today</h3>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-xs sm:text-sm font-medium text-gray-700">
                        First name *
                      </Label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName} 
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))} 
                        placeholder="John" 
                        className="h-10 sm:h-11 border-gray-300 focus:border-green-500 focus:ring-green-500 text-sm sm:text-base" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-xs sm:text-sm font-medium text-gray-700">
                        Last name *
                      </Label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName} 
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))} 
                        placeholder="Doe" 
                        className="h-10 sm:h-11 border-gray-300 focus:border-green-500 focus:ring-green-500 text-sm sm:text-base" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-700">
                        Email address *
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} 
                        placeholder="john@company.com" 
                        className="h-10 sm:h-11 border-gray-300 focus:border-green-500 focus:ring-green-500 text-sm sm:text-base" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs sm:text-sm font-medium text-gray-700">
                        Phone number *
                      </Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={formData.phone} 
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} 
                        placeholder="(123) 456-7890" 
                        className="h-10 sm:h-11 border-gray-300 focus:border-green-500 focus:ring-green-500 text-sm sm:text-base" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs sm:text-sm font-medium text-gray-700">
                      Company name *
                    </Label>
                    <Input 
                      id="company" 
                      value={formData.company} 
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))} 
                      placeholder="Your Company" 
                      className="h-10 sm:h-11 border-gray-300 focus:border-green-500 focus:ring-green-500 text-sm sm:text-base" 
                      required 
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col gap-2">
                      <Label className="text-xs sm:text-sm font-medium text-gray-700">
                        Services of Interest *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            className="h-10 sm:h-11 justify-between border-gray-300 hover:border-green-500 hover:bg-gray-50/50 text-left font-normal"
                          >
                            {formData.services.length === 0 ? (
                              <span className="text-gray-500">Select services...</span>
                            ) : (
                              <span className="text-sm truncate">
                                {formData.services.length} service{formData.services.length > 1 ? "s" : ""} selected
                              </span>
                            )}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[min(calc(100vw-2rem),400px)] p-0" align="start">
                          <Command>
                            <CommandInput placeholder="Search services..." className="h-9" />
                            <CommandEmpty>No services found.</CommandEmpty>
                            <div className="max-h-[300px] overflow-auto">
                              {serviceCategories.map((category, idx) => (
                                <CommandGroup key={idx} heading={category.category}>
                                  {category.services.map((service) => (
                                    <CommandItem
                                      key={service.id}
                                      value={service.label}
                                      onSelect={() => {
                                        setFormData(prev => ({
                                          ...prev,
                                          services: prev.services.includes(service.id)
                                            ? prev.services.filter(s => s !== service.id)
                                            : [...prev.services, service.id]
                                        }));
                                      }}
                                      className="gap-2 py-2"
                                    >
                                      <div className={cn(
                                        "border border-gray-200 rounded w-4 h-4 flex items-center justify-center",
                                        formData.services.includes(service.id) && "bg-green-600 border-green-600"
                                      )}>
                                        {formData.services.includes(service.id) && (
                                          <Check className="h-3 w-3 text-white" />
                                        )}
                                      </div>
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                          <service.icon className="w-4 h-4 text-green-600" />
                                          <span>{service.label}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                                          {service.description}
                                        </p>
                                      </div>
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              ))}
                            </div>
                          </Command>
                        </PopoverContent>
                      </Popover>

                      {/* Selected Services Pills */}
                      {formData.services.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {formData.services.map(serviceId => {
                            const service = serviceCategories
                              .flatMap(cat => cat.services)
                              .find(s => s.id === serviceId);
                            
                            if (!service) return null;
                            
                            return (
                              <div
                                key={serviceId}
                                className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full"
                              >
                                <service.icon className="w-3 h-3" />
                                <span>{service.label}</span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setFormData(prev => ({
                                      ...prev,
                                      services: prev.services.filter(s => s !== serviceId)
                                    }));
                                  }}
                                  className="ml-1 hover:text-green-900"
                                >
                                  ×
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-700">
                      How can we help? *
                    </Label>
                    <Textarea 
                      id="message" 
                      value={formData.message} 
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} 
                      placeholder="Tell us about your project, goals, and timeline..." 
                      rows={3} 
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500 text-sm sm:text-base" 
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

            {/* Compact Contact Info */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.slice(0, 4).map((info, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className={`w-8 h-8 ${info.color} mb-3`}>
                      <info.icon className="w-full h-full" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-xs">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Powerful CTA Section */}
          <div className="space-y-6">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 via-white to-gray-50">
              <CardContent className="p-8 lg:p-10">
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

            {/* Immediate Contact CTA */}
            <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <p className="text-gray-700 mb-3">
                Need immediate assistance?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="mailto:hello@cardinalhtx.com" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email us directly
                </a>
                <a 
                  href="tel:832-989-2163" 
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transformation Form Modal */}
      {isTransformationFormOpen && (
        <TransformationForm 
          isOpen={isTransformationFormOpen} 
          onClose={() => setIsTransformationFormOpen(false)} 
        />
      )}
    </section>
  );
};

export default Contact;
