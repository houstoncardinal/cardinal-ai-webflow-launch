
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Sparkles, Zap, Phone, Mail, Building, Calendar, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TransformationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const TransformationForm = ({ isOpen, onClose }: TransformationFormProps) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    features: [] as string[],
    industry: "",
    currentWebsite: "",
    goals: ""
  });

  const projectTypes = [
    { value: "website", label: "Business Website", description: "Professional corporate website" },
    { value: "ecommerce", label: "E-commerce Store", description: "Online shopping platform" },
    { value: "webapp", label: "Web Application", description: "Custom web application" },
    { value: "portfolio", label: "Portfolio Site", description: "Personal or creative portfolio" },
    { value: "blog", label: "Blog/Content Site", description: "Content management platform" },
    { value: "landing", label: "Landing Page", description: "Marketing or product landing page" },
    { value: "redesign", label: "Website Redesign", description: "Modernize existing website" },
    { value: "custom", label: "Custom Solution", description: "Unique business requirements" }
  ];

  const budgetRanges = [
    { value: "5k-10k", label: "$5,000 - $10,000", description: "Starter projects" },
    { value: "10k-25k", label: "$10,000 - $25,000", description: "Standard solutions" },
    { value: "25k-50k", label: "$25,000 - $50,000", description: "Advanced features" },
    { value: "50k-100k", label: "$50,000 - $100,000", description: "Enterprise solutions" },
    { value: "100k+", label: "$100,000+", description: "Large-scale projects" },
    { value: "discuss", label: "Let's Discuss", description: "Custom quote needed" }
  ];

  const timelineOptions = [
    { value: "urgent", label: "1-2 Months", description: "Rush delivery" },
    { value: "standard", label: "2-4 Months", description: "Standard timeline" },
    { value: "relaxed", label: "4-6 Months", description: "Comprehensive development" },
    { value: "flexible", label: "6+ Months", description: "Complex enterprise project" }
  ];

  const featureOptions = [
    "User Authentication", "Payment Integration", "Content Management", "Mobile App", 
    "API Development", "Third-party Integrations", "Analytics Dashboard", "SEO Optimization",
    "Multi-language Support", "Custom Database", "Real-time Features", "Admin Panel"
  ];

  const industries = [
    "Technology", "Healthcare", "Finance", "Real Estate", "Education", "E-commerce",
    "Manufacturing", "Legal", "Government", "Non-profit", "Entertainment", "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Quote Request Submitted! 🚀",
      description: "We'll contact you within 24 hours with a detailed proposal.",
    });
    
    console.log("Comprehensive quote request:", formData);
    onClose();
    setCurrentStep(1);
    setFormData({
      name: "", email: "", phone: "", company: "", projectType: "", budget: "",
      timeline: "", description: "", features: [], industry: "", currentWebsite: "", goals: ""
    });
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const toggleFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const getStepTitle = () => {
    switch(currentStep) {
      case 1: return "Contact Information";
      case 2: return "Project Details";
      case 3: return "Features & Requirements";
      case 4: return "Final Details & Submit";
      default: return "Get Your Quote";
    }
  };

  const isStepValid = () => {
    switch(currentStep) {
      case 1: return formData.name && formData.email && formData.phone;
      case 2: return formData.projectType && formData.budget && formData.timeline;
      case 3: return formData.description && formData.industry;
      case 4: return true;
      default: return false;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-green-50/30 to-gray-50">
        <DialogHeader className="text-center pb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-3xl font-light text-gray-900 mb-2">
            Get Your Custom Quote
          </DialogTitle>
          <p className="text-gray-600 text-lg">
            Tell us about your project and receive a detailed proposal within 24 hours
          </p>
          
          {/* Progress Bar */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  currentStep >= step 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                </div>
                {step < 4 && (
                  <div className={`w-12 h-1 mx-2 rounded-full transition-all duration-300 ${
                    currentStep > step ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Star className="w-5 h-5 text-green-500 mr-2" />
                {getStepTitle()}
              </h3>

              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="John Doe"
                      className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="john@company.com"
                        className="h-12 pl-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+1 (555) 123-4567"
                        className="h-12 pl-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Company Name
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="Your Company"
                        className="h-12 pl-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-700">Project Type *</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {projectTypes.map((type) => (
                        <div
                          key={type.value}
                          onClick={() => setFormData(prev => ({ ...prev, projectType: type.value }))}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:scale-105 ${
                            formData.projectType === type.value
                              ? 'border-green-500 bg-green-50 shadow-md'
                              : 'border-gray-200 hover:border-green-300 hover:bg-green-50/50'
                          }`}
                        >
                          <h4 className="font-medium text-gray-900">{type.label}</h4>
                          <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-gray-700">Budget Range *</Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                        <SelectTrigger className="h-12 border-gray-300 focus:border-green-500">
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
                            <SelectValue placeholder="Select budget range" />
                          </div>
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg">
                          {budgetRanges.map((budget) => (
                            <SelectItem key={budget.value} value={budget.value} className="hover:bg-green-50">
                              <div>
                                <div className="font-medium">{budget.label}</div>
                                <div className="text-sm text-gray-500">{budget.description}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-gray-700">Timeline *</Label>
                      <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                        <SelectTrigger className="h-12 border-gray-300 focus:border-green-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                            <SelectValue placeholder="Select timeline" />
                          </div>
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg">
                          {timelineOptions.map((timeline) => (
                            <SelectItem key={timeline.value} value={timeline.value} className="hover:bg-green-50">
                              <div>
                                <div className="font-medium">{timeline.label}</div>
                                <div className="text-sm text-gray-500">{timeline.description}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Features & Requirements */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-gray-700">Industry *</Label>
                      <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                        <SelectTrigger className="h-12 border-gray-300 focus:border-green-500">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg">
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry} className="hover:bg-green-50">
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="currentWebsite" className="text-sm font-medium text-gray-700">
                        Current Website (if any)
                      </Label>
                      <Input
                        id="currentWebsite"
                        value={formData.currentWebsite}
                        onChange={(e) => setFormData(prev => ({ ...prev, currentWebsite: e.target.value }))}
                        placeholder="https://yourwebsite.com"
                        className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-gray-700">Required Features</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {featureOptions.map((feature) => (
                        <Badge
                          key={feature}
                          variant={formData.features.includes(feature) ? "default" : "outline"}
                          className={`p-3 cursor-pointer transition-all duration-200 hover:scale-105 text-center justify-center ${
                            formData.features.includes(feature)
                              ? 'bg-green-500 hover:bg-green-600 text-white'
                              : 'hover:bg-green-50 hover:border-green-300'
                          }`}
                          onClick={() => toggleFeature(feature)}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                      Project Description *
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                      rows={4}
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Final Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="goals" className="text-sm font-medium text-gray-700">
                      Business Goals & Success Metrics
                    </Label>
                    <Textarea
                      id="goals"
                      value={formData.goals}
                      onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                      placeholder="What do you want to achieve with this project? How will you measure success?"
                      rows={3}
                      className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                  </div>

                  {/* Quote Summary */}
                  <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Zap className="w-5 h-5 text-green-500 mr-2" />
                        Quote Summary
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Project Type:</span> {projectTypes.find(p => p.value === formData.projectType)?.label}</p>
                        <p><span className="font-medium">Budget Range:</span> {budgetRanges.find(b => b.value === formData.budget)?.label}</p>
                        <p><span className="font-medium">Timeline:</span> {timelineOptions.find(t => t.value === formData.timeline)?.label}</p>
                        <p><span className="font-medium">Industry:</span> {formData.industry}</p>
                        {formData.features.length > 0 && (
                          <p><span className="font-medium">Features:</span> {formData.features.join(", ")}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>✓ We'll review your requirements within 2 hours</li>
                      <li>✓ Our team will prepare a detailed proposal</li>
                      <li>✓ You'll receive a comprehensive quote within 24 hours</li>
                      <li>✓ We'll schedule a strategy call to discuss your project</li>
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-8 h-12"
            >
              Previous
            </Button>

            {currentStep < 4 ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className="px-8 h-12 bg-green-600 hover:bg-green-700"
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                className="px-8 h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg"
              >
                Submit Quote Request
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TransformationForm;
