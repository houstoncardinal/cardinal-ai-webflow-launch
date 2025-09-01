import { ArrowLeft, ExternalLink, CheckCircle, Target } from "lucide-react";
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
    metrics: { clients: "1000+", services: "15+", states: "50", satisfaction: "98%" },
    industry: "Tax Services",
    services: ["Website Development", "Quick Action Widgets", "Service Landing Pages", "SEO Optimization"],
    longDescription: "Vargas Tax needed a powerful website with customized quick action widgets and powerful SEO to maximize their reach across all of America. We delivered a comprehensive solution with customized landing pages for each individual service, powerful call-to-actions, and nationwide SEO optimization.",
    technologies: ["React", "Node.js", "WordPress", "SEO Tools", "Analytics"],
    results: ["Increased nationwide visibility", "Enhanced service page conversions", "Improved client engagement", "Expanded service reach"],
    challenge: "Vargas Tax needed a powerful website that could reach clients across all of America with customized quick action widgets and powerful SEO optimization. Their existing online presence lacked the ability to showcase individual services effectively and convert visitors into clients.",
    solution: "We developed a comprehensive website solution featuring customized quick action widgets for immediate client engagement, powerful SEO optimization for nationwide visibility, and customized landing pages for each individual tax service to maximize conversions.",
    process: [
      {
        phase: "Discovery & Strategy",
        description: "Analyzed tax service market, identified key service categories, and planned nationwide SEO strategy for maximum reach across all 50 states.",
        duration: "2 weeks"
      },
      {
        phase: "Design & Development",
        description: "Created intuitive user interfaces with quick action widgets, developed customized landing pages for each service, and implemented powerful call-to-actions.",
        duration: "8 weeks"
      },
      {
        phase: "SEO Implementation",
        description: "Implemented comprehensive SEO optimization for nationwide visibility, including local SEO for each state and service-specific keyword targeting.",
        duration: "4 weeks"
      },
      {
        phase: "Testing & Launch",
        description: "Comprehensive testing across all service pages, SEO validation, and phased rollout to ensure optimal performance and conversions.",
        duration: "2 weeks"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={`${project.title} - Tax Preparation Services Portfolio | Cardinal Consulting`}
        description={`${project.description} See how we helped ${project.title} achieve nationwide digital presence with our comprehensive tax service website development and SEO optimization services.`}
        keywords={`${project.title}, Houston tax services, Houston tax preparation, Houston web development, ${project.industry} portfolio, nationwide SEO`}
        url={`/portfolio/${project.id}`}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center text-sm font-medium text-green-400 uppercase tracking-wide mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-green-400 to-green-600 mr-6"></div>
              {project.category}
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
              {project.longDescription}
            </p>

            {/* Back to Portfolio Button */}
            <Link to="/portfolio">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-50 hover:text-gray-900 px-6 py-3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Project Image */}
            <div className="relative">
              <img 
                src={project.image} 
                alt={`${project.title} - ${project.category}`}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {project.industry}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-6">Project Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6">
                {Object.entries(project.metrics).map(([key, value], index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Services Delivered */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Delivered</h3>
                <div className="flex flex-wrap gap-3">
                  {project.services.map((service, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Challenge */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.solution}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensured timely delivery and exceeded expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.process.map((phase, index) => (
              <div key={index} className="relative">
                {index < project.process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-green-200 to-gray-200 z-0"></div>
                )}
                
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 z-10">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{phase.phase}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{phase.description}</p>
                  <div className="text-sm text-green-600 font-medium">{phase.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Technologies Used</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technologies for optimal performance and scalability
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-300">
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Results & Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes that transformed their business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.results.map((result, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-green-100 mb-12 leading-relaxed">
            Let's discuss how our expertise can help you achieve similar results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Start Your Project
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-medium">
                View More Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VargasGroup; 