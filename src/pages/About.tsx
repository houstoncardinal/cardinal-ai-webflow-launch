
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutPageContent from "@/components/AboutPageContent";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="🚀 About Cardinal Consulting | #1 Houston Web Development Agency"
        description="🔥 Meet Houston's premier web development team! 500+ successful projects, 98% satisfaction rate, 7+ years serving Houston businesses. Learn why we're #1!"
        keywords="about Cardinal Consulting, Houston web development agency, Houston digital marketing team, web development company Houston, Houston app developers"
        pageType="about"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" }
        ]}
        url="/about"
      />
      <Navigation />
      <div className="pt-16">
        <AboutPageContent />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
