
import { Target, Users, Award, Lightbulb, Globe, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Excellence",
      description: "Delivering transformative digital solutions that drive measurable business outcomes and competitive advantage.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Partnership Focus",
      description: "Building long-term strategic partnerships through exceptional service delivery and innovation leadership.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Maintaining the highest standards in every engagement with rigorous quality processes and performance optimization.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Pioneering emerging technologies like AI Experience Optimization to deliver next-generation solutions.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    { icon: Globe, value: "3", label: "Global Offices", description: "Houston • Dubai • Irvine" },
    { icon: TrendingUp, value: "150+", label: "Enterprise Projects", description: "Delivered Successfully" },
    { icon: Shield, value: "99.9%", label: "Client Satisfaction", description: "Proven Track Record" },
    { icon: Zap, value: "5+", label: "Years Excellence", description: "Industry Leadership" }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-slate-50/50 to-transparent"></div>
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-slate-100 to-blue-50 text-slate-800 text-sm font-semibold px-6 py-3 rounded-full mb-8 border border-slate-200/50">
            About Cardinal Consulting
          </div>
          <h2 className="text-5xl md:text-6xl font-thin text-slate-900 mb-8 tracking-tight leading-tight">
            Transforming Businesses
            <span className="block font-light bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mt-2">
              Through Innovation
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed">
            Cardinal Consulting is a premier digital transformation consultancy with global reach 
            and local expertise, defining the future of enterprise digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                Operating from strategic locations in Houston, Dubai, and Irvine, we deliver 
                enterprise-grade solutions to Fortune 500 companies and emerging market leaders 
                across multiple industries and geographies.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                As pioneers in AI Experience Optimization (AEO), we're defining the future of digital 
                interaction by optimizing content and experiences for next-generation AI systems, 
                ensuring our clients maintain competitive advantage in an AI-driven marketplace.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Our comprehensive approach combines strategic consulting, cutting-edge technology, 
                and deep industry expertise to deliver transformational outcomes that drive 
                sustainable growth and market leadership.
              </p>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
              Discover Our Story
            </Button>
          </div>

          {/* Right Content - Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-500 text-center group hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-light text-slate-900 mb-2">{achievement.value}</div>
                <div className="text-slate-700 font-semibold mb-1">{achievement.label}</div>
                <div className="text-slate-500 text-sm font-light">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-16 shadow-2xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-thin text-white mb-6 tracking-tight">
              Our Core Values
            </h3>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-light">
              The principles that guide our approach to delivering exceptional digital transformation outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 group">
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-slate-300 leading-relaxed font-light">
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
