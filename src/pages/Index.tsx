
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
        title="🚀 Houston Web Development & Digital Marketing Agency | #1 Custom Websites | Cardinal Consulting"
        description="🔥 Houston's #1 digital agency! Custom websites, mobile apps, SEO, PPC & digital marketing that drives RESULTS. 500+ Houston projects completed. FREE consultation & quote! Serving Houston, TX & surrounding areas."
        keywords="Houston web development, Houston digital marketing agency, Houston website design, Houston SEO services, Houston mobile app development, Houston web developer, Houston digital agency, Houston website builder, Houston e-commerce development, Houston responsive web design, web development Houston TX, Houston web design company, Houston web development services, Houston custom website design, Houston e-commerce website, Houston SEO company, Houston digital marketing, Houston web agency, Houston website development, Houston web design agency, Houston web development company, Houston website designer, Houston web development firm, Houston app development, Houston mobile applications, Houston cloud solutions, Houston brand identity"
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
