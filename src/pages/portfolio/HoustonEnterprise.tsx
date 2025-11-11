import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, Zap, Award, Clock } from "lucide-react";
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
      
      {/* Hero Section with Device Mockup */}
      <section className="pt-32 pb-32 bg-gradient-to-br from-orange-50 via-amber-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-amber-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
            <Link to="/portfolio" className="hover:text-orange-600 transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Houston Enterprise</span>
          </div>
          
          {/* Client Logo */}
          <div className="mb-12 flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/houston-enterprise-logo.png" 
                alt="Houston Enterprise Construction Logo"
                loading="eager"
                decoding="async"
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>
          
          {/* Headline */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-8">
              <Award className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-bold text-orange-800 uppercase tracking-wider">Construction Industry Case Study</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
              Building Digital
              <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent mt-2">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              How Houston Enterprise achieved <span className="font-bold text-orange-600">450% growth</span> in qualified leads and established market leadership in just 6 months.
            </p>
          </div>
          
          {/* Device Mockup with Website Preview */}
          <div className="max-w-6xl mx-auto mb-16">
            {/* iMac-style mockup */}
            <div className="relative">
              {/* Monitor */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-3xl p-3 shadow-2xl">
                {/* Screen bezel */}
                <div className="bg-black rounded-t-2xl p-1">
                  {/* Screen */}
                  <div className="bg-white rounded-t-xl overflow-hidden">
                    <img 
                      src="/houston-enterprise-screenshot.png" 
                      alt="Houston Enterprise Website Design"
                      loading="eager"
                      decoding="async"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              {/* Stand */}
              <div className="flex justify-center">
                <div className="w-32 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-lg shadow-md"></div>
              </div>
              {/* Base */}
              <div className="flex justify-center -mt-1">
                <div className="w-48 h-3 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full shadow-lg"></div>
              </div>
              
              {/* Floating metrics */}
              <div className="absolute -right-4 top-1/4 hidden lg:block">
                <div className="bg-white rounded-2xl shadow-2xl p-6 backdrop-blur-sm bg-opacity-95 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-green-600 mb-2">450%</div>
                  <div className="text-sm text-gray-600 font-medium">Lead Growth</div>
                </div>
              </div>
              
              <div className="absolute -left-4 top-2/3 hidden lg:block">
                <div className="bg-white rounded-2xl shadow-2xl p-6 backdrop-blur-sm bg-opacity-95 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-orange-600 mb-2">#1</div>
                  <div className="text-sm text-gray-600 font-medium">Local Ranking</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Stats Bar */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">280%</div>
              <div className="text-sm text-gray-600 font-medium">Project Inquiries</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Target className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">72%</div>
              <div className="text-sm text-gray-600 font-medium">Conversion Rate</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">+40%</div>
              <div className="text-sm text-gray-600 font-medium">Team Growth</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">6mo</div>
              <div className="text-sm text-gray-600 font-medium">Pipeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Background - Story Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
                <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-orange-800 uppercase tracking-wide">The Challenge</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                From Local Reputation to Digital Invisibility
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Houston Enterprise had built a sterling reputation through years of exceptional construction work. Their craftsmanship spoke for itself, with satisfied clients throughout Houston.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                But when potential clients searched for construction services online, Houston Enterprise was nowhere to be found. Their digital presence didn't reflect their real-world excellence.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100">
                <div className="text-orange-600 font-bold text-sm uppercase tracking-wide mb-3">Industry</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Construction Services</div>
                <div className="text-gray-600">Residential & Commercial</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                <div className="text-blue-600 font-bold text-sm uppercase tracking-wide mb-3">Location</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Houston, Texas</div>
                <div className="text-gray-600">Serving Greater Houston Area</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
                <div className="text-purple-600 font-bold text-sm uppercase tracking-wide mb-3">Timeline</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">10 Weeks</div>
                <div className="text-gray-600">Discovery to Launch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Problems - Pain Points */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-red-800 uppercase tracking-wide">Pain Points</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Three Critical Challenges
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Despite exceptional service quality, Houston Enterprise faced digital obstacles preventing them from reaching their full growth potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-red-50 group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 to-orange-500"></div>
              <CardContent className="p-8">
                <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Invisible in Local Search</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Zero visibility when prospects searched for construction services. Competitors with weaker portfolios ranked higher.
                </p>
                <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                  <div className="text-sm font-semibold text-red-800 mb-1">Impact</div>
                  <div className="text-gray-700">Missing 80%+ of digital traffic</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50 group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 to-amber-500"></div>
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Outdated Digital Experience</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Website failed to showcase project excellence. Poor mobile experience drove away 65% of visitors.
                </p>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                  <div className="text-sm font-semibold text-orange-800 mb-1">Impact</div>
                  <div className="text-gray-700">78% bounce rate on mobile</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50 group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500"></div>
              <CardContent className="p-8">
                <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Unpredictable Pipeline</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  100% referral-dependent. No systematic lead generation created feast-or-famine cycles.
                </p>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <div className="text-sm font-semibold text-amber-800 mb-1">Impact</div>
                  <div className="text-gray-700">Revenue volatility & planning challenges</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Approach - Solution */}
      <section className="py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-800 uppercase tracking-wide">Our Solution</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Three-Pillar Digital Transformation
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive strategy designed to establish Houston Enterprise as the premier digital-first construction partner.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border border-green-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-8">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">Pillar 1</span>
                      <h3 className="text-3xl font-bold text-gray-900">Brand-First Digital Foundation</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Complete website transformation showcasing construction excellence through stunning project galleries, detailed service breakdowns, and authentic client testimonials. Mobile-optimized architecture ensuring flawless experience across all devices.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-green-100">
                        <div className="text-green-600 font-bold mb-1">High-Impact Design</div>
                        <div className="text-sm text-gray-600">Visual storytelling that converts</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-green-100">
                        <div className="text-green-600 font-bold mb-1">Mobile-First</div>
                        <div className="text-sm text-gray-600">Optimized for on-site browsing</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-green-100">
                        <div className="text-green-600 font-bold mb-1">Trust Signals</div>
                        <div className="text-sm text-gray-600">Credentials & testimonials</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-8">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">Pillar 2</span>
                      <h3 className="text-3xl font-bold text-gray-900">Local SEO Domination</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Strategic optimization targeting high-intent construction keywords across Houston markets. Google Business Profile enhancement, strategic citation building, and proactive review management to dominate local search rankings.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <div className="text-blue-600 font-bold mb-1">Keyword Strategy</div>
                        <div className="text-sm text-gray-600">High-intent local targeting</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <div className="text-blue-600 font-bold mb-1">Google My Business</div>
                        <div className="text-sm text-gray-600">Optimized for local pack</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <div className="text-blue-600 font-bold mb-1">Review System</div>
                        <div className="text-sm text-gray-600">Automated reputation building</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-8">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">💰</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">Pillar 3</span>
                      <h3 className="text-3xl font-bold text-gray-900">Conversion Architecture</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Strategic conversion pathways with psychologically-optimized CTAs, intelligent multi-step consultation forms with built-in qualification logic, and automated nurturing sequences converting visitors into scheduled consultations.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-purple-100">
                        <div className="text-purple-600 font-bold mb-1">Smart Forms</div>
                        <div className="text-sm text-gray-600">Qualify leads automatically</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-purple-100">
                        <div className="text-purple-600 font-bold mb-1">Lead Nurturing</div>
                        <div className="text-sm text-gray-600">Automated follow-up sequences</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-purple-100">
                        <div className="text-purple-600 font-bold mb-1">CRM Integration</div>
                        <div className="text-sm text-gray-600">Seamless lead management</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Timeline */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800 uppercase tracking-wide">Implementation</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              10-Week Transformation
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured, phased approach ensuring quality execution and seamless delivery.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 via-orange-400 to-orange-600 hidden md:block"></div>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="relative pl-0 md:pl-24">
                <div className="absolute left-0 top-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg hidden md:flex transform -translate-x-1/2">
                  1
                </div>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-orange-50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Week 1-2</span>
                      <h3 className="text-2xl font-bold text-gray-900">Discovery & Market Analysis</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Deep dive into Houston construction market dynamics, competitive landscape analysis, comprehensive keyword research, and detailed customer journey mapping.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1.5 rounded-full">Market Research</span>
                      <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1.5 rounded-full">Competitor Analysis</span>
                      <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1.5 rounded-full">SEO Strategy</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Phase 2 */}
              <div className="relative pl-0 md:pl-24">
                <div className="absolute left-0 top-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg hidden md:flex transform -translate-x-1/2">
                  2
                </div>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Week 3-5</span>
                      <h3 className="text-2xl font-bold text-gray-900">Design & Content Strategy</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Created powerful visual design system emphasizing construction excellence. Developed compelling service narratives, project portfolio showcases, and trust-building content.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full">UX/UI Design</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full">Copywriting</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full">Brand Guidelines</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Phase 3 */}
              <div className="relative pl-0 md:pl-24">
                <div className="absolute left-0 top-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg hidden md:flex transform -translate-x-1/2">
                  3
                </div>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Week 6-9</span>
                      <h3 className="text-2xl font-bold text-gray-900">Development & SEO Implementation</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Built high-performance website with advanced conversion optimization, comprehensive technical SEO, lead capture systems, consultation scheduling, and analytics infrastructure.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1.5 rounded-full">Development</span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1.5 rounded-full">Technical SEO</span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1.5 rounded-full">Integrations</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Phase 4 */}
              <div className="relative pl-0 md:pl-24">
                <div className="absolute left-0 top-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg hidden md:flex transform -translate-x-1/2">
                  4
                </div>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-green-50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Week 10+</span>
                      <h3 className="text-2xl font-bold text-gray-900">Launch & Growth Optimization</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Staged launch with real-time performance monitoring, continuous A/B testing of conversion elements, ongoing SEO refinements, and monthly strategy reviews for ROI maximization.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full">Launch</span>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full">A/B Testing</span>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full">Optimization</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results - Impact Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
              <Award className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-800 uppercase tracking-wide">The Results</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformational Growth in
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mt-2">
                Just 6 Months
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              From digital invisibility to market leadership. Here's how the numbers tell the story.
            </p>
          </div>
          
          {/* Main Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-0 bg-gradient-to-br from-white to-green-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-6xl lg:text-7xl font-black bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                  450%
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">Lead Growth</div>
                <div className="text-sm text-gray-600">Qualified consultation requests</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-white to-orange-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-amber-500"></div>
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-6xl lg:text-7xl font-black bg-gradient-to-br from-orange-600 to-amber-600 bg-clip-text text-transparent mb-3">
                  280%
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">Project Inquiries</div>
                <div className="text-sm text-gray-600">New project opportunities</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-white to-blue-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-6xl lg:text-7xl font-black bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                  #1
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">Local Rankings</div>
                <div className="text-sm text-gray-600">Houston construction searches</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-white to-purple-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-6xl lg:text-7xl font-black bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                  72%
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">Conversion Rate</div>
                <div className="text-sm text-gray-600">Consultation to contract</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Secondary Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">+40%</div>
                  <div className="text-sm text-gray-600 font-medium">Team Growth</div>
                </div>
              </div>
              <p className="text-gray-600">Expanded team to meet increased demand</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">6mo</div>
                  <div className="text-sm text-gray-600 font-medium">Pipeline</div>
                </div>
              </div>
              <p className="text-gray-600">Consistent project backlog established</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">+35%</div>
                  <div className="text-sm text-gray-600 font-medium">Project Value</div>
                </div>
              </div>
              <p className="text-gray-600">Higher-value projects acquired</p>
            </div>
          </div>
          
          {/* Impact Statement */}
          <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-12 shadow-2xl border border-green-100">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Record-Breaking Year</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                These improvements translated to <span className="font-bold text-green-600">unprecedented business growth</span>, with Houston Enterprise achieving their <span className="font-bold text-green-600">highest revenue year on record</span>, establishing a <span className="font-bold text-orange-600">consistent 6-month project pipeline</span>, and expanding their team by <span className="font-bold text-blue-600">40%</span> to meet demand—all while maintaining a <span className="font-bold text-purple-600">98% client satisfaction rate</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Transformation */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800 uppercase tracking-wide">Business Impact</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Beyond the Metrics
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformation measured in business fundamentals and strategic positioning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 group">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Leadership</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Established as the premier construction partner in Houston for residential and commercial projects.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="text-sm font-semibold text-blue-800 mb-1">Key Outcome</div>
                  <div className="text-gray-700">Top-of-mind brand awareness</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50 group">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictable Growth</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Transitioned from referral dependency to systematic lead generation with consistent project flow.
                </p>
                <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <div className="text-sm font-semibold text-green-800 mb-1">Key Outcome</div>
                  <div className="text-gray-700">Revenue predictability & planning</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50 group">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Positioning</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Higher quality leads enabled selective project acceptance and premium pricing strategy.
                </p>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                  <div className="text-sm font-semibold text-purple-800 mb-1">Key Outcome</div>
                  <div className="text-gray-700">35% increase in project value</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-800 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="text-7xl mb-6">🚀</div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready for Your Own
              <span className="block mt-2">Success Story?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-orange-50 mb-10 leading-relaxed max-w-3xl mx-auto">
              Get a custom transformation roadmap designed specifically for your business. Let's turn your digital presence into your most powerful growth driver.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              asChild
              className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-2xl"
            >
              <Link to="/contact" className="flex items-center gap-3">
                <span>Get Your Free Project Roadmap</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              asChild
              className="border-3 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-orange-600 px-10 py-7 text-xl font-bold transition-all duration-300 hover:scale-105 rounded-2xl"
            >
              <Link to="/portfolio">
                View More Case Studies
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-orange-50">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Free consultation</span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default HoustonEnterprise;
