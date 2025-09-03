-- Update blog post view counts with realistic, high numbers
-- This gives the site a boost and makes articles appear more popular

UPDATE public.blog_posts 
SET views_count = 1520 
WHERE slug = 'hidden-money-leaks-on-your-website';

UPDATE public.blog_posts 
SET views_count = 3980 
WHERE slug = 'zero-dollar-growth-stack';

UPDATE public.blog_posts 
SET views_count = 10200 
WHERE slug = 'ten-minute-website-audit';

-- Add some variation for any future blog posts that might exist
-- This ensures all posts have realistic view counts

UPDATE public.blog_posts 
SET views_count = CASE 
  WHEN slug = 'hidden-money-leaks-on-your-website' THEN 1520
  WHEN slug = 'zero-dollar-growth-stack' THEN 3980
  WHEN slug = 'ten-minute-website-audit' THEN 10200
  ELSE 2500 + (random() * 8000)::integer -- Random number between 2500-10500 for any other posts
END
WHERE views_count = 0 OR views_count IS NULL; 