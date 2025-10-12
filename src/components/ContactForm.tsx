import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { ArrowRight, Mail, Phone, User, Gift, ChevronDown, Code, Smartphone, Search, Palette, Cloud, BarChart, Target } from 'lucide-react';
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

const formSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name can only contain letters, spaces, hyphens, and apostrophes" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .toLowerCase(),
  phone: z.string()
    .trim()
    .regex(/^[\d\s()+-]+$/, { message: "Please enter a valid phone number" })
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  service: z.string()
    .min(1, { message: "Please select a service" })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: ''
    }
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      // Sanitize values before submission
      const sanitizedData = {
        name: values.name.trim(),
        email: values.email.trim().toLowerCase(),
        phone: values.phone.trim(),
        service: values.service
      };

      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'project-evaluation');
      formDataToSend.append('name', sanitizedData.name);
      formDataToSend.append('email', sanitizedData.email);
      formDataToSend.append('phone', sanitizedData.phone);
      formDataToSend.append('service', sanitizedData.service);

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

        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4" name="project-evaluation" method="POST" action="/" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="project-evaluation" />
                  <input type="hidden" name="bot-field" style={{ display: 'none' }} />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Name Input */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="relative group/input sm:col-span-2 lg:col-span-1">
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                          <div className="relative">
                            <FormControl>
                              <>
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300 z-10 pointer-events-none" />
                                <Input 
                                  {...field}
                                  placeholder="Full Name" 
                                  className="pl-10 h-12 bg-white/50 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400" 
                                />
                              </>
                            </FormControl>
                            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                          </div>
                          <FormMessage className="text-xs mt-1" />
                        </FormItem>
                      )}
                    />

                    {/* Email Input */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="relative group/input sm:col-span-2 lg:col-span-1">
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                          <div className="relative">
                            <FormControl>
                              <>
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300 z-10 pointer-events-none" />
                                <Input 
                                  {...field}
                                  type="email"
                                  placeholder="Email Address" 
                                  className="pl-10 h-12 bg-white/50 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400" 
                                />
                              </>
                            </FormControl>
                            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                          </div>
                          <FormMessage className="text-xs mt-1" />
                        </FormItem>
                      )}
                    />

                    {/* Phone Input */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="relative group/input sm:col-span-2 lg:col-span-1">
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                          <div className="relative">
                            <FormControl>
                              <>
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within/input:text-green-500 transition-colors duration-300 z-10 pointer-events-none" />
                                <Input 
                                  {...field}
                                  type="tel"
                                  placeholder="Phone Number" 
                                  className="pl-10 h-12 bg-white/50 border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 shadow-sm hover:shadow-md placeholder:text-gray-400" 
                                />
                              </>
                            </FormControl>
                            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                          </div>
                          <FormMessage className="text-xs mt-1" />
                        </FormItem>
                      )}
                    />

                    {/* Service Selection Dropdown */}
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="relative group/input sm:col-span-2 lg:col-span-2">
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg opacity-0 group-hover/input:opacity-100 transition-all duration-300 blur-lg"></div>
                          <div className="relative">
                            <FormControl>
                              <Select onValueChange={field.onChange} value={field.value}>
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
                            </FormControl>
                            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                          </div>
                          <FormMessage className="text-xs mt-1" />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="relative group/button sm:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg opacity-0 group-hover/button:opacity-100 transition-all duration-300 blur-lg"></div>
                      <Button 
                        type="submit" 
                        disabled={form.formState.isSubmitting}
                        className="relative w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover/button:scale-105 border-0"
                      >
                        <span className="flex items-center justify-center gap-2">
                          {form.formState.isSubmitting ? 'Submitting...' : 'Get Project Evaluation'}
                          <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>

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