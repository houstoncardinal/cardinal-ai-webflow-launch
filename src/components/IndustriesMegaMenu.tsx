import { Building2, Heart, Scale, Home, DollarSign, Landmark } from "lucide-react";
import { Link } from "react-router-dom";

const IndustriesMegaMenu = () => {
  const industries = [
    {
      icon: Heart,
      name: "Healthcare",
      description: "Digital solutions for medical practices, clinics, and healthcare providers",
      href: "/industries/healthcare",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Scale,
      name: "Legal",
      description: "Web systems for law firms, attorneys, and legal service providers",
      href: "/industries/legal",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Building2,
      name: "Real Estate",
      description: "Platforms for brokers, agencies, and property management",
      href: "/industries/real-estate",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Home,
      name: "Home Services",
      description: "Growth systems for contractors, HVAC, plumbing, and trades",
      href: "/industries/home-services",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: DollarSign,
      name: "Financial Services",
      description: "Secure platforms for accounting, finance, and advisory firms",
      href: "/industries/financial-services",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Landmark,
      name: "Government",
      description: "Accessible systems for public sector and municipal services",
      href: "/industries/government",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-[9999] mega-menu-container">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
            Industry Solutions
          </h3>
          <p className="text-sm text-gray-600">
            Specialized digital transformation for your industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              to={industry.href}
              className="group relative p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl ${industry.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className={`w-6 h-6 ${industry.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">
                    {industry.name}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesMegaMenu;
