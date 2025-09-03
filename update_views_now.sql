-- Run this in your Supabase SQL Editor to update view counts immediately

-- Update the specific blog posts with high view counts
UPDATE public.blog_posts 
SET views_count = 1520 
WHERE slug = 'hidden-money-leaks-on-your-website';

UPDATE public.blog_posts 
SET views_count = 3980 
WHERE slug = 'zero-dollar-growth-stack';

UPDATE public.blog_posts 
SET views_count = 10200 
WHERE slug = 'ten-minute-website-audit';

-- Show the updated results
SELECT title, slug, views_count, published_at 
FROM public.blog_posts 
WHERE status = 'published' 
ORDER BY views_count DESC; 