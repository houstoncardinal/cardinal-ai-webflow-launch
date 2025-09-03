import { ArrowLeft, ExternalLink, CheckCircle, Target, ArrowRight, Calendar, Users, TrendingUp, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const VargasGroup = () => {
  const project = {
    id: "vargas-tax",
    title: "Vargas Tax",
    category: "Tax Preparation Services",
    description: "Powerful website for tax preparation services with customized quick action widgets, powerful SEO for all of America, and customized landing pages for each individual service.",
    image: "/vargas.png",
    tags: ["Tax Services", "Quick Actions", "Landing Pages", "SEO"],
    metrics: { 
      timeline: "16 weeks",
      team: "6 developers", 
      impact: "Nationwide reach across 50 states"
    },
    industry: "Tax Services",
    services: ["Website Development", "Quick Action Widgets", "Service Landing Pages", "SEO Optimization"],
    longDescription: "Vargas Tax needed a powerful website with customized quick action widgets and powerful SEO to maximize their reach across all of America. We delivered a comprehensive solution with customized landing pages for each individual service, powerful call-to-actions, and nationwide SEO optimization.",
    technologies: ["React", "Node.js", "WordPress", "SEO Tools", "Analytics"],
    results: ["Increased nationwide visibility", "Enhanced service page conversions", "Improved client engagement", "Expanded service reach"],
    challenge: "Vargas Tax needed a powerful website that could reach clients across all of America with customized quick action widgets and powerful SEO optimization. Their existing online presence lacked the ability to showcase individual services effectively and convert visitors into clients.",
    solution: "We developed a comprehensive website solution featuring customized quick action widgets for immediate client engagement, powerful SEO optimization for nationwide visibility, and customized landing pages for each individual tax service to maximize conversions.",
    process: [
      "Discovery and requirements gathering",
      "Design and wireframing", 
      "Development and testing",
      "Content migration and SEO optimization",
      "Launch and training"
    ]
  };

  return (
    <>
      <SEO 
        title={`${project.title} - Portfolio | Cardinal Consulting`}
        description={`${project.description} - See how we helped ${project.title} transform their digital presence with a modern website and nationwide SEO strategy.`}
        keywords={`${project.title}, tax services, website design, SEO, portfolio, Cardinal Consulting`}
        url={`/portfolio/${project.id}`}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-green-400 to-green-600 mr-6"></div>
                Portfolio Project
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                {project.title}
                <span className="block text-green-600 font-normal mt-2">
                  Nationwide Tax Services
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <a href="#overview">
                    View Project Details
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  asChild
                  className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 group"
                >
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={`${project.title} Project`}
                  className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{project.metrics.timeline}</div>
                  <div className="text-sm text-gray-600">Delivery Time</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">{project.metrics.impact}</div>
                  <div className="text-sm text-gray-600">Nationwide Reach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Project Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive digital transformation for nationwide tax preparation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-200">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Timeline</h3>
                <p className="text-gray-600">{project.metrics.timeline}</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-emerald-100 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-200">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Team Size</h3>
                <p className="text-gray-600">{project.metrics.team}</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-teal-100 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-200">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Reach</h3>
                <p className="text-gray-600">{project.metrics.impact}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-6">
                <div className="w-8 h-px bg-green-400 mr-4"></div>
                The Challenge
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                Nationwide Digital Presence
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center text-sm font-medium text-emerald-600 uppercase tracking-wide mb-6">
                <div className="w-8 h-px bg-emerald-400 mr-4"></div>
                Our Solution
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                Comprehensive Tax Platform
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensured nationwide reach and exceptional quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {project.process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-200">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Technologies & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tech stack ensuring performance, scalability, and nationwide reach
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {project.technologies.map((tech, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-200">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-sm font-medium text-gray-900">{tech}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Results & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable improvements that transformed Vargas Tax's nationwide presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.results.map((result, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-lg text-gray-900 font-medium">{result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Let Cardinal Consulting help you create a powerful digital presence that drives results
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              asChild
              className="border-white text-green-600 hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 group"
            >
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default VargasGroup; 