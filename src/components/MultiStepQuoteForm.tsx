import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MultiStepQuoteForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    projectType: "",
    budget: "",
    timeline: "",
    businessType: "",
    // Step 2
    name: "",
    email: "",
    phone: "",
    // Step 3
    description: "",
    currentWebsite: ""
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    // Basic validation
    if (currentStep === 1) {
      if (!formData.projectType || !formData.budget || !formData.timeline) {
        toast({
          title: "Required fields missing",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast({
          title: "Required fields missing",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'multi-step-quote');
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('/', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast({
          title: "Request submitted successfully! 🚀",
          description: "We'll send your detailed project roadmap within 24 hours.",
        });
        setFormData({
          projectType: "", budget: "", timeline: "", businessType: "",
          name: "", email: "", phone: "",
          description: "", currentWebsite: ""
        });
        setCurrentStep(1);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: "Project Details" },
    { number: 2, title: "Contact Info" },
    { number: 3, title: "Additional Details" }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
            Get Your Free Project Roadmap
          </h2>
          <p className="text-lg text-gray-600">
            Delivered in 24 hours • No obligation • Custom strategy
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                  currentStep >= step.number
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step.number ? <CheckCircle2 className="w-5 h-5" /> : step.number}
                </div>
                <span className={`text-xs mt-2 font-medium ${
                  currentStep >= step.number ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-1 flex-1 mx-2 rounded transition-all duration-300 ${
                  currentStep > step.number ? 'bg-green-600' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        <Card className="p-6 sm:p-8 shadow-xl border-0">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Project Details */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <Label htmlFor="projectType" className="text-base font-semibold">
                    Project Type *
                  </Label>
                  <Select value={formData.projectType} onValueChange={(value) => updateField('projectType', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">New Website</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                      <SelectItem value="webapp">Web Application</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="redesign">Website Redesign</SelectItem>
                      <SelectItem value="seo">SEO & Marketing</SelectItem>
                      <SelectItem value="custom">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget" className="text-base font-semibold">
                    Budget Range *
                  </Label>
                  <Select value={formData.budget} onValueChange={(value) => updateField('budget', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-plus">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timeline" className="text-base font-semibold">
                    Timeline *
                  </Label>
                  <Select value={formData.timeline} onValueChange={(value) => updateField('timeline', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP (72 hours)</SelectItem>
                      <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                      <SelectItem value="1-month">1 month</SelectItem>
                      <SelectItem value="2-3-months">2-3 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="businessType" className="text-base font-semibold">
                    Business Type
                  </Label>
                  <Input
                    id="businessType"
                    placeholder="e.g., Healthcare, Real Estate, Legal"
                    value={formData.businessType}
                    onChange={(e) => updateField('businessType', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Contact Info */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <Label htmlFor="name" className="text-base font-semibold">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Additional Details */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <Label htmlFor="description" className="text-base font-semibold">
                    Project Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your project goals, target audience, and any specific features you need..."
                    value={formData.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <div>
                  <Label htmlFor="currentWebsite" className="text-base font-semibold">
                    Current Website (if any)
                  </Label>
                  <Input
                    id="currentWebsite"
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={formData.currentWebsite}
                    onChange={(e) => updateField('currentWebsite', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="px-6"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back
                </Button>
              )}
              
              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-6"
                >
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8"
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Roadmap"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              )}
            </div>
          </form>
        </Card>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-600">
          <div className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
            No obligation
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
            24-hour delivery
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
            Custom strategy
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStepQuoteForm;
