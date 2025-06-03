
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16 bg-gray-50">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
