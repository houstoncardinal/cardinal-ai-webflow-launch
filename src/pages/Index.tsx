
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FeaturedArticles from "@/components/FeaturedArticles";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Web Development, App Development & Digital Marketing Agency | Cardinal Consulting"
        description="Leading web development, app development & digital marketing agency. Custom websites, mobile apps, SEO, PPC & digital campaigns. Serving businesses across America. Get your free consultation today!"
        keywords="web development, app development, digital marketing, SEO, PPC, social media marketing, custom websites, mobile applications, digital agency, business technology solutions, web development agency, app development company"
        url="/"
      />
      
      <Navigation />
      
      {/* Hero - White background */}
      <div className="bg-white">
        <Hero />
      </div>
      
      {/* Client Logos - Showcase trusted clients */}
      <ClientLogos />
      
      {/* Services - Light gray background for variation */}
      <div className="bg-gray-50">
        <Services />
      </div>
      
      {/* About - Dark background */}
      <div>
        <About />
      </div>
      
      {/* Portfolio - Very light green background for subtle variation */}
      <div className="bg-green-50/30">
        <Portfolio />
      </div>
      
      {/* Contact - Gray background */}
      <div className="bg-gray-50">
        <Contact />
      </div>
      
      {/* Featured Articles */}
      <FeaturedArticles />
      
      <Footer />
    </div>
  );
};

export default Index;
