import { Smartphone, CheckCircle, ArrowRight, Zap, Shield, TrendingUp, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const MobileApplications = () => {
  const differentiators = [
    "Built for scalability — handle 10x growth without performance degradation",
    "99.9% uptime with enterprise-grade infrastructure and monitoring",
    "Security-first architecture with data encryption and compliance standards",
    "Cross-platform development reducing time-to-market by 40%"
  ];

  const capabilities = [
    { capability: "Native Mobile Apps", description: "iOS and Android optimized for performance" },
    { capability: "Cross-Platform Apps", description: "React Native & Flutter solutions" },
    { capability: "Progressive Web Apps", description: "Web-based mobile experiences" },
    { capability: "Workflow Automation Tools", description: "Internal process optimization" },
    { capability: "Client Portals", description: "Secure customer access platforms" },
    { capability: "Booking & Scheduling", description: "Automated appointment systems" },
    { capability: "API Integrations", description: "Connect to existing systems" },
    { capability: "Real-time Features", description: "Live updates and notifications" }
  ];

  const framework = [
    {
      step: "01",
      title: "Define",
      description: "Business requirements, technical architecture, user flows, and feasibility analysis"
    },
    {
      step: "02",
      title: "Design",
      description: "UX wireframes, UI design systems, interactive prototypes, and user testing"
    },
    {
      step: "03",
      title: "Develop",
      description: "Agile sprints, continuous testing, performance optimization, security audits"
    },
    {
      step: "04",
      title: "Deploy",
      description: "App store submission, monitoring setup, user analytics, ongoing support"
    }
  ];

  const standards = [
    { metric: "99.9%", label: "Uptime SLA" },
    { metric: "<100ms", label: "API Response Time" },
    { metric: "A+", label: "Security Rating" },
    { metric: "4.8★", label: "Avg. User Rating" }
  ];

  const caseStudies = [
    {
      client: "APN Clinic",
      industry: "Healthcare",
      challenge: "Manual appointment scheduling causing staff bottlenecks and patient frustration",
      solution: "Custom booking app with automated scheduling, SMS reminders, and integrated payment processing",
      result: [
        "75% reduction in phone call volume",
        "90% appointment confirmation rate",
        "40% increase in booking capacity"
      ]
    },
    {
      client: "Hougen Pros",
      industry: "Field Services",
      challenge: "Disconnected field teams with no real-time job tracking or customer communication",
      solution: "Mobile workforce management app with GPS tracking, job routing, and customer notifications",
      result: [
        "50% faster job completion times",
        "35% improvement in customer satisfaction",
        "60% reduction in administrative overhead"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Mobile App Development Services | Cardinal Consulting"
        description="We design and develop mobile and web applications that automate workflows, improve customer experience, and unlock new revenue — engineered for scalability, performance, and long-term growth."
        keywords="mobile app development, custom applications, workflow automation, client portals, iOS apps, Android apps, cross-platform development"
        servicePage={true}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Mobile Applications", url: "/services/mobile-applications" }
        ]}
        serviceDetails={{
          name: "Mobile Application Development",
          description: "Custom applications that power real business operations",
          category: "Mobile Development"
        }}
        url="/services/mobile-applications"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Apps That Power
              <span className="block text-emerald-400 font-normal">Real Business.</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              We design and develop mobile and web applications that automate workflows, improve customer experience, and unlock new revenue — engineered for scalability, performance, and long-term growth.
            </p>
            
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-10 py-6 rounded-xl text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl">
                Get Your Free Project Roadmap
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Our Apps Are Different */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Why Our Apps Are Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade reliability with startup speed
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Capabilities
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Application Type</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-900">Use Case</th>
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

      {/* 4-Step Framework */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              App Development Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to App Store in record time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {framework.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-gray-100 mb-4">{step.step}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance & Reliability Standards */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-green-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Performance & Reliability Standards
            </h2>
            <p className="text-xl text-emerald-100">
              Enterprise-grade benchmarks for every application
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">{standard.metric}</div>
                <div className="text-emerald-100 text-lg">{standard.label}</div>
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
                    <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">{study.industry}</div>
                    <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
                    <div className="text-lg font-semibold text-gray-900">{study.client}</div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Challenge</h3>
                      <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Solution</h3>
                      <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Result</h3>
                      <ul className="space-y-2">
                        {study.result.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <Link to="/contact">
                      <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                        Build Your App
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
            Ready to Build Your Application?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Get a detailed technical roadmap, timeline, and cost estimate within 24 hours
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-10 py-6 rounded-xl text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl">
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

export default MobileApplications;
