
import { Target, Users, Award, Lightbulb, Globe, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Purpose-driven",
      description: "We deliver solutions that create meaningful impact and drive sustainable business growth."
    },
    {
      icon: Users,
      title: "Human-centered",
      description: "Every solution we build puts people first, creating experiences that truly matter."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards through rigorous quality processes and continuous improvement."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We pioneer emerging technologies to deliver next-generation solutions for our clients."
    }
  ];

  const achievements = [
    { icon: Globe, value: "3", label: "Global offices", description: "Houston • Dubai • Irvine" },
    { icon: TrendingUp, value: "150+", label: "Projects delivered", description: "Enterprise solutions" },
    { icon: Shield, value: "99.9%", label: "Client satisfaction", description: "Proven excellence" },
    { icon: Zap, value: "5+", label: "Years of impact", description: "Industry leadership" }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide mb-6">
            <div className="w-8 h-px bg-green-500 mr-4"></div>
            About Cardinal
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Making an impact
            <span className="block text-green-600 font-normal">
              that matters
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Cardinal Consulting is a premier digital transformation consultancy with global reach 
            and local expertise, defining the future of enterprise digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Operating from strategic locations in Houston, Dubai, and Irvine, we deliver 
                enterprise-grade solutions to Fortune 500 companies and emerging market leaders 
                across multiple industries and geographies.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                As pioneers in AI Experience Optimization (AEO), we're defining the future of digital 
                interaction by optimizing content and experiences for next-generation AI systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our comprehensive approach combines strategic consulting, cutting-edge technology, 
                and deep industry expertise to deliver transformational outcomes.
              </p>
            </div>
            
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Learn more about us
            </Button>
          </div>

          {/* Right Content - Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <achievement.icon className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <div className="text-2xl font-light text-gray-900 mb-1">{achievement.value}</div>
                <div className="text-gray-900 font-medium mb-1">{achievement.label}</div>
                <div className="text-gray-500 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              Our values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our approach to delivering exceptional outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-3">
                  {value.title}
                </h4>
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
