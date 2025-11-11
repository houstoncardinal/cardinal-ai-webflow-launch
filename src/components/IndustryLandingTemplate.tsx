import { CheckCircle, ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

interface PainPoint {
  title: string;
  description: string;
}

interface Solution {
  title: string;
  description: string;
}

interface CaseStudy {
  client: string;
  problem: string;
  solution: string;
  result: string;
  link: string;
}

interface IndustryLandingProps {
  industry: string;
  icon: LucideIcon;
  headline: string;
  subheadline: string;
  painPoints: PainPoint[];
  solutions: Solution[];
  caseStudy: CaseStudy;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  seoKeywords: string;
}

const IndustryLandingTemplate = ({
  industry,
  icon: Icon,
  headline,
  subheadline,
  painPoints,
  solutions,
  caseStudy,
  gradientFrom,
  gradientTo,
  accentColor,
  seoKeywords
}: IndustryLandingProps) => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={`${industry} Digital Solutions | Cardinal Consulting`}
        description={subheadline}
        keywords={seoKeywords}
        url={`/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className={`pt-32 pb-20 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-slate-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-slate-400 uppercase tracking-wide mb-8">
              <Icon className="w-5 h-5 mr-3" />
              {industry} Industry Solutions
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              {headline}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              {subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className={`bg-gradient-to-r ${accentColor} text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                  Get Your Free Project Roadmap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-gray-600 px-8 py-4 rounded-lg font-medium text-slate-950 bg-slate-50 hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Common Challenges in {industry}
            </h2>
            <p className="text-xl text-gray-600">
              Problems we solve for {industry.toLowerCase()} businesses every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Cardinal Solves Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              What Cardinal Solves
            </h2>
            <p className="text-xl text-gray-600">
              Outcome-driven digital systems built specifically for {industry.toLowerCase()}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Success Story
            </h2>
            <p className="text-xl text-gray-600">
              Real results from a {industry.toLowerCase()} business we partnered with.
            </p>
          </div>
          
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
            <CardContent className="p-12">
              <div className="mb-8">
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">Featured Client</div>
                <h3 className="text-3xl font-semibold text-gray-900">{caseStudy.client}</h3>
              </div>
              
              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Challenge</div>
                  <p className="text-lg text-gray-700">{caseStudy.problem}</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Solution</div>
                  <p className="text-lg text-gray-700">{caseStudy.solution}</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Results</div>
                  <p className="text-lg text-gray-900 font-medium">{caseStudy.result}</p>
                </div>
              </div>
              
              <Link to={caseStudy.link}>
                <Button variant="outline" className="w-full sm:w-auto group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300">
                  View Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 bg-gradient-to-r ${accentColor} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Transform Your {industry} Business?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Get a custom project roadmap designed specifically for your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get Your Free Project Roadmap
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryLandingTemplate;
