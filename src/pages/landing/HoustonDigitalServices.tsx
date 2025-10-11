import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Clock, Award, Users, Zap, Shield, TrendingUp, Smartphone, Code, Palette, Rocket, BarChart, ExternalLink } from 'lucide-react';
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
    { number: '4.9/5', label: '5-Star Rating', icon: Star },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '2-4wks', label: 'Avg. Delivery Time', icon: TrendingUp },
  ];

  const webServices = [
    {
      title: 'Custom Web Design',
      description: 'Stunning, conversion-focused websites built specifically for your Houston business',
      icon: Palette,
      features: ['Mobile-First Design', 'SEO Optimized', 'Lightning Fast', 'Conversion Focused'],
      startingPrice: '$2,500'
    },
    {
      title: 'E-Commerce Solutions', 
      description: 'Powerful online stores that turn browsers into buyers',
      icon: BarChart,
      features: ['Shopify & Custom', 'Payment Integration', 'Inventory Management', 'Marketing Tools'],
      startingPrice: '$5,000'
    },
    {
      title: 'CMS Integration',
      description: 'Content management system setup and customization for easy updates',
      icon: Code,
      features: ['WordPress', 'Custom CMS', 'Easy Updates', 'Training Included'],
      startingPrice: '$1,800'
    },
    {
      title: 'Website Redesign',
      description: 'Transform your outdated website into a modern conversion machine',
      icon: Zap,
      features: ['Modern UI/UX', 'Speed Optimization', 'Mobile Responsive', 'Brand Refresh'],
      startingPrice: '$3,000'
    }
  ];

  const appServices = [
    {
      title: 'iOS App Development',
      description: 'Native iPhone and iPad apps that Apple users love',
      icon: Smartphone,
      features: ['Swift & SwiftUI', 'App Store Optimization', 'Push Notifications', 'In-App Purchases'],
      startingPrice: '$8,000'
    },
    {
      title: 'Android App Development',
      description: 'Powerful Android apps for the world\'s largest mobile platform',
      icon: Code,
      features: ['Kotlin & Java', 'Google Play Optimization', 'Material Design', 'Firebase Integration'],
      startingPrice: '$8,000'
    },
    {
      title: 'Cross-Platform Apps',
      description: 'One codebase, multiple platforms - save time and money',
      icon: Zap,
      features: ['React Native', 'Flutter Support', 'Faster Development', 'Cost Effective'],
      startingPrice: '$10,000'
    },
    {
      title: 'App Maintenance',
      description: 'Ongoing support and updates for your mobile applications',
      icon: Users,
      features: ['Bug Fixes', 'Feature Updates', 'Performance Monitoring', '24/7 Support'],
      startingPrice: '$500/mo'
    }
  ];

  const testimonials = [
    {
      name: 'Vargas Tax',
      company: 'Tax Preparation Services',
      text: 'Cardinal transformed our online presence with customized quick action widgets and powerful SEO. We now serve clients across all 50 states!',
      rating: 5,
      metrics: '1000+ clients served'
    },
    {
      name: 'ClearLedger Solutions',
      company: 'Bookkeeping Services',
      text: 'Your trusted financial partner - Cardinal built us a website that perfectly represents our accurate, reliable, and transparent services.',
      rating: 5,
      metrics: '99.9% accuracy rating'
    },
    {
      name: 'BluTouch Pools & Spas',
      company: 'Pool Services',
      text: 'Over 10 years in the business and Cardinal gave us the digital presence we deserved. Their service showcase and portfolio display drove real results.',
      rating: 5,
      metrics: '200+ pools serviced'
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
      <section className="relative min-h-[80vh] flex items-center justify-center bg-white overflow-hidden pt-24 pb-16">
        {/* Animated network background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#059669" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-50 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-green-100 rounded-full opacity-30 animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide">
              <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-4"></div>
              <MapPin className="w-4 h-4 mr-2" />
              Houston's #1 Rated Digital Agency
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
              Web Design & App Development in <span className="text-green-600 font-normal">Houston, TX</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Transform your business with stunning websites and powerful mobile apps
              <strong className="block mt-2 font-normal">Serving Houston • 500+ Projects Launched • 2-4 Week Delivery</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg px-8 py-6 w-full sm:w-auto rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-lg px-8 py-6 w-full sm:w-auto rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  View Our Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group cursor-pointer text-center">
                    <Icon className="h-8 w-8 text-green-600 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-light text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">{stat.number}</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Toggle */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-4"></div>
                Our Services
                <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 ml-4"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
                Houston's Premier Digital Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Whether you need a stunning website or a powerful mobile app, we've got you covered
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex justify-center gap-4 mb-12">
              <Button
                size="lg"
                onClick={() => setActiveTab('web')}
                className={`px-8 py-6 text-lg font-semibold rounded-xl transition-all shadow-xl hover:shadow-2xl ${
                  activeTab === 'web' 
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white scale-105' 
                    : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-green-600 hover:text-green-600'
                }`}
              >
                <Code className="mr-2 h-5 w-5" />
                Web Design Services
              </Button>
              <Button
                size="lg"
                onClick={() => setActiveTab('app')}
                className={`px-8 py-6 text-lg font-semibold rounded-xl transition-all shadow-xl hover:shadow-2xl ${
                  activeTab === 'app' 
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white scale-105' 
                    : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-green-600 hover:text-green-600'
                }`}
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
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-green-600 bg-white">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <Icon className="h-8 w-8 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-2xl font-light text-gray-900">{service.title}</CardTitle>
                            <Badge className="bg-green-600 text-white">
                              {service.startingPrice}
                            </Badge>
                          </div>
                          <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact?service=web-design" className="inline-block w-full">
                        <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-4"></div>
                Why Choose Us
                <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 ml-4"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
                Why Houston Businesses Choose Cardinal
              </h2>
              <p className="text-xl text-gray-600 font-light">
                We're not just another web design company—we're your digital growth partner
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-2 border-gray-200 hover:border-green-600 transition-all duration-300 bg-white">
                <CardHeader>
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="font-light text-gray-900">Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Average 4.9/5 star rating from real Houston businesses. Our clients see measurable improvements in traffic, leads, and revenue.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-gray-200 hover:border-green-600 transition-all duration-300 bg-white">
                <CardHeader>
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="font-light text-gray-900">Local Houston Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Based in Houston with offices at 2100 West Loop S Fwy. We serve businesses across Houston and beyond.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-gray-200 hover:border-green-600 transition-all duration-300 bg-white">
                <CardHeader>
                  <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="font-light text-gray-900">Award-Winning Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We deliver projects in 2-4 weeks on average, with transparent pricing starting at just $2,500. No hidden fees.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-4"></div>
                Testimonials
                <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 ml-4"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
                What Houston Businesses Say About Us
              </h2>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-green-600 text-green-600" />
                ))}
                <span className="ml-2 text-xl font-light text-gray-900">5.0 Average Rating</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative border-2 border-gray-200 hover:border-green-600 transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-green-600 text-green-600" />
                      ))}
                    </div>
                    <CardTitle className="text-lg font-normal text-gray-900">{testimonial.name}</CardTitle>
                    <CardDescription className="text-gray-600">{testimonial.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic mb-2">"{testimonial.text}"</p>
                    <p className="text-sm text-green-600 font-medium">{testimonial.metrics}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center text-sm font-medium text-green-600 uppercase tracking-wide mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 mr-4"></div>
                FAQ
                <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600 ml-4"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 font-light">
                Everything you need to know about our services
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-green-600 transition-all duration-300 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-normal text-gray-900">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Join 500+ Houston businesses that trust Cardinal Digital for their web design and app development needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2819017016">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg px-8 py-6 w-full sm:w-auto rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (281) 901-7016
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-lg px-8 py-6 w-full sm:w-auto rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Mail className="mr-2 h-5 w-5" />
                  Request Free Quote
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-6 w-6 text-green-600" />
                <span>2100 West Loop S, Houston, TX</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-6 w-6 text-green-600" />
                <span>Mon-Fri: 9AM - 6PM CST</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-6 w-6" />
                <span>hello@cardinalhtx.com</span>
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
