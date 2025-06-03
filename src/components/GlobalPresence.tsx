
import { MapPin, Clock, Phone } from "lucide-react";

const GlobalPresence = () => {
  const offices = [
    {
      city: "Houston",
      country: "Texas, USA",
      address: "Downtown Houston Business District",
      timezone: "CST (UTC-6)",
      phone: "+1 (713) 555-0123",
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
      phone: "+1 (949) 555-0123",
      primary: false
    }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Global Presence, Local Expertise
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            With offices across three continents, we provide round-the-clock support 
            and local market expertise to serve our global clientele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center transition-all duration-300 hover:bg-white/20 ${
                office.primary ? 'ring-2 ring-white/30' : ''
              }`}
            >
              {office.primary && (
                <div className="inline-block bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Headquarters
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">
                {office.city}
              </h3>
              <p className="text-blue-100 mb-6">{office.country}</p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{office.timezone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{office.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
