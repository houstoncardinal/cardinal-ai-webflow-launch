
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutPageContent from "@/components/AboutPageContent";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AboutPageContent />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
