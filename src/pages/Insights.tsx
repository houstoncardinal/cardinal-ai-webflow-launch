
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

const InsightsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16 bg-green-50/30">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default InsightsPage;
