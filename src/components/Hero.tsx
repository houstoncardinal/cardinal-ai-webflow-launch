import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Animated network background */}
      <div className="absolute inset-0">
        {/* Network grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#059669" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Animated connection lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <g opacity="0.3">
              <line x1="100" y1="100" x2="300" y2="200" stroke="#059669" strokeWidth="1" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;10;0" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="300" y1="200" x2="500" y2="150" stroke="#059669" strokeWidth="1" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;10;0" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="500" y1="150" x2="700" y2="300" stroke="#059669" strokeWidth="1" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;10;0" dur="5s" repeatCount="indefinite" />
              </line>
              <line x1="200" y1="400" x2="400" y2="350" stroke="#059669" strokeWidth="1" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;10;0" dur="3.5s" repeatCount="indefinite" />
              </line>
              <line x1="400" y1="350" x2="600" y2="450" stroke="#059669" strokeWidth="1" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;10;0" dur="4.5s" repeatCount="indefinite" />
              </line>
            </g>
            
            {/* Network nodes */}
            <g opacity="0.4">
              <circle cx="100" cy="100" r="3" fill="#059669">
                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="300" cy="200" r="3" fill="#059669">
                <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="500" cy="150" r="3" fill="#059669">
                <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="700" cy="300" r="3" fill="#059669">
                <animate attributeName="r" values="3;5;3" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="400" r="3" fill="#059669">
                <animate attributeName="r" values="3;5;3" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="350" r="3" fill="#059669">
                <animate attributeName="r" values="3;5;3" dur="3.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="600" cy="450" r="3" fill="#059669">
                <animate attributeName="r" values="3;5;3" dur="2.6s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-50 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-green-100 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gray-100 rounded-full opacity-15 animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        
        {/* Web-like pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <g transform="translate(100,100)">
              {/* Radiating lines */}
              {[...Array(8)].map((_, i) => <line key={i} x1="0" y1="0" x2={Math.cos(i * Math.PI / 4) * 80} y2={Math.sin(i * Math.PI / 4) * 80} stroke="#059669" strokeWidth="1" opacity="0.5">
                  <animate attributeName="stroke-width" values="1;2;1" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                </line>)}
              {/* Concentric circles */}
              {[20, 40, 60, 80].map((radius, i) => <circle key={i} cx="0" cy="0" r={radius} fill="none" stroke="#059669" strokeWidth="1" opacity="0.3" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10;0" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                </circle>)}
            </g>
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          <div className="lg:col-span-7 space-y-8">
            {/* Animated category tag */}
            
            
            {/* Main headline with staggered animation */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
                <span className="inline-block animate-fade-in">Make an impact</span>
                <span className="block text-green-600 font-normal animate-fade-in" style={{
                animationDelay: '300ms'
              }}>
                  that matters
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light animate-fade-in" style={{
              animationDelay: '500ms'
            }}>
                We help organizations transform their business through technology, 
                strategy, and innovation to create lasting value and competitive advantage.
              </p>
            </div>
            
            {/* CTA Section with hover animations */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{
            animationDelay: '700ms'
          }}>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-medium border-0 shadow-none group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105 hover:border-green-500">
                Learn more
              </Button>
            </div>

            {/* Animated stats */}
            <div className="flex flex-wrap gap-12 pt-8 border-t border-gray-200 animate-fade-in" style={{
            animationDelay: '1000ms'
          }}>
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
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-900 rounded-full animate-pulse" style={{
              animationDelay: '500ms'
            }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-green-200 rounded-full animate-spin" style={{
              animationDuration: '20s'
            }}></div>
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
    </section>;
};
export default Hero;