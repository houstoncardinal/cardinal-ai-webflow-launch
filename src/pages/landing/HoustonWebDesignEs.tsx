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
      <header className="pt-16 md:pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-green-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-30"></div>
        
        {/* Animated background elements - Optimized for mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-8 -left-8 w-48 md:w-64 h-48 md:h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-8 w-48 md:w-64 h-48 md:h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-48 md:w-64 h-48 md:h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 px-4 py-2 text-sm font-medium text-green-800 animate-fade-in mb-6">
                <Star className="w-4 h-4 mr-2 text-green-600" />
                <span className="whitespace-nowrap">Tiempo limitado: $500 + SEO Gratis</span>
              </div>
              
              <h1 className="text-[2.5rem] sm:text-5xl md:text-[3.5rem] font-bold leading-[1.15] mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-green-800 bg-clip-text text-transparent">
                  Impulsa tu Negocio en Houston
                </span>
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block mt-2">
                  Con Diseño Web que Convierte
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Sitios web personalizados optimizados para móviles, velocidad y SEO. Obtén un sitio que se convierte en tu mejor activo de marketing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleClaimOffer}
                  className="group inline-flex items-center justify-center rounded-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  <span>Reclamar Oferta</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <a
                  href="#portfolio"
                  className="group inline-flex items-center justify-center rounded-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold border-2 border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600 transition-all duration-300 w-full sm:w-auto"
                >
                  <span>Ver Portafolio</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-gray-100 justify-center sm:justify-start">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Sin compromiso</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-gray-100 justify-center sm:justify-start">
                  <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Respuesta 24h</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-gray-100 justify-center sm:justify-start">
                  <Award className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">5 estrellas</span>
                </div>
              </div>
            </div>

            <div className="relative block">
              <div className="relative z-10 bg-white rounded-2xl shadow-xl p-3 md:p-4 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/blutouch.png" 
                  alt="Proyecto Destacado de Diseño Web - BluTouch" 
                  className="rounded-lg w-full h-auto object-cover"
                  loading="eager"
                />
                <div className="absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 md:px-6 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                  Proyecto Destacado
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-3xl transform scale-95 -z-10"></div>
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
        <section className="py-12 md:py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-green-800">
                Por qué los Negocios de Houston Eligen Cardinal
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                No solo construimos sitios web – creamos motores de crecimiento digital
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <article className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full filter blur-3xl opacity-30 transform group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Diseñado para Posicionar</h3>
                  <p className="text-gray-600 leading-relaxed">
                    SEO técnico incorporado: arquitectura limpia, velocidad, datos estructurados y estrategia de contenido que te hace visible en Google.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Marcado Estructurado</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Core Web Vitals Optimizado</span>
                    </div>
                  </div>
                </div>
              </article>
              
              <article className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full filter blur-3xl opacity-30 transform group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Hecho para Convertir</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Llamados a la acción claros, señales de confianza y UX probados para convertir visitas en clientes.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Pruebas A/B Integradas</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Seguimiento de Conversiones</span>
                    </div>
                  </div>
                </div>
              </article>
              
              <article className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative sm:col-span-2 lg:col-span-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full filter blur-3xl opacity-30 transform group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Escalable y Gestionado</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hosting, analítica y optimización continua para mantener alto desempeño mientras crece tu negocio.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Infraestructura en la Nube</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Informes Mensuales</span>
                    </div>
                  </div>
                </div>
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
          <section id="contact-form" className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 overflow-visible isolate">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-30 -z-10"></div>
            <div className="container mx-auto px-4 relative z-20">
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

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Únete a cientos de negocios exitosos que confían en nosotros
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-green-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="mb-4">
                  <p className="text-gray-700 leading-relaxed">
                    "Cardinal transformó nuestra presencia en línea. Nuestro nuevo sitio web no solo se ve increíble, sino que ha aumentado significativamente nuestros leads y conversiones."
                  </p>
                </blockquote>
                <footer>
                  <div className="font-semibold text-gray-900">Carlos Rodríguez</div>
                  <div className="text-sm text-gray-500">CEO, Soluciones Digitales</div>
                </footer>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-green-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="mb-4">
                  <p className="text-gray-700 leading-relaxed">
                    "Las optimizaciones SEO y el diseño mobile-first nos han ayudado a posicionarnos mejor en Google y alcanzar más clientes que nunca."
                  </p>
                </blockquote>
                <footer>
                  <div className="font-semibold text-gray-900">Ana García</div>
                  <div className="text-sm text-gray-500">Propietaria, Servicios Premier</div>
                </footer>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-green-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="mb-4">
                  <p className="text-gray-700 leading-relaxed">
                    "Trabajar con Cardinal fue un cambio radical. Entregaron un sitio web que representa perfectamente nuestra marca y genera resultados reales."
                  </p>
                </blockquote>
                <footer>
                  <div className="font-semibold text-gray-900">Miguel Torres</div>
                  <div className="text-sm text-gray-500">Director, Innovaciones de Crecimiento</div>
                </footer>
              </div>
            </div>
          </div>
        </section>

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

        {/* Features Comparison Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-20"></div>
          <div className="container mx-auto px-4 max-w-6xl relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por Qué Elegir Cardinal para tu Diseño Web?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Compara nuestra propuesta con las agencias tradicionales
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">El Enfoque Cardinal</h3>
                  <p className="text-gray-300">Diseño web basado en datos y resultados</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Diseño Orientado al SEO</h4>
                      <p className="text-gray-400">SEO técnico integrado y estrategia de contenido que posiciona</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Optimización de Conversiones</h4>
                      <p className="text-gray-400">CTAs estratégicos y rutas de conversión definidas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Seguimiento de Rendimiento</h4>
                      <p className="text-gray-400">Analítica y seguimiento de conversiones integrado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Plataforma Lista para Crecer</h4>
                      <p className="text-gray-400">Arquitectura escalable que crece con tu negocio</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">Agencias Tradicionales</h3>
                  <p className="text-gray-500">Enfoque solo en diseño sin estrategia</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-400">Diseño Básico</h4>
                      <p className="text-gray-500">Enfoque en estética sin considerar SEO</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-400">Funcionalidad Limitada</h4>
                      <p className="text-gray-500">Características básicas sin optimización</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-400">Sin Analítica</h4>
                      <p className="text-gray-500">Sin seguimiento de rendimiento ni insights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-400">Soluciones Estáticas</h4>
                      <p className="text-gray-500">Difíciles de actualizar y escalar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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