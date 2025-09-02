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
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.thumbnail_url ? [post.thumbnail_url] : [`${window.location.origin}/thumbnail.png`],
    datePublished: formatISO(post.published_at),
    dateModified: formatISO(post.updated_at),
    author: {
      "@type": "Organization",
      name: post.author_name,
      url: window.location.origin
    },
    publisher: {
      "@type": "Organization",
      name: "Cardinal Consulting",
      logo: {
        "@type": "ImageObject",
        url: `${window.location.origin}/logo.png`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    keywords: post.tags?.join(", "),
    wordCount: Math.round(post.content.length / 5), // Rough word count estimation
    timeRequired: `PT${post.reading_time}M`,
    articleSection: "Technology",
    inLanguage: "en-US"
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
    url: window.location.origin,
    logo: `${window.location.origin}/logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/cardinal-consulting",
      "https://twitter.com/cardinalconsult"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{post.meta_title || `${post.title} | Cardinal Consulting Blog`}</title>
      <meta name="description" content={post.meta_description || post.excerpt} />
      <meta name="keywords" content={post.tags?.join(", ")} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={post.meta_title || post.title} />
      <meta property="og:description" content={post.meta_description || post.excerpt} />
      <meta property="og:image" content={post.thumbnail_url || `${window.location.origin}/thumbnail.png`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Cardinal Consulting" />
      <meta property="article:published_time" content={formatISO(post.published_at)} />
      <meta property="article:modified_time" content={formatISO(post.updated_at)} />
      <meta property="article:author" content={post.author_name} />
      <meta property="article:section" content="Technology" />
      {post.tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.meta_title || post.title} />
      <meta name="twitter:description" content={post.meta_description || post.excerpt} />
      <meta name="twitter:image" content={post.thumbnail_url || `${window.location.origin}/thumbnail.png`} />

      {/* Additional Meta Tags for News/Top Stories */}
      <meta name="news_keywords" content={post.tags?.join(", ")} />
      <meta name="article:publisher" content="https://www.cardinalconsulting.com" />
      
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
    </Helmet>
  );
};

export default BlogArticleSchema;