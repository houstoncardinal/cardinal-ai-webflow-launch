
import { ExternalLink, ArrowRight, TrendingUp, Users, Globe, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const featuredProjects = [
    {
      id: "vargas-tax",
      title: "Vargas Tax",
      category: "Tax Preparation Services",
      description: "Powerful website for tax preparation services with customized quick action widgets, powerful SEO for all of America, and customized landing pages for each individual service.",
      image: "/vargas.png",
      tags: ["Tax Services", "Quick Actions", "Landing Pages", "SEO"],
      metrics: { clients: "1000+", services: "15+", states: "50", satisfaction: "98%" },
      industry: "Tax Services",
      services: ["Website Development", "Quick Action Widgets", "Service Landing Pages", "SEO Optimization"]
    },
    {
      id: "clearledger",
      title: "ClearLedger Solutions",
      category: "Bookkeeping Services",
      description: "Your Trusted Financial Partner specializing in accurate, reliable, and transparent bookkeeping services tailored to small businesses and entrepreneurs.",
      image: "/clearledger.png",
      tags: ["Bookkeeping", "Small Business", "Financial Services", "Women-Led"],
      metrics: { clients: "500+", accuracy: "99.9%", satisfaction: "4.9/5", years: "8+" },
      industry: "Financial Services",
      services: ["Website Development", "Quick Action Widgets", "Service Pages", "SEO Optimization"]
    },
    {
      id: "blutouch-pools",
      title: "BluTouch Pools & Spas",
      category: "Pool & Spa Services",
      description: "Expert Service & Attention to Detail. Over 10 years' experience in swimming pool maintenance, award-winning pool design team specializing in new pool construction and pool remodeling.",
      image: "/blutouch.png",
      tags: ["Pool Services", "Maintenance", "Construction", "Design"],
      metrics: { years: "10+", pools: "200+", satisfaction: "4.8/5", awards: "5+" },
      industry: "Pool & Spa Services",
      services: ["Website Development", "Service Showcase", "Portfolio Display", "SEO Optimization"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6">
            Client Results
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Measurable outcomes from strategic digital transformation
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {featuredProjects.map((project) => (
            <Link key={project.id} to={`/portfolio/${project.id}`} className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-white overflow-hidden">
                 <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-semibold text-green-600">
                          {project.metrics.clients || project.metrics.years || 'N/A'}
                        </div>
                        <div className="text-xs text-gray-500">
                          {project.metrics.clients ? 'Clients' : project.metrics.years ? 'Years' : 'N/A'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-semibold text-blue-600">
                          {project.metrics.services || project.metrics.pools || project.metrics.accuracy || 'N/A'}
                        </div>
                        <div className="text-xs text-gray-500">
                          {project.metrics.services ? 'Services' : project.metrics.pools ? 'Pools' : project.metrics.accuracy ? 'Accuracy' : 'N/A'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-semibold text-purple-600">
                          {project.metrics.satisfaction || project.metrics.awards || 'N/A'}
                        </div>
                        <div className="text-xs text-gray-500">
                          {project.metrics.satisfaction ? 'Satisfaction' : project.metrics.awards ? 'Awards' : 'N/A'}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg font-medium w-full sm:w-auto justify-center"
          >
            View All Results
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
