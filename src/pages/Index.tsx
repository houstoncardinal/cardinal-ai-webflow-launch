
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero - White background */}
      <div className="bg-white">
        <Hero />
      </div>
      
      {/* Contact Form - Between Hero and Services */}
      <ContactForm />
      
      {/* Services - Light gray background for variation */}
      <div className="bg-gray-50">
        <Services />
      </div>
      
      {/* About - Dark background (moved above Industries) */}
      <div>
        <About />
      </div>
      
      {/* Industries - White background */}
      <div className="bg-white">
        <Industries />
      </div>
      
      {/* Portfolio - Very light green background for subtle variation */}
      <div className="bg-green-50/30">
        <Portfolio />
      </div>
      
      {/* Contact - Gray background to match Industries */}
      <div className="bg-gray-50">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
