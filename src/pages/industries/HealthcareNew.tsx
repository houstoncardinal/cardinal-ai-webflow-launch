import { Heart, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const Healthcare = () => {
  return (
    <>
      <SEO 
        title="Healthcare Digital Systems | Cardinal Consulting"
        description="Secure, patient-centered digital platforms for clinics, medical networks, and healthcare providers — improving operational efficiency, patient experience, and trust."
        keywords="healthcare web development, medical practice websites, patient portals, HIPAA compliant systems, healthcare digital transformation"
        url="/industries/healthcare"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-blue-600 uppercase tracking-wide mb-6">
              <Heart className="w-5 h-5 mr-3" />
              Healthcare Industry
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Digital Systems Designed for the Future of Healthcare
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We develop secure, patient-centered digital platforms for clinics, medical networks, and healthcare providers — improving operational efficiency, patient experience, and trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Your Free Project Roadmap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio/abq-mri" className="text-blue-700 hover:text-blue-800 px-8 py-4 text-lg font-medium transition-all duration-300 flex items-center">
                View Healthcare Case Studies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-8">
            Modern Healthcare Requires Modern Digital Infrastructure
          </h2>
          
          <div className="space-y-4 mb-8">
            {[
              "Outdated platforms create friction for patients and staff",
              "Manual processes slow down care delivery and scheduling",
              "Lack of integration forces duplicated work across systems",
              "Poor digital experience reduces patient trust and retention",
              "Compliance & privacy requirements require strategic development"
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-blue-600 mt-1">•</span>
                <p className="text-lg text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
            <p className="text-xl text-gray-800 italic">"Digital experience is now a core part of patient care."</p>
          </blockquote>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            Healthcare Digital Systems Built for Efficiency, Trust & Scalability
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "Patient scheduling and onboarding automation",
              "Simplified intake workflows and document flow",
              "HIPAA-aligned data protection and platform security",
              "Modern patient portals for transparency and self-service",
              "Seamless EMR/EHR + practice management integrations",
              "Growth systems built for referral and local search expansion"
            ].map((solution, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg">
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
                  ["Healthcare Web Design", "Patient trust, clarity, conversion"],
                  ["Patient Portals & Dashboards", "Transparency & self-service"],
                  ["Scheduling & Intake Systems", "Workflow efficiency, reduced admin load"],
                  ["Clinic & Staff Operations Apps", "Productivity & coordination"],
                  ["Local SEO for Medical Practices", "Patient appointment volume"]
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Proven Results in Healthcare</h2>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-2">Case Study</div>
                <h3 className="text-2xl font-semibold text-gray-900">ABQ MRI & Diagnostic Imaging</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Problem</div>
                  <p className="text-lg text-gray-700">Outdated digital experience, manual scheduling bottlenecks, low patient engagement.</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Strategic Solution</div>
                  <p className="text-lg text-gray-700">Redesigned patient-facing website, implemented streamlined scheduling system aligned to medical workflows, optimized local search presence.</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Execution</div>
                  <p className="text-lg text-gray-700">Design → Workflow Mapping → Platform Development → Deployment & Optimization</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Measured Outcomes</div>
                  <div className="space-y-2">
                    <p className="text-gray-700">• 174% increase in scheduled patient scans</p>
                    <p className="text-gray-700">• 38% reduction in staff scheduling workload</p>
                    <p className="text-gray-700">• Higher patient clarity & reduced call volume</p>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Our Healthcare Development Framework</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1",
                title: "Discovery & Compliance Alignment",
                description: "We assess clinical workflow, patient journey, privacy requirements, and operational constraints."
              },
              {
                number: "2",
                title: "Patient & Staff Experience Design",
                description: "We design interfaces and flows that reduce friction and support everyday users."
              },
              {
                number: "3",
                title: "Engineering & System Integration",
                description: "Secure, scalable development with compatibility for EMR/EHR and practice management systems."
              },
              {
                number: "4",
                title: "Optimization & Ongoing Support",
                description: "Continuous improvement through analytics and workflow feedback."
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Modernize Your Healthcare Digital Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's design a system that strengthens patient trust, improves operational performance, and supports sustainable growth.
          </p>
          
          <Link to="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
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
          "serviceType": "Healthcare Web Development & Digital Systems",
          "provider": {
            "@type": "Organization",
            "name": "Cardinal Consulting",
            "url": "https://visitcardinal.com"
          },
          "areaServed": "United States",
          "description": "Custom digital platforms, patient portals, scheduling systems, and growth infrastructure for healthcare organizations."
        })}
      </script>
      
      <Footer />
    </>
  );
};

export default Healthcare;
