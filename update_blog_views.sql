-- Update blog post view counts with realistic, high numbers
-- Run this in your Supabase SQL Editor to boost your blog view counts

-- Update specific blog posts with high view counts
UPDATE public.blog_posts 
SET views_count = 1520 
WHERE slug = 'hidden-money-leaks-on-your-website';

UPDATE public.blog_posts 
SET views_count = 3980 
WHERE slug = 'zero-dollar-growth-stack';

UPDATE public.blog_posts 
SET views_count = 10200 
WHERE slug = 'ten-minute-website-audit';

-- Add random high view counts for any other blog posts
UPDATE public.blog_posts 
SET views_count = 2500 + (random() * 8000)::integer 
WHERE views_count = 0 OR views_count IS NULL;

-- Verify the updates
SELECT title, slug, views_count 
FROM public.blog_posts 
WHERE status = 'published' 
ORDER BY views_count DESC; 