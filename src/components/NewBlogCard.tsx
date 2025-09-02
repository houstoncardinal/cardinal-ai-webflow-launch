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

const NewBlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article 
      className={`group relative ${featured ? 'md:col-span-3' : ''}`}
    >
      <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <Link 
        to={`/blog/${post.slug}`} 
        className="relative block bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-green-500/5 transition-all duration-500 hover:border-green-500/20"
      >
        {/* Image Section with Gradient Overlay */}
        <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          {post.slug === 'hidden-money-leaks-on-your-website' ? (
            <>
              <img 
                src="/money-leaks.png"
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </>
          ) : post.thumbnail_url ? (
            <>
              <img 
                src={post.thumbnail_url.startsWith('/') ? post.thumbnail_url : `/${post.thumbnail_url}`}
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5">
              <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-green-600/40 to-blue-600/40 bg-clip-text text-transparent">
                {post.title.charAt(0)}
              </span>
            </div>
          )}
          
          {/* Tags with Enhanced Styling */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-wrap gap-1.5 sm:gap-2 z-10">
            {post.tags?.slice(0, 2).map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary"
                className="py-0.5 px-1.5 sm:py-1 sm:px-2 text-xs font-medium bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-green-500/20 text-green-600 dark:text-green-400 shadow-sm hover:bg-white dark:hover:bg-gray-900 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-4 md:p-5">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 line-clamp-2 leading-snug group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
            {post.title}
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs sm:text-sm mb-3 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500/70" />
                <time dateTime={post.published_at} className="group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {formatDate(post.published_at)}
                </time>
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500/70" />
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.reading_time}m
                </span>
              </span>
            </div>
            <span className="inline-flex items-center gap-0.5 sm:gap-1 text-green-600 dark:text-green-400 font-medium group-hover:translate-x-0.5 transition-all duration-300">
              Read
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          {/* Author Section with Enhanced Styling */}
          {post.author_name && (
            <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="relative">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center ring-1 ring-green-500/20 group-hover:ring-green-500/30 transition-all duration-300">
                  <span className="text-green-600 dark:text-green-400 font-semibold text-xs sm:text-sm">
                    {post.author_name.charAt(0)}
                  </span>
                </div>
                <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <div>
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {post.author_name}
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                  Technology Expert
                </p>
              </div>
            </div>
          )}
        </div>
      </Link>
    </article>
  );
};

export default NewBlogCard;
