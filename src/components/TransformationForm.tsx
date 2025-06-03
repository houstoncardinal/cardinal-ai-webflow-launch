
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
  Zap
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
});

type FormData = z.infer<typeof formSchema>;

interface TransformationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const TransformationForm: React.FC<TransformationFormProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
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
    },
  });

  const steps = [
    { number: 1, title: 'Personal Info', subtitle: 'Tell us about yourself', icon: User, color: 'from-blue-500 to-blue-600' },
    { number: 2, title: 'Company Details', subtitle: 'Your organization', icon: Building, color: 'from-purple-500 to-purple-600' },
    { number: 3, title: 'Project Scope', subtitle: 'What you need', icon: Target, color: 'from-green-500 to-green-600' },
    { number: 4, title: 'Requirements', subtitle: 'Technical needs', icon: Zap, color: 'from-orange-500 to-orange-600' },
    { number: 5, title: 'Final Details', subtitle: 'Almost done', icon: Check, color: 'from-emerald-500 to-emerald-600' },
  ];

  const industries = [
    'Real Estate', 'Government', 'Legal', 'Healthcare', 'Technology', 
    'Finance', 'Education', 'Retail', 'Manufacturing', 'Construction',
    'Hospitality', 'Transportation', 'Media & Entertainment', 'Non-Profit', 'Other'
  ];

  const companySizes = [
    'Solo/Freelancer', '2-10 employees', '11-50 employees', '51-200 employees', 
    '201-1000 employees', '1000+ employees'
  ];

  const projectTypes = [
    'New Website', 'Website Redesign', 'E-commerce Platform', 'Mobile App', 
    'Web Application', 'Custom Software', 'Digital Transformation', 
    'SEO & Digital Marketing', 'Branding & Design', 'Consulting Only', 'Other'
  ];

  const projectUrgencies = [
    'ASAP - Very Urgent', 'Within 1 Month', 'Within 3 Months', 
    'Within 6 Months', 'Flexible Timeline'
  ];

  const budgetRanges = [
    '$1K - $5K', '$5K - $15K', '$15K - $50K', '$50K - $100K', 
    '$100K - $250K', '$250K - $500K', '$500K+'
  ];

  const timelines = [
    '2-4 weeks', '1-2 months', '3-4 months', '5-6 months', '6+ months', 'Ongoing project'
  ];

  const featureOptions = [
    'User Authentication', 'Payment Processing', 'Content Management', 'Analytics & Reporting',
    'Real-time Chat', 'API Integration', 'Mobile Responsive', 'SEO Optimization',
    'Multi-language Support', 'Admin Dashboard', 'Email Marketing', 'Social Media Integration'
  ];

  const platformOptions = [
    'Web (Desktop)', 'Mobile (iOS)', 'Mobile (Android)', 'Tablet',
    'Progressive Web App', 'Desktop Application', 'Cross-platform'
  ];

  const integrationOptions = [
    'CRM Systems', 'Payment Gateways', 'Social Media', 'Email Marketing',
    'Analytics Tools', 'Accounting Software', 'Inventory Management', 'Custom APIs'
  ];

  const referralSources = [
    'Google Search', 'Social Media', 'Referral from colleague', 'Industry Event', 
    'Partner/Client recommendation', 'Advertisement', 'Content/Blog', 'Other'
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fieldsToValidate);
    
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
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

  const calculateEstimate = () => {
    const budget = form.getValues('budget');
    const features = form.getValues('features') || [];
    const platforms = form.getValues('platforms') || [];
    
    return {
      timeframe: form.getValues('timeline') || 'TBD',
      complexity: features.length > 6 ? 'High' : features.length > 3 ? 'Medium' : 'Low',
      platforms: platforms.length,
    };
  };

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    console.log('Uploaded files:', uploadedFiles);
    console.log('Project estimate:', calculateEstimate());
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll review your requirements and send you a detailed proposal within 24 hours.",
    });
    
    form.reset();
    setUploadedFiles([]);
    setCurrentStep(1);
    onClose();
  };

  if (!isOpen) return null;

  const currentStepData = steps[currentStep - 1];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden">
        {/* Enhanced Header */}
        <div className={`bg-gradient-to-r ${currentStepData.color} text-white p-8 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <currentStepData.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-light mb-2">Get Your Custom Quote</h2>
                <p className="text-white/90 text-lg">{currentStepData.subtitle}</p>
              </div>
            </div>
            
            {/* Enhanced Progress Bar */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/80 text-sm font-medium">
                  Step {currentStep} of {steps.length}: {currentStepData.title}
                </span>
                <span className="text-white/80 text-sm">
                  {Math.round((currentStep / steps.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-500 ease-out shadow-lg"
                  style={{ width: `${(currentStep / steps.length) * 100}%` }}
                ></div>
              </div>
              
              {/* Step indicators */}
              <div className="flex justify-between mt-6">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = currentStep === step.number;
                  const isCompleted = currentStep > step.number;
                  
                  return (
                    <div key={step.number} className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCompleted ? 'bg-white text-green-600 scale-110' : 
                        isActive ? 'bg-white text-gray-800 scale-110' : 
                        'bg-white/20 text-white/60'
                      }`}>
                        {isCompleted ? <Check className="w-5 h-5" /> : <StepIcon className="w-5 h-5" />}
                      </div>
                      <span className={`text-xs mt-2 text-center hidden sm:block ${
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
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Let's get to know you</h3>
                    <p className="text-gray-600">We'll use this information to personalize your experience</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                            <User className="w-4 h-4 text-blue-600" />
                            First Name *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your first name" 
                              className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
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
                          <FormLabel className="text-gray-700 font-medium">Last Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your last name" 
                              className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
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
                        <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                          <Mail className="w-4 h-4 text-blue-600" />
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your.email@company.com" 
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>We'll send your quote and updates to this email</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                          <Phone className="w-4 h-4 text-blue-600" />
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="+1 (555) 123-4567" 
                            className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>For urgent project discussions and quick clarifications</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 2: Company Information */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Tell us about your organization</h3>
                    <p className="text-gray-600">This helps us understand your business context</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                            <Building className="w-4 h-4 text-purple-600" />
                            Company Name *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="ACME Corporation" 
                              className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
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
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                            <Briefcase className="w-4 h-4 text-purple-600" />
                            Your Position *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="CEO, CTO, Marketing Director..." 
                              className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
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
                          <FormLabel className="text-gray-700 font-medium">Industry *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500">
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
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                            <Users className="w-4 h-4 text-purple-600" />
                            Company Size *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500">
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
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                            <Globe className="w-4 h-4 text-purple-600" />
                            Website (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="url" 
                              placeholder="https://yourcompany.com" 
                              className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>Help us understand your current online presence</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                            <MapPin className="w-4 h-4 text-purple-600" />
                            Location *
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="City, State, Country" 
                              className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
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

              {/* Step 3: Project Scope */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Project scope & requirements</h3>
                    <p className="text-gray-600">Help us understand what you're looking to build</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                            <Target className="w-4 h-4 text-green-600" />
                            Project Type *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500">
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
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                            <Clock className="w-4 h-4 text-green-600" />
                            Project Urgency *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500">
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
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            Budget Range *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500">
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
                          <FormDescription>This helps us recommend the best approach</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                            <Calendar className="w-4 h-4 text-green-600" />
                            Preferred Timeline *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 border-gray-300 focus:border-green-500 focus:ring-green-500">
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
                        <FormLabel className="text-gray-700 font-medium">Project Description *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your project in detail. What challenges are you trying to solve? What are your main objectives?"
                            className="min-h-[120px] border-gray-300 focus:border-green-500 focus:ring-green-500"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>The more details you provide, the better we can help you</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="goals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Primary Goals *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What do you hope to achieve? Increase sales, improve efficiency, better customer experience, etc."
                            className="min-h-[100px] border-gray-300 focus:border-green-500 focus:ring-green-500"
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
                        <FormLabel className="text-gray-700 font-medium">Current Solution (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your current setup, what's working, what's not working..."
                            className="min-h-[80px] border-gray-300 focus:border-green-500 focus:ring-green-500"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Understanding your current situation helps us provide better solutions</FormDescription>
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 4: Technical Requirements */}
              {currentStep === 4 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Technical requirements</h3>
                    <p className="text-gray-600">Select the features and platforms you need</p>
                  </div>

                  {/* Features Selection */}
                  <div>
                    <label className="text-gray-700 font-medium mb-4 block">Required Features *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {featureOptions.map((feature) => {
                        const isSelected = form.watch('features')?.includes(feature);
                        return (
                          <button
                            key={feature}
                            type="button"
                            onClick={() => handleFeatureToggle(feature)}
                            className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                              isSelected 
                                ? 'border-orange-500 bg-orange-50 text-orange-700' 
                                : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50'
                            }`}
                          >
                            {feature}
                          </button>
                        );
                      })}
                    </div>
                    {form.formState.errors.features && (
                      <p className="text-red-500 text-sm mt-2">{form.formState.errors.features.message}</p>
                    )}
                  </div>

                  {/* Platforms Selection */}
                  <div>
                    <label className="text-gray-700 font-medium mb-4 block">Target Platforms *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {platformOptions.map((platform) => {
                        const isSelected = form.watch('platforms')?.includes(platform);
                        return (
                          <button
                            key={platform}
                            type="button"
                            onClick={() => handlePlatformToggle(platform)}
                            className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
                              isSelected 
                                ? 'border-orange-500 bg-orange-50 text-orange-700' 
                                : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50'
                            }`}
                          >
                            {platform}
                          </button>
                        );
                      })}
                    </div>
                    {form.formState.errors.platforms && (
                      <p className="text-red-500 text-sm mt-2">{form.formState.errors.platforms.message}</p>
                    )}
                  </div>

                  {/* Integrations Selection */}
                  <div>
                    <label className="text-gray-700 font-medium mb-4 block">Required Integrations (Optional)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {integrationOptions.map((integration) => {
                        const isSelected = form.watch('integrations')?.includes(integration);
                        return (
                          <button
                            key={integration}
                            type="button"
                            onClick={() => handleIntegrationToggle(integration)}
                            className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 ${
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

              {/* Step 5: Final Details & Summary */}
              {currentStep === 5 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Final details</h3>
                    <p className="text-gray-600">Review your requirements and add any additional information</p>
                  </div>

                  {/* Project Summary */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200">
                    <h4 className="text-lg font-semibold text-emerald-800 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Project Summary
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Project Type:</span>
                        <span className="ml-2 text-gray-600">{form.watch('projectType') || 'Not specified'}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Budget:</span>
                        <span className="ml-2 text-gray-600">{form.watch('budget') || 'Not specified'}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Timeline:</span>
                        <span className="ml-2 text-gray-600">{form.watch('timeline') || 'Not specified'}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Features:</span>
                        <span className="ml-2 text-gray-600">{form.watch('features')?.length || 0} selected</span>
                      </div>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="referralSource"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">How did you hear about us?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500">
                              <SelectValue placeholder="Select source" />
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
                        <FormLabel className="text-gray-700 font-medium">Additional Notes</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any specific requirements, preferences, or questions you'd like to share..."
                            className="min-h-[120px] border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>This is your chance to tell us anything else that might be relevant</FormDescription>
                      </FormItem>
                    )}
                  />

                  {/* File Upload */}
                  <div className="space-y-4">
                    <label className="block text-gray-700 font-medium">
                      Upload Documents (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-500 transition-colors bg-gray-50">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        Drop files here or click to upload
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        Wireframes, mockups, requirements docs, etc. (PDF, DOC, PNG, JPG)
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
                        onClick={() => document.getElementById('file-upload')?.click()}
                        className="text-sm"
                      >
                        Choose Files
                      </Button>
                    </div>
                    
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Uploaded Files:</p>
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                            <span className="text-sm text-gray-600">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Marketing Consent */}
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <input
                      type="checkbox"
                      id="marketing-consent"
                      checked={form.watch('marketingConsent')}
                      onChange={(e) => form.setValue('marketingConsent', e.target.checked)}
                      className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="marketing-consent" className="text-sm text-gray-700">
                      I'd like to receive updates about new services, case studies, and industry insights. 
                      You can unsubscribe at any time.
                    </label>
                  </div>
                </div>
              )}
            </form>
          </Form>
        </div>

        {/* Enhanced Footer */}
        <div className="bg-gray-50 px-8 py-6 flex justify-between items-center border-t border-gray-200">
          <div className="text-sm text-gray-500">
            <span className="hidden sm:inline">Step {currentStep} of {steps.length} • </span>
            <span>Your information is secure and confidential</span>
          </div>
          
          <div className="flex gap-3">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="flex items-center gap-2 px-6"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
            )}
            
            {currentStep < 5 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white flex items-center gap-2 px-6"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={form.handleSubmit(onSubmit)}
                className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white flex items-center gap-2 px-8"
              >
                <Check className="w-4 h-4" />
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
