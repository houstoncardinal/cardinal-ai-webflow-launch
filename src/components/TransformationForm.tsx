
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Building, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Calendar,
  Upload,
  X,
  ChevronRight,
  ChevronLeft,
  Check,
  Globe,
  Users,
  Target,
  Clock,
  FileText,
  Zap,
  Star,
  Shield,
  Rocket,
  Code,
  Smartphone,
  Monitor,
  Database,
  Palette,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  
  // Company Information
  company: z.string().min(2, 'Company name is required'),
  position: z.string().min(2, 'Position is required'),
  industry: z.string().min(1, 'Please select an industry'),
  companySize: z.string().min(1, 'Please select company size'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  location: z.string().min(2, 'Location is required'),
  
  // Project Information
  projectType: z.string().min(1, 'Please select a project type'),
  projectUrgency: z.string().min(1, 'Please select project urgency'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  description: z.string().min(20, 'Please provide at least 20 characters describing your project'),
  goals: z.string().min(10, 'Please describe your main goals'),
  currentSolution: z.string().optional(),
  
  // Requirements & Features
  features: z.array(z.string()).min(1, 'Please select at least one feature'),
  platforms: z.array(z.string()).min(1, 'Please select at least one platform'),
  integrations: z.array(z.string()).optional(),
  
  // Additional Information
  referralSource: z.string().optional(),
  additionalNotes: z.string().optional(),
  marketingConsent: z.boolean().default(false),
  
  // New comprehensive fields
  businessModel: z.string().optional(),
  competitorAnalysis: z.string().optional(),
  targetAudience: z.string().optional(),
  brandGuidelines: z.string().optional(),
  securityRequirements: z.string().optional(),
  performanceRequirements: z.string().optional(),
  accessibilityNeeds: z.string().optional(),
  maintenancePreference: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface TransformationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const TransformationForm: React.FC<TransformationFormProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [estimatedCost, setEstimatedCost] = useState<string>('');
  const [estimatedDuration, setEstimatedDuration] = useState<string>('');
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      position: '',
      industry: '',
      companySize: '',
      website: '',
      location: '',
      projectType: '',
      projectUrgency: '',
      budget: '',
      timeline: '',
      description: '',
      goals: '',
      currentSolution: '',
      features: [],
      platforms: [],
      integrations: [],
      referralSource: '',
      additionalNotes: '',
      marketingConsent: false,
      businessModel: '',
      competitorAnalysis: '',
      targetAudience: '',
      brandGuidelines: '',
      securityRequirements: '',
      performanceRequirements: '',
      accessibilityNeeds: '',
      maintenancePreference: '',
    },
  });

  const steps = [
    { number: 1, title: 'Personal Info', subtitle: 'Tell us about yourself', icon: User, color: 'from-blue-500 to-blue-600' },
    { number: 2, title: 'Company Details', subtitle: 'Your organization', icon: Building, color: 'from-purple-500 to-purple-600' },
    { number: 3, title: 'Project Vision', subtitle: 'What you need', icon: Target, color: 'from-green-500 to-green-600' },
    { number: 4, title: 'Technical Specs', subtitle: 'Features & platforms', icon: Zap, color: 'from-orange-500 to-orange-600' },
    { number: 5, title: 'Business Details', subtitle: 'Strategy & requirements', icon: TrendingUp, color: 'from-indigo-500 to-indigo-600' },
    { number: 6, title: 'Final Review', subtitle: 'Complete your quote', icon: Check, color: 'from-emerald-500 to-emerald-600' },
  ];

  const industries = [
    'Real Estate', 'Government', 'Legal', 'Healthcare', 'Technology', 
    'Finance', 'Education', 'Retail', 'Manufacturing', 'Construction',
    'Hospitality', 'Transportation', 'Media & Entertainment', 'Non-Profit', 
    'E-commerce', 'SaaS', 'Consulting', 'Insurance', 'Energy', 'Other'
  ];

  const companySizes = [
    'Solo/Freelancer', '2-10 employees', '11-50 employees', '51-200 employees', 
    '201-1000 employees', '1000+ employees'
  ];

  const projectTypes = [
    'Brand New Website', 'Complete Website Redesign', 'E-commerce Platform', 
    'Mobile App Development', 'Web Application', 'Custom Software Solution', 
    'Digital Transformation', 'SEO & Digital Marketing', 'Branding & Design', 
    'API Development', 'Database Design', 'Cloud Migration', 'Consulting Only', 'Other'
  ];

  const projectUrgencies = [
    'ASAP - Very Urgent (Rush job)', 'Within 1 Month', 'Within 3 Months', 
    'Within 6 Months', 'Flexible Timeline', 'Planning Phase Only'
  ];

  const budgetRanges = [
    'Under $5K', '$5K - $15K', '$15K - $30K', '$30K - $50K', 
    '$50K - $100K', '$100K - $250K', '$250K - $500K', '$500K+'
  ];

  const timelines = [
    '1-2 weeks', '2-4 weeks', '1-2 months', '3-4 months', '5-6 months', 
    '6+ months', 'Ongoing project', 'Phased approach'
  ];

  const comprehensiveFeatures = [
    { name: 'User Authentication & Authorization', icon: Shield, category: 'Security' },
    { name: 'Payment Processing & E-commerce', icon: DollarSign, category: 'Commerce' },
    { name: 'Content Management System', icon: FileText, category: 'Content' },
    { name: 'Advanced Analytics & Reporting', icon: TrendingUp, category: 'Analytics' },
    { name: 'Real-time Chat & Messaging', icon: MessageSquare, category: 'Communication' },
    { name: 'API Development & Integration', icon: Code, category: 'Technical' },
    { name: 'Mobile Responsive Design', icon: Smartphone, category: 'Design' },
    { name: 'SEO Optimization', icon: Target, category: 'Marketing' },
    { name: 'Multi-language Support', icon: Globe, category: 'Localization' },
    { name: 'Admin Dashboard & Controls', icon: Monitor, category: 'Management' },
    { name: 'Email Marketing Integration', icon: Mail, category: 'Marketing' },
    { name: 'Social Media Integration', icon: Users, category: 'Social' },
    { name: 'Database Design & Management', icon: Database, category: 'Technical' },
    { name: 'Custom Branding & Design', icon: Palette, category: 'Design' },
    { name: 'Performance Optimization', icon: Rocket, category: 'Performance' },
    { name: 'Security & Compliance', icon: Shield, category: 'Security' },
  ];

  const platformOptions = [
    { name: 'Web (Desktop)', icon: Monitor },
    { name: 'Mobile (iOS)', icon: Smartphone },
    { name: 'Mobile (Android)', icon: Smartphone },
    { name: 'Tablet Optimized', icon: Monitor },
    { name: 'Progressive Web App', icon: Globe },
    { name: 'Desktop Application', icon: Monitor },
    { name: 'Cross-platform Solution', icon: Code },
  ];

  const integrationOptions = [
    'CRM Systems (Salesforce, HubSpot)', 'Payment Gateways (Stripe, PayPal)', 
    'Social Media Platforms', 'Email Marketing (Mailchimp, Constant Contact)',
    'Analytics Tools (Google Analytics, Mixpanel)', 'Accounting Software (QuickBooks)', 
    'Inventory Management', 'Custom APIs', 'Cloud Storage (AWS, Google Cloud)',
    'Marketing Automation', 'Customer Support (Zendesk)', 'Project Management Tools'
  ];

  const businessModels = [
    'B2B (Business to Business)', 'B2C (Business to Consumer)', 'B2B2C (Business to Business to Consumer)',
    'Marketplace/Platform', 'Subscription/SaaS', 'E-commerce/Retail', 'Service-based', 'Non-profit'
  ];

  const maintenanceOptions = [
    'Full ongoing support & maintenance', 'Monthly updates & security patches', 
    'Quarterly reviews & updates', 'Emergency support only', 'Training for in-house team', 
    'Handoff with documentation only'
  ];

  const referralSources = [
    'Google Search', 'Social Media (LinkedIn, Facebook, etc.)', 'Referral from colleague/friend', 
    'Industry Event/Conference', 'Partner/Client recommendation', 'Online Advertisement', 
    'Content/Blog/Case Study', 'Previous work/Portfolio', 'Cold outreach', 'Other'
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg', 'image/jpg'];
    const validFiles = files.filter(file => allowedTypes.includes(file.type) && file.size <= 10 * 1024 * 1024); // 10MB limit
    
    if (validFiles.length !== files.length) {
      toast({
        title: "Some files were rejected",
        description: "Please upload only PDF, DOC, PNG, or JPG files under 10MB.",
        variant: "destructive"
      });
    }
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const calculateEstimate = () => {
    const budget = form.getValues('budget');
    const features = form.getValues('features') || [];
    const platforms = form.getValues('platforms') || [];
    const urgency = form.getValues('projectUrgency');
    
    let complexityScore = features.length * 10;
    if (platforms.length > 2) complexityScore += 20;
    if (urgency?.includes('ASAP')) complexityScore += 30;
    
    const complexity = complexityScore > 80 ? 'High' : complexityScore > 40 ? 'Medium' : 'Low';
    
    // Estimate duration based on complexity and features
    let estimatedWeeks = Math.max(2, Math.ceil(features.length * 1.5));
    if (platforms.length > 2) estimatedWeeks += 2;
    if (urgency?.includes('ASAP')) estimatedWeeks = Math.ceil(estimatedWeeks * 0.7);
    
    setEstimatedDuration(`${estimatedWeeks} weeks`);
    setEstimatedCost(budget || 'TBD');
    
    return {
      timeframe: `${estimatedWeeks} weeks`,
      complexity,
      platforms: platforms.length,
      features: features.length,
    };
  };

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fieldsToValidate);
    
    if (isValid) {
      if (currentStep === 4) calculateEstimate();
      setCurrentStep(prev => Math.min(prev + 1, 6));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ['firstName', 'lastName', 'email', 'phone'];
      case 2:
        return ['company', 'position', 'industry', 'companySize', 'location'];
      case 3:
        return ['projectType', 'projectUrgency', 'budget', 'timeline', 'description', 'goals'];
      case 4:
        return ['features', 'platforms'];
      case 5:
        return [];
      case 6:
        return [];
      default:
        return [];
    }
  };

  const handleFeatureToggle = (feature: string) => {
    const currentFeatures = form.getValues('features') || [];
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter(f => f !== feature)
      : [...currentFeatures, feature];
    form.setValue('features', newFeatures);
  };

  const handlePlatformToggle = (platform: string) => {
    const currentPlatforms = form.getValues('platforms') || [];
    const newPlatforms = currentPlatforms.includes(platform)
      ? currentPlatforms.filter(p => p !== platform)
      : [...currentPlatforms, platform];
    form.setValue('platforms', newPlatforms);
  };

  const handleIntegrationToggle = (integration: string) => {
    const currentIntegrations = form.getValues('integrations') || [];
    const newIntegrations = currentIntegrations.includes(integration)
      ? currentIntegrations.filter(i => i !== integration)
      : [...currentIntegrations, integration];
    form.setValue('integrations', newIntegrations);
  };

  const onSubmit = (data: FormData) => {
    console.log('Comprehensive Form submitted:', data);
    console.log('Uploaded files:', uploadedFiles);
    console.log('Project estimate:', calculateEstimate());
    
    toast({
      title: "🎉 Quote Request Submitted Successfully!",
      description: "We'll analyze your comprehensive requirements and send you a detailed proposal within 24 hours. Check your email for confirmation.",
    });
    
    form.reset();
    setUploadedFiles([]);
    setCurrentStep(1);
    onClose();
  };

  if (!isOpen) return null;

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden">
        {/* Enhanced Header with Gradient */}
        <div className={`bg-gradient-to-r ${currentStepData.color} text-white p-8 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <currentStepData.icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-5xl font-light mb-2">Get Your Custom Quote</h2>
                <p className="text-white/90 text-xl">{currentStepData.subtitle}</p>
              </div>
            </div>
            
            {/* Enhanced Progress System */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/80 text-sm font-medium">
                  Step {currentStep} of {steps.length}: {currentStepData.title}
                </span>
                <span className="text-white/80 text-sm">
                  {Math.round((currentStep / steps.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden mb-6">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-700 ease-out shadow-lg"
                  style={{ width: `${(currentStep / steps.length) * 100}%` }}
                ></div>
              </div>
              
              {/* Step indicators */}
              <div className="flex justify-between">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = currentStep === step.number;
                  const isCompleted = currentStep > step.number;
                  
                  return (
                    <div key={step.number} className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCompleted ? 'bg-white text-green-600 scale-110 shadow-lg' : 
                        isActive ? 'bg-white text-gray-800 scale-110 shadow-lg' : 
                        'bg-white/20 text-white/60'
                      }`}>
                        {isCompleted ? <Check className="w-6 h-6" /> : <StepIcon className="w-6 h-6" />}
                      </div>
                      <span className={`text-xs mt-2 text-center hidden sm:block max-w-16 ${
                        isActive || isCompleted ? 'text-white font-medium' : 'text-white/60'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Form Content */}
        <div className="p-8 overflow-y-auto max-h-[60vh]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Step 1: Personal Information - Enhanced */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-3">Let's get to know you</h3>
                    <p className="text-gray-600 text-lg">We'll use this information to personalize your experience and provide accurate quotes</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                            <User className="w-5 h-5 text-blue-600" />
                            First Name *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your first name" 
                              className="h-14 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium text-lg">Last Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your last name" 
                              className="h-14 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                          <Mail className="w-5 h-5 text-blue-600" />
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your.email@company.com" 
                            className="h-14 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription className="text-base">We'll send your detailed quote and project updates to this email</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                          <Phone className="w-5 h-5 text-blue-600" />
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="+1 (555) 123-4567" 
                            className="h-14 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription className="text-base">For urgent project discussions and quick clarifications (optional calls)</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 2: Company Information - Enhanced */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-3">Tell us about your organization</h3>
                    <p className="text-gray-600 text-lg">Understanding your business helps us tailor the perfect solution</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                            <Building className="w-5 h-5 text-purple-600" />
                            Company Name *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="ACME Corporation" 
                              className="h-14 text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                            <Briefcase className="w-5 h-5 text-purple-600" />
                            Your Position *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="CEO, CTO, Marketing Director..." 
                              className="h-14 text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium text-lg">Industry *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl">
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {industries.map((industry) => (
                                <SelectItem key={industry} value={industry}>
                                  {industry}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                            <Users className="w-5 h-5 text-purple-600" />
                            Company Size *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl">
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {companySizes.map((size) => (
                                <SelectItem key={size} value={size}>
                                  {size}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                            <Globe className="w-5 h-5 text-purple-600" />
                            Current Website (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="url" 
                              placeholder="https://yourcompany.com" 
                              className="h-14 text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-base">Help us understand your current online presence and brand</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                            <MapPin className="w-5 h-5 text-purple-600" />
                            Location *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="City, State, Country" 
                              className="h-14 text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Project Vision - Enhanced */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-3">Project vision & scope</h3>
                    <p className="text-gray-600 text-lg">Help us understand exactly what you're looking to build and achieve</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                            <Target className="w-5 h-5 text-green-600" />
                            Project Type *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 text-lg border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectUrgency"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                            <Clock className="w-5 h-5 text-green-600" />
                            Project Urgency *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 text-lg border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl">
                                <SelectValue placeholder="How urgent is this?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {projectUrgencies.map((urgency) => (
                                <SelectItem key={urgency} value={urgency}>
                                  {urgency}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                            <DollarSign className="w-5 h-5 text-green-600" />
                            Budget Range *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 text-lg border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {budgetRanges.map((budget) => (
                                <SelectItem key={budget} value={budget}>
                                  {budget}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription className="text-base">This helps us recommend the best approach for your needs</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                            <Calendar className="w-5 h-5 text-green-600" />
                            Preferred Timeline *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 text-lg border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timelines.map((timeline) => (
                                <SelectItem key={timeline} value={timeline}>
                                  {timeline}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium text-lg">Detailed Project Description *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your project in detail. What challenges are you trying to solve? What are your main objectives? What makes this project unique?"
                            className="min-h-[140px] text-lg border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-base">The more details you provide, the more accurate our quote will be</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="goals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium text-lg">Primary Business Goals *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What do you hope to achieve? Increase sales, improve efficiency, better customer experience, expand market reach, etc."
                            className="min-h-[120px] text-lg border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currentSolution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium text-lg">Current Solution & Pain Points (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your current setup, what's working well, what's causing problems, and what you'd like to improve..."
                            className="min-h-[100px] text-lg border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-base">Understanding your current situation helps us provide better solutions</FormDescription>
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 4: Technical Specifications - Enhanced */}
              {currentStep === 4 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-3">Technical specifications</h3>
                    <p className="text-gray-600 text-lg">Select the features and platforms you need for your project</p>
                  </div>

                  {/* Features Selection - Enhanced */}
                  <div>
                    <label className="text-gray-700 font-medium mb-6 block text-xl">Required Features * <span className="text-sm text-gray-500">(Select all that apply)</span></label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {comprehensiveFeatures.map((feature) => {
                        const isSelected = form.watch('features')?.includes(feature.name);
                        const FeatureIcon = feature.icon;
                        return (
                          <button
                            key={feature.name}
                            type="button"
                            onClick={() => handleFeatureToggle(feature.name)}
                            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:scale-102 ${
                              isSelected 
                                ? 'border-orange-500 bg-orange-50 text-orange-700 shadow-lg' 
                                : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50 hover:shadow-md'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <FeatureIcon className={`w-6 h-6 mt-1 ${isSelected ? 'text-orange-600' : 'text-gray-500'}`} />
                              <div>
                                <div className="font-medium text-base">{feature.name}</div>
                                <div className="text-sm text-gray-500 mt-1">{feature.category}</div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {form.formState.errors.features && (
                      <p className="text-red-500 text-base mt-3">{form.formState.errors.features.message}</p>
                    )}
                  </div>

                  {/* Platforms Selection - Enhanced */}
                  <div>
                    <label className="text-gray-700 font-medium mb-6 block text-xl">Target Platforms * <span className="text-sm text-gray-500">(Select all that apply)</span></label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {platformOptions.map((platform) => {
                        const isSelected = form.watch('platforms')?.includes(platform.name);
                        const PlatformIcon = platform.icon;
                        return (
                          <button
                            key={platform.name}
                            type="button"
                            onClick={() => handlePlatformToggle(platform.name)}
                            className={`p-4 rounded-xl border-2 text-center transition-all duration-200 hover:scale-102 ${
                              isSelected 
                                ? 'border-orange-500 bg-orange-50 text-orange-700 shadow-lg' 
                                : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50 hover:shadow-md'
                            }`}
                          >
                            <PlatformIcon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? 'text-orange-600' : 'text-gray-500'}`} />
                            <div className="font-medium text-base">{platform.name}</div>
                          </button>
                        );
                      })}
                    </div>
                    {form.formState.errors.platforms && (
                      <p className="text-red-500 text-base mt-3">{form.formState.errors.platforms.message}</p>
                    )}
                  </div>

                  {/* Integrations Selection - Enhanced */}
                  <div>
                    <label className="text-gray-700 font-medium mb-6 block text-xl">Required Integrations <span className="text-sm text-gray-500">(Optional - Select any that apply)</span></label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {integrationOptions.map((integration) => {
                        const isSelected = form.watch('integrations')?.includes(integration);
                        return (
                          <button
                            key={integration}
                            type="button"
                            onClick={() => handleIntegrationToggle(integration)}
                            className={`p-3 rounded-lg border-2 text-left font-medium transition-all duration-200 ${
                              isSelected 
                                ? 'border-orange-500 bg-orange-50 text-orange-700' 
                                : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50'
                            }`}
                          >
                            {integration}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Business Details - New Comprehensive Step */}
              {currentStep === 5 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-3">Business strategy & requirements</h3>
                    <p className="text-gray-600 text-lg">Additional details to ensure we build exactly what you need</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="businessModel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium text-lg">Business Model</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 text-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl">
                                <SelectValue placeholder="Select business model" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {businessModels.map((model) => (
                                <SelectItem key={model} value={model}>
                                  {model}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="maintenancePreference"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium text-lg">Maintenance Preference</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 text-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl">
                                <SelectValue placeholder="Select maintenance option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {maintenanceOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="targetAudience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium text-lg">Target Audience</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your target audience, demographics, user behavior, and how they'll interact with your solution..."
                            className="min-h-[120px] text-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-base">Understanding your users helps us design better experiences</FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="competitorAnalysis"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium text-lg">Competitive Landscape</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Who are your main competitors? What do you like/dislike about their solutions? How do you want to differentiate?"
                            className="min-h-[120px] text-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-base">Helps us understand market positioning and differentiation opportunities</FormDescription>
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="securityRequirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium text-lg">Security Requirements</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any specific security, compliance, or data protection requirements? (GDPR, HIPAA, etc.)"
                              className="min-h-[100px] text-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="performanceRequirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium text-lg">Performance Requirements</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Expected traffic, load requirements, speed expectations, scalability needs..."
                              className="min-h-[100px] text-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="brandGuidelines"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium text-lg">Brand Guidelines & Design Preferences</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Existing brand colors, fonts, style preferences, design inspiration, or any brand guidelines we should follow..."
                            className="min-h-[100px] text-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-base">Help us align the design with your brand identity</FormDescription>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="accessibilityNeeds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium text-lg">Accessibility Requirements</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any specific accessibility requirements? WCAG compliance level, screen reader support, etc."
                            className="min-h-[80px] text-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-base">Ensuring your solution is accessible to all users</FormDescription>
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 6: Final Review & Summary - Enhanced */}
              {currentStep === 6 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-3">Final review & submission</h3>
                    <p className="text-gray-600 text-lg">Review your comprehensive requirements and add any final details</p>
                  </div>

                  {/* Comprehensive Project Summary */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-200">
                    <h4 className="text-2xl font-semibold text-emerald-800 mb-6 flex items-center gap-3">
                      <FileText className="w-6 h-6" />
                      Project Summary & Estimate
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-base">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <span className="font-semibold text-gray-700 block">Project Type:</span>
                        <span className="text-gray-600">{form.watch('projectType') || 'Not specified'}</span>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <span className="font-semibold text-gray-700 block">Budget Range:</span>
                        <span className="text-gray-600">{form.watch('budget') || 'Not specified'}</span>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <span className="font-semibold text-gray-700 block">Timeline:</span>
                        <span className="text-gray-600">{form.watch('timeline') || 'Not specified'}</span>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <span className="font-semibold text-gray-700 block">Features Selected:</span>
                        <span className="text-gray-600">{form.watch('features')?.length || 0} features</span>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <span className="font-semibold text-gray-700 block">Platforms:</span>
                        <span className="text-gray-600">{form.watch('platforms')?.length || 0} platforms</span>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <span className="font-semibold text-gray-700 block">Industry:</span>
                        <span className="text-gray-600">{form.watch('industry') || 'Not specified'}</span>
                      </div>
                    </div>
                    
                    {estimatedDuration && (
                      <div className="mt-6 p-4 bg-emerald-100 rounded-lg">
                        <h5 className="font-semibold text-emerald-800 mb-2">Preliminary Estimate</h5>
                        <p className="text-emerald-700">
                          Based on your requirements, we estimate approximately <strong>{estimatedDuration}</strong> for project completion.
                          Final timeline and pricing will be provided in your detailed quote.
                        </p>
                      </div>
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name="referralSource"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium text-lg">How did you hear about us?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-14 text-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl">
                              <SelectValue placeholder="Select referral source" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {referralSources.map((source) => (
                              <SelectItem key={source} value={source}>
                                {source}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium text-lg">Additional Notes & Special Requests</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any specific requirements, preferences, questions, or anything else you'd like us to know about your project..."
                            className="min-h-[140px] text-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-base">This is your final chance to tell us anything else that might be relevant to your project</FormDescription>
                      </FormItem>
                    )}
                  />

                  {/* Enhanced File Upload */}
                  <div className="space-y-4">
                    <label className="block text-gray-700 font-medium text-lg">
                      Upload Supporting Documents <span className="text-sm font-normal text-gray-500">(Optional)</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-emerald-500 transition-colors bg-gray-50 hover:bg-emerald-50">
                      <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-3 text-lg">
                        Drop files here or click to upload
                      </p>
                      <p className="text-base text-gray-500 mb-6">
                        Wireframes, mockups, brand guidelines, requirements docs, competitor examples, etc.
                        <br />
                        Supported: PDF, DOC, PNG, JPG (Max 10MB per file)
                      </p>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => document.getElementById('file-upload')?.click()}
                        className="text-base"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        Choose Files
                      </Button>
                    </div>
                    
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-base font-medium text-gray-700">Uploaded Files ({uploadedFiles.length}):</p>
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-gray-500" />
                              <div>
                                <span className="text-base text-gray-700 font-medium">{file.name}</span>
                                <span className="text-sm text-gray-500 ml-2">({Math.round(file.size / 1024)}KB)</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Enhanced Marketing Consent */}
                  <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <input
                      type="checkbox"
                      id="marketing-consent"
                      checked={form.watch('marketingConsent')}
                      onChange={(e) => form.setValue('marketingConsent', e.target.checked)}
                      className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-5 h-5"
                    />
                    <label htmlFor="marketing-consent" className="text-base text-gray-700 leading-relaxed">
                      <span className="font-medium">Stay updated with valuable insights</span>
                      <br />
                      I'd like to receive occasional updates about new services, industry insights, case studies, and helpful resources. 
                      You can unsubscribe at any time, and we never share your information.
                    </label>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span>SSL Secured & Encrypted</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span>24-Hour Response Time</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Star className="w-5 h-5 text-green-600" />
                      <span>Detailed Custom Proposal</span>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </Form>
        </div>

        {/* Enhanced Footer */}
        <div className="bg-gray-50 px-8 py-6 flex justify-between items-center border-t border-gray-200">
          <div className="text-base text-gray-500">
            <span className="hidden sm:inline">Step {currentStep} of {steps.length} • </span>
            <span>🔒 Your information is secure and confidential</span>
          </div>
          
          <div className="flex gap-4">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                size="lg"
                className="flex items-center gap-2 px-8"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </Button>
            )}
            
            {currentStep < 6 ? (
              <Button
                type="button"
                onClick={nextStep}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white flex items-center gap-2 px-8"
              >
                Next Step
                <ChevronRight className="w-5 h-5" />
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={form.handleSubmit(onSubmit)}
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white flex items-center gap-2 px-10"
              >
                <Rocket className="w-5 h-5" />
                Submit Quote Request
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationForm;
