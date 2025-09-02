import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/BlogCard";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail_url?: string;
  published_at: string;
  reading_time: number;
  views_count: number;
  tags: string[];
  author_name: string;
  is_featured: boolean;
}

const FeaturedArticles = () => {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedPosts();
  }, []);

  const fetchFeaturedPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .eq('is_featured', true)
        .not('published_at', 'is', null)
        .order('published_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      setFeaturedPosts(data || []);
    } catch (error) {
      console.error('Error fetching featured posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading featured articles...</p>
          </div>
        </div>
      </section>
    );
  }

  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-10 sm:py-12 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
            <Badge variant="secondary" className="px-2 py-0.5 text-xs">Featured</Badge>
            <div className="h-px bg-border flex-1 max-w-16"></div>
            <span className="text-primary text-sm">✨</span>
            <div className="h-px bg-border flex-1 max-w-16"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-3 sm:mb-4 leading-tight">
            Latest <span className="text-primary font-normal">Insights</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with our expert analysis on technology trends, 
            development best practices, and business insights.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/blog">
            <Button size="lg" className="group text-sm sm:text-base py-2 px-4 sm:px-6">
              View All Articles
              <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;