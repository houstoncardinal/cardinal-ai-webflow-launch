import { supabase } from "@/integrations/supabase/client";

interface FacebookPost {
  id: string;
  message?: string;
  full_picture?: string;
  created_time: string;
}

type BlogPostInsert = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail_url?: string;
  published_at: string;
  reading_time: number;
  tags: string[];
  author_name: string;
  status: 'draft' | 'published';
};

const extractTitleFromMessage = (message: string): string => {
  // Get first line or first sentence, whichever is shorter
  const firstLine = message.split('\n')[0];
  const firstSentence = message.split(/[.!?]/, 1)[0];
  return (firstLine.length < firstSentence.length ? firstLine : firstSentence).trim();
};

const estimateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60);
};

const extractTags = (message: string): string[] => {
  const techKeywords = ['web development', 'mobile app', 'cloud', 'seo', 'digital marketing', 'ai', 
    'artificial intelligence', 'technology', 'software', 'business', 'innovation'];
  
  const tags = techKeywords.filter(keyword => 
    message.toLowerCase().includes(keyword.toLowerCase())
  );
  
  // Always include 'Technology' as a default tag
  if (!tags.includes('Technology')) {
    tags.push('Technology');
  }
  
  return tags;
};

export const importFacebookPosts = async (accessToken: string): Promise<void> => {
  try {
    // Fetch posts from Facebook
    const response = await fetch(
      `https://graph.facebook.com/v18.0/cardinalad/posts?fields=id,message,full_picture,created_time&access_token=${accessToken}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch Facebook posts');
    }

    const data = await response.json();
    const posts: FacebookPost[] = data.data;

    // Process each post
    for (const post of posts) {
      if (!post.message) continue;

      const title = extractTitleFromMessage(post.message);
      const slug = generateSlug(title);

      // Skip this post - we can't check for existing posts without source_id column
      // This functionality would require a database migration to add source_id column

      const blogPost: BlogPostInsert = {
        title,
        slug: `${slug}-${post.id.split('_')[1]}`,
        excerpt: post.message.slice(0, 160) + '...',
        content: post.message,
        thumbnail_url: post.full_picture,
        published_at: post.created_time,
        reading_time: estimateReadingTime(post.message),
        tags: extractTags(post.message),
        author_name: 'Cardinal Team',
        status: 'published'
      };

      // Insert into database
      const { error } = await supabase
        .from('blog_posts')
        .insert(blogPost);

      if (error) {
        console.error('Error importing Facebook post:', error);
      }
    }
  } catch (error) {
    console.error('Error importing Facebook posts:', error);
    throw error;
  }
};
