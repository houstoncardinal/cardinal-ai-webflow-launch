
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-50 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-green-100 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gray-100 rounded-full opacity-15 animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          <div className="lg:col-span-7 space-y-8">
            {/* Animated category tag */}
            <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide animate-fade-in">
              <div className="w-8 h-px bg-green-500 mr-4 animate-pulse"></div>
              Digital Transformation
            </div>
            
            {/* Main headline with staggered animation */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
                <span className="inline-block animate-fade-in">Make an impact</span>
                <span className="block text-green-600 font-normal animate-fade-in delay-300">
                  that matters
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light animate-fade-in delay-500">
                We help organizations transform their business through technology, 
                strategy, and innovation to create lasting value and competitive advantage.
              </p>
            </div>
            
            {/* CTA Section with hover animations */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in delay-700">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-medium border-0 shadow-none group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105 hover:border-green-500">
                Learn more
              </Button>
            </div>

            {/* Animated stats */}
            <div className="flex flex-wrap gap-12 pt-8 border-t border-gray-200 animate-fade-in delay-1000">
              <div className="group cursor-pointer">
                <div className="text-2xl font-light text-gray-900 group-hover:text-green-600 transition-colors duration-300">150+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Projects</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-light text-gray-900 group-hover:text-green-600 transition-colors duration-300">3</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Global offices</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-light text-gray-900 group-hover:text-green-600 transition-colors duration-300">99.9%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Client satisfaction</div>
              </div>
            </div>
          </div>

          {/* Enhanced geometric element with animations */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl border border-gray-200 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-600 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-900 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-green-200 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <ChevronDown className="w-6 h-6 text-gray-400 animate-pulse" />
            <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
