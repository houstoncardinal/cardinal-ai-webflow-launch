import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, ArrowUpRight } from "lucide-react";

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
    <article className={`group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-50/5 ${featured ? 'md:col-span-3' : ''}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
      <div className="relative rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500">
        <Link to={`/blog/${post.slug}`} className="block">
          <div className="relative">
            {post.slug === 'hidden-money-leaks-on-your-website' ? (
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img 
                  src="/money-leaks.png"
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 dark:to-black/10"></div>
              </div>
            ) : post.thumbnail_url ? (
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img 
                  src={post.thumbnail_url} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 dark:to-black/10"></div>
              </div>
            ) : (
              <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-500/5 dark:to-blue-500/5 flex items-center justify-center rounded-t-2xl">
                <div className="text-green-400/60 text-6xl font-bold">
                  {post.title.charAt(0)}
                </div>
              </div>
            )}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {post.tags?.slice(0, 2).map((tag) => (
                <Badge 
                  key={tag} 
                  className="bg-white/90 dark:bg-gray-900/90 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-900 backdrop-blur-sm shadow-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 mb-3 line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-300">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-green-500" />
                  <time dateTime={post.published_at}>
                    {formatDate(post.published_at)}
                  </time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>{post.reading_time} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-emerald-500" />
                  <span>{post.views_count}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-medium group-hover:translate-x-1 transition-transform duration-300">
                Read Article
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {post.author_name && (
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-500/10 dark:to-blue-500/10 flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      {post.author_name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-900 dark:text-gray-300">{post.author_name}</p>
                    <p className="text-gray-500">Technology Expert</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;