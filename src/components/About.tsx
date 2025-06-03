
import { Target, Users, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Excellence",
      description: "Delivering transformative digital solutions that drive measurable business outcomes and competitive advantage."
    },
    {
      icon: Users,
      title: "Partnership Focus",
      description: "Building long-term strategic partnerships through exceptional service delivery and innovation leadership."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Maintaining the highest standards in every engagement with rigorous quality processes and performance optimization."
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Pioneering emerging technologies like AI Experience Optimization to deliver next-generation solutions."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block bg-slate-100 text-slate-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              About Cardinal Consulting
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 tracking-tight leading-tight">
              Transforming Businesses
              <span className="block font-normal text-blue-600">Through Innovation</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-light">
              Cardinal Consulting is a premier digital transformation consultancy with global reach 
              and local expertise. Operating from strategic locations in Houston, Dubai, and Irvine, 
              we deliver enterprise-grade solutions to Fortune 500 companies and emerging market leaders.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
              As pioneers in AI Experience Optimization (AEO), we're defining the future of digital 
              interaction by optimizing content and experiences for next-generation AI systems, 
              ensuring our clients maintain competitive advantage in an AI-driven marketplace.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-4xl font-light text-blue-600 mb-2">150+</div>
                <div className="text-slate-600 text-sm font-medium">Enterprise Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-blue-600 mb-2">3</div>
                <div className="text-slate-600 text-sm font-medium">Global Offices</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-blue-600 mb-2">99.9%</div>
                <div className="text-slate-600 text-sm font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
