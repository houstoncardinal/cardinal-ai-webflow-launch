
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Globe, Trophy, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CareersPage = () => {
  const values = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented individuals who share your passion for innovation and excellence."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Your work will reach clients across multiple industries and continents."
    },
    {
      icon: Trophy,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement in cutting-edge technologies."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe great work comes from happy, fulfilled team members."
    }
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Houston, TX / Remote",
      type: "Full-time"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Houston, TX / Remote",
      type: "Full-time"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Houston, TX",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Join Our <span className="text-green-600 font-normal">Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Build the future of digital transformation with us. We're looking for passionate individuals who want to make a real impact.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Why Cardinal?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than just a company – we're a community of innovators building something extraordinary.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Ready to take the next step in your career?
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">{position.department}</span>
                      <span>{position.location}</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see a position that fits? We're always looking for talented people.</p>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Send us your resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
