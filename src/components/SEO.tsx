import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const SEO = ({
  title = "Cardinal Consulting - Advanced Technology Solutions",
  description = "Cardinal Consulting delivers cutting-edge technology solutions including AI, blockchain, quantum computing, and enterprise software development for Fortune 500 companies.",
  keywords = "AI, artificial intelligence, blockchain, quantum computing, enterprise software, technology consulting, digital transformation",
  image = "/thumbnail.png",
  url = "https://cardinalconsulting.com/",
  type = "website",
  author = "Cardinal Consulting"
}: SEOProps) => {
  const fullUrl = url.startsWith('http') ? url : `https://cardinalconsulting.com${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://cardinalconsulting.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Cardinal Consulting" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content={fullImageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* LinkedIn */}
      <meta property="linkedin:owner" content="cardinalconsulting" />
      <meta property="linkedin:title" content={title} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={fullImageUrl} />

      {/* WhatsApp */}
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content={fullImageUrl} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Cardinal Consulting" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO; 