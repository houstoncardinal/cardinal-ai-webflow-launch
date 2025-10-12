import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
  type?: string;
  fullLogoUrl?: string;
  servicePage?: boolean;
  pageType?: 'homepage' | 'service' | 'portfolio' | 'about' | 'contact' | 'industry';
  breadcrumbs?: Array<{name: string; url: string}>;
  serviceDetails?: {
    name: string;
    description: string;
    priceRange?: string;
    category?: string;
  };
}

const SEO = ({ 
  title = "🚀 #1 Houston Web Development Agency | Custom Websites & Apps | Cardinal Consulting",
  description = "🔥 Houston's #1 web development agency! Custom websites, mobile apps & digital marketing that drive RESULTS. 500+ projects completed, 98% satisfaction. FREE consultation & project evaluation. Get your business online TODAY!",
  keywords = "Houston web development, Houston app development, Houston digital marketing, Houston SEO, Houston website design, Houston mobile app development, Houston PPC, Houston social media marketing, Texas web development, Houston digital agency, web development Houston TX, app development Houston, digital marketing Houston, best web developer Houston, top web design company Houston",
  author = "Cardinal Consulting",
  url = "/",
  image = "/thumbnail.png",
  type = "website",
  fullLogoUrl = "https://cardinalhtx.com/logo.png",
  servicePage = false,
  pageType = 'homepage',
  breadcrumbs = [],
  serviceDetails
}: SEOProps) => {
  const fullUrl = `https://cardinalhtx.com${url}`;
  const fullImageUrl = `https://cardinalhtx.com${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Houston" />
      <meta name="geo.position" content="29.7604;-95.3698" />
      <meta name="ICBM" content="29.7604, -95.3698" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Cardinal Consulting - Houston's Premier Web Development & Digital Marketing Agency" />
      <meta property="og:site_name" content="Cardinal Consulting" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:image:alt" content="Cardinal Consulting - Houston's Premier Web Development & Digital Marketing Agency" />
      
      {/* LinkedIn */}
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:owner" content="cardinalhtx" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#059669" />
      <meta name="msapplication-TileColor" content="#059669" />
      <meta name="apple-mobile-web-app-title" content="Cardinal Consulting" />
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Local Business Schema */}
      <meta name="business:contact_data:street_address" content="2100 West Loop S Fwy" />
      <meta name="business:contact_data:locality" content="Houston" />
      <meta name="business:contact_data:administrative_area" content="TX" />
      <meta name="business:contact_data:postal_code" content="77027" />
      <meta name="business:contact_data:country_name" content="United States" />
              <meta name="business:contact_data:phone_number" content="+1-281-901-7016" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Schema.org Structured Data - Enhanced with 5-Star Reviews */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Cardinal Consulting",
        "alternateName": "Cardinal HTX",
        "image": fullLogoUrl,
        "logo": fullLogoUrl,
        "url": "https://cardinalhtx.com",
        "telephone": "+1-281-901-7016",
        "email": "hello@cardinalhtx.com",
        "description": "Houston's #1 web development agency specializing in custom websites, mobile apps, and digital marketing solutions. 500+ projects completed with 98% client satisfaction.",
        "priceRange": "$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2100 West Loop S Fwy",
          "addressLocality": "Houston",
          "addressRegion": "TX",
          "postalCode": "77027",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 29.7604,
          "longitude": -95.3698
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://www.linkedin.com/company/cardinalhtx",
          "https://www.facebook.com/cardinalad",
          "https://twitter.com/cardinalhtx",
          "https://www.instagram.com/cardinalhtx"
        ],
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 29.7604,
            "longitude": -95.3698
          },
          "geoRadius": "50000"
        },
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 29.7604,
            "longitude": -95.3698
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Custom website development and design services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Development",
                "description": "iOS and Android mobile application development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing",
                "description": "SEO, PPC, and social media marketing services"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Michael Rodriguez"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Cardinal Consulting transformed our online presence completely! Their team delivered a stunning website that increased our conversions by 300%. Professional, fast, and exceeded all expectations. Highly recommend!",
            "datePublished": "2024-01-15"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sarah Johnson"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Best decision we made for our business! Cardinal Consulting's digital marketing strategy boosted our leads by 250%. Their expertise in SEO and PPC is unmatched in Houston. Amazing results!",
            "datePublished": "2024-02-03"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "David Chen"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Outstanding mobile app development! Cardinal Consulting built our iOS and Android app from scratch. The quality is exceptional and they delivered ahead of schedule. Truly the #1 agency in Houston!",
            "datePublished": "2024-01-28"
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Lisa Thompson"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Cardinal Consulting's team is phenomenal! They redesigned our e-commerce site and sales increased by 400%. Their attention to detail and customer service is unparalleled. Worth every penny!",
            "datePublished": "2024-02-12"
          }
        ]
      })}
      </script>
      
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Cardinal Consulting",
        "alternateName": "Cardinal HTX",
        "url": "https://cardinalhtx.com",
        "logo": fullLogoUrl,
        "image": fullLogoUrl,
        "description": "Houston's premier web development, app development & digital marketing agency with 500+ successful projects and 98% client satisfaction",
        "foundingDate": "2017",
        "numberOfEmployees": "25",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2100 West Loop S Fwy",
          "addressLocality": "Houston",
          "addressRegion": "TX",
          "postalCode": "77027",
          "addressCountry": "US"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-281-901-7016",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": "English",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        },
        "sameAs": [
          "https://www.linkedin.com/company/cardinalhtx",
          "https://www.facebook.com/cardinalad",
          "https://twitter.com/cardinalhtx",
          "https://www.instagram.com/cardinalhtx"
        ],
        "knowsAbout": [
          "Web Development",
          "Mobile App Development", 
          "Digital Marketing",
          "SEO",
          "PPC Advertising",
          "Social Media Marketing",
          "E-commerce Development",
          "WordPress Development",
          "React Development",
          "Node.js Development"
        ]
      })}
      </script>
      
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Cardinal Consulting",
        "url": "https://cardinalhtx.com",
        "description": "Houston's premier web development, app development & digital marketing agency",
        "publisher": {
          "@type": "Organization",
          "name": "Cardinal Consulting",
          "logo": fullLogoUrl
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://cardinalhtx.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })}
      </script>
      
      {/* Breadcrumb Schema */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": breadcrumb.name,
            "item": `https://cardinalhtx.com${breadcrumb.url}`
          }))
        })}
        </script>
      )}

      {/* Service-Specific Schema */}
      {servicePage && serviceDetails && (
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": serviceDetails.name,
          "description": serviceDetails.description,
          "provider": {
            "@type": "Organization",
            "name": "Cardinal Consulting",
            "logo": fullLogoUrl,
            "url": "https://cardinalhtx.com"
          },
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 29.7604,
              "longitude": -95.3698
            },
            "geoRadius": "50000"
          },
          "serviceType": serviceDetails.category || "Technology Services",
          "category": serviceDetails.category || "Web Development",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "priceRange": serviceDetails.priceRange || "$$"
          }
        })}
        </script>
      )}


      {/* Enhanced Services Schema for Multiple Services */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Cardinal Consulting Services",
        "description": "Comprehensive digital services offered by Cardinal Consulting",
        "itemListElement": [
          {
            "@type": "Service",
            "position": 1,
            "name": "Web Development",
            "description": "Custom website development, e-commerce platforms, and responsive web design services for Houston businesses",
            "provider": {
              "@type": "Organization",
              "name": "Cardinal Consulting"
            },
            "serviceType": "Web Development",
            "category": "Technology Services"
          },
          {
            "@type": "Service",
            "position": 2,
            "name": "Mobile App Development",
            "description": "iOS and Android mobile application development with custom features and modern design",
            "provider": {
              "@type": "Organization",
              "name": "Cardinal Consulting"
            },
            "serviceType": "Mobile App Development",
            "category": "Technology Services"
          },
          {
            "@type": "Service",
            "position": 3,
            "name": "Digital Marketing",
            "description": "SEO optimization, PPC advertising, social media marketing, and comprehensive digital marketing strategies",
            "provider": {
              "@type": "Organization",
              "name": "Cardinal Consulting"
            },
            "serviceType": "Digital Marketing",
            "category": "Marketing Services"
          },
          {
            "@type": "Service",
            "position": 4,
            "name": "SEO Optimization",
            "description": "Search engine optimization services to improve website visibility and organic traffic",
            "provider": {
              "@type": "Organization",
              "name": "Cardinal Consulting"
            },
            "serviceType": "SEO",
            "category": "Marketing Services"
          },
          {
            "@type": "Service",
            "position": 5,
            "name": "PPC Advertising",
            "description": "Pay-per-click advertising campaigns on Google, Facebook, and other platforms",
            "provider": {
              "@type": "Organization",
              "name": "Cardinal Consulting"
            },
            "serviceType": "PPC",
            "category": "Marketing Services"
          }
        ]
      })}
      </script>
    </Helmet>
  );
};

export default SEO; 