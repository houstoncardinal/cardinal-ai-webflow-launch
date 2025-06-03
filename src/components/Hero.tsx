
import { ArrowRight, Globe, Zap, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden flex items-center">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-600/10 via-blue-500/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-to-tr from-blue-800/10 to-transparent"></div>
      </div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-gradient-to-tr from-blue-400/5 to-purple-500/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-bl from-cyan-300/10 to-blue-600/10 rounded-full blur-xl"></div>
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          <div className="space-y-12">
            {/* Global Presence Badge */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-blue-200 bg-blue-900/20 backdrop-blur-xl px-6 py-3 rounded-full border border-blue-400/20 shadow-lg">
                <span className="text-white font-semibold">Global Excellence</span>
                <ChevronRight className="w-3 h-3" />
                <span>Houston • Dubai • Irvine</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin text-white leading-[0.9] tracking-tight">
                Transforming
                <span className="block font-extralight bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent mt-4">
                  Digital Excellence
                </span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed font-light max-w-2xl">
                  Enterprise-grade digital transformation solutions for Fortune 500 companies 
                  and emerging market leaders.
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed font-light max-w-xl">
                  Specializing in AI optimization, strategic consulting, and next-generation 
                  digital experiences across real estate, healthcare, legal, and government sectors.
                </p>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white px-12 py-6 text-lg border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 rounded-2xl">
                Begin Transformation
                <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button size="lg" variant="outline" className="group border-2 border-slate-400/30 text-slate-200 hover:bg-white/5 hover:border-blue-400/50 px-12 py-6 text-lg backdrop-blur-xl rounded-2xl transition-all duration-500">
                <Play className="mr-4 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Showcase
              </Button>
            </div>

            {/* Innovation Badge */}
            <div className="flex items-center space-x-4 pt-8">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-light text-blue-200">
                Pioneers in <span className="font-medium text-white">AI Experience Optimization (AEO)</span>
              </span>
            </div>
          </div>

          {/* Right Side Visual Elements */}
          <div className="hidden lg:flex relative justify-center items-center">
            <div className="relative w-full max-w-2xl">
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="text-white/90 text-sm font-medium">Enterprise Solutions</div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="h-4 bg-gradient-to-r from-blue-400/20 to-cyan-300/20 rounded-full"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-400/30 to-purple-400/20 rounded-full w-4/5"></div>
                    <div className="h-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/30 rounded-full w-3/5"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-light text-blue-300 mb-2">150+</div>
                      <div className="text-white/70 text-sm">Enterprise Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-blue-300 mb-2">99.9%</div>
                      <div className="text-white/70 text-sm">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-2xl backdrop-blur-xl border border-white/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-300" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-20 bg-gradient-to-tr from-purple-500/20 to-blue-600/20 rounded-2xl backdrop-blur-xl border border-white/10 flex items-center justify-center">
                <div className="text-white/80 text-xs font-medium text-center">
                  AI-Powered<br />Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
