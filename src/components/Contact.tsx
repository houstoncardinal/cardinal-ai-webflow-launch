
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email us",
      details: "hello@cardinalhouston.com",
      subtitle: "Get in touch with our team"
    },
    {
      icon: Phone,
      title: "Call us",
      details: "+1 (713) 555-0123",
      subtitle: "Speak with a consultant"
    },
    {
      icon: MapPin,
      title: "Visit us",
      details: "Houston • Dubai • Irvine",
      subtitle: "Global presence, local expertise"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide mb-6">
            <div className="w-8 h-px bg-green-500 mr-4"></div>
            Contact Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Ready to make an impact
            <span className="block text-green-600 font-normal">
              together?
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Connect with our expert consultants to discuss your digital transformation journey 
            and discover how we can accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <Card key={index} className="border-gray-200 hover:border-green-500 transition-colors duration-300">
              <CardContent className="p-8 text-center">
                <item.icon className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-900 mb-1 font-medium">{item.details}</p>
                <p className="text-gray-500 text-sm">{item.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-gray-200">
            <CardContent className="p-12">
              <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">
                Start your transformation
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First name *
                    </label>
                    <Input placeholder="John" className="border-gray-300 focus:border-green-500 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last name *
                    </label>
                    <Input placeholder="Doe" className="border-gray-300 focus:border-green-500 focus:ring-green-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email address *
                  </label>
                  <Input type="email" placeholder="john@company.com" className="border-gray-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company name *
                  </label>
                  <Input placeholder="Your Company" className="border-gray-300 focus:border-green-500 focus:ring-green-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help? *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500 h-32"
                  />
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  Send message
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
