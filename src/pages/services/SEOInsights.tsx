import { Search, CheckCircle, ArrowRight, BarChart3, Target, TrendingUp, Eye, Globe, FileText, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const SEOInsights = () => {
  const differentiators = [
    "Revenue-first optimization — we prioritize conversions over vanity metrics",
    "Full-funnel visibility — from search to sale, we track and optimize every touchpoint",
    "Technical excellence — fast sites, clean code, and search engine compliance",
    "Strategic content — built for humans first, optimized for algorithms second",
    "Data-driven decisions — analytics and testing inform every strategy adjustment",
    "Long-term growth systems — sustainable pipelines, not temporary traffic spikes"
  ];

  const capabilities = [
    { name: "Technical SEO", description: "Site speed, crawlability, structured data, mobile optimization" },
    { name: "Content Strategy", description: "Keyword research, pillar pages, blog content, conversion copy" },
    { name: "Conversion Pathways", description: "Landing page optimization, CTA strategy, funnel design" },
    { name: "Local SEO", description: "Google Business Profile, local citations, geo-targeted content" },
    { name: "Landing Pages", description: "High-converting pages designed for specific search intent" },
    { name: "Analytics & Reporting", description: "Performance tracking, ROI measurement, actionable insights" }
  ];

  const growthFramework = [
    {
      step: "01",
      title: "Search Audit & Strategy",
      description: "Technical site audit, competitor analysis, keyword research, and growth roadmap development"
    },
    {
      step: "02",
      title: "Technical Optimization",
      description: "Site speed improvements, mobile optimization, structured data, and crawlability fixes"
    },
    {
      step: "03",
      title: "Content & Conversion",
      description: "Strategic content creation, landing page optimization, and conversion pathway design"
    },
    {
      step: "04",
      title: "Monitor & Scale",
      description: "Performance tracking, A/B testing, strategy refinement, and continuous improvement"
    }
  ];

  const caseStudies = [
    {
      client: "ABQ MRI",
      problem: "Low online visibility and poor conversion rates limiting patient acquisition",
      solution: "Comprehensive technical SEO overhaul, local search optimization, and conversion-focused landing pages",
      result: "300% increase in organic traffic, 500% growth in online bookings, #1 rankings for key local terms",
      link: "/portfolio/abq-mri"
    },
    {
      client: "ClearLedger",
      problem: "New SaaS product struggling to gain traction in competitive accounting software market",
      solution: "Strategic content marketing, technical SEO foundation, and conversion pathway optimization",
      result: "250% increase in qualified leads, 180% growth in trial signups, established market authority",
      link: "/portfolio/clearledger"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Search Visibility that Converts | SEO Services | Cardinal Consulting"
        description="We develop inbound growth systems that increase traffic quality, improve lead flow, and create predictable revenue — backed by analytics and strategic execution."
        keywords="SEO services, search engine optimization, SEO analytics, conversion optimization, technical SEO, content strategy, local SEO"
        servicePage={true}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "SEO & Growth Systems", url: "/services/seo-insights" }
        ]}
        serviceDetails={{
          name: "SEO & Growth Systems",
          description: "Inbound growth systems that increase traffic quality and create predictable revenue",
          category: "SEO & Analytics"
        }}
        url="/services/seo-insights"
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
              <Search className="w-5 h-5 mr-3" />
              SEO & Growth Systems
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Search Visibility that Converts.
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              We develop inbound growth systems that increase traffic quality, improve lead flow, and create predictable revenue — backed by analytics and strategic execution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact?service=seo-optimization">
                <Button className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-500 hover:to-slate-400 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-slate-500/25">
                  Get Your Free Growth Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium text-slate-950 bg-slate-50 hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                  View Results
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our SEO Is Different */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Why Our SEO Is Different
            </h2>
            <p className="text-xl text-gray-600">
              We focus on business outcomes, not just rankings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Full-spectrum SEO and growth optimization services.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {capabilities.map((capability, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors duration-300">
                  <div className="font-semibold text-gray-900">{capability.name}</div>
                  <div className="md:col-span-2 text-gray-600">{capability.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Growth System Framework */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              4-Step Growth System
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology for sustainable search visibility and revenue growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthFramework.map((item, index) => (
              <div key={index} className="relative group">
                {index < growthFramework.length - 1 && (
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
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Real clients, real growth, real revenue impact.
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
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Problem</div>
                      <p className="text-gray-700">{study.problem}</p>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Solution</div>
                      <p className="text-gray-700">{study.solution}</p>
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
            Ready to Build a Predictable Growth System?
          </h2>
          <p className="text-xl text-slate-100 mb-12 leading-relaxed">
            Get a custom SEO and conversion strategy designed for your business goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-slate-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-white/25">
                Get Your Free Growth Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-600 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOInsights;
