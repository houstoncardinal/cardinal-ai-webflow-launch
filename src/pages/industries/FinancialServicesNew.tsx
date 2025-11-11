import { DollarSign, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const FinancialServices = () => {
  return (
    <>
      <SEO 
        title="Financial Services Digital Systems | Cardinal Consulting"
        description="Secure, compliant digital platforms for accounting firms, financial advisors, and professional service providers — improving client trust and operational excellence."
        keywords="financial services websites, accounting firm websites, secure client portals, financial planning tools, CPA websites"
        url="/industries/financial-services"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-emerald-600 uppercase tracking-wide mb-6">
              <DollarSign className="w-5 h-5 mr-3" />
              Financial Services Industry
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Digital Systems Designed for the Future of Financial Services
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We design and build secure, high-performance digital platforms for organizations in the financial services sector — improving operational efficiency, client trust, and measurable business outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Your Free Project Roadmap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio/clearledger" className="text-emerald-700 hover:text-emerald-800 px-8 py-4 text-lg font-medium transition-all duration-300 flex items-center">
                View Financial Services Case Studies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-8">
            The Financial Services Landscape is Changing — Your Digital Infrastructure Must Lead
          </h2>
          
          <div className="space-y-4 mb-8">
            {[
              "Client acquisition costs too high with unpredictable referral pipeline",
              "Manual client onboarding creates friction and administrative burden",
              "Insecure document sharing via email creates compliance liability",
              "No systematic demonstration of expertise to attract ideal clients",
              "Lack of audit trails and compliance documentation creates risk"
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-emerald-600 mt-1">•</span>
                <p className="text-lg text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-emerald-600 pl-6 py-4 bg-emerald-50 rounded-r-lg">
            <p className="text-xl text-gray-800 italic">"Digital experience is now a core part of service delivery."</p>
          </blockquote>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            Digital Systems Built for Performance, Trust & Scale
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              "Secure client portals with bank-grade encryption",
              "Professional digital presence that communicates expertise and credibility",
              "Scalable platform for multi-partner firm growth",
              "Integration with accounting software and CRM systems",
              "Clear compliance workflows with built-in audit trails"
            ].map((solution, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{solution}</p>
              </div>
            ))}
          </div>
          
          {/* Capabilities Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Capability</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">What It Improves</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Secure Client Portals", "Document safety, compliance, client confidence"],
                  ["Digital Onboarding Systems", "Efficiency, client experience, data accuracy"],
                  ["Authority-Building Content", "Thought leadership, referral generation, SEO"],
                  ["Financial Planning Tools", "Lead qualification, engagement, value demonstration"],
                  ["Automated Compliance Workflows", "Risk reduction, audit readiness, efficiency"]
                ].map(([capability, improvement], index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-gray-900 font-medium">{capability}</td>
                    <td className="px-6 py-4 text-gray-600">{improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Proven Results in Financial Services</h2>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-10">
              <div className="mb-6">
                <div className="text-sm font-medium text-emerald-600 uppercase tracking-wide mb-2">Case Study</div>
                <h3 className="text-2xl font-semibold text-gray-900">ClearLedger</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Problem</div>
                  <p className="text-lg text-gray-700">New SaaS accounting platform struggling to gain traction in competitive market with limited marketing budget and unclear positioning.</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Strategic Solution</div>
                  <p className="text-lg text-gray-700">Strategic content marketing, technical SEO foundation, conversion pathway optimization, and partner integration showcase to demonstrate platform value.</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Execution</div>
                  <p className="text-lg text-gray-700">Design → Build → Integrate → Optimize</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Measured Results</div>
                  <div className="space-y-2">
                    <p className="text-gray-700">• 250% increase in qualified leads</p>
                    <p className="text-gray-700">• 180% growth in trial signups</p>
                    <p className="text-gray-700">• Established thought leadership in accounting automation</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Replicate These Results → Get Your Free Project Roadmap
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Our Financial Services Digital Development Framework</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Discovery & Alignment",
                description: "We evaluate operational, experiential, and compliance needs."
              },
              {
                number: "2",
                title: "Experience & Interface Design",
                description: "We design interfaces that reduce friction and increase clarity."
              },
              {
                number: "3",
                title: "Engineering & System Integration",
                description: "We develop scalable and secure digital systems aligned with existing tools."
              },
              {
                number: "4",
                title: "Optimization & Growth",
                description: "We support continuous improvement with analytics and performance cycles."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Modernize Your Financial Services Digital Infrastructure?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Let's architect a system that improves workflow efficiency, user experience, and long-term growth.
          </p>
          
          <Link to="/contact">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Get Your Free Project Roadmap
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Financial Services Digital Systems & Web Development",
          "provider": {
            "@type": "Organization",
            "name": "Cardinal Consulting",
            "url": "https://visitcardinal.com"
          },
          "areaServed": "United States",
          "description": "We design and develop digital platforms, workflow systems, and growth infrastructure for the financial services sector."
        })}
      </script>
      
      <Footer />
    </>
  );
};

export default FinancialServices;
