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
}

const SEO = ({ 
  title = "Cardinal Consulting - Web Development, App Development & Digital Marketing",
  description = "Leading web development, app development & digital marketing agency. Custom websites, mobile apps, SEO, PPC & digital campaigns. Serving businesses across America. Get your free consultation today!",
  keywords = "web development, app development, digital marketing, SEO, PPC, social media marketing, custom websites, mobile applications, digital agency, business technology solutions",
  author = "Cardinal Consulting",
  url = "/",
  image = "/thumbnail.png",
  type = "website",
  fullLogoUrl = "https://cardinalhtx.com/logo.png"
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
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Cardinal Consulting",
        "image": fullLogoUrl,
        "logo": fullLogoUrl,
        "url": "https://cardinalhtx.com",
        "telephone": "+1-832-989-2163",
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
          "https://www.facebook.com/cardinalhtx",
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
        }
      })}
      </script>
      
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Cardinal Consulting",
        "url": "https://cardinalhtx.com",
        "logo": fullLogoUrl,
        "image": fullLogoUrl,
        "description": "Houston's premier web development, app development & digital marketing agency",
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
          "telephone": "+1-832-989-2163",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.linkedin.com/company/cardinalhtx",
          "https://www.facebook.com/cardinalhtx",
          "https://twitter.com/cardinalhtx",
          "https://www.instagram.com/cardinalhtx"
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
      
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web Development Services",
        "description": "Custom website development and design services for Houston businesses",
        "provider": {
          "@type": "Organization",
          "name": "Cardinal Consulting",
          "logo": fullLogoUrl
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
        "serviceType": "Web Development",
        "category": "Technology Services"
      })}
      </script>
    </Helmet>
  );
};

export default SEO; 