import { Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const RealEstate = () => {
  return (
    <>
      <SEO 
        title="Real Estate Digital Systems | Cardinal Consulting"
        description="High-performance digital platforms for real estate brokers, agencies, and property management — improving operational efficiency, client engagement, and deal velocity."
        keywords="real estate website design, IDX websites, realtor websites, property listing sites, real estate digital transformation"
        url="/industries/real-estate"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-orange-600 uppercase tracking-wide mb-6">
              <Building2 className="w-5 h-5 mr-3" />
              Real Estate Industry
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Digital Systems Designed for the Future of Real Estate
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We design and build secure, high-performance digital platforms for organizations in the real estate sector — improving operational efficiency, client trust, and measurable business outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Your Free Project Roadmap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio" className="text-orange-700 hover:text-orange-800 px-8 py-4 text-lg font-medium transition-all duration-300 flex items-center">
                View Real Estate Case Studies
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
            The Real Estate Landscape is Changing — Your Digital Infrastructure Must Lead
          </h2>
          
          <div className="space-y-4 mb-8">
            {[
              "Dependence on Zillow and portal listings limits brand control and lead quality",
              "Manual processes slow down listing updates and buyer communication",
              "Poor mobile experience loses buyers during critical search moments",
              "Competitors with modern platforms capture more market share",
              "Lack of automation creates inefficient follow-up and lost opportunities"
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-orange-600 mt-1">•</span>
                <p className="text-lg text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-orange-600 pl-6 py-4 bg-orange-50 rounded-r-lg">
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
              "Streamlined property showcase and search experience",
              "Professional digital presence that increases buyer and seller trust",
              "Scalable platform backbone for growing property inventory",
              "Integration with MLS, IDX, and CRM systems",
              "Clear, intuitive user flows that convert browsers to qualified leads"
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
                  ["IDX-Integrated Websites", "Automatic MLS updates, advanced property search"],
                  ["Buyer & Seller Portals", "Lead qualification, engagement, transparency"],
                  ["Automated Lead Nurturing", "Follow-up efficiency, conversion rates"],
                  ["Neighborhood SEO Strategy", "Local visibility, qualified buyer traffic"],
                  ["Virtual Tour Integration", "Remote engagement, reduced showing volume"]
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
          <h2 className="text-3xl font-light text-gray-900 mb-12">Proven Results in Real Estate</h2>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-10">
              <div className="mb-6">
                <div className="text-sm font-medium text-orange-600 uppercase tracking-wide mb-2">Case Study</div>
                <h3 className="text-2xl font-semibold text-gray-900">Southwest Realty Group</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Problem</div>
                  <p className="text-lg text-gray-700">High dependence on Zillow leads ($8K/month) with poor conversion, limited brand recognition, no systematic lead nurturing.</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Strategic Solution</div>
                  <p className="text-lg text-gray-700">Custom IDX website with neighborhood SEO, property alerts, automated lead nurturing system, and virtual tour integration.</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Execution</div>
                  <p className="text-lg text-gray-700">Design → Build → Integrate → Optimize</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Measured Results</div>
                  <div className="space-y-2">
                    <p className="text-gray-700">• 70% reduction in portal spend</p>
                    <p className="text-gray-700">• 240+ qualified leads per month organically</p>
                    <p className="text-gray-700">• $2.1M in closed deals from website traffic</p>
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
          <h2 className="text-3xl font-light text-gray-900 mb-12">Our Real Estate Digital Development Framework</h2>
          
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
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
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
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Modernize Your Real Estate Digital Infrastructure?
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Let's architect a system that improves workflow efficiency, user experience, and long-term growth.
          </p>
          
          <Link to="/contact">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
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
          "serviceType": "Real Estate Digital Systems & Web Development",
          "provider": {
            "@type": "Organization",
            "name": "Cardinal Consulting",
            "url": "https://visitcardinal.com"
          },
          "areaServed": "United States",
          "description": "We design and develop digital platforms, workflow systems, and growth infrastructure for the real estate sector."
        })}
      </script>
      
      <Footer />
    </>
  );
};

export default RealEstate;
