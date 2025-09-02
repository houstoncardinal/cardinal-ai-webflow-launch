import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import SEO from "@/components/SEO";
import OfferContactForm from "@/components/OfferContactForm";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CheckCircle, Star, Users, Award, Clock } from "lucide-react";

const HoustonWebDesignEsLanding = () => {
  const [showForm, setShowForm] = useState(false);
  const canonical = "https://www.cardinalhtx.com/diseno-web-houston";
  const englishAlt = "https://www.cardinalhtx.com/houston-web-design";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Diseño Web en Houston",
    description:
      "Sitios web de alto rendimiento en Houston, optimizados para SEO, velocidad y conversión. Atrae más clientes y crece tu negocio.",
    areaServed: {
      "@type": "City",
      name: "Houston",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    provider: {
      "@type": "Organization",
      name: "Cardinal Consulting",
      url: "https://www.cardinalhtx.com",
      logo: "https://www.cardinalhtx.com/favicon.png",
    },
    serviceType: "Diseño Web",
    offers: {
      "@type": "Offer",
      url: canonical,
      priceCurrency: "USD",
      price: "1499.00",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      category: "Diseño Web",
      eligibleRegion: "US-TX",
      description:
        "Tiempo limitado: Ahorra $500 + Configuración de SEO Técnico gratis en proyectos calificados.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "127",
    },
    inLanguage: "es",
    url: canonical,
  } as const;

  const handleClaimOffer = () => {
    setShowForm(true);
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Diseño Web en Houston | Cardinal Consulting"
        description="Diseño web de alto rendimiento en Houston. Sitios rápidos y optimizados para SEO que convierten. Ahorra $500 + SEO Técnico gratis. Mira el portafolio."
        keywords="diseño web Houston, diseño de sitios web Houston, diseño y desarrollo web Houston, SEO Houston"
        pageType="service"
        breadcrumbs={[
          { name: "Inicio", url: "/" },
          { name: "Diseño Web en Houston", url: "/diseno-web-houston" },
        ]}
        url="/diseno-web-houston"
      />

      <Helmet>
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en" href={englishAlt} />
        <link rel="alternate" hrefLang="es" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={englishAlt} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navigation />

      {/* Hero Section - Enhanced */}
      <header className="pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 px-4 py-2 text-sm font-medium text-green-800 animate-fade-in">
              <Star className="w-4 h-4 mr-2 text-green-600" />
              Tiempo limitado: Ahorra $500 + SEO Técnico Gratis
            </div>
            
            <h1 className="mt-6 text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-green-800 bg-clip-text text-transparent leading-tight">
              Diseño Web en Houston que Convierte Visitas en 
              <span className="text-green-600"> Clientes</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sitios personalizados, móviles y rápidos, creados para SEO y crecimiento. Impulsa tus resultados en Houston.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleClaimOffer}
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Reclamar Oferta
              </button>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold border-2 border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600 transition-all duration-300"
              >
                Ver Portafolio
              </a>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Sin compromiso
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-600" />
                Respuesta en 24 horas
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-green-600" />
                5 estrella
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Trust Indicators */}
        <section className="py-12 bg-gray-50 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">127+</div>
                <div className="text-sm text-gray-600">Clientes Felices</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '100ms'}}>
                <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">5.0</div>
                <div className="text-sm text-gray-600">Calificación Promedio</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '200ms'}}>
                <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">7+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '300ms'}}>
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">24hr</div>
                <div className="text-sm text-gray-600">Tiempo de Respuesta</div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions - Enhanced */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Por qué los Negocios de Houston Eligen Cardinal
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                No solo construimos sitios web – creamos motores de crecimiento digital
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <article className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Diseñado para Posicionar</h3>
                <p className="text-gray-600 leading-relaxed">
                  SEO técnico incorporado: arquitectura limpia, velocidad, datos estructurados y estrategia de contenido que te hace visible en Google.
                </p>
              </article>
              
              <article className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hecho para Convertir</h3>
                <p className="text-gray-600 leading-relaxed">
                  Llamados a la acción claros, señales de confianza y UX probados para convertir visitas en clientes.
                </p>
              </article>
              
              <article className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Escalable y Gestionado</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hosting, analítica y optimización continua para mantener alto desempeño mientras crece tu negocio.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Offer Section - Enhanced */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-green-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Oferta Irresistible para Negocios en Houston
                </h2>
                <p className="text-xl text-gray-600">
                  Todo lo que necesitas para dominar tu mercado online
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Ahorra $500 en diseño y desarrollo (tiempo limitado)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Configuración de SEO Técnico gratis</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Analítica + seguimiento de conversiones incluido</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Lista de verificación de lanzamiento y QA</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={handleClaimOffer}
                  className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mr-4"
                >
                  Obtener Descuento
                </button>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold border-2 border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600 transition-all duration-300"
                >
                  Ver Servicios
                </Link>
              </div>
              
              <p className="mt-4 text-sm text-gray-500 text-center">
                Cupos limitados. Menciona "Oferta Diseño Web Houston".
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        {showForm && (
          <section id="contact-form" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-30"></div>
            <div className="container mx-auto px-4 relative">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¿Listo para Transformar tu Negocio?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Completa el formulario y prepararemos una propuesta personalizada para ti
                </p>
              </div>
              <OfferContactForm offer="diseno-web-houston" language="es" />
            </div>
          </section>
        )}

        {/* Portfolio Section - Enhanced */}
        <section id="portfolio" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Portafolio Destacado
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Resultados reales de clientes en Houston y EE. UU.
              </p>
            </div>
            <Portfolio />
          </div>
        </section>

        {/* Final CTA Section - Enhanced */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-green-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-20"></div>
          <div className="container mx-auto px-4 max-w-5xl text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para lanzar un sitio de alto rendimiento?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Aprovecha $500 de descuento + SEO Técnico gratis. Cupos limitados.
            </p>
            <button
              onClick={handleClaimOffer}
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Comenzar mi Proyecto
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HoustonWebDesignEsLanding;