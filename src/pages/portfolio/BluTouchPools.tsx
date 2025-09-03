import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Star,
  ExternalLink,
  Palette,
  Smartphone,
  Globe,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const BluTouchPools = () => {
  const project = {
    id: "blutouch-pools",
    title: "BluTouch Pools & Spas",
    category: "Pool & Spa Services",
    description: "Expert Service & Attention to Detail - Professional pool maintenance and design services",
    image: "/blutouch.png",
    tags: ["Pool Maintenance", "Pool Design", "Spa Services", "Water Management"],
    metrics: {
      timeline: "Under 2 weeks",
      team: "3 developers",
      impact: "40% increase in online bookings"
    },
    industry: "Pool & Spa Services",
    services: ["Website Design", "E-commerce Integration", "SEO Optimization", "Mobile Optimization"],
    longDescription: "BluTouch Pools & Spas is Houston's premier pool maintenance and design company, specializing in providing consistent attention to detail and exceptional service. With over 10 years of experience, they maintain sparkling pools and offer award-winning pool design for new construction and remodeling projects.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Google Maps API", "Responsive Design"],
    results: [
      "40% increase in online service bookings",
      "25% improvement in customer inquiry response time",
      "Enhanced mobile experience for on-site technicians",
      "Streamlined scheduling and payment processing"
    ],
    challenge: "BluTouch needed a modern, professional website that could showcase their pool design portfolio, handle online service bookings, and provide customers with easy access to maintenance schedules and pool care information. The site needed to reflect their commitment to quality and attention to detail.",
    solution: "We created a comprehensive website featuring a stunning portfolio gallery of their pool designs, an intuitive online booking system for maintenance services, and detailed information about their sustainable water management practices. The site includes mobile-optimized forms for technicians and an integrated payment system.",
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
        description={`${project.description} - See how we helped ${project.title} transform their digital presence with a modern website and online booking system.`}
        keywords={`${project.title}, pool services, website design, Houston, portfolio, Cardinal Consulting`}
        url={`/portfolio/${project.id}`}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center text-sm font-medium text-blue-600 uppercase tracking-wide mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-blue-400 to-blue-600 mr-6"></div>
                Portfolio Project
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                {project.title}
                <span className="block text-blue-600 font-normal mt-2">
                  Pool & Spa Excellence
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.location.href = '#overview'} 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  View Project Details
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = '/contact'} 
                  className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <img 
                  src={project.image} 
                  alt={`${project.title} Project`}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{project.metrics.timeline}</div>
                  <div className="text-sm text-gray-600">Delivery Time</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{project.metrics.impact}</div>
                  <div className="text-sm text-gray-600">Performance Boost</div>
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
              A comprehensive digital transformation for Houston's premier pool and spa service company
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Timeline</h3>
                <p className="text-gray-600">{project.metrics.timeline}</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Team Size</h3>
                <p className="text-gray-600">{project.metrics.team}</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Impact</h3>
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
              <div className="inline-flex items-center text-sm font-medium text-red-600 uppercase tracking-wide mb-6">
                <div className="w-8 h-px bg-red-400 mr-4"></div>
                The Challenge
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                Modernizing Pool Service Operations
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-6">
                <div className="w-8 h-px bg-green-400 mr-4"></div>
                Our Solution
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                Comprehensive Digital Platform
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
              Our systematic approach ensured timely delivery and exceptional quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {project.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{step}</h4>
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
              Modern tech stack ensuring performance, scalability, and user experience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {project.technologies.map((tech, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-blue-600" />
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
              Measurable improvements that transformed BluTouch's digital presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.results.map((result, index) => (
              <div key={index} className="flex items-start space-x-4">
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let Cardinal Consulting help you create a powerful digital presence that drives results
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              asChild
              className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 group"
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

export default BluTouchPools; 