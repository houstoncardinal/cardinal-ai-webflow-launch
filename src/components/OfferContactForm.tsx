import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, Calendar, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OfferContactFormProps {
  offer: string;
  language?: 'en' | 'es';
}

const OfferContactForm = ({ offer, language = 'en' }: OfferContactFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Submit to Netlify
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: language === 'en' ? "We'll contact you within 24 hours." : "Te contactaremos en 24 horas.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: t.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
        <form 
          onSubmit={handleSubmit}
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
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {t.firstName} *
              </label>
              <Input name="firstName" required className="h-12 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {t.lastName} *
              </label>
              <Input name="lastName" required className="h-12 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {t.email} *
              </label>
              <Input name="email" type="email" required className="h-12 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {t.phone} *
              </label>
              <Input name="phone" type="tel" required className="h-12 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{t.company}</label>
            <Input name="company" className="h-12 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20" />
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{t.projectType} *</label>
              <Select value={projectType} onValueChange={setProjectType} required>
                <SelectTrigger className="w-full h-12 border-gray-300 focus:border-green-500 bg-white">
                  <SelectValue placeholder={language === 'en' ? "Select project type" : "Selecciona tipo"} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg z-[100] max-h-[300px] overflow-y-auto min-w-[var(--radix-select-trigger-width)]">
                  {Object.entries(t.projectTypes).map(([value, label]) => (
                    <SelectItem key={value} value={value} className="cursor-pointer hover:bg-green-50">{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" name="projectType" value={projectType} required />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {t.timeline} *
              </label>
              <Select value={timeline} onValueChange={setTimeline} required>
                <SelectTrigger className="w-full h-12 border-gray-300 focus:border-green-500 bg-white">
                  <SelectValue placeholder={language === 'en' ? "Select timeline" : "Selecciona cronograma"} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg z-[100] max-h-[300px] overflow-y-auto min-w-[var(--radix-select-trigger-width)]">
                  {Object.entries(t.timelines).map(([value, label]) => (
                    <SelectItem key={value} value={value} className="cursor-pointer hover:bg-green-50">{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" name="timeline" value={timeline} required />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              {t.budget}
            </label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger className="w-full h-12 border-gray-300 focus:border-green-500 bg-white">
                <SelectValue placeholder={language === 'en' ? "Select budget range" : "Selecciona presupuesto"} />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-[100] max-h-[300px] overflow-y-auto min-w-[var(--radix-select-trigger-width)]">
                {Object.entries(t.budgetRanges).map(([value, label]) => (
                  <SelectItem key={value} value={value} className="cursor-pointer hover:bg-green-50">{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input type="hidden" name="budget" value={budget} />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{t.projectDescription} *</label>
            <Textarea 
              name="projectDescription" 
              required
              rows={4}
              placeholder={language === 'en' 
                ? "Tell us about your goals, current challenges, and what you envision..."
                : "Cuéntanos sobre tus objetivos, desafíos actuales y lo que visualizas..."
              }
              className="border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isSubmitting ? (language === 'en' ? "Submitting..." : "Enviando...") : t.submit}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            {language === 'en' 
              ? "By submitting, you agree to receive communications about your project. We never share your information."
              : "Al enviar, aceptas recibir comunicaciones sobre tu proyecto. Nunca compartimos tu información."
            }
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default OfferContactForm;