
import HeroSlider, { ProjectEvaluationForm } from "@/components/HeroSlider";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FeaturedArticles from "@/components/FeaturedArticles";
import CardinalAccelerationFramework from "@/components/CardinalAccelerationFramework";
import TrustSignals from "@/components/TrustSignals";
import MultiStepQuoteForm from "@/components/MultiStepQuoteForm";

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
      <div className="bg-white">
        <HeroSlider />
      </div>
      
      {/* Project Evaluation Form - Separate from hero */}
      <ProjectEvaluationForm />
      
      {/* Client Logos - Showcase trusted clients */}
      <ClientLogos />
      
      {/* Trust Signals */}
      <TrustSignals />
      
      {/* Cardinal Acceleration Framework */}
      <CardinalAccelerationFramework />
      
      {/* Services - Light gray background for variation */}
      <div className="bg-gray-50">
        <Services />
      </div>
      
      {/* Multi-Step Quote Form */}
      <MultiStepQuoteForm />
      
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
