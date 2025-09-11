
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="🚀 Contact Cardinal Consulting | FREE Houston Web Development Consultation"
        description="🔥 Get a FREE consultation & quote! Houston's #1 web development agency. Call (281) 901-7016 or contact us online. Let's build your digital success today!"
        keywords="contact Cardinal Consulting, Houston web development consultation, free quote Houston, web development contact, Houston digital marketing contact"
        pageType="contact"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
        url="/contact"
      />
      <Navigation />
      <div className="pt-16 bg-gray-50">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
