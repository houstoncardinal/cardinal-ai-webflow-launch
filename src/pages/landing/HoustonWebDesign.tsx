import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const HoustonWebDesignLanding = () => {
  const canonical = "https://www.cardinalhtx.com/houston-web-design";
  const spanishAlt = "https://www.cardinalhtx.com/diseno-web-houston";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Houston Web Design Services",
    description:
      "High-conversion, SEO-optimized web design in Houston, Texas. Fast, mobile-first websites with clear ROI and lead generation.",
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
    serviceType: "Web Design",
    offers: {
      "@type": "Offer",
      url: canonical,
      priceCurrency: "USD",
      price: "1499.00",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      category: "Web Design",
      eligibleRegion: "US-TX",
      description:
        "Limited-time: Save $500 + Free Technical SEO Setup on qualifying web design projects.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "127",
    },
    inLanguage: "en",
    url: canonical,
  } as const;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Houston Web Design Services | Cardinal Consulting"
        description="High-conversion Houston web design. Fast, SEO-optimized sites that generate leads. Limited-time: Save $500 + Free SEO setup. View portfolio & claim offer."
        keywords="Houston web design, web design Houston, Houston website design, Houston web development, SEO web design Houston"
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Houston Web Design", url: "/houston-web-design" },
        ]}
        url="/houston-web-design"
      />

      <Helmet>
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="es" href={spanishAlt} />
        <link rel="alternate" hrefLang="en" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <header className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
            Limited-time: Save $500 + Free Technical SEO Setup
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Houston Web Design Services that Convert Visitors into Customers
          </h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">
            Custom, mobile-first websites built for speed, SEO, and measurable ROI. Get a high-converting site and scale your business in Houston.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact?offer=houston-web-design"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium bg-black text-white"
            >
              Claim This Offer
            </Link>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium border"
            >
              View Portfolio
            </a>
          </div>
          <p className="mt-3 text-sm opacity-70">No obligation. Quick response guaranteed.</p>
        </div>
      </header>

      {/* Value props */}
      <main>
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-3 gap-6">
            <article>
              <h2 className="text-xl font-semibold">Designed to Rank</h2>
              <p className="mt-2 opacity-80">
                Technical SEO baked in: clean architecture, fast load times, structured data, and content strategy.
              </p>
            </article>
            <article>
              <h2 className="text-xl font-semibold">Built to Convert</h2>
              <p className="mt-2 opacity-80">
                Clear CTAs, trust signals, and UX patterns that turn visitors into leads and paying customers.
              </p>
            </article>
            <article>
              <h2 className="text-xl font-semibold">Managed & Scalable</h2>
              <p className="mt-2 opacity-80">
                Hosting, analytics, and ongoing optimization to keep performance high as you grow.
              </p>
            </article>
          </div>
        </section>

        {/* Offer section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="rounded-lg border p-6 md:p-8">
              <h2 className="text-2xl font-bold">Undeniable Offer for Houston Businesses</h2>
              <ul className="mt-4 grid md:grid-cols-2 gap-3 list-disc pl-5">
                <li>Save $500 on site design & build (limited-time)</li>
                <li>Free Technical SEO Setup (schema, speed, indexing)</li>
                <li>Free Analytics + Conversion Tracking configuration</li>
                <li>Launch checklist and QA included</li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact?offer=houston-web-design"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium bg-black text-white"
                >
                  Get My Discount
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium border">
                  Explore Services
                </Link>
              </div>
              <p className="mt-2 text-sm opacity-70">Limited availability. Mention “Houston Web Design Offer”.</p>
            </div>
          </div>
        </section>

        {/* Portfolio highlight */}
        <section id="portfolio" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold">Featured Houston Web Design Portfolio</h2>
            <p className="mt-2 opacity-80">Real results from real clients across the U.S. and Houston.</p>
            <div className="mt-6">
              <Portfolio />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-2xl font-bold">Ready to launch a high-performing website?</h2>
            <p className="mt-2 opacity-80">Claim your $500 savings + Free Technical SEO Setup now.</p>
            <Link
              to="/contact?offer=houston-web-design"
              className="mt-6 inline-flex items-center justify-center rounded-md px-6 py-3 font-medium bg-black text-white"
            >
              Start My Project
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HoustonWebDesignLanding;
