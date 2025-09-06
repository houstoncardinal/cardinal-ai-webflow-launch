import { useState } from "react";
import { 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  Globe, 
  Clock, 
  BarChart3,
  Target,
  TrendingUp,
  Eye,
  Shield,
  Zap,
  ArrowRight,
  Download,
  Mail,
  Loader2,
  Sparkles,
  FileText,
  Smartphone,
  Link,
  Image,
  Code,
  Settings,
  Activity,
  Gauge,
  Users,
  Lock,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { toast } from "sonner";

const SEOAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [result, setResult] = useState(null);

  const analysisSteps = [
    'Initializing analysis...',
    'Fetching website data...',
    'Analyzing page structure...',
    'Checking technical SEO...',
    'Evaluating performance...',
    'Scanning accessibility...',
    'Analyzing content quality...',
    'Checking mobile optimization...',
    'Generating recommendations...',
    'Creating detailed report...',
    'Finalizing analysis...'
  ];

  const simulateAnalysis = async () => {
    if (!url) {
      toast.error("Please enter a website URL");
      return;
    }

    setIsAnalyzing(true);
    setAnalysisProgress(0);
    
    for (let i = 0; i < analysisSteps.length; i++) {
      setCurrentStep(analysisSteps[i]);
      await new Promise(resolve => setTimeout(resolve, 600));
      setAnalysisProgress(((i + 1) / analysisSteps.length) * 100);
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Advanced mock result data
    const mockResult = {
      url: url,
      domain: url.replace(/^https?:\/\//, '').replace(/\/$/, ''),
      analysisDate: new Date().toISOString(),
      overallScore: 78,
      performanceScore: 85,
      accessibilityScore: 72,
      bestPracticesScore: 90,
      seoScore: 65,
      mobileScore: 88,
      reportId: `SEO-${Date.now()}`,
      
      // Performance Metrics
      performance: {
        pageLoadTime: 3.2,
        firstContentfulPaint: 2.1,
        largestContentfulPaint: 4.8,
        cumulativeLayoutShift: 0.15,
        firstInputDelay: 120,
        totalBlockingTime: 180,
        speedIndex: 3.5,
        timeToInteractive: 4.2
      },
      
      // SEO Analysis
      seo: {
        titleTag: { present: true, length: 58, optimal: true },
        metaDescription: { present: true, length: 145, optimal: true },
        headings: { h1: 1, h2: 4, h3: 8, structure: 'good' },
        images: { total: 12, optimized: 8, missingAlt: 4 },
        internalLinks: 15,
        externalLinks: 3,
        canonicalUrl: true,
        robotsTxt: true,
        sitemap: true
      },
      
      // Technical Issues
      issues: [
        {
          type: 'error',
          category: 'Performance',
          title: 'Large Image Files',
          description: 'Images are not optimized and are slowing down page load times.',
          impact: 'high',
          fixable: true,
          affectedElements: ['hero-image.jpg (2.3MB)', 'gallery-1.png (1.8MB)'],
          priority: 1
        },
        {
          type: 'warning',
          category: 'SEO',
          title: 'Missing Alt Text',
          description: '4 images are missing alt text, affecting accessibility and SEO.',
          impact: 'medium',
          fixable: true,
          affectedElements: ['product-1.jpg', 'product-2.jpg', 'team-photo.jpg', 'office.jpg'],
          priority: 2
        },
        {
          type: 'warning',
          category: 'Performance',
          title: 'Unused CSS',
          description: '45% of CSS is unused, increasing page load time.',
          impact: 'medium',
          fixable: true,
          affectedElements: ['styles.css (unused: 12KB)'],
          priority: 3
        },
        {
          type: 'error',
          category: 'SEO',
          title: 'Missing Schema Markup',
          description: 'No structured data found for better search engine understanding.',
          impact: 'high',
          fixable: true,
          affectedElements: ['All pages'],
          priority: 4
        }
      ],
      
      // Recommendations
      recommendations: [
        {
          priority: 'high',
          category: 'Performance',
          title: 'Optimize Images',
          description: 'Compress and optimize images to improve page load speed.',
          action: 'Use tools like TinyPNG, ImageOptim, or WebP format. Target file sizes under 500KB.',
          impact: 'Improve page load time by 2-3 seconds',
          effort: 'Medium',
          estimatedImprovement: '25-30% faster loading'
        },
        {
          priority: 'high',
          category: 'SEO',
          title: 'Add Schema Markup',
          description: 'Implement structured data for better search engine understanding.',
          action: 'Add JSON-LD schema for Organization, WebSite, and WebPage types.',
          impact: 'Increase rich snippets appearance by 40%',
          effort: 'Low',
          estimatedImprovement: 'Better search visibility'
        },
        {
          priority: 'medium',
          category: 'SEO',
          title: 'Add Alt Text to Images',
          description: 'Provide descriptive alt text for all images.',
          action: 'Write unique, descriptive alt text for each image (125 characters max).',
          impact: 'Improve accessibility and SEO ranking',
          effort: 'Low',
          estimatedImprovement: 'Better accessibility score'
        },
        {
          priority: 'medium',
          category: 'Performance',
          title: 'Remove Unused CSS',
          description: 'Eliminate unused CSS to reduce file size.',
          action: 'Use tools like PurgeCSS or manually remove unused styles.',
          impact: 'Reduce CSS file size by 45%',
          effort: 'Medium',
          estimatedImprovement: 'Faster page rendering'
        },
        {
          priority: 'low',
          category: 'SEO',
          title: 'Improve Internal Linking',
          description: 'Add more internal links to improve site structure.',
          action: 'Add contextual internal links throughout content.',
          impact: 'Better page authority distribution',
          effort: 'Low',
          estimatedImprovement: 'Improved site architecture'
        }
      ],
      
      // Content Analysis
      content: {
        wordCount: 1250,
        readabilityScore: 78,
        keywordDensity: 2.3,
        contentQuality: 'good',
        duplicateContent: false,
        thinContent: false
      },
      
      // Mobile Analysis
      mobile: {
        responsive: true,
        viewport: true,
        touchFriendly: true,
        mobileSpeed: 88,
        mobileUsability: 'good'
      },
      
      // Security Analysis
      security: {
        https: true,
        sslGrade: 'A',
        securityHeaders: ['HSTS', 'CSP', 'X-Frame-Options'],
        vulnerabilities: 0
      }
    };
    
    setResult(mockResult);
    setIsAnalyzing(false);
    
    toast.success("Analysis Complete! 🎉", {
      description: "Your comprehensive SEO analysis is ready.",
    });
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <SEO 
        title="🔍 Free SEO Analyzer Tool | Website Analysis & Optimization | Cardinal Consulting"
        description="🚀 Analyze your website's SEO performance with our free, comprehensive SEO analyzer tool. Get detailed insights, recommendations, and actionable strategies to improve your search rankings."
        keywords="SEO analyzer, website analysis, SEO audit, free SEO tool, website optimization, search engine optimization"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center text-sm font-medium text-green-100 uppercase tracking-wide mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Free SEO Analysis Tool
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Analyze Your Website's
              <span className="block text-green-200">SEO Performance</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Get comprehensive SEO insights, performance metrics, and actionable recommendations to boost your search rankings and drive more organic traffic.
            </p>
          </div>
        </div>
      </section>

      {/* Streamlined Analysis Form - Full Width */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your SEO Analysis</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Enter your website URL and get a comprehensive SEO report in minutes
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-green-500 rounded-xl"
                  />
                </div>
              </div>
              <Button
                onClick={simulateAnalysis}
                disabled={!url || isAnalyzing}
                className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Analyze Website
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Loader2 className="w-8 h-8 text-green-600 animate-spin" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Analyzing Your Website</h3>
                  <p className="text-gray-600">{currentStep}</p>
                </div>
                
                <div className="space-y-4">
                  <Progress value={analysisProgress} className="h-3" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Progress</span>
                    <span>{Math.round(analysisProgress)}%</span>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Website Analysis</h4>
                    <p className="text-sm text-gray-600">Scanning structure and content</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Performance Check</h4>
                    <p className="text-sm text-gray-600">Measuring speed and optimization</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">SEO Evaluation</h4>
                    <p className="text-sm text-gray-600">Checking search optimization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Advanced Results Section */}
      {result && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SEO Analysis Complete!</h2>
              <p className="text-gray-600 text-lg">Comprehensive analysis for <span className="font-semibold text-green-600">{result.domain}</span></p>
            </div>

            {/* Overall Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center p-6 border-2 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className={`w-20 h-20 rounded-full ${getScoreBgColor(result.overallScore)} flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-3xl font-bold ${getScoreColor(result.overallScore)}`}>
                      {result.overallScore}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Overall Score</h3>
                  <p className="text-sm text-gray-600">Website Performance</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 border-2 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className={`w-20 h-20 rounded-full ${getScoreBgColor(result.performanceScore)} flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-3xl font-bold ${getScoreColor(result.performanceScore)}`}>
                      {result.performanceScore}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
                  <p className="text-sm text-gray-600">Speed & Optimization</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 border-2 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className={`w-20 h-20 rounded-full ${getScoreBgColor(result.seoScore)} flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-3xl font-bold ${getScoreColor(result.seoScore)}`}>
                      {result.seoScore}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">SEO Score</h3>
                  <p className="text-sm text-gray-600">Search Optimization</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 border-2 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className={`w-20 h-20 rounded-full ${getScoreBgColor(result.accessibilityScore)} flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-3xl font-bold ${getScoreColor(result.accessibilityScore)}`}>
                      {result.accessibilityScore}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
                  <p className="text-sm text-gray-600">User Experience</p>
                </CardContent>
              </Card>
            </div>

            {/* Advanced Report Tabs */}
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="seo">SEO Analysis</TabsTrigger>
                <TabsTrigger value="issues">Issues</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                        Performance Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Page Load Time</span>
                        <span className="text-sm font-semibold">{result.performance.pageLoadTime}s</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">First Contentful Paint</span>
                        <span className="text-sm font-semibold">{result.performance.firstContentfulPaint}s</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Largest Contentful Paint</span>
                        <span className="text-sm font-semibold">{result.performance.largestContentfulPaint}s</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Cumulative Layout Shift</span>
                        <span className="text-sm font-semibold">{result.performance.cumulativeLayoutShift}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Target className="w-5 h-5 mr-2 text-green-600" />
                        SEO Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Title Tag</span>
                        <Badge className={result.seo.titleTag.optimal ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {result.seo.titleTag.optimal ? 'Optimal' : 'Needs Work'}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Meta Description</span>
                        <Badge className={result.seo.metaDescription.optimal ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {result.seo.metaDescription.optimal ? 'Optimal' : 'Needs Work'}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Images with Alt Text</span>
                        <span className="text-sm font-semibold">{result.seo.images.optimized}/{result.seo.images.total}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Internal Links</span>
                        <span className="text-sm font-semibold">{result.seo.internalLinks}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Performance Tab */}
              <TabsContent value="performance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Gauge className="w-5 h-5 mr-2 text-blue-600" />
                      Detailed Performance Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Core Web Vitals</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm font-medium">Largest Contentful Paint</span>
                            <span className="text-sm font-semibold">{result.performance.largestContentfulPaint}s</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm font-medium">First Input Delay</span>
                            <span className="text-sm font-semibold">{result.performance.firstInputDelay}ms</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm font-medium">Cumulative Layout Shift</span>
                            <span className="text-sm font-semibold">{result.performance.cumulativeLayoutShift}</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Loading Metrics</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm font-medium">Speed Index</span>
                            <span className="text-sm font-semibold">{result.performance.speedIndex}s</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm font-medium">Time to Interactive</span>
                            <span className="text-sm font-semibold">{result.performance.timeToInteractive}s</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm font-medium">Total Blocking Time</span>
                            <span className="text-sm font-semibold">{result.performance.totalBlockingTime}ms</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* SEO Analysis Tab */}
              <TabsContent value="seo" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-green-600" />
                        Content Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Word Count</span>
                        <span className="text-sm font-semibold">{result.content.wordCount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Readability Score</span>
                        <span className="text-sm font-semibold">{result.content.readabilityScore}/100</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Keyword Density</span>
                        <span className="text-sm font-semibold">{result.content.keywordDensity}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Content Quality</span>
                        <Badge className="bg-green-100 text-green-800">Good</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Smartphone className="w-5 h-5 mr-2 text-purple-600" />
                        Mobile Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Mobile Responsive</span>
                        <Badge className="bg-green-100 text-green-800">Yes</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Mobile Speed Score</span>
                        <span className="text-sm font-semibold">{result.mobile.mobileSpeed}/100</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Touch Friendly</span>
                        <Badge className="bg-green-100 text-green-800">Yes</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Mobile Usability</span>
                        <Badge className="bg-green-100 text-green-800">Good</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Issues Tab */}
              <TabsContent value="issues" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                      Issues Found ({result.issues.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {result.issues.map((issue, index) => (
                      <div key={index} className="border-l-4 border-red-200 pl-6 py-4 bg-red-50 rounded-r-lg">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-gray-900 text-lg">{issue.title}</h4>
                          <div className="flex gap-2">
                            <Badge className={getImpactColor(issue.impact)}>
                              {issue.impact} impact
                            </Badge>
                            <Badge variant="outline" className="text-gray-600">
                              Priority #{issue.priority}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{issue.description}</p>
                        <div className="space-y-2">
                          <h5 className="font-medium text-gray-900">Affected Elements:</h5>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {issue.affectedElements.map((element, idx) => (
                              <li key={idx}>{element}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Recommendations Tab */}
              <TabsContent value="recommendations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                      Actionable Recommendations ({result.recommendations.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {result.recommendations.map((rec, index) => (
                      <div key={index} className="border-l-4 border-green-200 pl-6 py-4 bg-green-50 rounded-r-lg">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-gray-900 text-lg">{rec.title}</h4>
                          <div className="flex gap-2">
                            <Badge className={getPriorityColor(rec.priority)}>
                              {rec.priority} priority
                            </Badge>
                            <Badge variant="outline" className="text-gray-600">
                              {rec.effort} effort
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{rec.description}</p>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-gray-900 mb-1">Action Required:</h5>
                            <p className="text-sm text-gray-600">{rec.action}</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-1">Expected Impact:</h5>
                            <p className="text-sm text-green-600 font-medium">{rec.impact}</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-1">Estimated Improvement:</h5>
                            <p className="text-sm text-blue-600 font-medium">{rec.estimatedImprovement}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default SEOAnalyzer; 