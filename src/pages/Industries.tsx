
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16 bg-white">
        <Industries />
      </div>
      <Footer />
    </div>
  );
};

export default IndustriesPage;
