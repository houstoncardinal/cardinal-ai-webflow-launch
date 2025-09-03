import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/cardinalad", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Web Applications",
    "Hosting Solutions",
    "SEO Optimization",
    "Brand Identity",
    "Social Media Marketing",
    "AI Experience Optimization"
  ];

  const industries = [
    "Real Estate",
    "Government",
    "Legal Services",
    "Healthcare"
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Animated tech background */}
      <div className="absolute inset-0 opacity-10">
        {/* Digital grid pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="footer-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#10b981" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#footer-grid)" />
          </svg>
        </div>
        
        {/* Network connections */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1200 400">
            <g opacity="0.4" stroke="#10b981" strokeWidth="1" fill="none">
              <path d="M100,100 Q300,50 500,100 T900,100" strokeDasharray="4,4">
                <animate attributeName="stroke-dashoffset" values="0;8;0" dur="4s" repeatCount="indefinite"/>
              </path>
              <path d="M200,200 Q400,150 600,200 T1000,200" strokeDasharray="4,4">
                <animate attributeName="stroke-dashoffset" values="0;8;0" dur="5s" repeatCount="indefinite"/>
              </path>
              <path d="M150,300 Q350,250 550,300 T950,300" strokeDasharray="4,4">
                <animate attributeName="stroke-dashoffset" values="0;8;0" dur="6s" repeatCount="indefinite"/>
              </path>
            </g>
            
            {/* Network nodes */}
            <g fill="#10b981" opacity="0.6">
              <circle cx="100" cy="100" r="2">
                <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="500" cy="100" r="2">
                <animate attributeName="r" values="2;4;2" dur="3.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="900" cy="100" r="2">
                <animate attributeName="r" values="2;4;2" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="200" cy="200" r="2">
                <animate attributeName="r" values="2;4;2" dur="2.8s" repeatCount="indefinite"/>
              </circle>
              <circle cx="600" cy="200" r="2">
                <animate attributeName="r" values="2;4;2" dur="3.2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="1000" cy="200" r="2">
                <animate attributeName="r" values="2;4;2" dur="3.8s" repeatCount="indefinite"/>
              </circle>
            </g>
          </svg>
        </div>

        {/* Floating data points */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-500 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-green-400 rounded-full opacity-8 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gray-400 rounded-full opacity-6 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-full px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 animate-fade-in">
              <div className="text-3xl font-light mb-6 group cursor-pointer">
                <span className="text-white">Cardinal</span><span className="text-green-400 group-hover:text-green-300 transition-colors duration-300">Consulting</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed font-light">
                We've been in business for over 7+ years providing powerful services to communities and clients all over America. Our commitment to excellence and innovation has made us a trusted partner for businesses seeking digital transformation.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-green-600 hover:text-white transition-all duration-300 group"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="animate-fade-in" style={{animationDelay: '200ms'}}>
              <h3 className="text-xl font-light mb-6 text-green-400">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/web-development" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                    <span className="relative">
                      Web Development
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/mobile-applications" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                    <span className="relative">
                      Mobile App Development
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/web-applications" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                    <span className="relative">
                      Web Applications
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/cloud-solutions" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                    <span className="relative">
                      Hosting Solutions
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/seo-insights" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                    <span className="relative">
                      SEO Optimization
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/brand-identity" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                    <span className="relative">
                      Brand Identity
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/digital-campaigns" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                    <span className="relative">
                      Social Media Marketing
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/experience-optimization" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                    <span className="relative">
                      AI Experience Optimization
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div className="animate-fade-in" style={{animationDelay: '400ms'}}>
              <h3 className="text-xl font-light mb-6 text-green-400">Industries</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/industries" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                    <span className="relative">
                      Real Estate
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                    <span className="relative">
                      Government
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                    <span className="relative">
                      Legal Services
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                    <span className="relative">
                      Healthcare
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              </ul>
              <h3 className="text-xl font-light mb-6 mt-10 text-green-400">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                  <span className="relative">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link></li>
                <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                  <span className="relative">
                    Portfolio
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                  <span className="relative">
                    Careers
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block group">
                  <span className="relative">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in" style={{animationDelay: '600ms'}}>
              <h3 className="text-xl font-light mb-6 text-green-400">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div className="text-gray-300 text-sm font-light">
                    <div className="hover:text-white transition-colors duration-300">2100 West Loop S Fwy</div>
                    <div className="hover:text-white transition-colors duration-300">Houston, TX 77027</div>
                    <div className="hover:text-white transition-colors duration-300">Dubai, UAE</div>
                    <div className="hover:text-white transition-colors duration-300">Irvine, CA</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <Phone className="w-5 h-5 text-green-400 group-hover:animate-pulse" />
                  <span className="text-gray-300 text-sm font-light hover:text-white transition-colors duration-300">(832) 989-2163</span>
                </div>
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <Mail className="w-5 h-5 text-green-400 group-hover:animate-pulse" />
                  <span className="text-gray-300 text-sm font-light hover:text-white transition-colors duration-300">hello@cardinalhtx.com</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="animate-fade-in" style={{animationDelay: '800ms'}}>
              <NewsletterSignup />
            </div>
          </div>

          <div className="border-t border-gray-700/50 mt-16 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm font-light animate-fade-in">
                © 2024 Cardinal Consulting. All rights reserved.
              </p>
              <div className="flex space-x-8 mt-6 md:mt-0 animate-fade-in" style={{animationDelay: '200ms'}}>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm font-light transition-all duration-300 hover:scale-105 group">
                  <span className="relative">
                    Privacy Policy
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm font-light transition-all duration-300 hover:scale-105 group">
                  <span className="relative">
                    Terms of Service
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
