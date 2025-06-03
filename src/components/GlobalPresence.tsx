
import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GlobalPresence = () => {
  const offices = [
    {
      city: "Houston",
      country: "Texas, USA",
      address: "2100 West Loop S Fwy, Houston, TX 77027",
      timezone: "CST (UTC-6)",
      phone: "(832) 777-7312",
      primary: true
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Dubai International Financial Centre",
      timezone: "GST (UTC+4)",
      phone: "+971 4 555 0123",
      primary: false
    },
    {
      city: "Irvine",
      country: "California, USA",
      address: "Irvine Business Complex",
      timezone: "PST (UTC-8)",
      phone: "+1 (949) 555 0123",
      primary: false
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center text-sm font-medium text-gray-600 uppercase tracking-wide mb-6">
            <div className="w-8 h-px bg-green-500 mr-4"></div>
            Global Presence
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Local expertise
            <span className="block text-green-600 font-normal">
              worldwide reach
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            With offices across three continents, we provide round-the-clock support 
            and local market expertise to serve our global clientele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <Card 
              key={index} 
              className={`border-gray-200 hover:border-green-500 transition-all duration-300 bg-white shadow-none hover:shadow-lg ${
                office.primary ? 'ring-1 ring-green-200' : ''
              }`}
            >
              <CardContent className="p-8 text-center">
                {office.primary && (
                  <div className="inline-block bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                    Headquarters
                  </div>
                )}
                
                <h3 className="text-2xl font-light text-gray-900 mb-2">
                  {office.city}
                </h3>
                <p className="text-gray-600 mb-6 font-medium">{office.country}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">{office.timezone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
