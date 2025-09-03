-- Remove the 3 extra blog posts, keep only the manually uploaded ones
-- This script removes the demo blog posts that were automatically created

-- Keep these blog posts (your manually uploaded content):
-- 1. 'hidden-money-leaks-on-your-website' - The Hidden Money Leaks on Your Website
-- 2. 'zero-dollar-growth-stack' - The $0 Growth Stack That Outperforms Expensive Ads  
-- 3. 'ten-minute-website-audit' - The 10-Minute Website Audit That Can Save You Thousands

-- Remove the 3 demo blog posts that were automatically created
DELETE FROM blog_posts WHERE slug IN (
  'future-web-development-trends-2025',
  'houston-digital-marketing-2025',
  'mobile-app-development-native-vs-cross-platform-2025'
);

-- Verify only the 3 desired blog posts remain
SELECT slug, title, status FROM blog_posts ORDER BY published_at DESC; 