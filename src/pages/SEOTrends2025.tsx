import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, CheckCircle, TrendingUp, Sparkles, Search, Brain } from "lucide-react";

const SEOTrends2025 = () => {
  const handleDownload = () => {
    window.open('/SEO_Trends_2025_White_Paper.pdf', '_blank');
  };

  return (
    <>
      <SEO 
        title="SEO Trends 2025: A Comprehensive Guide for Businesses | Cardinal Consulting"
        description="Download our comprehensive white paper on SEO trends for 2025. Learn about AI-assisted content, E-E-A-T signals, Core Web Vitals, voice search, and zero-click optimization strategies."
        keywords="SEO trends 2025, AI content creation, E-E-A-T, Core Web Vitals, voice search optimization, generative engine optimization, local SEO, SEO white paper"
        url="/seo-trends-2025"
        image="/seo-trends-2025-thumbnail.jpg"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center text-sm font-medium text-blue-600 uppercase tracking-wide mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                White Paper 2025
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
                SEO Trends 2025
                <span className="block text-blue-600 font-normal mt-4 text-4xl lg:text-5xl">
                  A Comprehensive Guide for Businesses
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Navigate the evolving search landscape with insights on AI-powered optimization, 
                E-E-A-T signals, Core Web Vitals 2.0, voice search, and generative engine optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleDownload}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download White Paper
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/seo-trends-2025-thumbnail.jpg" 
                  alt="SEO Trends 2025 White Paper Cover"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Executive Summary</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-6 text-center">
            In 2025, search engine optimization is transforming faster than ever. Generative AI tools, 
            voice-controlled search, and new SERP formats are changing how people find information. 
            Businesses that adapt will gain a competitive advantage; those that ignore these shifts 
            risk becoming invisible.
          </p>
          
          <p className="text-xl text-gray-600 leading-relaxed text-center">
            This white paper from Cardinal Consulting summarizes the most important SEO trends, 
            explains what they mean for small, midsize, and enterprise organizations, and provides 
            actionable recommendations.
          </p>
        </div>
      </section>

      {/* Key Topics Covered */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">What's Inside</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Comprehensive insights across 10 critical SEO trend areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Assisted Content Creation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Learn how to leverage AI tools like ChatGPT and Claude while maintaining 
                      authenticity and E-E-A-T signals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">E-E-A-T & Experience Signals</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Understand Google's emphasis on Experience, Expertise, Authoritativeness, 
                      and Trustworthiness.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Core Web Vitals 2.0</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Master technical performance metrics and mobile-first indexing requirements 
                      for 2025.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-lg p-3">
                    <Search className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Voice & Conversational Search</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Optimize for voice search adoption with conversational content and 
                      structured data strategies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 rounded-lg p-3">
                    <Sparkles className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Zero-Click & AI Answer Engines</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Learn AEO/GEO strategies for ChatGPT, Gemini, and Perplexity optimization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 rounded-lg p-3">
                    <CheckCircle className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Hyperlocal & Personalized Search</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Discover local SEO tactics and micro-targeted content strategies that 
                      drive results.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Topics */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Plus Four More Critical Trends</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Video & Visual Search Optimization</h3>
                <p className="text-gray-600">Strategies for YouTube SEO and visual search platforms like Google Lens.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Schema Markup & Structured Data</h3>
                <p className="text-gray-600">Advanced implementation techniques for rich results and enhanced SERP presence.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">International & Multilingual SEO</h3>
                <p className="text-gray-600">Best practices for hreflang, regional targeting, and global expansion.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Actionable Recommendations by Business Size</h3>
                <p className="text-gray-600">Tailored strategies for small businesses, mid-market companies, and enterprises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Stay Ahead of the Competition
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Download our comprehensive 2025 SEO trends white paper and transform your digital 
            strategy with data-driven insights and actionable recommendations.
          </p>
          
          <Button 
            onClick={handleDownload}
            className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 w-5 h-5" />
            Download White Paper (PDF)
          </Button>
          
          <p className="text-blue-100 mt-6 text-sm">Free download • No registration required • 15-page guide</p>
        </div>
      </section>

      {/* About Cardinal Consulting */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">About Cardinal Consulting</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Cardinal Consulting helps businesses of all sizes navigate the complex digital landscape. 
            Our team of SEO experts, developers, and strategists deliver measurable results through 
            data-driven optimization, technical excellence, and strategic content development.
          </p>
          <Button 
            asChild
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
          >
            <a href="/contact">Schedule a Strategy Call</a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default SEOTrends2025;
