
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          <div className="lg:col-span-7 space-y-8">
            {/* Deloitte-style category tag */}
            <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide">
              <div className="w-8 h-px bg-green-500 mr-4"></div>
              Digital Transformation
            </div>
            
            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
                Make an impact
                <span className="block text-green-600 font-normal">
                  that matters
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                We help organizations transform their business through technology, 
                strategy, and innovation to create lasting value and competitive advantage.
              </p>
            </div>
            
            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-medium border-0 shadow-none">
                Get started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium">
                Learn more
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-light text-gray-900">150+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-light text-gray-900">3</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Global offices</div>
              </div>
              <div>
                <div className="text-2xl font-light text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Client satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Clean geometric element */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl border border-gray-200"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-600 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-900 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
