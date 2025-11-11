import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HoustonEnterprise = () => {
  return (
    <>
      <SEO 
        title="Houston Enterprise Case Study | Cardinal Consulting"
        description="450% increase in qualified leads and 280% growth in project inquiries for Houston's premier residential and commercial construction company."
        keywords="Houston Enterprise, construction website, contractor marketing, residential construction, commercial construction, case study"
        url="/portfolio/houston-enterprise"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-orange-600 uppercase tracking-wide mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-orange-400 to-orange-600 mr-6"></div>
              Construction Industry
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Houston Enterprise
              <span className="block text-orange-600 font-normal mt-2">
                Building Excellence from the Ground Up
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Leading residential and commercial construction company in Houston, TX, specializing in custom home construction, comprehensive renovations, and full-service project management with an unwavering commitment to quality craftsmanship.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Construction</span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Residential</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Commercial</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Project Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Background */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Client Background</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Houston Enterprise is a trusted construction partner serving Houston, TX, with years of proven experience in delivering high-quality residential and commercial projects. Their team of expert craftsmen, guided by integrity and a relentless pursuit of excellence, works diligently to transform client visions into reality.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Despite their exceptional construction services and strong local reputation, their digital presence wasn't generating the volume of qualified leads needed to match their growth ambitions and operational capacity.
          </p>
        </div>
      </section>

      {/* Core Problem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Core Problem</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Houston Enterprise faced three critical digital challenges that were limiting their growth potential:
          </p>
          
          <div className="space-y-4">
            <Card className="border-l-4 border-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Invisible in Local Search</h3>
                <p className="text-gray-600">Despite serving Houston for years, they weren't appearing in local search results when homeowners and businesses searched for construction services, losing valuable leads to competitors with stronger digital presence.</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Outdated Digital Experience</h3>
                <p className="text-gray-600">Their website failed to showcase the quality and scope of their construction work. Poor mobile experience and unclear service descriptions caused high bounce rates and prevented potential clients from requesting consultations.</p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-red-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Limited Project Pipeline Visibility</h3>
                <p className="text-gray-600">Dependence on referrals created unpredictable project flow. No systematic lead generation meant gaps between projects and missed opportunities for consistent business growth.</p>
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
            Cardinal developed a comprehensive digital transformation strategy focused on three core pillars designed to establish Houston Enterprise as the premier construction partner in Houston:
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Construction-Focused Digital Foundation</h3>
                <p className="text-gray-600">Complete website redesign showcasing project excellence through high-quality imagery, detailed service breakdowns, and trust-building testimonials. Mobile-first architecture ensuring seamless experience across all devices.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Local SEO Domination</h3>
                <p className="text-gray-600">Comprehensive local search optimization targeting high-intent construction keywords across Houston markets. Google Business Profile enhancement, citation building, and review management to dominate local pack rankings.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lead Generation Architecture</h3>
                <p className="text-gray-600">Strategic conversion pathways with clear CTAs, multi-step consultation request forms with qualification logic, and automated lead nurturing sequences to convert interested visitors into scheduled consultations.</p>
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
            The project was delivered in four strategic phases over 10 weeks:
          </p>
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <h3 className="text-xl font-semibold text-gray-900">Discovery & Market Analysis (Week 1-2)</h3>
              </div>
              <p className="text-gray-600 ml-14">Deep dive into Houston construction market, competitor analysis, keyword research, and customer journey mapping. Identified key differentiators and competitive advantages to emphasize in digital strategy.</p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <h3 className="text-xl font-semibold text-gray-900">Design & Content Strategy (Week 3-5)</h3>
              </div>
              <p className="text-gray-600 ml-14">Created powerful visual design system showcasing construction excellence. Developed compelling service descriptions, project portfolio presentations, and trust-building content emphasizing quality, integrity, and customer satisfaction.</p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <h3 className="text-xl font-semibold text-gray-900">Development & SEO Implementation (Week 6-9)</h3>
              </div>
              <p className="text-gray-600 ml-14">Built high-performance website with advanced conversion optimization. Implemented comprehensive technical SEO, deployed lead capture systems, integrated consultation scheduling, and set up analytics tracking for continuous optimization.</p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                <h3 className="text-xl font-semibold text-gray-900">Launch & Growth Optimization (Week 10+)</h3>
              </div>
              <p className="text-gray-600 ml-14">Staged launch with real-time monitoring, ongoing A/B testing of conversion elements, continuous SEO refinements based on performance data, and monthly strategy reviews to maximize ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Measured Results */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Measured Results</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Within 6 months of launch, Houston Enterprise achieved transformational business growth:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">450%</div>
                <div className="text-gray-700 font-medium">Increase in Qualified Leads</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">280%</div>
                <div className="text-gray-700 font-medium">Growth in Project Inquiries</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">#1</div>
                <div className="text-gray-700 font-medium">Local Rankings Houston Construction</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">72%</div>
                <div className="text-gray-700 font-medium">Consultation-to-Contract Rate</div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            These improvements translated to unprecedented business growth, with Houston Enterprise expanding their team by 40%, establishing a consistent 6-month project pipeline, and achieving their highest revenue year on record.
          </p>
        </div>
      </section>

      {/* Business Outcome */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-6">Business Outcome</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Beyond the digital metrics, Houston Enterprise achieved transformational business results:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Market Leadership Position</h3>
                <p className="text-gray-600">Established as the go-to construction partner in Houston for both residential and commercial projects, with consistent referrals and repeat business from satisfied clients.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Predictable Growth Pipeline</h3>
                <p className="text-gray-600">Transitioned from feast-or-famine referral dependency to systematic lead generation producing consistent project flow and revenue predictability enabling strategic planning and team expansion.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Premium Project Acquisition</h3>
                <p className="text-gray-600">Higher quality leads and improved brand positioning enabled selective project acceptance and premium pricing, increasing average project value by 35% while maintaining 98% client satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Replicate These Results
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Get a custom project roadmap designed specifically for your construction business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">
                Get Your Free Project Roadmap
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              asChild
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
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

export default HoustonEnterprise;
