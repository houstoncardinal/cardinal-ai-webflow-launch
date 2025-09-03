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

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

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

  const sharePost = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      toast.success('URL copied to clipboard!');
    }
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
      
      <Navigation />
      
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
                variant="ghost"
                size="sm"
                onClick={sharePost}
                className="ml-auto flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          {(post.slug === 'hidden-money-leaks-on-your-website' || post.thumbnail_url) && (
            <div className="relative mb-12 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <img
                  src={post.slug === 'hidden-money-leaks-on-your-website' ? '/money-leaks.png' : post.thumbnail_url}
                  alt={post.title}
                  className="w-full h-64 md:h-[500px] object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-li:text-foreground prose-blockquote:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80">
            {/* Streamlined Article Header */}
            <div className="not-prose mb-8">
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  {post.tags?.slice(0, 3).map(tag => (
                    <span key={tag} 
                      className="px-2 py-0.5 bg-green-50 text-green-700 rounded-md text-xs border border-green-200 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-y border-gray-200">
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-green-600" />
                      <span>{post.reading_time}m read</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-green-600" />
                      <span>{formatDate(post.updated_at || post.published_at).split(',')[0]}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={sharePost}
                    className="flex items-center gap-1.5 text-xs h-7 px-2"
                  >
                    <Share2 className="w-3 h-3" />
                    Share
                  </Button>
                </div>

                {/* Compact Article Navigation */}
                <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
                  <div className="flex items-center gap-1.5 py-3 overflow-x-auto hide-scrollbar">
                    <ReactMarkdown
                      components={{
                        p: () => null,
                        h1: () => null,
                        h2: ({node, ...props}) => {
                          const title = props.children?.toString() || '';
                          const id = title.toLowerCase().replace(/\s+/g, '-');
                          const icon = 
                            title.includes('Quick') ? '⚡' :
                            title.includes('Bonus') ? '🎁' :
                            title.includes('Need') ? '🎯' :
                            title.includes('Why') ? '❓' : '📋';
                          
                          return (
                            <a href={`#${id}`} 
                               className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-md transition-all duration-200 text-xs">
                              <span className="text-xs">{icon}</span>
                              <span className="text-gray-700 whitespace-nowrap font-medium">
                                {title.replace(/^\d+\.\s/, '').split(' ').slice(0, 2).join(' ')}
                              </span>
                            </a>
                          );
                        },
                        h3: () => null,
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
                  </div>
                  {/* Subtle gradient fade for overflow */}
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden"></div>
                </div>

                {/* Reading Progress Bar */}
                <div className="h-0.5 w-full bg-primary/10 overflow-hidden">
                  <div className="h-full w-0 bg-gradient-to-r from-green-500 to-primary rounded-full transition-all duration-300" 
                       style={{ width: '0%' }} />
                </div>
              </div>
            </div>

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
                           props.children?.toString().includes('Bonus') ? '�' :
                           props.children?.toString().includes('Need') ? '🎯' :
                           props.children?.toString().includes('Why') ? '�' : '📋'}
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
                p: ({node, ...props}) => (
                  <p {...props} className="leading-relaxed text-foreground/80 text-lg mb-6">
                    {props.children}
                  </p>
                ),
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
                  Want to Stop Your Website from Leaking Money?
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Get a free website audit and discover how much revenue you're leaving on the table. 
                  Our team of experts will analyze your site and provide actionable recommendations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="group">
                      Get Your Free Audit
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
              <div className="text-sm text-muted-foreground">
                Published {formatDate(post.published_at)}
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

      <Footer />
    </div>
  );
};

export default BlogPost;