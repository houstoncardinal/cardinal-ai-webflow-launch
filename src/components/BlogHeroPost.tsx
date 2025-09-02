import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
}

interface BlogHeroPostProps {
  post: BlogPost;
}

const BlogHeroPost = ({ post }: BlogHeroPostProps) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="relative group overflow-hidden">
      <div className="bg-background rounded-xl overflow-hidden border border-border transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/20">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-auto overflow-hidden">
            {post.thumbnail_url ? (
              <img
                src={post.thumbnail_url}
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                style={{ minHeight: '320px', maxHeight: '400px' }}
              />
            ) : (
              <div className="w-full h-full bg-primary/5 flex items-center justify-center" style={{ minHeight: '320px', maxHeight: '400px' }}>
                <div className="text-primary/40 text-6xl font-bold">
                  {post.title.charAt(0)}
                </div>
              </div>
            )}
            <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
              {post.tags?.slice(0, 3).map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="py-0.5 text-xs font-medium bg-background/95 backdrop-blur-sm border-primary/10 text-primary shadow-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.reading_time} min read</span>
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{post.views_count} views</span>
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              
              <p className="text-sm md:text-base text-muted-foreground mb-6 line-clamp-3 leading-normal">
                {post.excerpt}
              </p>
            </div>

            <div className="space-y-4">
              {post.author_name && (
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">{post.author_name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">By {post.author_name}</p>
                    <p className="text-xs text-muted-foreground">Technology Expert</p>
                  </div>
                </div>
              )}

              <Link to={`/blog/${post.slug}`}>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full group hover:shadow-md transition-all duration-300"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogHeroPost;
