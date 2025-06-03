
import { ArrowRight, ChevronDown, Server, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Enhanced animated technical background */}
      <div className="absolute inset-0">
        {/* Network grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#059669" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Animated server network topology */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            {/* Server nodes with animations */}
            <g opacity="0.6">
              {/* Main server cluster */}
              <g className="animate-pulse" style={{animationDuration: '3s'}}>
                <rect x="200" y="150" width="60" height="40" rx="6" fill="#059669" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
                </rect>
                <rect x="210" y="158" width="40" height="4" rx="2" fill="white" opacity="0.9"/>
                <rect x="210" y="166" width="40" height="4" rx="2" fill="white" opacity="0.7"/>
                <rect x="210" y="174" width="40" height="4" rx="2" fill="white" opacity="0.5"/>
              </g>

              {/* Secondary servers */}
              <g className="animate-pulse" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}>
                <rect x="900" y="200" width="50" height="35" rx="5" fill="#059669" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite"/>
                </rect>
                <rect x="908" y="207" width="34" height="3" rx="1.5" fill="white" opacity="0.8"/>
                <rect x="908" y="214" width="34" height="3" rx="1.5" fill="white" opacity="0.6"/>
                <rect x="908" y="221" width="34" height="3" rx="1.5" fill="white" opacity="0.4"/>
              </g>

              <g className="animate-pulse" style={{animationDuration: '3.5s', animationDelay: '1s'}}>
                <rect x="600" y="500" width="55" height="38" rx="6" fill="#059669" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="608" y="508" width="39" height="3.5" rx="1.75" fill="white" opacity="0.7"/>
                <rect x="608" y="516" width="39" height="3.5" rx="1.75" fill="white" opacity="0.5"/>
                <rect x="608" y="524" width="39" height="3.5" rx="1.75" fill="white" opacity="0.3"/>
              </g>
            </g>

            {/* Animated connection lines with data flow */}
            <g opacity="0.4">
              <line x1="260" y1="170" x2="600" y2="520" stroke="#059669" strokeWidth="2" strokeDasharray="8,4">
                <animate attributeName="stroke-dashoffset" values="0;12;0" dur="3s" repeatCount="indefinite"/>
              </line>
              <line x1="625" y1="500" x2="900" y2="220" stroke="#059669" strokeWidth="2" strokeDasharray="6,3">
                <animate attributeName="stroke-dashoffset" values="0;9;0" dur="2.5s" repeatCount="indefinite"/>
              </line>
              <line x1="230" y1="190" x2="925" y2="200" stroke="#059669" strokeWidth="1.5" strokeDasharray="10,5">
                <animate attributeName="stroke-dashoffset" values="0;15;0" dur="4s" repeatCount="indefinite"/>
              </line>

              {/* Data packets flowing along connections */}
              <circle r="4" fill="#22c55e">
                <animateMotion dur="3s" repeatCount="indefinite">
                  <path d="M 260 170 Q 430 350 600 520"/>
                </animateMotion>
                <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
              </circle>
              
              <circle r="3" fill="#16a34a">
                <animateMotion dur="2.5s" repeatCount="indefinite">
                  <path d="M 625 500 Q 760 360 900 220"/>
                </animateMotion>
                <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite"/>
              </circle>

              <circle r="3.5" fill="#15803d">
                <animateMotion dur="4s" repeatCount="indefinite">
                  <path d="M 230 190 Q 580 195 925 200"/>
                </animateMotion>
                <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/>
              </circle>
            </g>
            
            {/* Network nodes with pulsing effect */}
            <g opacity="0.5">
              <circle cx="230" cy="170" r="6" fill="#059669">
                <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="625" cy="520" r="5" fill="#059669">
                <animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="925" cy="217" r="5.5" fill="#059669">
                <animate attributeName="r" values="5.5;9;5.5" dur="3s" repeatCount="indefinite"/>
              </circle>
              
              {/* Additional network nodes */}
              <circle cx="400" cy="300" r="4" fill="#22c55e" opacity="0.7">
                <animate attributeName="r" values="4;7;4" dur="2.2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="750" cy="380" r="4.5" fill="#16a34a" opacity="0.6">
                <animate attributeName="r" values="4.5;7.5;4.5" dur="2.8s" repeatCount="indefinite"/>
              </circle>
            </g>

            {/* API/Data symbols */}
            <g opacity="0.3">
              <text x="280" y="140" fill="#059669" fontSize="12" fontWeight="bold">API</text>
              <text x="950" y="180" fill="#059669" fontSize="10" fontWeight="bold">DB</text>
              <text x="580" y="490" fill="#059669" fontSize="11" fontWeight="bold">CDN</text>
            </g>
          </svg>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-50 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-green-100 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gray-100 rounded-full opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Enhanced web-like pattern with server icons */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <g transform="translate(100,100)">
              {/* Radiating lines */}
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1="0"
                  y1="0"
                  x2={Math.cos(i * Math.PI / 4) * 80}
                  y2={Math.sin(i * Math.PI / 4) * 80}
                  stroke="#059669"
                  strokeWidth="1"
                  opacity="0.5"
                >
                  <animate
                    attributeName="stroke-width"
                    values="1;2;1"
                    dur={`${2 + i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                </line>
              ))}
              {/* Concentric circles */}
              {[20, 40, 60, 80].map((radius, i) => (
                <circle
                  key={i}
                  cx="0"
                  cy="0"
                  r={radius}
                  fill="none"
                  stroke="#059669"
                  strokeWidth="1"
                  opacity="0.3"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;10;0"
                    dur={`${3 + i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </g>
          </svg>
        </div>

        {/* Floating server icons */}
        <div className="absolute top-20 left-20 opacity-20 animate-float">
          <Server className="w-8 h-8 text-green-600" />
        </div>
        <div className="absolute bottom-32 right-32 opacity-15 animate-float" style={{animationDelay: '1s'}}>
          <Wifi className="w-10 h-10 text-green-500" />
        </div>

        {/* Additional floating elements to fill empty space under bouncing ball */}
        <div className="absolute bottom-1/4 left-1/3 opacity-10">
          <div className="flex flex-col space-y-2 text-xs font-mono text-green-600">
            <div className="animate-pulse" style={{animationDelay: '0s'}}>{"{ status: 'active' }"}</div>
            <div className="animate-pulse" style={{animationDelay: '0.5s'}}>{"GET /api/data"}</div>
            <div className="animate-pulse" style={{animationDelay: '1s'}}>{"200 OK"}</div>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-1/4 opacity-15">
          <div className="w-16 h-16 border border-green-300 rounded-lg flex items-center justify-center animate-pulse">
            <div className="w-8 h-8 bg-green-200 rounded animate-ping"></div>
          </div>
        </div>

        {/* Floating binary code */}
        <div className="absolute bottom-1/3 left-1/2 opacity-8">
          <div className="flex flex-col text-xs font-mono text-gray-400 space-y-1">
            <div className="animate-pulse" style={{animationDelay: '0s'}}>1010</div>
            <div className="animate-pulse" style={{animationDelay: '0.3s'}}>1100</div>
            <div className="animate-pulse" style={{animationDelay: '0.6s'}}>0101</div>
          </div>
        </div>

        {/* Additional geometric shapes for balance */}
        <div className="absolute bottom-1/4 left-2/3 w-12 h-12 border-2 border-green-200 rounded-full opacity-20 animate-spin" style={{animationDuration: '15s'}}></div>
        <div className="absolute bottom-1/5 right-1/3 w-8 h-8 bg-gray-200 rounded opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
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
                <span className="block text-green-600 font-normal animate-fade-in" style={{animationDelay: '300ms'}}>
                  that matters
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light animate-fade-in" style={{animationDelay: '500ms'}}>
                We help organizations transform their business through technology, 
                strategy, and innovation to create lasting value and competitive advantage.
              </p>
            </div>
            
            {/* CTA Section with hover animations */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{animationDelay: '700ms'}}>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-medium border-0 shadow-none group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105 hover:border-green-500">
                Learn more
              </Button>
            </div>

            {/* Animated stats */}
            <div className="flex flex-wrap gap-12 pt-8 border-t border-gray-200 animate-fade-in" style={{animationDelay: '1000ms'}}>
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
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-900 rounded-full animate-pulse" style={{animationDelay: '500ms'}}></div>
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
