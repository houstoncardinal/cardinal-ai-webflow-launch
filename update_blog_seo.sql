-- Update blog posts with enhanced SEO meta titles and descriptions
-- Run this script to update existing blog posts with better SEO

UPDATE blog_posts 
SET 
  meta_title = 'Hidden Money Leaks: 5 Critical Website Issues Costing You $10K+ Monthly | Cardinal Consulting',
  meta_description = 'Stop losing money! Discover 5 critical website issues that could be costing you $10K+ monthly. Learn proven strategies to fix mobile optimization, lead capture, trust signals, and conversion problems.'
WHERE slug = 'hidden-money-leaks-on-your-website';

UPDATE blog_posts 
SET 
  meta_title = 'The $0 Growth Stack: Free Marketing Strategies That Beat $5K Ad Budgets | Cardinal Consulting',
  meta_description = 'Stop wasting money on ads! Discover 6 proven free marketing strategies that outperform expensive advertising. Learn Google Business Profile optimization, local SEO, email marketing, and AI lead capture techniques.'
WHERE slug = 'zero-dollar-growth-stack';

UPDATE blog_posts 
SET 
  meta_title = '10-Minute Website Audit: Save $5K+ Monthly in Lost Revenue | Cardinal Consulting',
  meta_description = 'Stop losing money! Learn how to perform a 10-minute website audit that can save you $5K+ monthly. Check page speed, mobile optimization, security, and conversion issues instantly.'
WHERE slug = 'ten-minute-website-audit'; 