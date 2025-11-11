import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowRight, ArrowLeft, Building, DollarSign, Calendar, Upload, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const step1Schema = z.object({
  projectType: z.string().min(1, { message: "Please select a project type" }),
  industry: z.string().min(1, { message: "Please select an industry" })
});

const step2Schema = z.object({
  budget: z.string().min(1, { message: "Please select a budget range" }),
  timeline: z.string().min(1, { message: "Please select a timeline" })
});

const step3Schema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string()
    .trim()
    .regex(/^[\d\s()+-]+$/, { message: "Please enter a valid phone number" })
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  file: z.any().optional()
});

const projectTypes = [
  "Web Development",
  "Mobile Application",
  "SEO & Digital Growth",
  "Digital Marketing Campaign",
  "Brand Identity & Design",
  "UX/UI Optimization",
  "Custom Solution"
];

const industries = [
  "Healthcare",
  "Legal",
  "Real Estate",
  "Home Services",
  "Financial Services",
  "Government",
  "Retail & E-commerce",
  "Technology",
  "Education",
  "Other"
];

const budgetRanges = [
  "$5K - $15K",
  "$15K - $30K",
  "$30K - $50K",
  "$50K - $100K",
  "$100K+"
];

const timelines = [
  "ASAP (72 Hours)",
  "1-2 Weeks",
  "2-4 Weeks",
  "1-3 Months",
  "3+ Months"
];

export const MultiStepProjectRoadmapForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const { toast } = useToast();
  const navigate = useNavigate();

  const form1 = useForm({
    resolver: zodResolver(step1Schema),
    defaultValues: { projectType: '', industry: '' }
  });

  const form2 = useForm({
    resolver: zodResolver(step2Schema),
    defaultValues: { budget: '', timeline: '' }
  });

  const form3 = useForm({
    resolver: zodResolver(step3Schema),
    defaultValues: { name: '', email: '', phone: '', file: null }
  });

  const handleStep1Submit = (data: any) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(2);
  };

  const handleStep2Submit = (data: any) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(3);
  };

  const handleFinalSubmit = async (data: any) => {
    const finalData = { ...formData, ...data };
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'project-roadmap');
      formDataToSend.append('projectType', finalData.projectType);
      formDataToSend.append('industry', finalData.industry);
      formDataToSend.append('budget', finalData.budget);
      formDataToSend.append('timeline', finalData.timeline);
      formDataToSend.append('name', finalData.name);
      formDataToSend.append('email', finalData.email);
      formDataToSend.append('phone', finalData.phone);
      
      if (finalData.file && finalData.file[0]) {
        formDataToSend.append('file', finalData.file[0]);
      }

      const response = await fetch('/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast({
          title: "Success! 🚀",
          description: "Your project roadmap request has been submitted. We'll contact you within 2 hours.",
        });
        
        // Redirect to thank you page with Calendly
        navigate('/contact?success=true');
      } else {
        throw new Error('Submission failed');
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
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-600">Step {currentStep} of 3</span>
          <span className="text-sm font-medium text-green-600">{Math.round((currentStep / 3) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Project Type & Industry */}
      {currentStep === 1 && (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="mb-6">
            <h3 className="text-2xl font-light text-gray-900 mb-2">Tell Us About Your Project</h3>
            <p className="text-gray-600">What type of solution are you looking for?</p>
          </div>

          <Form {...form1}>
            <form onSubmit={form1.handleSubmit(handleStep1Submit)} className="space-y-6">
              <FormField
                control={form1.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Project Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                          <SelectValue placeholder="Select your project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {projectTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form1.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Industry</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {industries.map(industry => (
                          <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium"
              >
                Continue
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Form>
        </div>
      )}

      {/* Step 2: Budget & Timeline */}
      {currentStep === 2 && (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="mb-6">
            <h3 className="text-2xl font-light text-gray-900 mb-2">Project Scope</h3>
            <p className="text-gray-600">Help us understand your timeline and budget</p>
          </div>

          <Form {...form2}>
            <form onSubmit={form2.handleSubmit(handleStep2Submit)} className="space-y-6">
              <FormField
                control={form2.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Budget Range</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {budgetRanges.map(budget => (
                          <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form2.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Timeline</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timelines.map(timeline => (
                          <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 h-12"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Back
                </Button>
                <Button 
                  type="submit"
                  className="flex-1 h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium"
                >
                  Continue
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}

      {/* Step 3: Contact Info */}
      {currentStep === 3 && (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="mb-6">
            <h3 className="text-2xl font-light text-gray-900 mb-2">Contact Information</h3>
            <p className="text-gray-600">How should we reach you with your project roadmap?</p>
          </div>

          <Form {...form3}>
            <form onSubmit={form3.handleSubmit(handleFinalSubmit)} className="space-y-6" name="project-roadmap" method="POST" data-netlify="true" encType="multipart/form-data">
              <input type="hidden" name="form-name" value="project-roadmap" />

              <FormField
                control={form3.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        placeholder="John Smith" 
                        className="h-12 bg-gray-50 border-gray-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form3.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        type="email"
                        placeholder="john@company.com" 
                        className="h-12 bg-gray-50 border-gray-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form3.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        type="tel"
                        placeholder="(555) 123-4567" 
                        className="h-12 bg-gray-50 border-gray-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form3.control}
                name="file"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">Attach Files (Optional)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={(e) => onChange(e.target.files)}
                          className="h-12 bg-gray-50 border-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                        />
                      </div>
                    </FormControl>
                    <p className="text-xs text-gray-500 mt-1">Upload project brief, design mockups, or requirements (Max 10MB)</p>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 h-12"
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Back
                </Button>
                <Button 
                  type="submit"
                  disabled={form3.formState.isSubmitting}
                  className="flex-1 h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium"
                >
                  {form3.formState.isSubmitting ? "Submitting..." : "Get My Roadmap"}
                  <CheckCircle className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
};
