import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
          Ready to Transform Your
          <span className="block font-normal text-green-100">Digital Presence?</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-green-50 mb-8 max-w-2xl mx-auto leading-relaxed">
          Get a detailed project roadmap, timeline, and cost estimate delivered within 24 hours. No obligations, no pressure.
        </p>

        {/* CTA Button */}
        <Link to="/contact">
          <Button className="group relative overflow-hidden bg-white hover:bg-gray-50 text-green-600 px-8 py-6 rounded-xl font-semibold text-lg sm:text-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl">
            <span className="relative z-10 flex items-center gap-3">
              Get Your Free Project Roadmap
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </Link>

        {/* Trust Line */}
        <p className="text-sm text-green-100 mt-6">
          Trusted by 500+ businesses nationwide • Same-day support guaranteed
        </p>
      </div>
    </section>
  );
};

export default CTASection;
