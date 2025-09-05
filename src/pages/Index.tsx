
import HeroSlider from "@/components/HeroSlider";
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
        title="🚀 Premier Web Design & Mobile App Development & Digital Marketing Agency Mobile App Development Agency | #1 Custom Websites | Cardinal Consulting"
        description="🔥 Premier digital agency serving clients worldwide! Custom websites, mobile apps, SEO, PPC & digital marketing that drives RESULTS. 500+ global projects completed. FREE consultation & quote! Serving clients worldwide."
        keywords="web design, mobile app development, web development, digital marketing agency, website design, SEO services, mobile app development, web developer, digital agency, website builder, e-commerce development, responsive web design, web design company, web development services, custom website design, e-commerce website, SEO company, digital marketing, web agency, website development, web design agency, web development company, website designer, web development firm, app development, mobile applications, cloud solutions, brand identity, custom websites, mobile apps, digital solutions"
        url="/"
      />
      
      <Navigation />
      
      {/* Hero - White background */}
      <div className="bg-white">
        <HeroSlider />
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
