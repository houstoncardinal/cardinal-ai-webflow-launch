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
      <section className="pt-32 pb-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
            <Link to="/portfolio" className="hover:text-orange-600 transition-colors">Portfolio</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Houston Enterprise</span>
          </div>
          
          {/* Client Logo */}
          <div className="mb-16 flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <img 
                src="/houston-enterprise-logo.png" 
                alt="Houston Enterprise Construction Logo"
                loading="eager"
                decoding="async"
                className="h-16 w-auto object-contain opacity-90"
              />
            </div>
          </div>
          
          {/* Headline */}
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-8">
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Case Study</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
              From Digital Invisibility to
              <span className="block text-orange-600 mt-2">
                Market Leadership
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              How a comprehensive digital transformation delivered <span className="font-semibold text-gray-900">450% lead growth</span> and established Houston Enterprise as the premier construction partner in their market.
            </p>
          </div>
          
          {/* Photorealistic iMac Mockup */}
          <div className="max-w-7xl mx-auto mb-20 px-4">
            <div className="relative" style={{ perspective: '2000px' }}>
              {/* iMac Device */}
              <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
                {/* Monitor Body */}
                <div className="relative bg-gradient-to-b from-[#e8e8e8] via-[#f5f5f5] to-[#e8e8e8] rounded-[20px] p-[18px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.6)]">
                  {/* Screen Bezel */}
                  <div className="relative bg-gradient-to-b from-[#2c2c2c] to-[#1a1a1a] rounded-[12px] p-[8px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]">
                    {/* Inner Bezel Highlight */}
                    <div className="absolute inset-0 rounded-[12px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"></div>
                    
                    {/* Screen */}
                    <div className="relative bg-black rounded-[8px] overflow-hidden">
                      {/* Screen Gloss Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10"></div>
                      
                      {/* Actual Website Screenshot */}
                      <div className="relative">
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
                  
                  {/* Camera */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <div className="absolute inset-[1px] bg-gradient-to-br from-[#1e3a5f] to-[#0f1f3f] rounded-full"></div>
                  </div>
                </div>
                
                {/* Stand */}
                <div className="flex justify-center -mt-[2px]">
                  <div className="relative w-[140px] h-[28px]">
                    {/* Stand Main Body */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#e0e0e0] via-[#d5d5d5] to-[#c8c8c8] rounded-b-[8px] shadow-[0_8px_16px_-4px_rgba(0,0,0,0.2)]">
                      {/* Stand Highlight */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-b-[8px]"></div>
                    </div>
                  </div>
                </div>
                
                {/* Base */}
                <div className="flex justify-center -mt-[1px]">
                  <div className="relative w-[240px] h-[12px]">
                    {/* Base Shadow */}
                    <div className="absolute inset-x-0 -bottom-[8px] h-[8px] bg-gradient-radial from-black/20 via-black/10 to-transparent rounded-full blur-sm"></div>
                    
                    {/* Base Body */}
                    <div className="relative h-full bg-gradient-to-b from-[#e8e8e8] via-[#d8d8d8] to-[#c8c8c8] rounded-[16px] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.3)]">
                      {/* Base Edge Highlight */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent rounded-[16px]"></div>
                    </div>
                  </div>
                </div>
                
                {/* Desk Shadow */}
                <div className="absolute inset-x-0 -bottom-[40px] h-[40px] bg-gradient-radial from-black/15 via-black/5 to-transparent blur-2xl"></div>
              </div>
              
              {/* Floating Metric Cards - Refined */}
              <div className="absolute -right-8 top-[20%] hidden xl:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-8 border border-gray-100 backdrop-blur-sm">
                  <div className="text-5xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">450%</div>
                  <div className="text-sm text-gray-600 font-medium">Lead Growth</div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-green-600 font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      <span>+385 Qualified Leads</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-8 bottom-[25%] hidden xl:block animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-8 border border-gray-100 backdrop-blur-sm">
                  <div className="text-5xl font-bold bg-gradient-to-br from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">#1</div>
                  <div className="text-sm text-gray-600 font-medium">Local Ranking</div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-orange-600 font-semibold">
                      <Award className="w-3 h-3" />
                      <span>Top Houston Position</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Metrics Grid - Refined */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-xl mb-4 group-hover:bg-gray-100 transition-colors">
                  <TrendingUp className="w-6 h-6 text-gray-700" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">280%</div>
                <div className="text-sm text-gray-600 font-medium">Project Inquiries</div>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-xl mb-4 group-hover:bg-gray-100 transition-colors">
                  <Target className="w-6 h-6 text-gray-700" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">72%</div>
                <div className="text-sm text-gray-600 font-medium">Conversion Rate</div>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-xl mb-4 group-hover:bg-gray-100 transition-colors">
                  <Users className="w-6 h-6 text-gray-700" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">+40%</div>
                <div className="text-sm text-gray-600 font-medium">Team Expansion</div>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-xl mb-4 group-hover:bg-gray-100 transition-colors">
                  <Clock className="w-6 h-6 text-gray-700" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">6mo</div>
                <div className="text-sm text-gray-600 font-medium">Project Pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Background - Story Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-8">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">The Challenge</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Exceptional Work,<br />Invisible Online
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Houston Enterprise had built an exceptional reputation through years of superior construction work. Their craftsmanship was unmatched, with a portfolio of satisfied clients across Houston.
                </p>
                <p className="text-lg">
                  Yet when prospective clients searched for construction services online, Houston Enterprise was nowhere to be found. Their digital presence failed to reflect their real-world excellence.
                </p>
                <p className="text-base font-medium text-gray-900">
                  The disconnect was costing them millions in lost opportunities.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Industry</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Construction Services</div>
                <div className="text-gray-600">Residential & Commercial</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Location</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Houston, Texas</div>
                <div className="text-gray-600">Greater Houston Metro</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Project Duration</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">10 Weeks</div>
                <div className="text-gray-600">Discovery to Launch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Problems - Pain Points */}
      <section className="py-32 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full mb-8">
              <div className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">The Problems</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Three Critical Barriers<br />to Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Despite exceptional service delivery, systemic digital challenges were limiting market reach and revenue potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white group">
              <CardContent className="p-8">
                <div className="bg-gray-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Search Invisibility</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  Zero organic visibility for high-intent construction searches. Competitors with inferior portfolios captured the market due to stronger digital presence.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Quantified Impact</div>
                  <div className="text-sm font-medium text-gray-900">80%+ of market unreachable</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white group">
              <CardContent className="p-8">
                <div className="bg-gray-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Suboptimal User Experience</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  Dated interface failed to communicate quality. Mobile dysfunction and unclear messaging resulted in immediate visitor abandonment.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Quantified Impact</div>
                  <div className="text-sm font-medium text-gray-900">78% mobile bounce rate</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white group">
              <CardContent className="p-8">
                <div className="bg-gray-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Referral Dependency</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  No systematic acquisition channel. Complete reliance on word-of-mouth created unpredictable revenue and prevented strategic planning.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Quantified Impact</div>
                  <div className="text-sm font-medium text-gray-900">Volatile cash flow & scaling limits</div>
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
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform<br />Your Digital Presence?
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
              Get a comprehensive transformation roadmap designed for your business objectives. Let's build your path to market leadership.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button 
              asChild
              className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              asChild
              className="border-2 border-gray-600 text-white bg-transparent hover:bg-gray-800 hover:border-gray-500 px-8 py-6 text-lg font-semibold transition-all duration-300 rounded-lg"
            >
              <Link to="/portfolio">
                View More Case Studies
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Custom roadmap</span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default HoustonEnterprise;
