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
      
      {/* Hero Section with Ultra-Modern Device Mockup */}
      <section className="pt-24 pb-32 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
        {/* Sophisticated background pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        
        {/* Ambient gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-12 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/portfolio" className="hover:text-primary transition-colors font-medium">Portfolio</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Houston Enterprise</span>
          </div>
          
          {/* Headline Section */}
          <div className="max-w-6xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-muted/50 backdrop-blur-sm rounded-full mb-10 border border-border/40">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-foreground uppercase tracking-[0.15em]">Client Success Story</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.95] mb-10 tracking-tight">
              From Digital Invisibility
              <span className="block bg-gradient-to-r from-primary via-orange-600 to-amber-600 bg-clip-text text-transparent mt-3">
                to Market Dominance
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
              A comprehensive digital transformation that delivered <span className="font-bold text-foreground">450% qualified lead growth</span>, establishing Houston Enterprise as the premier construction partner in their market.
            </p>
          </div>
          
          {/* Ultra-Modern iMac Pro Mockup */}
          <div className="max-w-[1400px] mx-auto mb-28 px-4">
            <div className="relative" style={{ perspective: '3000px' }}>
              {/* iMac Pro Device - Ultra Thin Bezels */}
              <div className="relative group" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(2deg)' }}>
                {/* Outer Aluminum Frame */}
                <div className="relative rounded-[28px] p-[10px] bg-gradient-to-b from-[#e2e2e2] via-[#f0f0f0] to-[#dcdcdc] shadow-[0_60px_120px_-25px_rgba(0,0,0,0.35),0_40px_80px_-30px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.1)]">
                  
                  {/* Ultra-Thin Bezel */}
                  <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-[22px] p-[4px] shadow-[inset_0_2px_12px_rgba(0,0,0,0.4),inset_0_-1px_4px_rgba(255,255,255,0.05)]">
                    
                    {/* Screen Container */}
                    <div className="relative bg-black rounded-[20px] overflow-hidden shadow-[inset_0_0_1px_rgba(255,255,255,0.1)]">
                      
                      {/* Multi-layer Screen Gloss */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent via-30% to-transparent pointer-events-none z-20"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-white/6 pointer-events-none z-20"></div>
                      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/4 to-transparent pointer-events-none z-20"></div>
                      
                      {/* Ambient Screen Glow */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/10 via-transparent to-orange-500/10 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                      
                      {/* Website Screenshot */}
                      <div className="relative z-10">
                        <img 
                          src="/houston-enterprise-screenshot.png" 
                          alt="Houston Enterprise Professional Website Interface"
                          loading="eager"
                          decoding="async"
                          className="w-full h-auto block"
                        />
                      </div>
                      
                      {/* Screen Inner Shadow for Depth */}
                      <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] pointer-events-none z-30"></div>
                    </div>
                  </div>
                  
                  {/* High-res Camera */}
                  <div className="absolute top-[7px] left-1/2 -translate-x-1/2 w-[7px] h-[7px] bg-gradient-to-br from-[#0a0a0a] to-black rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.05)]">
                    <div className="absolute inset-[1.5px] bg-gradient-to-br from-[#1a3a5f] via-[#0f2545] to-[#0a1a30] rounded-full"></div>
                    <div className="absolute inset-[2px] bg-gradient-radial from-blue-400/30 to-transparent rounded-full"></div>
                  </div>
                  
                  {/* Edge Lighting Effect */}
                  <div className="absolute inset-0 rounded-[28px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(0,0,0,0.2)] pointer-events-none"></div>
                </div>
                
                {/* Modern Tapered Stand */}
                <div className="flex justify-center -mt-[1px] relative z-10">
                  <div className="relative w-[160px] h-[32px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#e2e2e2] via-[#d5d5d5] to-[#c5c5c5] rounded-b-[10px] shadow-[0_10px_20px_-5px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.3)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-b-[10px]"></div>
                      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-b from-transparent to-black/10 rounded-b-[10px]"></div>
                    </div>
                  </div>
                </div>
                
                {/* Premium Base with Logo Indent */}
                <div className="flex justify-center -mt-[1px] relative z-10">
                  <div className="relative w-[280px] h-[14px]">
                    {/* Base Ambient Shadow */}
                    <div className="absolute inset-x-0 -bottom-[12px] h-[12px] bg-gradient-radial from-black/25 via-black/10 to-transparent rounded-full blur-lg"></div>
                    
                    {/* Base Body */}
                    <div className="relative h-full bg-gradient-to-b from-[#e5e5e5] via-[#d8d8d8] to-[#c8c8c8] rounded-[20px] shadow-[0_6px_16px_-3px_rgba(0,0,0,0.35),inset_0_2px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(0,0,0,0.1)]">
                      {/* Anodized Aluminum Effect */}
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)] rounded-[20px]"></div>
                      
                      {/* Subtle Logo Indent */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-2 bg-gradient-to-b from-black/5 to-transparent rounded-sm"></div>
                    </div>
                  </div>
                </div>
                
                {/* Desk Contact Shadow with Soft Edges */}
                <div className="absolute inset-x-0 -bottom-[50px] h-[50px]">
                  <div className="w-full h-full bg-gradient-radial from-black/20 via-black/8 to-transparent blur-3xl"></div>
                </div>
              </div>
              
              {/* Floating Metric Cards - Premium Design */}
              <div className="absolute -right-12 top-[18%] hidden xl:block animate-fade-in" style={{ animationDelay: '0.4s', animationDuration: '0.6s' }}>
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3),0_0_1px_rgba(0,0,0,0.1)] p-10 border border-border/50 hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1">
                  <div className="text-6xl font-black bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-3 tracking-tight">450%</div>
                  <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-4">Lead Growth</div>
                  <div className="pt-4 border-t border-border/40">
                    <div className="flex items-center gap-2.5 text-xs text-emerald-700 font-bold">
                      <TrendingUp className="w-4 h-4" strokeWidth={2.5} />
                      <span>+385 Qualified Leads</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-12 bottom-[22%] hidden xl:block animate-fade-in" style={{ animationDelay: '0.6s', animationDuration: '0.6s' }}>
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3),0_0_1px_rgba(0,0,0,0.1)] p-10 border border-border/50 hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1">
                  <div className="text-6xl font-black bg-gradient-to-br from-primary via-orange-600 to-amber-600 bg-clip-text text-transparent mb-3 tracking-tight">#1</div>
                  <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-4">Local Ranking</div>
                  <div className="pt-4 border-t border-border/40">
                    <div className="flex items-center gap-2.5 text-xs font-bold" style={{ color: 'hsl(var(--primary))' }}>
                      <Award className="w-4 h-4" strokeWidth={2.5} />
                      <span>Top Houston Position</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Metrics Grid - Executive Dashboard Style */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-background rounded-2xl p-10 text-center border border-border shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-500 group hover:-translate-y-0.5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-muted rounded-2xl mb-5 group-hover:bg-muted/80 group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="w-7 h-7 text-foreground" strokeWidth={2} />
                </div>
                <div className="text-5xl font-black text-foreground mb-3 tracking-tight">280%</div>
                <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Project Inquiries</div>
              </div>
              
              <div className="bg-background rounded-2xl p-10 text-center border border-border shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-500 group hover:-translate-y-0.5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-muted rounded-2xl mb-5 group-hover:bg-muted/80 group-hover:scale-110 transition-all duration-300">
                  <Target className="w-7 h-7 text-foreground" strokeWidth={2} />
                </div>
                <div className="text-5xl font-black text-foreground mb-3 tracking-tight">72%</div>
                <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Conversion Rate</div>
              </div>
              
              <div className="bg-background rounded-2xl p-10 text-center border border-border shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-500 group hover:-translate-y-0.5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-muted rounded-2xl mb-5 group-hover:bg-muted/80 group-hover:scale-110 transition-all duration-300">
                  <Users className="w-7 h-7 text-foreground" strokeWidth={2} />
                </div>
                <div className="text-5xl font-black text-foreground mb-3 tracking-tight">+40%</div>
                <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Team Expansion</div>
              </div>
              
              <div className="bg-background rounded-2xl p-10 text-center border border-border shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-500 group hover:-translate-y-0.5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-muted rounded-2xl mb-5 group-hover:bg-muted/80 group-hover:scale-110 transition-all duration-300">
                  <Clock className="w-7 h-7 text-foreground" strokeWidth={2} />
                </div>
                <div className="text-5xl font-black text-foreground mb-3 tracking-tight">6mo</div>
                <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Project Pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Background - Executive Summary */}
      <section className="py-40 bg-background relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-muted/60 backdrop-blur-sm rounded-full mb-10">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
                <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: 'hsl(var(--foreground))' }}>The Situation</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-10 leading-[1.05] tracking-tight">
                Exceptional Execution,<br />Zero Digital Presence
              </h2>
              <div className="space-y-7 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p className="text-lg font-light">
                  Houston Enterprise had established an exceptional reputation through decades of superior construction execution. Their craftsmanship was industry-leading, with a portfolio of premium residential and commercial projects across Houston.
                </p>
                <p className="text-lg font-light">
                  However, when high-value prospects searched for construction partners online, Houston Enterprise was completely invisible. Their digital footprint failed to reflect their real-world market position and capabilities.
                </p>
                <div className="bg-muted/30 border-l-4 rounded-r-xl p-6 backdrop-blur-sm" style={{ borderColor: 'hsl(var(--primary))' }}>
                  <p className="text-base font-bold text-foreground">
                    This digital-physical disconnect was resulting in millions of dollars in lost high-margin opportunities annually.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-5">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground mb-4">Industry Vertical</div>
                <div className="text-3xl font-black text-foreground mb-2 tracking-tight">Construction Services</div>
                <div className="text-base text-muted-foreground font-medium">Residential & Commercial</div>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground mb-4">Market</div>
                <div className="text-3xl font-black text-foreground mb-2 tracking-tight">Houston, Texas</div>
                <div className="text-base text-muted-foreground font-medium">Greater Houston Metropolitan Area</div>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground mb-4">Transformation Timeline</div>
                <div className="text-3xl font-black text-foreground mb-2 tracking-tight">10 Weeks</div>
                <div className="text-base text-muted-foreground font-medium">Discovery Through Full Deployment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Problems - Analytical Framework */}
      <section className="py-40 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-background/80 backdrop-blur-sm rounded-full mb-10 border border-border/50">
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">Critical Analysis</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-[1.05] tracking-tight">
              Three Systemic<br />Growth Constraints
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Despite exceptional operational execution, fundamental digital infrastructure gaps were systematically limiting market penetration and revenue scaling potential.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="border border-border bg-card hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1">
              <CardContent className="p-10">
                <div className="bg-muted w-16 h-16 rounded-2xl flex items-center justify-center mb-7 group-hover:bg-muted/80 group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-5 tracking-tight">Market Invisibility</h3>
                <p className="text-muted-foreground leading-relaxed mb-7 text-base font-light">
                  Complete absence of organic search visibility for high-commercial-intent construction keywords. Inferior competitors systematically captured qualified demand through superior digital positioning.
                </p>
                <div className="bg-muted/50 rounded-xl p-5 border border-border/40">
                  <div className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground mb-2">Quantified Business Impact</div>
                  <div className="text-sm font-bold text-foreground">80%+ addressable market unreachable</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border bg-card hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1">
              <CardContent className="p-10">
                <div className="bg-muted w-16 h-16 rounded-2xl flex items-center justify-center mb-7 group-hover:bg-muted/80 group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-5 tracking-tight">Experience Dysfunction</h3>
                <p className="text-muted-foreground leading-relaxed mb-7 text-base font-light">
                  Legacy digital interface failed to communicate premium positioning. Critical mobile experience failures and ambiguous value proposition resulted in immediate prospect abandonment.
                </p>
                <div className="bg-muted/50 rounded-xl p-5 border border-border/40">
                  <div className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground mb-2">Quantified Business Impact</div>
                  <div className="text-sm font-bold text-foreground">78% mobile abandonment rate</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border bg-card hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1">
              <CardContent className="p-10">
                <div className="bg-muted w-16 h-16 rounded-2xl flex items-center justify-center mb-7 group-hover:bg-muted/80 group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-5 tracking-tight">Acquisition Fragility</h3>
                <p className="text-muted-foreground leading-relaxed mb-7 text-base font-light">
                  Zero systematized demand generation infrastructure. Complete reliance on unscalable referral networks created revenue unpredictability and prevented strategic growth planning.
                </p>
                <div className="bg-muted/50 rounded-xl p-5 border border-border/40">
                  <div className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground mb-2">Quantified Business Impact</div>
                  <div className="text-sm font-bold text-foreground">Volatile pipeline & scaling ceiling</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Approach - Transformation Framework */}
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)',
            backgroundSize: '56px 56px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2.5 px-5 py-3 bg-emerald-500/10 backdrop-blur-sm rounded-full mb-10 border border-emerald-500/20">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-900">Strategic Framework</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-[1.05] tracking-tight">
              Three-Pillar Digital<br />Transformation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              A comprehensive digital infrastructure strategy engineered to establish market leadership through systematic brand elevation, demand generation, and conversion optimization.
            </p>
          </div>
          
          <div className="space-y-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-card border border-border rounded-3xl p-10 lg:p-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row items-start gap-10">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                      <span className="bg-emerald-600 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider">Initiative 1</span>
                      <h3 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">Brand-First Digital Foundation</h3>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                      Complete digital platform transformation showcasing construction excellence through premium project galleries, comprehensive service architectures, and verified client validation. Mobile-optimized infrastructure ensuring optimal experience across all touchpoints.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                        <div className="text-emerald-600 font-bold mb-1.5 text-sm">Premium Design</div>
                        <div className="text-xs text-muted-foreground font-medium">Visual storytelling system</div>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                        <div className="text-emerald-600 font-bold mb-1.5 text-sm">Mobile-First</div>
                        <div className="text-xs text-muted-foreground font-medium">Field-optimized experience</div>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                        <div className="text-emerald-600 font-bold mb-1.5 text-sm">Trust Architecture</div>
                        <div className="text-xs text-muted-foreground font-medium">Credentials & social proof</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-card border border-border rounded-3xl p-10 lg:p-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row items-start gap-10">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                      <span className="bg-blue-600 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider">Initiative 2</span>
                      <h3 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">Local Market Dominance</h3>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                      Advanced SEO infrastructure targeting high-commercial-intent construction keywords across Houston metropolitan markets. Google Business Profile optimization, strategic citation architecture, and systematic review management to dominate local search positioning.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                        <div className="text-blue-600 font-bold mb-1.5 text-sm">Keyword Strategy</div>
                        <div className="text-xs text-muted-foreground font-medium">High-intent local targeting</div>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                        <div className="text-blue-600 font-bold mb-1.5 text-sm">Business Profile</div>
                        <div className="text-xs text-muted-foreground font-medium">Local pack optimization</div>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                        <div className="text-blue-600 font-bold mb-1.5 text-sm">Review System</div>
                        <div className="text-xs text-muted-foreground font-medium">Automated reputation engine</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-card border border-border rounded-3xl p-10 lg:p-12 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row items-start gap-10">
                  <div className="bg-gradient-to-br from-violet-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">💰</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                      <span className="bg-violet-600 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider">Initiative 3</span>
                      <h3 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">Conversion Infrastructure</h3>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                      Strategic conversion pathways featuring psychologically-optimized engagement points, intelligent multi-stage consultation forms with embedded qualification logic, and automated nurturing sequences systematically converting prospects to scheduled consultations.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                        <div className="text-violet-600 font-bold mb-1.5 text-sm">Smart Forms</div>
                        <div className="text-xs text-muted-foreground font-medium">Automated qualification</div>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                        <div className="text-violet-600 font-bold mb-1.5 text-sm">Lead Nurturing</div>
                        <div className="text-xs text-muted-foreground font-medium">Automated engagement flows</div>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
                        <div className="text-violet-600 font-bold mb-1.5 text-sm">CRM Integration</div>
                        <div className="text-xs text-muted-foreground font-medium">Unified pipeline management</div>
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
