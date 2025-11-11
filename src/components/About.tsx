import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)] animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Geometric grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-green-500/20 h-full"></div>
            ))}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Scanning line effect */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="max-w-4xl mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-white mb-4 leading-tight animate-fade-in tracking-tight" style={{animationDelay: '200ms'}}>
            About Cardinal Consulting
          </h2>
          
          <div className="animate-fade-in" style={{animationDelay: '400ms'}}>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              A premier digital agency specializing in web development, mobile applications, and digital marketing for businesses nationwide.
            </p>
          </div>
        </div>

        {/* Simplified Single Column Layout */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '600ms'}}>
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="relative pl-6 border-l-2 border-green-400/30">
                  We deliver enterprise-grade web design, mobile app development, and digital marketing solutions to businesses worldwide, 
                  helping them dominate their market and expand their digital presence globally.
                </p>
                
                <p className="relative pl-6 border-l-2 border-blue-400/30">
                  As a leading <span className="text-blue-400 font-medium">web design and mobile app development agency</span>, we're defining the future of 
                  business growth through cutting-edge technology, strategic digital campaigns, and comprehensive digital solutions.
                </p>
                
                <p className="relative pl-6 border-l-2 border-emerald-400/30">
                  Our comprehensive suite of services includes Web Design & Development, Mobile & Web Application Development, SEO Optimization Services, Brand Identity & Strategy services, Digital Marketing and Advertisement Services, and AI Experience Optimization (AEO). We combine strategic consulting, cutting-edge technology, 
                  and deep <span className="text-emerald-400 font-medium">market expertise</span> to deliver transformational outcomes for businesses worldwide.
                </p>
              </div>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link to="/about" className="w-full sm:w-auto">
                <Button className="group relative overflow-hidden bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 hover:from-green-500 hover:via-emerald-500 hover:to-green-400 text-white px-6 sm:px-8 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 border border-green-500/20 text-base sm:text-lg w-full">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    About Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
