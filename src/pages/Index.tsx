
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TrustSignals from "@/components/TrustSignals";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Cardinal Consulting — Custom Web Design, Mobile Apps & Digital Growth Agency"
        description="We build high-performance websites, mobile apps, and digital growth systems engineered for conversion and scale. Serving businesses nationwide."
        keywords="web design, mobile app development, web development, digital marketing agency, website design, SEO services, mobile app development, web developer, digital agency, website builder, e-commerce development, responsive web design, web design company, web development services, custom website design, e-commerce website, SEO company, digital marketing, web agency, website development, web design agency, web development company, website designer, web development firm, app development, mobile applications, cloud solutions, brand identity, custom websites, mobile apps, digital solutions"
        url="/"
      />
      
      <Navigation />
      
      {/* Hero - White background */}
      <div className="bg-white pb-8 sm:pb-12 lg:pb-16">
        <HeroSlider />
      </div>
      
      {/* Client Logos - Showcase trusted clients */}
      <ClientLogos />
      
      {/* Trust Signals */}
      <TrustSignals />
      
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
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Contact - Gray background */}
      <div className="bg-gray-50">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
