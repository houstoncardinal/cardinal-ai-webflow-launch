
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@cardinalhouston.com",
      subtitle: "Get in touch with our team",
      action: "mailto:hello@cardinalhouston.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (713) 555-0123",
      subtitle: "Speak with a consultant",
      action: "tel:+17135550123"
    },
    {
      icon: MapPin,
      title: "Offices",
      details: "Houston • Dubai • Irvine",
      subtitle: "Global presence, local expertise",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-900/50 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            Get Started
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Ready to Transform
            <span className="block font-normal text-blue-400">Your Business?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
            Connect with our expert consultants to discuss your digital transformation journey 
            and discover how we can accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-200 mb-2 font-medium">{item.details}</p>
                <p className="text-slate-300 text-sm font-light">{item.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
            <CardContent className="p-10">
              <h3 className="text-3xl font-light text-white mb-8 text-center">
                Start Your Transformation Journey
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-3">
                      First Name *
                    </label>
                    <Input placeholder="John" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 backdrop-blur-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-3">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 backdrop-blur-sm" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-3">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john@company.com" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 backdrop-blur-sm" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-3">
                    Company Name *
                  </label>
                  <Input placeholder="Your Company" className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 backdrop-blur-sm" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-3">
                    Project Requirements *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your digital transformation needs, project scope, timeline, and objectives..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 h-32 backdrop-blur-sm"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 text-lg shadow-xl">
                  Begin Your Transformation
                  <ArrowRight className="ml-3 w-6 h-6" />
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
