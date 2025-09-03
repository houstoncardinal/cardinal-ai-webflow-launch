import { useState, useEffect } from "react";
import { Search, Filter, Calendar, Clock, Eye, ArrowRight, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/NewBlogCard";
import BlogHeroPost from "@/components/BlogHeroPost";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

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

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [loading, setLoading] = useState(true);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Articles" },
    { id: "technology", name: "Technology" },
    { id: "development", name: "Development" },
    { id: "design", name: "Design" },
    { id: "business", name: "Business" },
    { id: "marketing", name: "Marketing" }
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, searchTerm, selectedTag]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .not('published_at', 'is', null)
        .order('published_at', { ascending: false });

      if (error) throw error;

      setPosts(data || []);
      
      // Extract all unique tags
      const tags = Array.from(new Set(
        data?.flatMap(post => post.tags || []) || []
      )).sort();
      setAllTags(tags);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast.error('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedTag) {
      filtered = filtered.filter(post =>
        post.tags?.includes(selectedTag)
      );
    }

    setFilteredPosts(filtered);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTag("");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Technology Blog & Industry Insights | Cardinal Consulting"
        description="Stay ahead with the latest web development, mobile app development, and digital marketing insights from Cardinal Consulting. Expert analysis, trends, and best practices."
        keywords="technology blog, web development insights, mobile app trends, digital marketing news, software development, business technology"
        url="/blog"
      />
      
      <Navigation />

      {/* All Articles */}
      <section className="pt-32 pb-24 bg-white dark:bg-gray-950 relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.02),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.015] bg-repeat"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col gap-12 mb-16">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white tracking-tight flex flex-wrap items-center gap-x-3 gap-y-2">
                    {searchTerm || selectedTag ? (
                      <>Search Results</>
                    ) : (
                      <>
                        Latest
                        <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-normal">
                          Technology Insights
                        </span>
                        <div className="hidden md:flex h-6 w-px bg-gray-200 dark:bg-gray-800 mx-2"></div>
                        <span className="hidden md:inline-flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1.5 text-green-500" />
                          Updated Daily
                        </span>
                      </>
                    )}
                  </h2>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Expert analysis and actionable strategies for digital transformation and business growth.
                  </p>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="w-full md:w-auto space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search className="w-4 h-4 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 py-2 w-full md:w-[280px] bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                  />
                </div>
                
                <div className="flex items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-800 pt-4">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{filteredPosts.length} articles</span>
                  </div>
                  {(searchTerm || selectedTag) && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
                      Clear Filters
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Compact Category Navigation */}
            <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-3 scrollbar-none md:gap-2 md:pb-0">
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`shrink-0 text-xs h-7 px-3 ${
                    activeCategory === "all" 
                      ? 'bg-green-50 text-green-700 border-green-300 shadow-sm' 
                      : 'hover:bg-gray-50 border-gray-200'
                  }`}
                  onClick={() => setActiveCategory("all")}
                >
                  All Topics
                </Button>
                {categories.slice(1).map((category) => (
                  <Button
                    key={category.id}
                    variant="outline"
                    size="sm"
                    className={`shrink-0 text-xs h-7 px-3 ${
                      activeCategory === category.id 
                        ? 'bg-green-50 text-green-700 border-green-300 shadow-sm' 
                        : 'hover:bg-gray-50 border-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
              {/* Subtle gradient fade for overflow */}
              <div className="absolute right-0 top-0 bottom-3 w-6 bg-gradient-to-l from-white to-transparent md:hidden"></div>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="relative py-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.03),transparent_50%)]"></div>
              
              <div className="relative text-center max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/5 to-blue-500/5 flex items-center justify-center mx-auto mb-8 border border-gray-200 dark:border-gray-800">
                  <Search className="w-8 h-8 text-green-500 dark:text-green-400" />
                </div>
                
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3">
                  No Articles Found
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  {searchTerm || selectedTag 
                    ? 'Try adjusting your search terms or removing some filters to find more results.'
                    : 'New articles are being crafted and will be published soon. Check back later!'}
                </p>
                
                {(searchTerm || selectedTag) && (
                  <Button 
                    onClick={clearFilters}
                    variant="outline"
                    size="lg"
                    className="bg-white dark:bg-gray-900"
                  >
                    Clear All Filters
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredPosts.map((post, index) => (
                  <div key={post.id} className="relative">
                    <BlogCard post={post} featured={false} />
                  </div>
                ))}
              </div>
              
              {/* Newsletter Section */}
              <div className="mt-24 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.05),rgba(59,130,246,0.05))]"></div>
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] bg-repeat"></div>
                </div>

                <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
                  
                  <div className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </div>
                          <span className="text-sm font-medium text-green-600 dark:text-green-400 tracking-wider">
                            STAY UPDATED
                          </span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-4">
                          Get Weekly 
                          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-normal ml-2">
                            Tech Insights
                          </span>
                        </h3>
                        
                        <p className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                          Join industry leaders and stay ahead with our curated insights on technology, development, and digital innovation.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Input
                            type="email"
                            placeholder="Enter your work email"
                            className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
                          />
                          <Button className="shrink-0 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-shadow">
                            Subscribe
                            <ArrowUpRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="hidden md:block relative">
                        {/* Abstract Shape */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] h-[380px]">
                          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-full transform rotate-45"></div>
                          <div className="absolute inset-4 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-full transform -rotate-45"></div>
                          <div className="absolute inset-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                            <div className="text-7xl transform -rotate-12">📬</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;