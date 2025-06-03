
import { Building, Shield, Heart, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="industries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide mb-6">
            <div className="w-8 h-px bg-green-500 mr-4"></div>
            Industries
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Sector expertise
            <span className="block text-green-600 font-normal">
              across industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            We understand the unique challenges and requirements of different industries, 
            delivering specialized solutions that meet sector-specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="group border-gray-200 hover:border-green-500 transition-all duration-300 bg-white shadow-none hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <industry.icon className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
