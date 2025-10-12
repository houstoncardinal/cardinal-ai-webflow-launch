import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Services",
      faqs: [
        {
          question: "What services does Cardinal Consulting offer?",
          answer: "We offer comprehensive digital solutions including custom web development, mobile app development (iOS/Android), e-commerce platforms, SEO optimization, digital marketing, PPC advertising, social media marketing, brand identity design, and ongoing technical support. Our full-stack expertise covers everything from initial concept to launch and beyond."
        },
        {
          question: "What makes Cardinal Consulting different from other agencies?",
          answer: "We stand out with our proven track record of 500+ successful projects, 98% client satisfaction rate, expedited delivery options (72-hour rush available), personalized one-on-one service, and comprehensive digital solutions. Our team combines creativity with technical expertise to deliver measurable results that drive business growth. We're based in Houston but serve clients nationwide."
        },
        {
          question: "Do you work with businesses outside of Houston?",
          answer: "Absolutely! While we're proudly based in Houston, Texas, we serve clients across the United States and internationally. We offer remote consultations, project management, and support to ensure seamless collaboration regardless of location. Our digital-first approach means we can deliver exceptional results anywhere."
        }
      ]
    },
    {
      category: "Pricing & Timeline",
      faqs: [
        {
          question: "How much does a website cost from Cardinal Consulting?",
          answer: "Website costs vary based on complexity, features, and specific business needs. Basic business websites start at $2,500-$5,000. E-commerce platforms range from $5,000-$15,000. Complex custom web applications start at $10,000+. We offer flexible payment plans and custom quotes. Contact us for a FREE detailed estimate tailored to your project."
        },
        {
          question: "How long does it take to build a website?",
          answer: "Typical website development takes 2-6 weeks depending on complexity and scope. Simple business websites: 2-3 weeks. E-commerce sites: 4-6 weeks. Complex web applications: 6-12 weeks. However, we specialize in expedited services and can deliver quality projects in less than 72 hours when requested for an additional rush fee. We prioritize both quality and speed."
        },
        {
          question: "Do you offer payment plans or financing?",
          answer: "Yes! We understand that investing in your digital presence is a significant decision. We offer flexible payment plans including 50/50 split payments (half upfront, half upon completion), monthly payment options for larger projects, and retainer-based ongoing services. Contact us to discuss the best payment structure for your budget."
        },
        {
          question: "What is included in your pricing?",
          answer: "Our pricing includes initial consultation and strategy, custom design mockups, responsive development (mobile-friendly), basic SEO setup, content management system integration, quality assurance testing, launch support, and 30 days of post-launch support. Premium features like advanced SEO, custom integrations, and extended support can be added based on your needs."
        }
      ]
    },
    {
      category: "Web Development",
      faqs: [
        {
          question: "What technologies do you use for web development?",
          answer: "We use modern, industry-leading technologies including React for dynamic user interfaces, TypeScript for type-safe code, Node.js for backend services, Next.js for SEO-optimized websites, Tailwind CSS for responsive design, and cloud platforms like AWS and Vercel for hosting. We select the best tech stack based on your specific project requirements."
        },
        {
          question: "Will my website be mobile-friendly and responsive?",
          answer: "Absolutely! Every website we build is fully responsive and optimized for all devices - smartphones, tablets, laptops, and desktops. Mobile-first design is a core principle of our development process, ensuring your site looks perfect and functions flawlessly on any screen size. We test on multiple devices before launch."
        },
        {
          question: "Can you redesign my existing website?",
          answer: "Yes! We specialize in website redesigns and modernization. Whether your site is outdated, not mobile-friendly, performing poorly in search rankings, or simply not converting visitors, we can transform it. We'll analyze your current site, identify improvements, and create a modern, high-performing website while preserving your brand identity and SEO rankings."
        },
        {
          question: "Do you provide e-commerce solutions?",
          answer: "Definitely! We build robust e-commerce platforms using Shopify, WooCommerce, custom solutions, or headless commerce architectures. Our e-commerce websites include secure payment processing, inventory management, shopping cart functionality, customer accounts, order tracking, and integration with shipping providers. We can also migrate your existing store to a new platform."
        }
      ]
    },
    {
      category: "Mobile App Development",
      faqs: [
        {
          question: "Do you develop mobile apps for iOS and Android?",
          answer: "Yes! We develop native and cross-platform mobile apps for both iOS and Android. Our app development expertise includes React Native for cross-platform efficiency, Swift for native iOS apps, Kotlin for native Android apps, and Flutter for high-performance applications. We guide you in choosing the best approach based on your requirements, budget, and timeline."
        },
        {
          question: "What is the difference between native and cross-platform apps?",
          answer: "Native apps are built specifically for iOS (Swift) or Android (Kotlin) and offer the best performance and full access to device features. Cross-platform apps use frameworks like React Native or Flutter to share code between iOS and Android, reducing development time and cost by 30-40%. We'll recommend the best approach based on your app's complexity, budget, and performance needs."
        },
        {
          question: "How much does mobile app development cost?",
          answer: "Mobile app costs vary significantly based on complexity. Simple apps (basic functionality): $10,000-$25,000. Medium complexity apps (API integration, user accounts): $25,000-$75,000. Complex apps (real-time features, advanced backend): $75,000+. Cross-platform development is typically 30-40% less expensive than building separate native apps. We provide detailed estimates after understanding your requirements."
        }
      ]
    },
    {
      category: "SEO & Digital Marketing",
      faqs: [
        {
          question: "What SEO services do you offer?",
          answer: "Our comprehensive SEO services include keyword research and strategy, on-page optimization (meta tags, headers, content), technical SEO (site speed, mobile optimization, schema markup), local SEO for Houston businesses, link building and backlink analysis, content creation and optimization, Google Business Profile optimization, and monthly performance reporting. We use AI-powered tools for competitive analysis and data-driven optimization."
        },
        {
          question: "How long does it take to see SEO results?",
          answer: "SEO is a long-term strategy. Initial improvements in site structure and technical SEO can show within 2-4 weeks. Noticeable ranking improvements typically appear in 3-6 months. Significant organic traffic growth usually takes 6-12 months. However, results vary based on industry competition, current website status, and the scope of optimization. We provide monthly reports showing progress and ROI."
        },
        {
          question: "Do you offer PPC and Google Ads management?",
          answer: "Yes! We provide full-service PPC management including Google Ads, Facebook/Instagram Ads, LinkedIn Ads, and retargeting campaigns. Our services include campaign strategy and setup, keyword research and ad copywriting, landing page optimization, A/B testing and optimization, bid management, and detailed performance reporting. We focus on maximizing ROI and reducing cost-per-acquisition."
        },
        {
          question: "Can you help with social media marketing?",
          answer: "Absolutely! Our social media services include strategy development, content creation and scheduling, community management and engagement, paid social advertising (Facebook, Instagram, LinkedIn), influencer partnership coordination, and analytics and reporting. We help build your brand presence and engage your target audience across all major social platforms."
        }
      ]
    },
    {
      category: "Support & Maintenance",
      faqs: [
        {
          question: "Do you provide ongoing support and maintenance?",
          answer: "Yes! We offer comprehensive ongoing support including website hosting and monitoring, security updates and patches, content updates and changes, performance optimization, regular backups, SEO maintenance, technical support (24/7 emergency support available), and monthly analytics reports. Our support plans start at $99/month and can be customized based on your needs."
        },
        {
          question: "What happens if my website goes down?",
          answer: "All our hosting clients have access to our technical support team. Premium support clients (with 24/7 coverage) receive immediate response for critical issues. We monitor uptime, maintain regular backups, and can quickly restore your site if issues occur. Our typical response time for emergencies is under 2 hours, with most issues resolved within 4-6 hours."
        },
        {
          question: "Can I update my website content myself?",
          answer: "Yes! We build all websites with user-friendly content management systems (CMS) like WordPress, allowing you to easily update text, images, blog posts, and pages. We provide training and documentation. If you prefer not to manage updates yourself, our maintenance plans include content update services."
        },
        {
          question: "Do you offer website hosting?",
          answer: "Yes! We offer managed hosting services with premium performance, security, and support. Our hosting includes fast SSD storage, SSL certificates (HTTPS), daily backups, malware scanning and removal, CDN for faster global loading, and 99.9% uptime guarantee. Hosting starts at $29/month. We can also work with your preferred hosting provider."
        }
      ]
    },
    {
      category: "Getting Started",
      faqs: [
        {
          question: "How can I get started with Cardinal Consulting?",
          answer: "Getting started is easy! Step 1: Call us at (281) 901-7016 or fill out our project evaluation form. Step 2: Schedule a FREE consultation to discuss your goals and requirements. Step 3: Receive a detailed custom quote and project timeline. Step 4: Review and approve the proposal. Step 5: We begin work on your project! No obligation until you're ready to move forward."
        },
        {
          question: "What information do you need to provide a quote?",
          answer: "To provide an accurate quote, we need: your business goals and objectives, target audience and competitors, desired features and functionality, design preferences and examples you like, content and assets you have available, timeline requirements, and approximate budget range. The more detail you provide, the more accurate our estimate will be."
        },
        {
          question: "Do you sign NDAs or confidentiality agreements?",
          answer: "Absolutely! We take client confidentiality seriously and are happy to sign Non-Disclosure Agreements (NDAs) before discussing your project details. We maintain strict confidentiality standards and protect all proprietary information, business strategies, and sensitive data shared during our engagement."
        },
        {
          question: "Can I see examples of your previous work?",
          answer: "Yes! Visit our Portfolio page to see case studies and examples of websites, apps, and digital marketing campaigns we've delivered for clients. We showcase work across various industries including healthcare, real estate, e-commerce, professional services, and more. We can also provide references from satisfied clients upon request."
        }
      ]
    }
  ];

  // Structured data for Google Search Console
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | Cardinal Consulting Houston</title>
        <meta 
          name="description" 
          content="Find answers to common questions about web development, mobile apps, SEO, pricing, timeline, and support. Get expert insights from Houston's premier digital agency." 
        />
        <meta 
          name="keywords" 
          content="Cardinal Consulting FAQ, web development questions, Houston digital agency FAQ, website cost, SEO questions, mobile app development, support and maintenance" 
        />
        <link rel="canonical" href="https://cardinalhtx.com/faq" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FAQ - Frequently Asked Questions | Cardinal Consulting" />
        <meta property="og:description" content="Get answers to your questions about our web development, mobile app, and digital marketing services." />
        <meta property="og:url" content="https://cardinalhtx.com/faq" />
        <meta property="og:type" content="website" />
        
        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://cardinalhtx.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "FAQ",
                "item": "https://cardinalhtx.com/faq"
              }
            ]
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Frequently Asked Questions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              How Can We Help You?
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find answers to common questions about our services, pricing, timeline, and more. 
              Can't find what you're looking for? We're here to help!
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">
                  <MessageCircle className="w-5 h-5" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href="tel:2819017016">
                  <Phone className="w-5 h-5" />
                  (281) 901-7016
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`item-${categoryIndex}-${faqIndex}`}
                      className="border rounded-lg px-6 bg-background/50"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-semibold text-foreground pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <Card className="container mx-auto max-w-4xl p-8 md:p-12 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border-2">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team is ready to provide personalized answers and help you get started with your project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/free-audit">
                    Get Free Website Audit
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a href="mailto:info@cardinalhtx.com">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground pt-4">
                🕐 Available Monday - Friday, 9 AM - 6 PM CST | 24/7 Emergency Support for Clients
              </p>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FAQ;
