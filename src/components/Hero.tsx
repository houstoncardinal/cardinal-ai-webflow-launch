
import { ArrowRight, Globe, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-3 mb-8">
            <Globe className="w-5 h-5 text-blue-400" />
            <div className="flex items-center space-x-1 text-sm font-medium text-blue-200 bg-blue-900/30 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/20">
              <span>Global Presence</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Houston • Dubai • Irvine</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-thin text-white mb-8 leading-tight tracking-tight">
            Transforming
            <span className="block font-light bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Digital Futures
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-4xl mx-auto leading-relaxed font-light">
            Cardinal Consulting delivers enterprise-grade digital transformation solutions 
            for Fortune 500 companies and emerging leaders across multiple industries.
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto font-light">
            Specializing in web development, mobile applications, AI optimization, 
            and strategic digital consulting for real estate, healthcare, legal, and government sectors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              Start Your Transformation
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-400/50 text-blue-200 hover:bg-blue-400/10 hover:border-blue-400 px-10 py-4 text-lg backdrop-blur-sm">
              Explore Our Work
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-3 text-blue-300">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-lg font-light">Pioneers in AI Experience Optimization (AEO)</span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
