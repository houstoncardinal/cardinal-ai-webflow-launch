
import { Building, Shield, Heart, Scale } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Building,
      title: "Real Estate",
      description: "Innovative digital solutions for property management, listings, and client engagement platforms."
    },
    {
      icon: Shield,
      title: "Government",
      description: "Secure, compliant digital infrastructure and citizen service portals for public sector organizations."
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Professional websites and case management systems for law firms and legal professionals."
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant digital solutions for healthcare providers and medical professionals."
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industry Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges and requirements of different industries, 
            delivering specialized solutions that meet sector-specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="mb-6">
                  <industry.icon className="w-16 h-16 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
