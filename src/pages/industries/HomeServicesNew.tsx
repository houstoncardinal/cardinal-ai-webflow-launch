import { Home, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <>
      <SEO 
        title="Home Services Digital Systems | Cardinal Consulting"
        description="High-performance digital platforms for contractors, HVAC companies, and home service businesses — improving operational efficiency, customer trust, and revenue growth."
        keywords="contractor websites, HVAC website design, home services marketing, local service SEO, contractor lead generation"
        url="/industries/home-services"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-6">
              <Home className="w-5 h-5 mr-3" />
              Home Services Industry
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Digital Systems Designed for the Future of Home Services
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We design and build secure, high-performance digital platforms for organizations in the home services sector — improving operational efficiency, customer trust, and measurable business outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Your Free Project Roadmap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio/hougenpros" className="text-green-700 hover:text-green-800 px-8 py-4 text-lg font-medium transition-all duration-300 flex items-center">
                View Home Services Case Studies
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
            The Home Services Landscape is Changing — Your Digital Infrastructure Must Lead
          </h2>
          
          <div className="space-y-4 mb-8">
            {[
              "High pay-per-click costs ($50-150 per lead) with inconsistent ROI",
              "Seasonal revenue swings create cash flow instability",
              "Poor local visibility loses emergency service requests to competitors",
              "Manual scheduling and dispatch slow response times",
              "No systematic customer retention or referral generation"
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-green-600 mt-1">•</span>
                <p className="text-lg text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded-r-lg">
            <p className="text-xl text-gray-800 italic">"Digital experience is now a core part of service delivery."</p>
          </blockquote>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            Digital Systems Built for Performance, Trust & Scale
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "Emergency booking systems that convert fast and reduce lost leads",
              "Professional digital presence that increases homeowner trust",
              "Scalable platform for multi-location expansion",
              "Integration with scheduling, dispatch, and payment systems",
              "Clear service area targeting that maximizes local visibility"
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
                  ["Emergency Booking Systems", "Response speed, lead capture, conversion rates"],
                  ["Local Service Area SEO", "Google Maps visibility, organic lead volume"],
                  ["Scheduling & Dispatch Tools", "Operational efficiency, customer satisfaction"],
                  ["Maintenance Plan Automation", "Recurring revenue, customer lifetime value"],
                  ["Review & Referral Systems", "Reputation building, word-of-mouth growth"]
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
          <h2 className="text-3xl font-light text-gray-900 mb-12">Proven Results in Home Services</h2>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="text-sm font-medium text-green-600 uppercase tracking-wide mb-2">Case Study</div>
                <h3 className="text-2xl font-semibold text-gray-900">Hougen Pros HVAC</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Problem</div>
                  <p className="text-lg text-gray-700">Seasonal HVAC business struggling with inconsistent lead flow, high customer acquisition costs, and no recurring revenue systems.</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Strategic Solution</div>
                  <p className="text-lg text-gray-700">Complete brand redesign, local SEO optimization across service areas, emergency booking system, and automated maintenance plan subscription platform.</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Execution</div>
                  <p className="text-lg text-gray-700">Design → Build → Integrate → Optimize</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Measured Results</div>
                  <div className="space-y-2">
                    <p className="text-gray-700">• 40% increase in average project value</p>
                    <p className="text-gray-700">• 200% growth in qualified leads</p>
                    <p className="text-gray-700">• Year-round revenue stability through maintenance subscriptions</p>
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
          <h2 className="text-3xl font-light text-gray-900 mb-12">Our Home Services Digital Development Framework</h2>
          
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
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Modernize Your Home Services Digital Infrastructure?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Let's architect a system that improves workflow efficiency, user experience, and long-term growth.
          </p>
          
          <Link to="/contact">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
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
          "serviceType": "Home Services Digital Systems & Web Development",
          "provider": {
            "@type": "Organization",
            "name": "Cardinal Consulting",
            "url": "https://visitcardinal.com"
          },
          "areaServed": "United States",
          "description": "We design and develop digital platforms, workflow systems, and growth infrastructure for the home services sector."
        })}
      </script>
      
      <Footer />
    </>
  );
};

export default HomeServices;
