import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ABQMRI = () => {
  return (
    <>
      {/* <!-- SCHEMA HERE: LocalBusiness + MedicalBusiness --> */}
      <SEO 
        title="ABQ MRI Case Study | Cardinal Consulting"
        description="300% increase in organic traffic and 500% growth in online bookings for New Mexico's leading medical imaging center."
        keywords="ABQ MRI, medical imaging website, healthcare SEO, patient portal, case study"
        url="/portfolio/abq-mri"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-blue-600 uppercase tracking-wide mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-blue-600 mr-6"></div>
              Healthcare Industry
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              ABQ MRI
              <span className="block text-blue-600 font-normal mt-2">
                Advanced Medical Imaging
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Medical imaging center specializing in MRI, X-Ray, NCV, and EEG diagnostics for traumatic brain injuries and personal injury cases in New Mexico.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Healthcare</span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Medical Imaging</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Patient Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Background */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Client Background</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            ABQ MRI is a leading medical imaging provider in Albuquerque, New Mexico, offering comprehensive diagnostic services including MRI, X-Ray, NCV, and EEG. They specialize in serving patients involved in auto accidents and personal injury cases, providing compassionate care during stressful medical situations.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Despite their excellent medical services and reputation, their digital presence wasn't generating the patient volume needed to support growth and expansion plans.
          </p>
        </div>
      </section>

      {/* Core Problem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Core Problem</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            ABQ MRI faced three critical digital challenges:
          </p>
          
          <div className="space-y-4">
            <Card className="border-l-4 border-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Low Online Visibility</h3>
                <p className="text-gray-600">Not appearing in local search results when patients searched for medical imaging services, losing qualified leads to competitors.</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Poor Conversion Rates</h3>
                <p className="text-gray-600">Outdated website design and confusing navigation caused high bounce rates and prevented visitors from booking appointments.</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Limited Patient Education</h3>
                <p className="text-gray-600">No resources to help patients understand procedures, creating anxiety and reducing appointment completion rates.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Strategic Approach</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Cardinal developed a comprehensive digital transformation strategy focused on three core pillars:
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical SEO Foundation</h3>
                <p className="text-gray-600">Complete site audit and optimization for local medical imaging keywords, schema markup implementation, and Google Business Profile optimization.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversion-Focused Redesign</h3>
                <p className="text-gray-600">Mobile-first website redesign with streamlined booking flows, prominent CTAs, and trust signals to reduce friction in the patient journey.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient Education Hub</h3>
                <p className="text-gray-600">Comprehensive content library explaining procedures, what to expect, insurance information, and FAQs to build trust and reduce appointment anxiety.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Execution</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            The project was delivered in four phases over 8 weeks:
          </p>
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <h3 className="text-xl font-semibold text-gray-900">Discovery & Technical Audit (Week 1-2)</h3>
              </div>
              <p className="text-gray-600 ml-14">Comprehensive SEO audit, competitor analysis, keyword research, and user experience evaluation to identify all optimization opportunities.</p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <h3 className="text-xl font-semibold text-gray-900">Design & Content Development (Week 3-4)</h3>
              </div>
              <p className="text-gray-600 ml-14">Created modern, trustworthy design system, developed patient education content, and built streamlined booking pathways.</p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <h3 className="text-xl font-semibold text-gray-900">Development & SEO Implementation (Week 5-7)</h3>
              </div>
              <p className="text-gray-600 ml-14">Built responsive website with optimized code, implemented technical SEO best practices, integrated booking system, and deployed analytics tracking.</p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                <h3 className="text-xl font-semibold text-gray-900">Launch & Optimization (Week 8+)</h3>
              </div>
              <p className="text-gray-600 ml-14">Staged launch with monitoring, continuous A/B testing of booking flows, ongoing content optimization, and monthly SEO refinements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Measured Results */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Measured Results</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Within 6 months of launch, ABQ MRI achieved remarkable improvements:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
                <div className="text-gray-700 font-medium">Increase in Organic Traffic</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500%</div>
                <div className="text-gray-700 font-medium">Growth in Online Bookings</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">#1</div>
                <div className="text-gray-700 font-medium">Rankings for Key Local Terms</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">65%</div>
                <div className="text-gray-700 font-medium">Reduction in Bounce Rate</div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            These improvements translated to significant business growth, with ABQ MRI expanding to a second location and hiring additional staff to handle increased patient volume.
          </p>
        </div>
      </section>

      {/* Business Outcome */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Business Outcome</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Beyond the digital metrics, ABQ MRI achieved transformational business results:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Market Leadership</h3>
                <p className="text-gray-600">Established as the go-to medical imaging provider in Albuquerque for personal injury and auto accident cases.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Operational Efficiency</h3>
                <p className="text-gray-600">Online booking system reduced administrative overhead by 40%, allowing staff to focus on patient care.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Scalable Growth</h3>
                <p className="text-gray-600">Digital infrastructure supports expansion plans, with systems ready to onboard additional locations and services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Replicate These Results
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get a custom project roadmap designed specifically for your healthcare business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">
                Get Your Free Project Roadmap
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              asChild
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <Link to="/portfolio">
                View More Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ABQMRI;
