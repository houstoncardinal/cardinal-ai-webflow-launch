-- Simple script to remove all blog posts and keep only the 3 you want
-- Run this in your Supabase SQL editor

-- Step 1: Delete ALL blog posts
DELETE FROM blog_posts;

-- Step 2: Insert only the 3 blog posts you want to keep
INSERT INTO blog_posts (
  title, slug, excerpt, content, thumbnail_url, published_at, updated_at, 
  reading_time, views_count, tags, author_name, status, meta_title, meta_description, is_featured
) VALUES 
(
  'The Hidden Money Leaks on Your Website (and How to Plug Them)',
  'hidden-money-leaks-on-your-website',
  'Most business owners think: "I have a website, so I''m good." But here''s the truth: your website is probably leaking money every single day—and you don''t even know it. Discover the 5 critical website issues costing you business.',
  '# The Hidden Money Leaks on Your Website (and How to Plug Them)

Most business owners think: "I have a website, so I''m good."

But here''s the truth: your website is probably leaking money every single day—and you don''t even know it.

## The 5 Critical Money Leaks in Your Website

### 1. The Silent Phone Problem
If your phone number isn''t clickable on mobile, you''re losing calls.

👉 **Quick Fix**: Make it one tap to call. It sounds small, but it can be the difference between 10 calls a month and 100.

### 2. The Invisible Offer
Your best service or product is buried deep in your site. Most visitors never see it.

👉 **Quick Fix**: Put your #1 money-maker right on the homepage with a big button.

### 3. The 24/7 Black Hole
Your website has no way to capture leads when you''re asleep. Visitors leave, and you never even know they were there.

👉 **Quick Fix**: Add a simple lead form or chatbot. Even one extra lead per week could mean thousands in extra revenue per year.

### 4. The Trust Gap
No reviews. No testimonials. No social proof. Customers wonder: "Can I trust this business?"

👉 **Quick Fix**: Put real client reviews front and center. People trust other people more than your sales pitch.

### 5. The Slow-Death Scroll
Your site takes 5+ seconds to load. Most visitors are gone by then.

👉 **Quick Fix**: Speed up your site. Every second you save can raise conversions by up to 7%.

## The Key Insight

A website isn''t just a digital business card. It''s a 24/7 salesperson. If yours isn''t set up to capture attention, build trust, and drive action—you''re leaving money on the table.

### Transform Your Website into Your Best Salesperson

Think about it: If your website was your best salesperson, how would you want them to act?
- Confident in presenting your solutions?
- Clear in communicating value?
- Persuasive in driving action?

Your website needs to embody these qualities to truly serve your business.',
  '/money-leaks.png',
  NOW(),
  NOW(),
  5,
  0,
  ARRAY['Website Optimization', 'Business Growth', 'Digital Strategy', 'Conversion Optimization', 'Web Development'],
  'Cardinal Digital Team',
  'published',
  'Hidden Money Leaks: 5 Critical Website Issues Costing You $10K+ Monthly | Cardinal Consulting',
  'Stop losing money! Discover 5 critical website issues that could be costing you $10K+ monthly. Learn proven strategies to fix mobile optimization, lead capture, trust signals, and conversion problems.',
  true
),
(
  'The $0 Growth Stack That Outperforms Expensive Ads',
  'zero-dollar-growth-stack',
  'Discover the powerful, free growth strategies that can outperform expensive advertising. Learn how to leverage Google Business Profile, email marketing, local SEO, AI-powered lead capture, and more to grow your business without spending on ads.',
  '# The $0 Growth Stack That Outperforms Expensive Ads

Most businesses think growth = ads. The truth? The biggest wins come from systems you can set up for free. Here''s the $0 Growth Stack your competitors will never tell you about.

## 1. Google Business Profile "Ranking Triggers"

Don''t just verify and forget — optimize it like it''s your homepage:

* Post weekly updates (Google reads these as fresh SEO signals)
* Add products/services that appear in local search
* Preload Q&A with keyword-rich answers (yes, you can write them yourself)

**Key Impact**: Businesses that post consistently see 2.7x more calls + visits.

## 2. Hidden Email List Play

Your old customers are your cheapest conversions:

* Export every email from past invoices
* Upload into Mailchimp (free plan)
* Send a "VIP-only tip or deal" once a month

**Pro Tip**: Simple → keeps customers buying again.

## 3. Local SEO Content Machine (The Silent Growth Engine)

Ads stop the moment you stop paying. Articles rank for years.

Here''s the play:

* Write powerful, informative articles around your services/products
* Example: "The Ultimate Guide to Web Design in Houston"
* "How Local Businesses Can Double Leads with SEO in Katy"
* Make each post SEO-optimized: keyword in title, headers, meta description
* Add location-based keywords so you own your city''s search (Houston, Katy, Sugar Land, etc.)
* Within each article, add hyperlinks back to your service pages (e.g., "Need help? Our Houston Web Design Services can get you there")
* Repurpose the same article into LinkedIn posts, Google Posts, and email snippets

**Key Insight**: One well-optimized article not only ranks — it funnels readers straight to your offers.

## 4. AI-Powered Lead Capture (Free Gem 💎)

Your website shouldn''t just sit there — it should sell for you.

* Add a live chat/AI agent (like Tidio, free tier)
* Train it on your services, FAQs, and offers
* It collects emails, qualifies leads, and books calls 24/7

**Impact**: Done right, this makes your website your best salesperson — at zero cost.

## 5. Built-in Referral Loops

Turn every customer into a marketer:

* "Bring a friend, get 10% off" → on receipts, invoices, and emails
* Use referral codes (most POS systems offer this free)
* Publicly celebrate top referrers → loyalty + social proof

**Result**: Free growth that compounds every month.

## 6. Advanced SEO Power-Ups (The Secret Sauce)

This is how you leapfrog competitors without ads:

* Add schema markup (unlock stars ⭐, sitelinks, FAQs in search)
* Fix titles + meta descriptions with high-intent keywords
* Build city-specific landing pages (Houston SEO, Katy Web Design, Sugar Land Marketing)
* Use Google Search Console to spy on keywords people use to find you

**Pro Tip**: Schema + localized articles + service links = rankings + traffic + conversions.

## The Bottom Line

You don''t need a $5K ad budget. You need consistency + the right growth systems.

This is the playbook agencies usually charge for, but we believe in empowering businesses with the knowledge they need to succeed.

### Ready to Implement These Strategies?

Contact Cardinal Digital for a free consultation on how to implement these strategies for your business. We''ll help you build a sustainable growth engine that doesn''t rely on expensive advertising.',
  '/cardinalpost.jpg',
  NOW(),
  NOW(),
  8,
  0,
  ARRAY['Local SEO', 'Digital Marketing', 'Business Growth', 'Lead Generation', 'Content Marketing', 'Houston Marketing'],
  'Cardinal Digital Team',
  'published',
  'The $0 Growth Stack: Free Marketing Strategies That Beat $5K Ad Budgets | Cardinal Consulting',
  'Stop wasting money on ads! Discover 6 proven free marketing strategies that outperform expensive advertising. Learn Google Business Profile optimization, local SEO, email marketing, and AI lead capture techniques.',
  true
),
(
  'The 10-Minute Website Audit That Can Save You Thousands',
  'ten-minute-website-audit',
  'Most business owners never check these basics — and it costs them leads every single day. Learn how to perform a quick DIY website audit that can save you thousands in lost revenue.',
  '# The 10-Minute Website Audit That Can Save You Thousands

Most business owners never check these basics — and it costs them leads every single day.

## Quick Website Audit Checklist

Here''s a quick DIY audit you can do in 10 minutes:

### 1. Page Speed Performance

Your first impression matters. Run your site through [PageSpeed Insights](https://pagespeed.web.dev/). If it''s slow, customers bounce.

**Impact**: Each second delay = 7% fewer conversions

### 2. Mobile Responsiveness

Over 60% of visitors are on mobile. If your site isn''t responsive, you''re invisible to most potential customers.

**Key Check**: Test your site on multiple devices and screen sizes.

### 3. SSL Certificate Security

Without proper HTTPS security:
* Google lowers your ranking
* Customers don''t trust your site
* You risk losing sensitive data

### 4. Strategic CTA Placement

Is your "Call Now" or "Contact" button visible without scrolling?

**Pro Tip**: Your main call-to-action should be visible within 3 seconds of landing on your page.

### 5. Link Integrity Check

Test all your main pages for broken links. A single broken link can:
* Hurt user trust
* Damage SEO rankings
* Lose potential customers

## Bonus Power-Up: Live Chat Integration

💡 **Pro Tip**: Add live chat or a click-to-text option on mobile. It can double leads overnight.

### Why This Works:
* Instant engagement with visitors
* 24/7 lead capture
* Lower barrier to entry than phone calls
* Better conversion rates than contact forms

## Need Expert Help?

Want a deeper dive into your website''s performance? Get a FREE professional website + SEO audit from Cardinal Digital.

### What You''ll Get:
* Comprehensive technical analysis
* SEO opportunity report
* Conversion optimization tips
* Mobile performance review
* Security assessment
* Custom growth roadmap',
  '/10min.jpg',
  NOW(),
  NOW(),
  4,
  0,
  ARRAY['Website Audit', 'SEO', 'Conversion Optimization', 'Web Performance', 'Houston Marketing', 'Lead Generation'],
  'Cardinal Digital Team',
  'published',
  '10-Minute Website Audit: Save $5K+ Monthly in Lost Revenue | Cardinal Consulting',
  'Stop losing money! Learn how to perform a 10-minute website audit that can save you $5K+ monthly. Check page speed, mobile optimization, security, and conversion issues instantly.',
  true
);

-- Verify the result
SELECT 'Blog posts after cleanup:' as info;
SELECT slug, title, status FROM blog_posts ORDER BY published_at DESC; 