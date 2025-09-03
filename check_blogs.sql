-- Check current blog posts in the database
SELECT 
  id,
  slug,
  title,
  status,
  published_at,
  is_featured
FROM blog_posts 
ORDER BY published_at DESC; 