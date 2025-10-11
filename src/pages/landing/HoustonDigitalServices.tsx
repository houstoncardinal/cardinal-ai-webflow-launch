import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Clock, Award, Users, Zap, Shield, TrendingUp, Smartphone, Code, Palette, Rocket, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const HoustonDigitalServices = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'app'>('web');

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://cardinaldigitalmarketing.com/#organization",
        "name": "Cardinal Digital Marketing - Houston Web Design & App Development",
        "image": "https://cardinaldigitalmarketing.com/logo.png",
        "description": "Houston's #1 Web Design Company & App Development Agency. Custom websites, mobile apps, and digital solutions that drive results. Serving Houston, TX since inception.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Houston",
          "addressLocality": "Houston",
          "addressRegion": "TX",
          "postalCode": "77001",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 29.7604,
          "longitude": -95.3698
        },
        "url": "https://cardinaldigitalmarketing.com/houston-digital-services",
        "telephone": "+1-XXX-XXX-XXXX",
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "areaServed": {
          "@type": "City",
          "name": "Houston",
          "containedInPlace": {
            "@type": "State",
            "name": "Texas"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Design Houston",
                "description": "Custom web design and development services in Houston, TX"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "App Development Houston",
                "description": "Mobile app development for iOS and Android in Houston"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://cardinaldigitalmarketing.com/houston-digital-services#webpage",
        "url": "https://cardinaldigitalmarketing.com/houston-digital-services",
        "name": "Web Design Houston | App Development Houston | #1 Digital Agency",
        "description": "Top-rated web design company & app development agency in Houston, TX. Custom websites, mobile apps & digital solutions. Free consultation. Call now!",
        "isPartOf": {
          "@id": "https://cardinaldigitalmarketing.com/#website"
        },
        "about": {
          "@id": "https://cardinaldigitalmarketing.com/#organization"
        },
        "breadcrumb": {
          "@id": "https://cardinaldigitalmarketing.com/houston-digital-services#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://cardinaldigitalmarketing.com/houston-digital-services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cardinaldigitalmarketing.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Houston Digital Services",
            "item": "https://cardinaldigitalmarketing.com/houston-digital-services"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes you the best web design company in Houston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We combine cutting-edge design, proven SEO strategies, and custom development to create websites that don't just look amazing—they convert visitors into customers. With 127+ five-star reviews and a portfolio of successful Houston businesses, we deliver measurable results."
            }
          },
          {
            "@type": "Question",
            "name": "How much does web design cost in Houston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Custom web design projects in Houston typically range from $5,000 to $50,000+ depending on complexity, features, and business needs. We offer flexible packages and financing options. Contact us for a free custom quote."
            }
          },
          {
            "@type": "Question",
            "name": "Do you develop mobile apps for iOS and Android?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We develop native and cross-platform mobile apps for both iOS and Android. Our Houston app development team specializes in React Native, Swift, and Kotlin to create high-performance mobile applications."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to build a website or app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most websites take 4-8 weeks from start to launch. Mobile apps typically take 8-16 weeks depending on complexity. We provide detailed timelines during our free consultation and keep you updated throughout the process."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide ongoing support after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! We offer comprehensive maintenance packages including hosting, security updates, content updates, performance monitoring, and technical support. We're here to ensure your digital presence continues to thrive."
            }
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Web Design Houston",
        "provider": {
          "@id": "https://cardinaldigitalmarketing.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Houston"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Design Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Website Design",
                "description": "Bespoke website designs tailored to your brand"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-commerce Development",
                "description": "Online stores that convert visitors into customers"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Optimization",
                "description": "Get found on Google and dominate search results"
              }
            }
          ]
        }
      }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: '500+', label: 'Websites Launched', icon: Rocket },
    { number: '127+', label: '5-Star Reviews', icon: Star },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '10+', label: 'Years Experience', icon: TrendingUp },
  ];

  const webServices = [
    {
      title: 'Custom Web Design',
      description: 'Stunning, conversion-focused websites built specifically for your Houston business',
      icon: Palette,
      features: ['Mobile-First Design', 'SEO Optimized', 'Lightning Fast', 'Conversion Focused']
    },
    {
      title: 'E-Commerce Solutions', 
      description: 'Powerful online stores that turn browsers into buyers',
      icon: BarChart,
      features: ['Shopify & Custom', 'Payment Integration', 'Inventory Management', 'Marketing Tools']
    },
    {
      title: 'WordPress Development',
      description: 'Custom WordPress sites with enterprise-level functionality',
      icon: Code,
      features: ['Custom Themes', 'Plugin Development', 'Security Hardening', 'Performance Optimization']
    },
    {
      title: 'Website Redesign',
      description: 'Transform your outdated website into a modern conversion machine',
      icon: Zap,
      features: ['Modern UI/UX', 'Speed Optimization', 'Mobile Responsive', 'Brand Refresh']
    }
  ];

  const appServices = [
    {
      title: 'iOS App Development',
      description: 'Native iPhone and iPad apps that Apple users love',
      icon: Smartphone,
      features: ['Swift & SwiftUI', 'App Store Optimization', 'Push Notifications', 'In-App Purchases']
    },
    {
      title: 'Android App Development',
      description: 'Powerful Android apps for the world\'s largest mobile platform',
      icon: Code,
      features: ['Kotlin & Java', 'Google Play Optimization', 'Material Design', 'Firebase Integration']
    },
    {
      title: 'Cross-Platform Apps',
      description: 'One codebase, multiple platforms - save time and money',
      icon: Zap,
      features: ['React Native', 'Flutter Support', 'Faster Development', 'Cost Effective']
    },
    {
      title: 'App Consulting',
      description: 'Strategic guidance from idea to launch and beyond',
      icon: Users,
      features: ['Market Research', 'Technical Planning', 'Monetization Strategy', 'Launch Support']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Houston Energy Solutions',
      text: 'Cardinal transformed our outdated website into a lead-generating machine. We saw a 300% increase in qualified leads within 3 months!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'MedTech Houston',
      text: 'Their app development team built our healthcare app on time and under budget. The quality exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Houston Real Estate Group',
      text: 'Best web design company in Houston, hands down. Professional, responsive, and delivered exactly what we needed.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'What makes you the best web design company in Houston?',
      answer: 'We combine cutting-edge design, proven SEO strategies, and custom development to create websites that don\'t just look amazing—they convert visitors into customers. With 127+ five-star reviews and a portfolio of successful Houston businesses, we deliver measurable results.'
    },
    {
      question: 'How much does web design cost in Houston?',
      answer: 'Custom web design projects in Houston typically range from $5,000 to $50,000+ depending on complexity, features, and business needs. We offer flexible packages and financing options. Contact us for a free custom quote.'
    },
    {
      question: 'Do you develop mobile apps for iOS and Android?',
      answer: 'Yes! We develop native and cross-platform mobile apps for both iOS and Android. Our Houston app development team specializes in React Native, Swift, and Kotlin to create high-performance mobile applications.'
    },
    {
      question: 'How long does it take to build a website or app?',
      answer: 'Most websites take 4-8 weeks from start to launch. Mobile apps typically take 8-16 weeks depending on complexity. We provide detailed timelines during our free consultation and keep you updated throughout the process.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Absolutely! We offer comprehensive maintenance packages including hosting, security updates, content updates, performance monitoring, and technical support. We\'re here to ensure your digital presence continues to thrive.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Design Houston | App Development Houston | #1 Digital Agency TX</title>
        <meta name="description" content="Top-rated web design company & app development agency in Houston, TX. Custom websites, mobile apps & digital solutions that drive results. 127+ 5-star reviews. Free consultation!" />
        <meta name="keywords" content="web design houston, web design company houston, app development houston, app development companies in houston, houston web designer, houston app developer, custom website design houston, mobile app development houston" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Web Design Houston | App Development Houston | Cardinal Digital" />
        <meta property="og:description" content="Houston's #1 web design company & app development agency. Custom websites & mobile apps that convert. Free consultation!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cardinaldigitalmarketing.com/houston-digital-services" />
        <meta property="og:image" content="https://cardinaldigitalmarketing.com/thumbnail.png" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Design Houston | App Development Houston" />
        <meta name="twitter:description" content="Houston's premier web design & app development agency. 127+ 5-star reviews." />
        <meta name="twitter:image" content="https://cardinaldigitalmarketing.com/thumbnail.png" />
        
        {/* Local Business */}
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Houston" />
        <meta name="geo.position" content="29.7604;-95.3698" />
        <meta name="ICBM" content="29.7604, -95.3698" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://cardinaldigitalmarketing.com/houston-digital-services" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🏆 Houston's #1 Rated Digital Agency
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Web Design & App Development in <span className="text-accent">Houston</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transform your business with stunning websites and powerful mobile apps. 
              <strong className="block mt-2">127+ Five-Star Reviews | 500+ Projects Launched</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                View Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <Icon className="h-8 w-8 text-accent mb-2 mx-auto" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Toggle */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Houston's Premier Digital Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you need a stunning website or a powerful mobile app, we've got you covered
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex justify-center gap-4 mb-12">
              <Button
                size="lg"
                variant={activeTab === 'web' ? 'default' : 'outline'}
                onClick={() => setActiveTab('web')}
                className="px-8"
              >
                <Code className="mr-2 h-5 w-5" />
                Web Design Services
              </Button>
              <Button
                size="lg"
                variant={activeTab === 'app' ? 'default' : 'outline'}
                onClick={() => setActiveTab('app')}
                className="px-8"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                App Development
              </Button>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {(activeTab === 'web' ? webServices : appServices).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                          <CardDescription className="text-base">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Why Houston Businesses Choose Cardinal
              </h2>
              <p className="text-xl text-muted-foreground">
                We're not just another web design company—we're your digital growth partner
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our clients see an average 250% increase in leads within the first 6 months
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Local Houston Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand Houston's market and serve businesses across all industries
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Award-Winning Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    127+ five-star reviews and counting. We don't stop until you're thrilled
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                What Houston Businesses Say About Us
              </h2>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-xl font-semibold">5.0 Average Rating</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our services
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 500+ Houston businesses that trust Cardinal Digital for their web design and app development needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (XXX) XXX-XXXX
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 w-full">
                  <Mail className="mr-2 h-5 w-5" />
                  Request Free Quote
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-6 w-6" />
                <span>Serving All of Houston, TX</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-6 w-6" />
                <span>Mon-Fri: 9AM - 6PM CST</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-6 w-6" />
                <span>info@cardinaldigital.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HoustonDigitalServices;
