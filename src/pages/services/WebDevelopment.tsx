import { Code, CheckCircle, ArrowRight, Globe, Zap, TrendingUp, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const WebDevelopment = () => {
  const differentiators = [
    {
      title: "Conversion Engineering",
      description: "Every element optimized for user action and measurable business outcomes"
    },
    {
      title: "Performance First",
      description: "Sub-2-second load times, 99.9% uptime, Core Web Vitals excellence"
    },
    {
      title: "SEO Architecture",
      description: "Search-optimized structure built into every page from day one"
    },
    {
      title: "Scalable Foundation",
      description: "Modern tech stack that grows with traffic, content, and complexity"
    }
  ];

  const capabilities = [
    { capability: "Custom Websites", description: "Tailored design and functionality" },
    { capability: "E-commerce Platforms", description: "Complete online store solutions" },
    { capability: "CMS Integration", description: "Easy content management" },
    { capability: "SEO Optimization", description: "Search engine dominance" },
    { capability: "Analytics & Tracking", description: "Data-driven insights" },
    { capability: "Security & Compliance", description: "Enterprise-grade protection" }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy",
      description: "Business analysis, competitive research, technical planning, conversion mapping"
    },
    {
      step: "02",
      title: "Design",
      description: "UX wireframes, visual design, interactive prototypes, stakeholder review"
    },
    {
      step: "03",
      title: "Build",
      description: "Modern development, performance optimization, rigorous QA testing"
    },
    {
      step: "04",
      title: "Launch",
      description: "Deployment, monitoring setup, analytics configuration, ongoing support"
    }
  ];

  const metrics = [
    { value: "300%", label: "Avg. Revenue Increase" },
    { value: "2.1s", label: "Avg. Load Time" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "67%", label: "Avg. Conversion Lift" }
  ];

  const caseStudies = [
    {
      client: "ABQ MRI",
      industry: "Healthcare",
      problem: "Outdated website with poor mobile experience limiting patient acquisition and online bookings",
      solution: "Complete redesign with mobile-first architecture, custom patient portal, and integrated booking system",
      results: [
        "300% revenue growth in 12 months",
        "500% increase in online bookings",
        "85% reduction in phone inquiries"
      ]
    },
    {
      client: "ClearLedger Solutions",
      industry: "Financial Services",
      problem: "Generic template site failing to convert qualified leads or communicate expertise",
      solution: "Custom brand identity and website with trust signals, service showcase, and lead qualification system",
      results: [
        "240% increase in qualified leads",
        "4.9/5 client satisfaction rating",
        "60% reduction in unqualified inquiries"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Web Development Services | Cardinal Consulting"
        description="We design and develop high-performance websites that convert visitors into customers and scale with your business — built on modern tech, optimized for speed, SEO, and measurable results."
        keywords="web development, custom websites, e-commerce, SEO optimization, performance optimization, web design"
        servicePage={true}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Web Development", url: "/services/web-development" }
        ]}
        serviceDetails={{
          name: "Web Development Services",
          description: "High-performance websites engineered for growth and conversion",
          category: "Web Development"
        }}
        url="/services/web-development"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Websites Engineered
              <span className="block text-green-400 font-normal">for Growth.</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              We design and develop high-performance websites that convert visitors into customers and scale with your business — built on modern tech, optimized for speed, SEO, and measurable results.
            </p>
            
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-6 rounded-xl text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl">
                Get Your Free Project Roadmap
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Our Websites Different */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              What Makes Our Websites Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Performance-engineered platforms built for business impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Core Capabilities
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Capability</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {capabilities.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 font-medium text-gray-900">{item.capability}</td>
                    <td className="px-8 py-6 text-gray-600">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic, efficient, and transparent from concept to launch
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-gray-100 mb-4">{step.step}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact Metrics */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Business Impact
            </h2>
            <p className="text-xl text-green-100">
              Measured results from strategic digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-green-100 text-lg">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Client Results
            </h2>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-sm font-semibold text-green-600 uppercase tracking-wide">{study.industry}</div>
                    <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
                    <div className="text-lg font-semibold text-gray-900">{study.client}</div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Problem</h3>
                      <p className="text-gray-700 leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Solution</h3>
                      <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <Link to="/contact">
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        Replicate This Success
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Get a detailed project roadmap, timeline, and cost estimate within 24 hours
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-6 rounded-xl text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl">
              Get Your Free Project Roadmap
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
