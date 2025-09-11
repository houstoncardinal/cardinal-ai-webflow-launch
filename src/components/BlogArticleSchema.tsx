import { Helmet } from "react-helmet-async";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail_url?: string;
  published_at: string;
  updated_at: string;
  reading_time: number;
  views_count: number;
  tags: string[];
  author_name: string;
  meta_title?: string;
  meta_description?: string;
}

interface BlogArticleSchemaProps {
  post: BlogPost;
  url: string;
}

const BlogArticleSchema = ({ post, url }: BlogArticleSchemaProps) => {
  const formatISO = (date: string) => new Date(date).toISOString();
  
  // Generate optimized meta title and description
  const metaTitle = post.meta_title || `${post.title} | Cardinal Consulting Blog`;
  const metaDescription = post.meta_description || post.excerpt;
  
  // Generate Open Graph image URL
  const ogImage = post.thumbnail_url || `${window.location.origin}/thumbnail.png`;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
  
  // Generate Twitter image URL
  const twitterImage = post.thumbnail_url || `${window.location.origin}/thumbnail.png`;
  const twitterImageUrl = twitterImage.startsWith('http') ? twitterImage : `${window.location.origin}${twitterImage}`;
  
  // Generate keywords from tags
  const keywords = post.tags?.join(", ") || "web development, digital marketing, SEO, Houston";
  
  // Calculate word count
  const wordCount = Math.round(post.content.length / 5);
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: metaDescription,
    image: [ogImageUrl],
    datePublished: formatISO(post.published_at),
    dateModified: formatISO(post.updated_at),
    author: {
      "@type": "Person",
      name: post.author_name,
      url: `${window.location.origin}/team/${post.author_name.toLowerCase().replace(/\s+/g, '-')}`,
    },
    isAccessibleForFree: true,
    articleBody: post.content,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".article-content"]
    },
    publisher: {
      "@type": "Organization",
      name: "Cardinal Consulting",
      logo: {
        "@type": "ImageObject",
        url: `${window.location.origin}/logo.png`
      },
      url: window.location.origin,
      sameAs: [
        "https://www.linkedin.com/company/cardinal-consulting",
        "https://twitter.com/cardinalconsult"
      ]
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    keywords: keywords,
    wordCount: wordCount,
    timeRequired: `PT${post.reading_time}M`,
    articleSection: "Technology",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      name: "Cardinal Consulting Blog",
      url: `${window.location.origin}/blog`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: window.location.origin
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${window.location.origin}/blog`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cardinal Consulting",
    alternateName: "Cardinal HTX",
    url: window.location.origin,
    logo: `${window.location.origin}/logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/cardinalhtx",
      "https://www.facebook.com/cardinalad",
      "https://twitter.com/cardinalhtx",
      "https://www.instagram.com/cardinalhtx"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-281-901-7016",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      }
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "2100 West Loop S Fwy",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77027",
      addressCountry: "US"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
      reviewAspect: "Service Quality",
      author: {
        "@type": "Organization",
        name: "Facebook Reviews",
        url: "https://www.facebook.com/cardinalad"
      }
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cardinal Consulting",
    url: window.location.origin,
    potentialAction: {
      "@type": "SearchAction",
      target: `${window.location.origin}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Cardinal Consulting",
      url: window.location.origin,
      telephone: "+1-281-901-7016",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2100 West Loop S Fwy",
        addressLocality: "Houston",
        addressRegion: "TX",
        postalCode: "77027",
        addressCountry: "US"
      }
    },
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
    reviewAspect: "Web Development Services",
    author: {
      "@type": "Organization",
      name: "Facebook Reviews",
      url: "https://www.facebook.com/cardinalad"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Facebook User"
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        reviewBody: "Excellent web development services. Professional team and outstanding results.",
        datePublished: "2024-01-01"
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Author Meta Tags */}
      <meta name="author" content={post.author_name} />
      <meta name="article:author" content={post.author_name} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={post.title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Cardinal Consulting" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:published_time" content={formatISO(post.published_at)} />
      <meta property="article:modified_time" content={formatISO(post.updated_at)} />
      <meta property="article:author" content={post.author_name} />
      <meta property="article:section" content="Technology" />
      <meta property="article:tag" content={keywords} />
      {post.tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cardinalconsult" />
      <meta name="twitter:creator" content="@cardinalconsult" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={twitterImageUrl} />
      <meta name="twitter:image:alt" content={post.title} />

      {/* Additional Meta Tags for News/Top Stories */}
      <meta name="news_keywords" content={keywords} />
      <meta name="article:publisher" content="https://www.cardinalhtx.com" />
      
      {/* Google News specific tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="googlebot-news" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <link rel="publisher" href="https://www.facebook.com/cardinalad" />
      <meta property="article:opinion" content="false" />
      <meta property="article:content_tier" content="free" />
      <meta property="article:paywall" content="false" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="article:published_time" content={formatISO(post.published_at)} />
      <meta name="article:modified_time" content={formatISO(post.updated_at)} />
      <meta name="article:section" content="Technology" />
      <meta name="article:tag" content={keywords} />
      
      {/* Reading time and word count */}
      <meta name="article:reading_time" content={`${post.reading_time} minutes`} />
      <meta name="article:word_count" content={wordCount.toString()} />
      
      {/* Language and region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Houston" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>
    </Helmet>
  );
};

export default BlogArticleSchema;