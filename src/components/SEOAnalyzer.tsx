
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  Search, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Globe, 
  Clock, 
  Image, 
  Link,
  FileText,
  Smartphone,
  TrendingUp,
  Eye,
  Shield,
  Zap
} from "lucide-react";

interface SEOResult {
  url: string;
  score: number;
  issues: SEOIssue[];
  recommendations: SEORecommendation[];
  metrics: SEOMetrics;
  technicalSEO: TechnicalSEO;
}

interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  category: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
}

interface SEORecommendation {
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  action: string;
}

interface SEOMetrics {
  pageLoadTime: number;
  mobileScore: number;
  accessibilityScore: number;
  seoScore: number;
}

interface TechnicalSEO {
  hasSSL: boolean;
  hasRobotsTxt: boolean;
  hasSitemap: boolean;
  metaTags: {
    title: boolean;
    description: boolean;
    keywords: boolean;
    viewport: boolean;
  };
  headings: {
    h1Count: number;
    h2Count: number;
    hasProperStructure: boolean;
  };
  images: {
    total: number;
    withoutAlt: number;
    oversized: number;
  };
}

const SEOAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<SEOResult | null>(null);
  const { toast } = useToast();

  const analyzeDomain = async () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    console.log('Starting SEO analysis for:', url);

    try {
      // Simulate analysis - in production, this would call real APIs
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Mock comprehensive SEO analysis results
      const mockResults: SEOResult = {
        url: url,
        score: Math.floor(Math.random() * 40) + 60, // 60-100 score
        issues: [
          {
            type: 'error',
            category: 'Meta Tags',
            title: 'Missing Meta Description',
            description: 'Your page is missing a meta description tag',
            impact: 'high'
          },
          {
            type: 'warning',
            category: 'Images',
            title: 'Images Without Alt Text',
            description: '12 images are missing alt text attributes',
            impact: 'medium'
          },
          {
            type: 'warning',
            category: 'Performance',
            title: 'Large Image Files',
            description: 'Several images are larger than recommended',
            impact: 'medium'
          },
          {
            type: 'info',
            category: 'Content',
            title: 'Content Length',
            description: 'Consider adding more content to improve SEO',
            impact: 'low'
          }
        ],
        recommendations: [
          {
            priority: 'high',
            title: 'Add Meta Description',
            description: 'Create a compelling 150-160 character meta description',
            action: 'Add <meta name="description" content="..."> to your <head> section'
          },
          {
            priority: 'high',
            title: 'Optimize Images',
            description: 'Add alt text to all images and compress large files',
            action: 'Use tools like TinyPNG for compression and add descriptive alt attributes'
          },
          {
            priority: 'medium',
            title: 'Improve Page Speed',
            description: 'Optimize loading time to under 3 seconds',
            action: 'Minify CSS/JS, optimize images, and consider using a CDN'
          },
          {
            priority: 'medium',
            title: 'Header Structure',
            description: 'Improve heading hierarchy for better content structure',
            action: 'Use only one H1 tag and maintain logical H2-H6 hierarchy'
          }
        ],
        metrics: {
          pageLoadTime: Math.random() * 3 + 1, // 1-4 seconds
          mobileScore: Math.floor(Math.random() * 30) + 70, // 70-100
          accessibilityScore: Math.floor(Math.random() * 25) + 75, // 75-100
          seoScore: Math.floor(Math.random() * 40) + 60 // 60-100
        },
        technicalSEO: {
          hasSSL: Math.random() > 0.2,
          hasRobotsTxt: Math.random() > 0.3,
          hasSitemap: Math.random() > 0.4,
          metaTags: {
            title: Math.random() > 0.1,
            description: Math.random() > 0.3,
            keywords: Math.random() > 0.5,
            viewport: Math.random() > 0.2
          },
          headings: {
            h1Count: Math.floor(Math.random() * 3) + 1,
            h2Count: Math.floor(Math.random() * 8) + 2,
            hasProperStructure: Math.random() > 0.3
          },
          images: {
            total: Math.floor(Math.random() * 20) + 5,
            withoutAlt: Math.floor(Math.random() * 8),
            oversized: Math.floor(Math.random() * 5)
          }
        }
      };

      setResults(mockResults);
      toast({
        title: "Analysis Complete",
        description: `SEO score: ${mockResults.score}/100`,
      });

    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis Failed",
        description: "Unable to analyze the website. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getIssueIcon = (type: SEOIssue['type']) => {
    switch (type) {
      case 'error': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'info': return <CheckCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
          SEO <span className="text-rose-600">Analyzer</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Get a comprehensive SEO audit of any website with actionable insights and recommendations.
        </p>
      </div>

      {/* URL Input */}
      <Card className="mb-6 sm:mb-8">
        <CardContent className="p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1">
              <Input
                type="url"
                placeholder="Enter website URL (e.g., https://example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="text-base sm:text-lg h-11 sm:h-12"
              />
            </div>
            <Button 
              onClick={analyzeDomain}
              disabled={isAnalyzing}
              className="bg-rose-600 hover:bg-rose-700 h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto"
            >
              {isAnalyzing ? (
                <>
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                  <span className="hidden sm:inline">Analyzing...</span>
                  <span className="sm:hidden">Analyzing</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Analyze
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {results && (
        <div className="space-y-6 sm:space-y-8">
          {/* Overview */}
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
                SEO Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className={`text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 ${getScoreColor(results.score)}`}>
                    {results.score}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Overall Score</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 ${getScoreColor(results.metrics.seoScore)}`}>
                    {results.metrics.seoScore}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">SEO Score</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 ${getScoreColor(results.metrics.mobileScore)}`}>
                    {results.metrics.mobileScore}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Mobile Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-gray-900">
                    {results.metrics.pageLoadTime.toFixed(1)}s
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Load Time</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Issues */}
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
                <span className="hidden sm:inline">Issues Found ({results.issues.length})</span>
                <span className="sm:hidden">Issues ({results.issues.length})</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 sm:space-y-4">
                {results.issues.map((issue, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 sm:p-4 border rounded-lg">
                    {getIssueIcon(issue.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                        <h4 className="font-semibold text-sm sm:text-base truncate">{issue.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 w-fit ${
                          issue.impact === 'high' ? 'bg-red-100 text-red-800' :
                          issue.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {issue.impact} impact
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{issue.description}</p>
                      <span className="text-xs text-gray-500">{issue.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 sm:space-y-4">
                {results.recommendations.map((rec, index) => (
                  <div key={index} className="p-3 sm:p-4 border rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                      <h4 className="font-semibold text-sm sm:text-base">{rec.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full w-fit ${
                        rec.priority === 'high' ? 'bg-red-100 text-red-800' :
                        rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {rec.priority} priority
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{rec.description}</p>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <strong>Action:</strong> <span className="break-words">{rec.action}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical SEO */}
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
                Technical SEO
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-sm sm:text-base">Security & Structure</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      {results.technicalSEO.hasSSL ? 
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> : 
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      }
                      <span className="truncate">SSL Certificate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {results.technicalSEO.hasRobotsTxt ? 
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> : 
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      }
                      <span className="truncate">Robots.txt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {results.technicalSEO.hasSitemap ? 
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> : 
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      }
                      <span className="truncate">XML Sitemap</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm sm:text-base">Meta Tags</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      {results.technicalSEO.metaTags.title ? 
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> : 
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      }
                      <span className="truncate">Title Tag</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {results.technicalSEO.metaTags.description ? 
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> : 
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      }
                      <span className="truncate">Meta Description</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {results.technicalSEO.metaTags.viewport ? 
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> : 
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      }
                      <span className="truncate">Viewport Tag</span>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2 lg:col-span-1">
                  <h4 className="font-semibold mb-3 text-sm sm:text-base">Content Structure</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>H1 Tags:</span>
                      <span className="font-medium">{results.technicalSEO.headings.h1Count}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>H2 Tags:</span>
                      <span className="font-medium">{results.technicalSEO.headings.h2Count}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Images Total:</span>
                      <span className="font-medium">{results.technicalSEO.images.total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Missing Alt:</span>
                      <span className="font-medium text-red-600">{results.technicalSEO.images.withoutAlt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SEOAnalyzer;
