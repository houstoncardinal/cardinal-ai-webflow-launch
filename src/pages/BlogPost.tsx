import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, Eye, Share2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import BlogArticleSchema from "@/components/BlogArticleSchema";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import ReactMarkdown from 'react-markdown';

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

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  // Reading progress tracking
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  const fetchPost = async (slug: string) => {
    try {
      // Fetch the main post
      const { data: postData, error: postError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .not('published_at', 'is', null)
        .single();

      if (postError) throw postError;
      setPost(postData);

      // Increment view count
      const { error: updateError } = await supabase
        .from('blog_posts')
        .update({ views_count: (postData.views_count || 0) + 1 })
        .eq('id', postData.id);

      if (updateError) console.error('Error updating view count:', updateError);

      // Fetch related posts
      const { data: relatedData, error: relatedError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .not('published_at', 'is', null)
        .neq('id', postData.id)
        .order('published_at', { ascending: false })
        .limit(3);

      if (relatedError) throw relatedError;
      setRelatedPosts(relatedData || []);

    } catch (error) {
      console.error('Error fetching post:', error);
      toast.error('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = async (event?: React.MouseEvent) => {
    if (!post) return;

    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };

    // Create small, clean share dropdown
    const shareDropdown = document.createElement('div');
    shareDropdown.className = 'fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-2 min-w-[200px]';
    
    // Position near the clicked button
    const button = event?.currentTarget as HTMLElement;
    if (button) {
      const rect = button.getBoundingClientRect();
      shareDropdown.style.top = `${rect.bottom + 8}px`;
      shareDropdown.style.left = `${rect.left}px`;
    } else {
      // Fallback positioning
      shareDropdown.style.top = '50%';
      shareDropdown.style.left = '50%';
      shareDropdown.style.transform = 'translate(-50%, -50%)';
    }

    shareDropdown.innerHTML = `
      <div class="space-y-1">
        <button class="share-x-btn w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
          <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Share on X
        </button>
        
        <button class="share-facebook-btn w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
          <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Share on Facebook
        </button>
        
        <button class="share-linkedin-btn w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
          <svg class="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          Share on LinkedIn
        </button>
        
        <button class="share-instagram-btn w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
          <svg class="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Copy for Instagram
        </button>
        
        <div class="border-t border-gray-200 my-1"></div>
        
        <button class="copy-link-btn w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
          Copy Link
        </button>
      </div>
    `;
    
    document.body.appendChild(shareDropdown);
    
    // Add event listeners
    const xBtn = shareDropdown.querySelector('.share-x-btn');
    const facebookBtn = shareDropdown.querySelector('.share-facebook-btn');
    const linkedinBtn = shareDropdown.querySelector('.share-linkedin-btn');
    const instagramBtn = shareDropdown.querySelector('.share-instagram-btn');
    const copyBtn = shareDropdown.querySelector('.copy-link-btn');
    
    xBtn?.addEventListener('click', () => {
      const text = `${shareData.title} - ${shareData.text}`;
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareData.url)}&via=CardinalConsult`;
      window.open(url, '_blank');
      shareDropdown.remove();
    });
    
    facebookBtn?.addEventListener('click', () => {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}&quote=${encodeURIComponent(shareData.title)}`;
      window.open(url, '_blank');
      shareDropdown.remove();
    });
    
    linkedinBtn?.addEventListener('click', () => {
      const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}&title=${encodeURIComponent(shareData.title)}&summary=${encodeURIComponent(shareData.text)}`;
      window.open(url, '_blank');
      shareDropdown.remove();
    });
    
    instagramBtn?.addEventListener('click', () => {
      navigator.clipboard.writeText(shareData.url);
      if (instagramBtn) {
        instagramBtn.textContent = 'Copied!';
        instagramBtn.classList.add('text-green-600');
      }
      setTimeout(() => shareDropdown.remove(), 1500);
    });
    
    copyBtn?.addEventListener('click', () => {
      navigator.clipboard.writeText(shareData.url);
      if (copyBtn) {
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('text-green-600');
      }
      setTimeout(() => shareDropdown.remove(), 1500);
    });
    
    // Close dropdown when clicking outside
    const closeDropdown = (e: MouseEvent) => {
      if (!shareDropdown.contains(e.target as Node)) {
        shareDropdown.remove();
        document.removeEventListener('click', closeDropdown);
      }
    };
    
    // Delay adding click listener to prevent immediate closure
    setTimeout(() => {
      document.addEventListener('click', closeDropdown);
    }, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-muted-foreground">Loading article...</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="text-6xl mb-4">📄</div>
            <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const currentUrl = `${window.location.origin}/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <BlogArticleSchema post={post} url={currentUrl} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      <Navigation />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-200">
        <div className="h-1 bg-gray-100">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      </div>
      
      {/* Article Header */}
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="ghost" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {post.author_name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-foreground">{post.author_name}</span>
              </div>
              
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.published_at}>
                  {formatDate(post.published_at)}
                </time>
              </div>
              
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.reading_time} min read</span>
              </div>
              
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{post.views_count + 1} views</span>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={sharePost}
                className="ml-auto flex items-center gap-2 bg-white hover:bg-green-50 border-green-200 hover:border-green-300 text-green-700 hover:text-green-800"
              >
                <Share2 className="w-4 h-4" />
                Share Article
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          {(post.thumbnail_url || post.slug === 'hidden-money-leaks-on-your-website') && (
            <div className="relative mb-12 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <img
                  src={post.slug === 'hidden-money-leaks-on-your-website' ? '/money-leaks.png' : post.thumbnail_url}
                  alt={`${post.title} - Cardinal Consulting`}
                  className="w-full h-64 md:h-[500px] object-cover rounded-xl shadow-lg"
                  loading="eager"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-li:text-foreground prose-blockquote:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80">
            {/* Main Content */}
            <ReactMarkdown
              components={{
                h2: ({node, ...props}) => (
                  <h2 
                    id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')}
                    {...props} 
                    className="group relative mt-16 mb-8 scroll-mt-32"
                  >
                    <div className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 w-2 sm:w-4 h-px bg-gradient-to-r from-green-500 to-primary"></div>
                    <div className="flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-green-500/5 to-transparent p-4 sm:p-6 rounded-xl">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-primary rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
                        <span className="relative flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-green-500/10 to-primary/10 border border-green-500/10 flex items-center justify-center text-lg sm:text-xl">
                          {props.children?.toString().includes('Quick') ? '⚡' :
                           props.children?.toString().includes('Bonus') ? '🎁' :
                           props.children?.toString().includes('Need') ? '🎯' :
                           props.children?.toString().includes('Why') ? '❓' : '📋'}
                        </span>
                      </div>
                      <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-green-600 to-primary bg-clip-text text-transparent">
                        {props.children}
                      </span>
                    </div>
                  </h2>
                ),
                h3: ({node, ...props}) => (
                  <h3 {...props} className="flex items-center gap-3 text-lg sm:text-xl font-semibold mb-4 text-foreground/90 mt-8">
                    <span className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-sm border border-green-500/10">
                      {props.children?.toString().includes('1.') ? '1' :
                       props.children?.toString().includes('2.') ? '2' :
                       props.children?.toString().includes('3.') ? '3' :
                       props.children?.toString().includes('4.') ? '4' :
                       props.children?.toString().includes('5.') ? '5' : '•'}
                    </span>
                    {props.children}
                  </h3>
                ),
                p: ({node, ...props}) => {
                  const content = props.children?.toString() || '';
                  
                  // Simple internal link replacement without breaking React
                  const linkMappings = [
                    { keyword: 'web development', url: '/services/web-development' },
                    { keyword: 'app development', url: '/services/mobile-applications' },
                    { keyword: 'mobile app', url: '/services/mobile-applications' },
                    { keyword: 'mobile application', url: '/services/mobile-applications' },
                    { keyword: 'SEO', url: '/services/seo-insights' },
                    { keyword: 'search engine optimization', url: '/services/seo-insights' },
                    { keyword: 'digital marketing', url: '/services/digital-campaigns' },
                    { keyword: 'PPC', url: '/services/digital-campaigns' },
                    { keyword: 'pay-per-click', url: '/services/digital-campaigns' },
                    { keyword: 'social media marketing', url: '/services/digital-campaigns' },
                    { keyword: 'brand identity', url: '/services/brand-identity' },
                    { keyword: 'branding', url: '/services/brand-identity' },
                    { keyword: 'cloud solutions', url: '/services/cloud-solutions' },
                    { keyword: 'cloud computing', url: '/services/cloud-solutions' },
                    { keyword: 'user experience', url: '/services/experience-optimization' },
                    { keyword: 'UX', url: '/services/experience-optimization' },
                    { keyword: 'UI', url: '/services/experience-optimization' },
                    { keyword: 'user interface', url: '/services/experience-optimization' },
                    { keyword: 'web application', url: '/services/web-applications' },
                    { keyword: 'web app', url: '/services/web-applications' },
                    { keyword: 'contact us', url: '/contact' },
                    { keyword: 'get started', url: '/contact' },
                    { keyword: 'free consultation', url: '/contact' },
                    { keyword: 'portfolio', url: '/portfolio' },
                    { keyword: 'our work', url: '/portfolio' },
                    { keyword: 'case studies', url: '/portfolio' },
                    { keyword: 'about us', url: '/about' },
                    { keyword: 'our team', url: '/about' },
                    { keyword: 'blog', url: '/blog' },
                    { keyword: 'insights', url: '/insights' },
                    { keyword: 'industries', url: '/industries' },
                    { keyword: 'services', url: '/services' },
                    { keyword: 'website audit', url: '/contact' },
                    { keyword: 'free audit', url: '/contact' },
                    { keyword: 'consultation', url: '/contact' },
                    { keyword: 'quote', url: '/contact' },
                    { keyword: 'estimate', url: '/contact' },
                    { keyword: 'project evaluation', url: '/contact' },
                  ];

                  // Check if content contains any of our keywords
                  const hasKeyword = linkMappings.some(mapping => 
                    content.toLowerCase().includes(mapping.keyword.toLowerCase())
                  );

                  return (
                    <p {...props} className="leading-relaxed text-foreground/80 text-lg mb-6">
                      {props.children}
                      {hasKeyword && (
                        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-sm text-green-700 mb-2">
                            <strong>Related Services:</strong>
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {linkMappings
                              .filter(mapping => content.toLowerCase().includes(mapping.keyword.toLowerCase()))
                              .slice(0, 3)
                              .map((mapping, index) => (
                                <a
                                  key={index}
                                  href={mapping.url}
                                  className="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
                                >
                                  {mapping.keyword}
                                </a>
                              ))}
                          </div>
                        </div>
                      )}
                    </p>
                  );
                },
                ul: ({node, ...props}) => (
                  <ul {...props} className="space-y-4 my-8 bg-muted/50 p-6 rounded-xl">
                    {props.children}
                  </ul>
                ),
                li: ({node, ...props}) => {
                  const content = props.children?.toString() || '';
                  const hasImpactPrefix = content.includes('Key Impact:') || 
                                        content.includes('Pro Tip:') || 
                                        content.includes('Key Insight:') ||
                                        content.includes('Impact:') ||
                                        content.includes('Result:');
                  
                  return hasImpactPrefix ? (
                    <div className="mt-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                      <p className="font-semibold text-primary">{props.children}</p>
                    </div>
                  ) : (
                    <li {...props} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        •
                      </span>
                      <span className="flex-1 text-foreground/90">{props.children}</span>
                    </li>
                  );
                },
                blockquote: ({node, ...props}) => (
                  <blockquote {...props} className="my-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border-l-4 border-primary">
                    <p className="italic text-lg text-foreground/90">{props.children}</p>
                  </blockquote>
                ),
                strong: ({node, ...props}) => (
                  <strong {...props} className="font-semibold text-primary">
                    {props.children}
                  </strong>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>

            {/* Key Takeaways Box */}
            <div className="not-prose mt-12">
              <div className="p-8 bg-gradient-to-br from-primary/5 via-background to-primary/5 rounded-xl border border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Key Takeaways</h3>
                </div>
                <ul className="space-y-3">
                  {post.tags?.map((tag, index) => (
                    <li key={tag} className="flex items-center gap-3 text-muted-foreground">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                        {index + 1}
                      </span>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-16 space-y-12">
            {/* CTA Section */}
            <div className="relative p-8 md:p-12 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your Digital Presence?
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our expert team specializes in <a href="/services/web-development" className="text-primary hover:text-primary/80 font-medium underline decoration-primary/30 hover:decoration-primary/60 transition-all duration-200">web development</a>, <a href="/services/mobile-applications" className="text-primary hover:text-primary/80 font-medium underline decoration-primary/30 hover:decoration-primary/60 transition-all duration-200">app development</a>, <a href="/services/seo-insights" className="text-primary hover:text-primary/80 font-medium underline decoration-primary/30 hover:decoration-primary/60 transition-all duration-200">SEO optimization</a>, and <a href="/services/digital-campaigns" className="text-primary hover:text-primary/80 font-medium underline decoration-primary/30 hover:decoration-primary/60 transition-all duration-200">digital marketing</a>. Get a free consultation and discover how we can help your business grow.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="group">
                      Get Your Free Consultation
                      <ArrowLeft className="ml-2 w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg" className="group">
                      Explore Our Services
                      <ArrowLeft className="ml-2 w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" onClick={sharePost}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Article
                  </Button>
                </div>
              </div>
            </div>

            {/* Related Services Section */}
            <div className="p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-200/50">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Related Services You Might Need</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/services/web-development" className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-200 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <span className="text-green-600 text-lg">🌐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">Web Development</h4>
                      <p className="text-sm text-gray-600">Custom websites that convert</p>
                    </div>
                  </div>
                </Link>
                <Link to="/services/mobile-applications" className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-200 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <span className="text-blue-600 text-lg">📱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Mobile Apps</h4>
                      <p className="text-sm text-gray-600">Native & cross-platform solutions</p>
                    </div>
                  </div>
                </Link>
                <Link to="/services/seo-insights" className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-200 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <span className="text-purple-600 text-lg">🔍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">SEO Insights</h4>
                      <p className="text-sm text-gray-600">Boost your search rankings</p>
                    </div>
                  </div>
                </Link>
                <Link to="/services/digital-campaigns" className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-200 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <span className="text-orange-600 text-lg">📈</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-orange-700 transition-colors">Digital Marketing</h4>
                      <p className="text-sm text-gray-600">PPC, social media & more</p>
                    </div>
                  </div>
                </Link>
                <Link to="/services/brand-identity" className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-200 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                      <span className="text-pink-600 text-lg">🎨</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-pink-700 transition-colors">Brand Identity</h4>
                      <p className="text-sm text-gray-600">Stand out from the competition</p>
                    </div>
                  </div>
                </Link>
                <Link to="/services/experience-optimization" className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-200 hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                      <span className="text-indigo-600 text-lg">✨</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">UX/UI Design</h4>
                      <p className="text-sm text-gray-600">Delight your users</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Author Section */}
            <div className="flex items-center justify-between pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {post.author_name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author_name}</p>
                  <p className="text-sm text-muted-foreground">Digital Strategy Expert</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  Published {formatDate(post.published_at)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Share:</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-8 h-8 p-0 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-8 h-8 p-0 text-blue-700 hover:text-blue-800 hover:bg-blue-50"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-8 h-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Floating Share Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={sharePost}
          size="lg"
          className="rounded-full w-14 h-14 p-0 bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Share2 className="w-6 h-6" />
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;