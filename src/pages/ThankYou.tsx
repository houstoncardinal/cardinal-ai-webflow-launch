import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <SEO 
        title="Thank You | Cardinal Consulting"
        description="Thank you for your project submission. Schedule your free consultation now."
        url="/thank-you"
      />
      
      <Navigation />
      
      {/* Success Message */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Thank You!
            <span className="block text-green-600 font-normal mt-2">
              Your Project Roadmap Is On Its Way
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We've received your submission and our team is already reviewing your project details. 
            We'll contact you within 2 hours with your custom project roadmap.
          </p>
          
          <p className="text-lg text-gray-700 mb-12">
            Want to fast-track your project? Schedule a free 30-minute strategy call now:
          </p>
        </div>
      </section>

      {/* Calendly Widget */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div 
            className="calendly-inline-widget rounded-2xl shadow-xl overflow-hidden" 
            data-url="https://calendly.com/cardinalhtx/30min" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ThankYou;
