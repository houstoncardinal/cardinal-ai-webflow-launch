
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import GlobalPresence from "@/components/GlobalPresence";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero - White background */}
      <div className="bg-white">
        <Hero />
      </div>
      
      {/* Services - Light gray background for variation */}
      <div className="bg-gray-50">
        <Services />
      </div>
      
      {/* Industries - White background */}
      <div className="bg-white">
        <Industries />
      </div>
      
      {/* About - Dark background (moved above Portfolio) */}
      <div>
        <About />
      </div>
      
      {/* Portfolio - Very light green background for subtle variation */}
      <div className="bg-green-50/30">
        <Portfolio />
      </div>
      
      {/* Global Presence - Light gray background */}
      <div className="bg-gray-50">
        <GlobalPresence />
      </div>
      
      {/* Contact - White background */}
      <div className="bg-white">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
