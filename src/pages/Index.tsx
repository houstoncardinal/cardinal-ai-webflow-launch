
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
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Industries />
      <Portfolio />
      <About />
      <GlobalPresence />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
