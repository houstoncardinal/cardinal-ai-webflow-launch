-- Create blog post
INSERT INTO blog_posts (
  title,
  slug,
  excerpt,
  content,
  thumbnail_url,
  published_at,
  reading_time,
  views_count,
  tags,
  author_name,
  status,
  is_featured,
  meta_title,
  meta_description
) VALUES (
  'The Hidden Money Leaks on Your Website (and How to Plug Them)',
  'hidden-money-leaks-on-your-website',
  'Most business owners think: "I have a website, so I''m good." But here''s the truth: your website is probably leaking money every single day—and you don''t even know it. Discover the 5 critical website issues costing you business.',
  (SELECT content FROM pg_read_file('/public/blog/articles/hidden-money-leaks.md')),
  '/money-leaks.png',
  NOW(),
  5,
  0,
  ARRAY['Website Optimization', 'Business Growth', 'Digital Strategy', 'Conversion Rate', 'Web Development'],
  'Cardinal Team',
  'published',
  true,
  'Hidden Website Money Leaks: 5 Critical Issues Costing You Business | Cardinal Consulting',
  'Discover the 5 hidden ways your website could be losing money and learn practical solutions to fix them. From mobile optimization to lead capture, transform your website into a 24/7 sales machine.'
);
