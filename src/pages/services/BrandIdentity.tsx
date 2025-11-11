import { Palette, CheckCircle, ArrowRight, Lightbulb, Eye, Heart, Target, Layers, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const BrandIdentity = () => {
  const brandValue = [
    "Establishes trust and credibility before the first conversation",
    "Creates instant recognition across every customer touchpoint",
    "Commands premium pricing through perceived value",
    "Builds emotional connections that drive loyalty and retention",
    "Differentiates you from competitors in crowded markets",
    "Provides clarity and consistency for internal teams"
  ];

  const brandComponents = [
    { name: "Visual Identity System", description: "Logo, color palette, typography, iconography, photography style" },
    { name: "Brand Guidelines", description: "Comprehensive usage rules, do's and don'ts, application examples" },
    { name: "Brand Messaging", description: "Voice, tone, key messages, value propositions, taglines" },
    { name: "Digital Assets", description: "Website graphics, social media templates, email signatures" },
    { name: "Marketing Collateral", description: "Business cards, letterhead, presentations, sales materials" },
    { name: "Brand Strategy", description: "Positioning, target audience, competitive differentiation" }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Brand Discovery",
      description: "Deep dive into your business, values, audience, and competitive landscape"
    },
    {
      step: "02",
      title: "Strategy & Positioning",
      description: "Define brand positioning, messaging architecture, and visual direction"
    },
    {
      step: "03",
      title: "Visual Identity Design",
      description: "Create logo, color systems, typography, and all visual brand elements"
    },
    {
      step: "04",
      title: "Guidelines & Rollout",
      description: "Comprehensive brand guidelines and strategic rollout across all touchpoints"
    }
  ];

  const caseStudies = [
    {
      client: "Hougen Pros",
      brand: "Local home services company struggling with brand consistency and perceived value",
      transformation: "Complete brand identity redesign including logo, visual system, and digital presence",
      result: "Established premium market positioning, 40% increase in average project value, 200% growth in qualified leads",
      link: "/portfolio/hougen-pros"
    },
    {
      client: "IAC Centers",
      brand: "Medical practice needing brand refresh to reflect expanded services and modern approach",
      transformation: "Brand strategy, visual identity system, and digital brand experience design",
      result: "Enhanced professional credibility, improved patient trust, 150% increase in new patient acquisition",
      link: "/portfolio/iac-centers"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="A Brand People Believe In | Brand Identity Design | Cardinal Consulting"
        description="We create visual identity systems and brand experiences that inspire trust, clarity, and long-term customer loyalty."
        keywords="brand identity, logo design, brand strategy, visual identity, brand guidelines, branding services, brand positioning, corporate identity"
        servicePage={true}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Brand Identity", url: "/services/brand-identity" }
        ]}
        serviceDetails={{
          name: "Brand Identity Design",
          description: "Visual identity systems and brand experiences that inspire trust and loyalty",
          category: "Brand Design"
        }}
        url="/services/brand-identity"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-slate-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-slate-400 uppercase tracking-wide mb-8">
              <Palette className="w-5 h-5 mr-3" />
              Brand Identity & Experience
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              A Brand People Believe In.
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              We create visual identity systems and brand experiences that inspire trust, clarity, and long-term customer loyalty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact?service=brand-identity">
                <Button className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-slate-500/25">
                  Start Your Brand Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium bg-slate-50 text-slate-950 hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                  View Brand Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Brand Identity Really Does */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              What Brand Identity Really Does
            </h2>
            <p className="text-xl text-gray-600">
              A strong brand identity is a business asset, not just design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandValue.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand System Components */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Brand System Components
            </h2>
            <p className="text-xl text-gray-600">
              A complete identity system for consistent brand expression.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {brandComponents.map((component, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors duration-300">
                  <div className="font-semibold text-gray-900">{component.name}</div>
                  <div className="md:col-span-2 text-gray-600">{component.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Identity Design Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              4-Step Identity Design Process
            </h2>
            <p className="text-xl text-gray-600">
              A strategic approach that ensures your brand resonates with your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((item, index) => (
              <div key={index} className="relative group">
                {index < designProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-slate-200 to-gray-200 z-0 group-hover:from-slate-400 group-hover:to-slate-200 transition-all duration-300"></div>
                )}
                
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 z-10 group-hover:border-slate-200 group-hover:-translate-y-2">
                  <div className="w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-all duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-slate-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Brand Transformations
            </h2>
            <p className="text-xl text-gray-600">
              Real businesses, real brand impact, real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="text-sm font-medium text-slate-600 uppercase tracking-wide mb-2">Client</div>
                    <h3 className="text-2xl font-semibold text-gray-900">{study.client}</h3>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Brand Challenge</div>
                      <p className="text-gray-700">{study.brand}</p>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Transformation</div>
                      <p className="text-gray-700">{study.transformation}</p>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Result</div>
                      <p className="text-gray-900 font-medium">{study.result}</p>
                    </div>
                  </div>
                  
                  <Link to={study.link}>
                    <Button variant="outline" className="w-full group-hover:bg-slate-600 group-hover:text-white group-hover:border-slate-600 transition-all duration-300">
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-600 to-gray-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Build a Brand That Lasts?
          </h2>
          <p className="text-xl text-slate-100 mb-12 leading-relaxed">
            Let's create a brand identity that tells your story and earns customer trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-slate-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-white/25">
                Start Your Brand Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-600 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                View Brand Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandIdentity;
