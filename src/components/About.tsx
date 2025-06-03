
import { Target, Users, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Delivering customized digital solutions that drive real business growth and engagement."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Building long-term partnerships through exceptional service and innovative solutions."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Maintaining the highest standards in every project with attention to detail and performance."
    },
    {
      icon: Lightbulb,
      title: "Innovation Leaders",
      description: "Pioneering new technologies like AI Experience Optimization to stay ahead of the curve."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Cardinal Consulting
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in Houston with offices in Dubai and Irvine, Cardinal Consulting is a 
              creative design studio specializing in high-end digital solutions. We combine 
              technical expertise with creative vision to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As pioneers in AI Experience Optimization (AEO), we're leading the charge in 
              optimizing content for AI systems like ChatGPT and CoPilot, ensuring our 
              clients stay ahead in the evolving digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-600">Global Offices</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
