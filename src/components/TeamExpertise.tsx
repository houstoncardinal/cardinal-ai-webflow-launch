
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "150+",
    label: "Expert Developers",
    description: "Full-stack engineers and specialists"
  },
  {
    icon: Award,
    number: "500+",
    label: "Projects Delivered",
    description: "Successful implementations worldwide"
  },
  {
    icon: Globe,
    number: "40+",
    label: "Countries Served",
    description: "Global client base and presence"
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Client Satisfaction",
    description: "Consistently high ratings"
  }
];

const expertise = [
  {
    category: "Frontend Excellence",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
    color: "blue"
  },
  {
    category: "Backend Mastery",
    technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"],
    color: "green"
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
    color: "purple"
  },
  {
    category: "Mobile Development",
    technologies: ["React Native", "Flutter", "iOS Native", "Android Native", "Expo"],
    color: "orange"
  }
];

const colorVariants = {
  blue: "from-blue-500 to-cyan-500",
  green: "from-green-500 to-emerald-500",
  purple: "from-purple-500 to-pink-500",
  orange: "from-orange-500 to-red-500"
};

const TeamExpertise = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-sm font-medium text-green-400 uppercase tracking-wide mb-4">
            <div className="w-8 h-px bg-green-400 mr-4"></div>
            Team Excellence
            <div className="w-8 h-px bg-green-400 ml-4"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            World-Class <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-medium">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience and cutting-edge technical knowledge.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-light text-white mb-2">{stat.number}</div>
              <div className="text-green-400 font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Technical Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((area, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className={`text-xl font-semibold bg-gradient-to-r ${colorVariants[area.color]} bg-clip-text text-transparent mb-6`}>
                {area.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {area.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-4 py-2 bg-gradient-to-r ${colorVariants[area.color]} bg-opacity-10 text-white text-sm rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamExpertise;
