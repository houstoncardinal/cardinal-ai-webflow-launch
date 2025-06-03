
import { ArrowRight, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Globe className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
              Houston • Dubai • Irvine
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Digital Solutions That
            <span className="text-blue-600 block">Drive Growth</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Cardinal Consulting delivers cutting-edge web development, mobile applications, 
            and AI-optimized digital experiences for enterprises across real estate, healthcare, 
            legal, and government sectors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
              View Portfolio
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-2 text-sm text-gray-500">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>Pioneers in AI Experience Optimization (AEO)</span>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-r from-gray-100 to-transparent opacity-30"></div>
    </section>
  );
};

export default Hero;
