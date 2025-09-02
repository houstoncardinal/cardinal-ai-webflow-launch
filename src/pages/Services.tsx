
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="🚀 Houston Digital Services | Web Development & Marketing | Cardinal Consulting"
        description="🔥 Complete digital services in Houston! Web development, mobile apps, SEO, PPC & digital marketing. 500+ successful projects. FREE consultation!"
        keywords="Houston digital services, Houston web development, Houston digital marketing, Houston app development, Houston SEO services, Houston PPC, digital agency Houston"
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ]}
        url="/services"
      />
      <Navigation />
      <div className="pt-16 bg-gray-50">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
