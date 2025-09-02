import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye } from "lucide-react";

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

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${featured ? 'md:col-span-2' : ''}`}>
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative">
          {post.thumbnail_url ? (
            <img 
              src={post.thumbnail_url} 
              alt={post.title}
              className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${featured ? 'h-64' : 'h-48'}`}
            />
          ) : (
            <div className={`w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ${featured ? 'h-64' : 'h-48'}`}>
              <div className="text-primary/60 text-6xl font-bold">
                {post.title.charAt(0)}
              </div>
            </div>
          )}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {post.tags?.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-white/90 text-primary hover:bg-white">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="p-6">
          <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 ${featured ? 'text-2xl mb-3' : 'text-xl mb-2'}`}>
            {post.title}
          </h3>
          
          <p className={`text-muted-foreground line-clamp-3 ${featured ? 'text-base mb-4' : 'text-sm mb-3'}`}>
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
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
                <span>{post.views_count}</span>
              </div>
            </div>
            <div className="text-primary font-medium">
              Read more →
            </div>
          </div>

          {post.author_name && (
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground">
                By <span className="font-medium text-foreground">{post.author_name}</span>
              </p>
            </div>
          )}
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;