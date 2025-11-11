import { useState } from "react";
import { ExternalLink, ArrowRight, TrendingUp, Users, Globe, BarChart3, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Portfolio = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: "houston-enterprise",
      title: "Houston Enterprise",
      category: "Construction Services",
      description: "Comprehensive construction services tailored to your needs. From custom home construction and renovations to meticulous remodeling projects, delivering excellence in residential and commercial construction.",
      image: "/houinc.png",
      tags: ["Construction", "Residential", "Commercial", "Project Management"],
      metrics: { leads: "450%", inquiries: "280%", satisfaction: "98%", value: "+35%" },
      industry: "Construction Services",
      services: ["Website Development", "Local SEO Domination", "Lead Generation", "Conversion Optimization"]
    },
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
    },
    {
      id: "hougenpros",
      title: "HougenPros",
      category: "Generator Services",
      description: "Built on Quality, Trust & Communication. As Houston's dedicated generator company, we've built our reputation on three core principles: delivering exceptional quality, maintaining transparent communication, and earning your trust through reliable service.",
      image: "/hougenpros.png",
      tags: ["Generator Services", "Quality", "Trust", "Communication"],
      metrics: { years: "15+", clients: "300+", satisfaction: "4.9/5", reliability: "99%" },
      industry: "Generator Services",
      services: ["Website Development", "Service Showcase", "Trust Building", "SEO Optimization"]
    },
    {
      id: "eps-parking",
      title: "EPS - Event Parking Services",
      category: "Parking Services",
      description: "Event Parking Services by Cardinal was founded with a simple mission: to provide exceptional parking services that elevate every event experience. What started as a vision to transform event parking has grown into Houston's most trusted valet service company.",
      image: "/eps.png",
      tags: ["Event Parking", "Valet Services", "Event Management", "Customer Service"],
      metrics: { events: "500+", clients: "200+", satisfaction: "4.8/5", years: "8+" },
      industry: "Parking Services",
      services: ["Website Development", "Event Booking", "Service Showcase", "SEO Optimization"]
    },
    {
      id: "iac-centers",
      title: "Injury Assistance Centers",
      category: "Healthcare",
      description: "At Injury Assistance Centers, we are dedicated to providing top-quality chiropractic care and holistic health services to the Dallas-Fort Worth Metroplex community. Our mission is to help individuals recover from injuries, manage pain, and achieve optimal health and wellness.",
      image: "/iac.png",
      tags: ["Chiropractic Care", "Holistic Health", "Injury Recovery", "Pain Management"],
      metrics: { patients: "1000+", satisfaction: "4.9/5", years: "12+", recovery: "95%" },
      industry: "Healthcare",
      services: ["Website Design", "Patient Portal", "Appointment Booking", "SEO Optimization"]
    },
    {
      id: "abq-mri",
      title: "ABQ MRI",
      category: "Healthcare",
      description: "At ABQ MRI, we understand that auto accidents and personal injuries can be a stressful experience. That's why we strive to make the entire process as stress-free and comfortable as possible. Our experienced and compassionate staff is here to answer any questions you may have.",
      image: "/abq.png",
      tags: ["Medical Imaging", "MRI Services", "Trauma Care", "Diagnostic Services"],
      metrics: { patients: "800+", satisfaction: "4.8/5", years: "10+", accuracy: "99%" },
      industry: "Healthcare",
      services: ["Website Design", "Service Showcase", "Patient Portal", "SEO Optimization"]
    },
    {
      id: "apn-clinic",
      title: "Advanced Pain & Neurology",
      category: "Healthcare",
      description: "Advanced Pain and Neurology provides comprehensive pain management solutions for traumatic brain injury and PTSD. We specialize in treating neck, back, arm, shoulder, knee, foot, ankle, and hip conditions using advanced minimally invasive techniques.",
      image: "/apn.png",
      tags: ["Pain Management", "Neurology", "TBI Treatment", "PTSD Care"],
      metrics: { patients: "1200+", satisfaction: "4.9/5", years: "15+", success: "92%" },
      industry: "Healthcare",
      services: ["Website Design", "Patient Portal", "Service Showcase", "SEO Optimization"]
    }
  ];

  const industries = [
    { value: "all", label: "All Industries" },
    { value: "Construction Services", label: "Construction Services" },
    { value: "Tax Services", label: "Tax Services" },
    { value: "Financial Services", label: "Financial Services" },
    { value: "Pool & Spa Services", label: "Pool & Spa Services" },
    { value: "Generator Services", label: "Generator Services" },
    { value: "Event Services", label: "Event Services" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Medical Imaging", label: "Medical Imaging" }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesIndustry = selectedIndustry === "all" || project.industry === selectedIndustry;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="Client Portfolio & Success Stories | Cardinal Consulting"
        description="Explore our comprehensive portfolio of successful client projects across America. From web development to digital marketing, see how we've helped businesses transform their digital presence."
        keywords="client portfolio, success stories, web development projects, digital marketing case studies, business transformations, Cardinal Consulting portfolio"
        url="/portfolio"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-green-400 to-green-600 mr-6"></div>
              Our Portfolio
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Client Success Stories
              <span className="block text-green-600 font-normal mt-2">
                Across America
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover how we've helped businesses across the United States transform their digital presence, 
              increase their online visibility, and achieve remarkable growth through strategic web development 
              and digital marketing solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
                <span className="text-green-600 font-semibold">50+ States Served</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
                <span className="text-blue-600 font-semibold">500+ Projects Completed</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
                <span className="text-purple-600 font-semibold">98% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Industry Filter */}
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <button
                  key={industry.value}
                  onClick={() => setSelectedIndustry(industry.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedIndustry === industry.value
                      ? "bg-green-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-700 border border-gray-200"
                  }`}
                >
                  {industry.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-12">
            <p className="text-gray-600">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link 
                key={project.id}
                to={`/portfolio/${project.id}`}
              >
                <Card 
                  className="group overflow-hidden border-gray-200 hover:border-green-500 transition-all duration-500 bg-white shadow-none hover:shadow-2xl cursor-pointer hover:scale-105 animate-fade-in"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - ${project.category}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-white bg-green-600 px-3 py-1 rounded-full animate-pulse">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-medium text-white bg-blue-600 px-3 py-1 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Enhanced Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-gray-50 to-green-50 rounded-lg group-hover:from-green-50 group-hover:to-gray-50 transition-all duration-300">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-sm font-medium text-green-600 group-hover:scale-110 transition-transform duration-300">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Services Provided */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Services Delivered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex} 
                          className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-green-100 group-hover:text-green-700 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full border-green-600 text-green-600 hover:bg-green-50 group/btn transition-all duration-300 hover:scale-105">
                    View case study
                    <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or industry filter</p>
              <Button 
                onClick={() => {
                  setSelectedIndustry("all");
                  setSearchTerm("");
                }}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Houston Market Impact Section */}
      <section className="py-24 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our Impact on Houston's Digital Landscape
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped transform hundreds of Houston businesses with innovative digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Houston Projects</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Houston Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio; 