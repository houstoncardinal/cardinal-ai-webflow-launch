import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const HoustonWebDesignEsLanding = () => {
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

      {/* Hero */}
      <header className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
            Tiempo limitado: Ahorra $500 + SEO Técnico Gratis
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Diseño Web en Houston que Convierte Visitas en Clientes
          </h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">
            Sitios personalizados, móviles y rápidos, creados para SEO y crecimiento. Impulsa tus resultados en Houston.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact?offer=diseno-web-houston"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium bg-black text-white"
            >
              Reclamar Oferta
            </Link>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium border"
            >
              Ver Portafolio
            </a>
          </div>
          <p className="mt-3 text-sm opacity-70">Sin compromiso. Respuesta rápida garantizada.</p>
        </div>
      </header>

      {/* Value props */}
      <main>
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-3 gap-6">
            <article>
              <h2 className="text-xl font-semibold">Diseñado para Posicionar</h2>
              <p className="mt-2 opacity-80">
                SEO técnico incorporado: arquitectura limpia, velocidad, datos estructurados y estrategia de contenido.
              </p>
            </article>
            <article>
              <h2 className="text-xl font-semibold">Hecho para Convertir</h2>
              <p className="mt-2 opacity-80">
                Llamados a la acción claros, señales de confianza y UX que convierte visitas en clientes.
              </p>
            </article>
            <article>
              <h2 className="text-xl font-semibold">Escalable y Gestionado</h2>
              <p className="mt-2 opacity-80">
                Hosting, analítica y optimización continua para mantener alto desempeño.
              </p>
            </article>
          </div>
        </section>

        {/* Offer section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="rounded-lg border p-6 md:p-8">
              <h2 className="text-2xl font-bold">Oferta Irresistible para Negocios en Houston</h2>
              <ul className="mt-4 grid md:grid-cols-2 gap-3 list-disc pl-5">
                <li>Ahorra $500 en diseño y desarrollo (tiempo limitado)</li>
                <li>Configuración de SEO Técnico gratis</li>
                <li>Analítica + seguimiento de conversiones incluido</li>
                <li>Lista de verificación de lanzamiento y QA</li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact?offer=diseno-web-houston"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium bg-black text-white"
                >
                  Obtener Descuento
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium border">
                  Ver Servicios
                </Link>
              </div>
              <p className="mt-2 text-sm opacity-70">Cupos limitados. Menciona “Oferta Diseño Web Houston”.</p>
            </div>
          </div>
        </section>

        {/* Portfolio highlight */}
        <section id="portfolio" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold">Portafolio Destacado</h2>
            <p className="mt-2 opacity-80">Resultados reales de clientes en Houston y EE. UU.</p>
            <div className="mt-6">
              <Portfolio />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl font-bold">¿Listo para lanzar un sitio de alto rendimiento?</h2>
            <p className="mt-2 opacity-80">Aprovecha $500 de descuento + SEO Técnico gratis.</p>
            <Link
              to="/contact?offer=diseno-web-houston"
              className="mt-6 inline-flex items-center justify-center rounded-md px-6 py-3 font-medium bg-black text-white"
            >
              Comenzar mi Proyecto
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HoustonWebDesignEsLanding;
