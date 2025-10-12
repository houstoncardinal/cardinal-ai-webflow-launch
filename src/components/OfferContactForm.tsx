import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, Calendar, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface OfferContactFormProps {
  offer: string;
  language?: 'en' | 'es';
}

const formSchema = z.object({
  firstName: z.string()
    .trim()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "First name can only contain letters" }),
  lastName: z.string()
    .trim()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Last name can only contain letters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .transform(val => val.toLowerCase()),
  phone: z.string()
    .trim()
    .regex(/^[\d\s()+-]+$/, { message: "Please enter a valid phone number" })
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  company: z.string()
    .trim()
    .max(100, { message: "Company name must be less than 100 characters" })
    .optional(),
  projectType: z.string()
    .min(1, { message: "Please select a project type" }),
  timeline: z.string()
    .min(1, { message: "Please select a timeline" }),
  budget: z.string().optional(),
  projectDescription: z.string()
    .trim()
    .min(10, { message: "Please provide at least 10 characters" })
    .max(2000, { message: "Description must be less than 2000 characters" })
});

type FormValues = z.infer<typeof formSchema>;

const OfferContactForm = ({ offer, language = 'en' }: OfferContactFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      timeline: '',
      budget: '',
      projectDescription: ''
    }
  });

  const texts = {
    en: {
      title: "Claim Your $500 Savings + Free SEO Setup",
      subtitle: "Get your custom quote in under 24 hours",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name",
      projectType: "Project Type",
      projectDescription: "Tell us about your project",
      timeline: "Desired Timeline",
      budget: "Estimated Budget",
      submit: "Claim My Offer",
      success: "Success! We'll contact you within 24 hours.",
      error: "Something went wrong. Please try again.",
      budgetRanges: {
        "1000-3000": "$1,000 - $3,000",
        "3000-5000": "$3,000 - $5,000", 
        "5000-10000": "$5,000 - $10,000",
        "10000+": "$10,000+"
      },
      projectTypes: {
        "new-website": "New Website",
        "redesign": "Website Redesign",
        "ecommerce": "E-commerce Store",
        "web-app": "Web Application",
        "mobile-app": "Mobile App",
        "other": "Other"
      },
      timelines: {
        "asap": "ASAP",
        "1-month": "Within 1 Month",
        "2-3months": "2-3 Months",
        "flexible": "Flexible"
      }
    },
    es: {
      title: "Reclama tu Descuento de $500 + SEO Gratis",
      subtitle: "Obtén tu cotización personalizada en menos de 24 horas",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo Electrónico",
      phone: "Teléfono",
      company: "Empresa",
      projectType: "Tipo de Proyecto",
      projectDescription: "Cuéntanos sobre tu proyecto",
      timeline: "Cronograma Deseado",
      budget: "Presupuesto Estimado",
      submit: "Reclamar Oferta",
      success: "¡Éxito! Te contactaremos en 24 horas.",
      error: "Algo salió mal. Inténtalo de nuevo.",
      budgetRanges: {
        "1000-3000": "$1,000 - $3,000",
        "3000-5000": "$3,000 - $5,000",
        "5000-10000": "$5,000 - $10,000",
        "10000+": "$10,000+"
      },
      projectTypes: {
        "new-website": "Sitio Web Nuevo",
        "redesign": "Rediseño de Sitio",
        "ecommerce": "Tienda Online",
        "web-app": "Aplicación Web",
        "mobile-app": "App Móvil",
        "other": "Otro"
      },
      timelines: {
        "asap": "Lo antes posible",
        "1-month": "En 1 Mes",
        "2-3months": "2-3 Meses",
        "flexible": "Flexible"
      }
    }
  };

  const t = texts[language];

  const handleSubmit = async (values: FormValues) => {
    try {
      // Sanitize values
      const sanitizedData = {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim().toLowerCase(),
        phone: values.phone.trim(),
        company: values.company?.trim() || 'Not provided',
        projectDescription: values.projectDescription.trim(),
        projectType: values.projectType,
        timeline: values.timeline,
        budget: values.budget || 'Not specified'
      };
      
      // Submit to database first
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: sanitizedData.firstName,
          last_name: sanitizedData.lastName,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          company: sanitizedData.company,
          message: sanitizedData.projectDescription,
          project_type: sanitizedData.projectType,
          timeline: sanitizedData.timeline,
          budget: sanitizedData.budget,
          source: 'offer_landing_page',
          language: language,
          status: 'new'
        });

      if (dbError) throw dbError;

      // Also submit to Netlify as backup
      const formData = new FormData();
      Object.entries(sanitizedData).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append('form-name', 'offer-contact');
      formData.append('offer', offer);
      formData.append('language', language);

      await fetch("/", {
        method: "POST",
        body: formData,
      });

      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: language === 'en' ? "We'll contact you within 24 hours." : "Te contactaremos en 24 horas.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: t.error,
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-600 mb-2">{t.success}</h3>
            <p className="text-gray-600">
              {language === 'en' 
                ? "We've received your request and will prepare a custom proposal for you."
                : "Hemos recibido tu solicitud y prepararemos una propuesta personalizada."
              }
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative w-full max-w-2xl mx-auto shadow-xl border-0 bg-white/90 backdrop-blur-sm z-10">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          {t.title}
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          {t.subtitle}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(handleSubmit)}
            name="offer-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-6"
          >
            {/* Netlify form detection */}
            <input type="hidden" name="form-name" value="offer-contact" />
            <input type="hidden" name="offer" value={offer} />
            <input type="hidden" name="language" value={language} />
            
            {/* Honeypot field */}
            <div className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {t.firstName} *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20" />
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
                    <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {t.lastName} *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {t.email} *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="email" className="h-12 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {t.phone} *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="tel" className="h-12 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">{t.company}</FormLabel>
                  <FormControl>
                    <Input {...field} className="h-12 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">{t.projectType} *</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="w-full h-12 border-gray-300 focus:border-green-500 bg-white">
                          <SelectValue placeholder={language === 'en' ? "Select project type" : "Selecciona tipo"} />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 shadow-lg z-[100] max-h-[300px] overflow-y-auto min-w-[var(--radix-select-trigger-width)]">
                          {Object.entries(t.projectTypes).map(([value, label]) => (
                            <SelectItem key={value} value={value} className="cursor-pointer hover:bg-green-50">{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {t.timeline} *
                    </FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="w-full h-12 border-gray-300 focus:border-green-500 bg-white">
                          <SelectValue placeholder={language === 'en' ? "Select timeline" : "Selecciona cronograma"} />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 shadow-lg z-[100] max-h-[300px] overflow-y-auto min-w-[var(--radix-select-trigger-width)]">
                          {Object.entries(t.timelines).map(([value, label]) => (
                            <SelectItem key={value} value={value} className="cursor-pointer hover:bg-green-50">{label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    {t.budget}
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full h-12 border-gray-300 focus:border-green-500 bg-white">
                        <SelectValue placeholder={language === 'en' ? "Select budget range" : "Selecciona presupuesto"} />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg z-[100] max-h-[300px] overflow-y-auto min-w-[var(--radix-select-trigger-width)]">
                        {Object.entries(t.budgetRanges).map(([value, label]) => (
                          <SelectItem key={value} value={value} className="cursor-pointer hover:bg-green-50">{label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">{t.projectDescription} *</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field}
                      rows={4}
                      placeholder={language === 'en' 
                        ? "Tell us about your goals, current challenges, and what you envision..."
                        : "Cuéntanos sobre tus objetivos, desafíos actuales y lo que visualizas..."
                      }
                      className="border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={form.formState.isSubmitting}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {form.formState.isSubmitting ? (language === 'en' ? "Submitting..." : "Enviando...") : t.submit}
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              {language === 'en' 
                ? "By submitting, you agree to receive communications about your project. We never share your information."
                : "Al enviar, aceptas recibir comunicaciones sobre tu proyecto. Nunca compartimos tu información."
              }
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default OfferContactForm;