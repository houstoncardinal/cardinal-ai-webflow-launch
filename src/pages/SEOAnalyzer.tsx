import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, BarChart3, Target, TrendingUp, Settings, Link, FileText,
  Download, CheckCircle, AlertTriangle, Clock, Globe, Brain, Zap, Eye,
  Smartphone, Loader2, Sparkles, ArrowRight, ExternalLink, Hash, Users,
  Lightbulb, Shield, Gauge, Bot, Cpu, Rocket, Star, Award, TrendingDown,
  Activity, BarChart, PieChart, LineChart, BookOpen, Layers, Wifi, Lock,
  Monitor, MousePointer, Headphones, MessageSquare, Database, Network,
  ChevronDown, ChevronUp, Plus, Minus, AlertCircle, Info, CheckSquare, Calendar
} from "lucide-react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { analyzeWebsiteWithAI, analyzeAEOWithAI, generateSEOReportWithAI, AIAnalysisResult, AEOAnalysisResult } from "@/lib/ai-seo-analysis";
import { toast } from "sonner";

const SEOAnalyzer = () => {
  const [activeTool, setActiveTool] = useState('dashboard');
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AIAnalysisResult | null>(null);
  const [aeoResult, setAeoResult] = useState<AEOAnalysisResult | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const tools = [
    { id: 'dashboard', name: 'Revolutionary SEO', icon: Brain, description: 'Expert-Level Analysis', color: 'bg-gradient-to-r from-green-600 to-emerald-600' },
    { id: 'aeo-tool', name: 'AEO Optimizer', icon: Bot, description: 'AI Experience Optimization', color: 'bg-gradient-to-r from-purple-600 to-pink-600' },
    { id: 'keyword-research', name: 'Advanced Keywords', icon: Search, description: 'Semantic & Long-tail', color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { id: 'competitor-analysis', name: 'Market Intelligence', icon: Target, description: 'Competitive Analysis', color: 'bg-gradient-to-r from-emerald-500 to-green-500' },
    { id: 'content-optimizer', name: 'Content Revolution', icon: FileText, description: 'AI-Powered Content', color: 'bg-gradient-to-r from-green-700 to-emerald-700' },
    { id: 'technical-audit', name: 'Technical Mastery', icon: Settings, description: 'Advanced Technical SEO', color: 'bg-gradient-to-r from-emerald-600 to-green-600' },
    { id: 'performance', name: 'Performance Pro', icon: Zap, description: 'Core Web Vitals', color: 'bg-gradient-to-r from-green-600 to-emerald-500' }
  ];

  const handleAIAnalysis = async () => {
    if (!url) {
      toast.error("Please enter a website URL");
      return;
    }

    setIsAnalyzing(true);
    setProgress(0);
    setAnalysisResult(null);
    setAeoResult(null);
    setError(null);

    try {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + Math.random() * 15;
        });
      }, 500);

      console.log('Starting analysis...');
      const result = await analyzeWebsiteWithAI(url);
      console.log('Analysis completed:', result);
      
      clearInterval(progressInterval);
      setProgress(100);
      setAnalysisResult(result);
      
      toast.success("Revolutionary SEO analysis completed!");
    } catch (error) {
      console.error('AI Analysis Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
      toast.error(`AI analysis failed: ${errorMessage}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleAEOAnalysis = async () => {
    if (!url) {
      toast.error("Please enter a website URL");
      return;
    }

    setIsAnalyzing(true);
    setProgress(0);
    setAeoResult(null);
    setError(null);

    try {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + Math.random() * 15;
        });
      }, 500);

      console.log('Starting AEO analysis...');
      const result = await analyzeAEOWithAI(url);
      console.log('AEO Analysis completed:', result);
      
      clearInterval(progressInterval);
      setProgress(100);
      setAeoResult(result);
      
      toast.success("AEO analysis completed!");
    } catch (error) {
      console.error('AEO Analysis Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
      toast.error(`AEO analysis failed: ${errorMessage}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const downloadReport = async () => {
    if (!analysisResult) return;
    
    try {
      const report = await generateSEOReportWithAI(url, analysisResult);
      
      const blob = new Blob([report], { type: 'text/markdown' });
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `revolutionary-seo-analysis-${new Date().toISOString().split('T')[0]}.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);
      
      toast.success("Report downloaded successfully!");
    } catch (error) {
      toast.error("Failed to generate report");
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-600';
    if (score >= 90) return 'text-green-500';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 95) return 'default';
    if (score >= 90) return 'secondary';
    if (score >= 80) return 'outline';
    if (score >= 70) return 'outline';
    if (score >= 60) return 'outline';
    return 'destructive';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 95) return 'Industry-Leading';
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Very Good';
    if (score >= 70) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Needs Attention';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort.toLowerCase()) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-50">
      <SEO 
        title="🚀 Revolutionary AI-Powered SEO Analysis | Expert-Level SEO Insights | Cardinal Consulting"
        description="🔥 Advanced AI-powered SEO analysis with revolutionary insights, expert-level recommendations, and AEO optimization. Powered by world-class SEO expertise and cutting-edge AI technology."
        keywords="revolutionary SEO analysis, expert SEO, AI-powered SEO, AEO optimization, advanced SEO tools, world-class SEO insights, cutting-edge SEO technology"
        url="/seo-analyzer"
      />
      
      <Navigation />
      
      <div className="flex h-full pt-24">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center mb-2">
              <Brain className="w-6 h-6 text-green-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Revolutionary SEO</h2>
            </div>
            <p className="text-sm text-gray-600">Expert-Level AI Analysis</p>
          </div>
          
          <nav className="p-4 space-y-2">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                  activeTool === tool.id
                    ? 'bg-green-50 text-green-600 border border-green-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg ${tool.color} flex items-center justify-center mr-3`}>
                  <tool.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium">{tool.name}</div>
                  <div className="text-xs text-gray-500">{tool.description}</div>
                </div>
              </button>
            ))}
          </nav>

          <div className="p-4">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <Sparkles className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-900">AI Status</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-600">Expert AI Active</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <div className="bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Brain className="w-6 h-6 text-green-600 mr-2" />
                  {tools.find(tool => tool.id === activeTool)?.name || 'Revolutionary SEO'}
                </h1>
                <p className="text-gray-600">
                  {tools.find(tool => tool.id === activeTool)?.description || 'Expert-Level Analysis'}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Expert AI Live</span>
                </div>
                {analysisResult && (
                  <Button onClick={downloadReport} variant="outline" size="sm" className="border-green-200 text-green-600 hover:bg-green-50">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="h-full overflow-y-auto p-8 pt-16">
            {/* AI Analysis Input */}
            <div className="max-w-4xl mx-auto mb-8">
              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-gray-900">
                    <Brain className="w-6 h-6 text-green-600 mr-3" />
                    Revolutionary SEO Analysis
                  </CardTitle>
                  <p className="text-gray-600">Enter a website URL for expert-level AI analysis</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Enter website URL (e.g., https://example.com)"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="h-12 text-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleAIAnalysis}
                        disabled={isAnalyzing}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 h-12 px-6 text-lg font-semibold"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <Brain className="w-5 h-5 mr-2" />
                            SEO Analysis
                          </>
                        )}
                      </Button>
                      <Button 
                        onClick={handleAEOAnalysis}
                        disabled={isAnalyzing}
                        variant="outline"
                        className="border-purple-200 text-purple-600 hover:bg-purple-50 h-12 px-6 text-lg font-semibold"
                      >
                        <Bot className="w-5 h-5 mr-2" />
                        AEO Analysis
                      </Button>
                    </div>
                  </div>
                  
                  {isAnalyzing && (
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Expert AI Analysis Progress</span>
                        <span className="text-gray-900 font-medium">{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                      <p className="text-sm text-gray-500 mt-2">
                        Expert AI is conducting revolutionary analysis... This may take a few moments.
                      </p>
                    </div>
                  )}

                  {error && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center">
                        <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                        <span className="text-red-800 font-medium">Analysis Error</span>
                      </div>
                      <p className="text-red-700 mt-2">{error}</p>
                      <Button 
                        onClick={() => setError(null)}
                        variant="outline"
                        size="sm"
                        className="mt-2 border-red-200 text-red-600 hover:bg-red-50"
                      >
                        Dismiss
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Analysis Results */}
            {analysisResult && (
              <div className="max-w-6xl mx-auto">
                <Tabs value={activeTool} onValueChange={setActiveTool} className="w-full">
                  <TabsList className="grid w-full grid-cols-7 bg-white border border-gray-200">
                    <TabsTrigger value="dashboard" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600">
                      <Brain className="w-4 h-4 mr-2" />
                      Expert Overview
                    </TabsTrigger>
                    <TabsTrigger value="aeo-tool" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-600">
                      <Bot className="w-4 h-4 mr-2" />
                      AEO Optimizer
                    </TabsTrigger>
                    <TabsTrigger value="keyword-research" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600">
                      <Search className="w-4 h-4 mr-2" />
                      Keywords
                    </TabsTrigger>
                    <TabsTrigger value="competitor-analysis" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600">
                      <Target className="w-4 h-4 mr-2" />
                      Market Intel
                    </TabsTrigger>
                    <TabsTrigger value="content-optimizer" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600">
                      <FileText className="w-4 h-4 mr-2" />
                      Content AI
                    </TabsTrigger>
                    <TabsTrigger value="technical-audit" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600">
                      <Settings className="w-4 h-4 mr-2" />
                      Technical Pro
                    </TabsTrigger>
                    <TabsTrigger value="performance" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600">
                      <Zap className="w-4 h-4 mr-2" />
                      Performance
                    </TabsTrigger>
                  </TabsList>

                  {/* Revolutionary SEO Overview Tab */}
                  <TabsContent value="dashboard" className="mt-6">
                    <div className="space-y-6">
                      {/* Expert-Level Scores */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="bg-white border border-gray-200 shadow-lg">
                          <CardHeader>
                            <CardTitle className="text-green-600 flex items-center">
                              <Award className="w-5 h-5 mr-2" />
                              Overall Score
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className={`text-3xl font-bold mb-2 ${getScoreColor(analysisResult.overallScore)}`}>
                              {analysisResult.overallScore}
                            </div>
                            <Badge variant={getScoreBadgeVariant(analysisResult.overallScore)} className="mb-2">
                              {getScoreLabel(analysisResult.overallScore)}
                            </Badge>
                            <Progress value={analysisResult.overallScore} className="h-2" />
                          </CardContent>
                        </Card>

                        <Card className="bg-white border border-gray-200 shadow-lg">
                          <CardHeader>
                            <CardTitle className="text-green-600 flex items-center">
                              <Gauge className="w-5 h-5 mr-2" />
                              Performance
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className={`text-3xl font-bold mb-2 ${getScoreColor(analysisResult.performanceScore)}`}>
                              {analysisResult.performanceScore}
                            </div>
                            <Badge variant={getScoreBadgeVariant(analysisResult.performanceScore)} className="mb-2">
                              {getScoreLabel(analysisResult.performanceScore)}
                            </Badge>
                            <Progress value={analysisResult.performanceScore} className="h-2" />
                          </CardContent>
                        </Card>

                        <Card className="bg-white border border-gray-200 shadow-lg">
                          <CardHeader>
                            <CardTitle className="text-green-600 flex items-center">
                              <Target className="w-5 h-5 mr-2" />
                              SEO Score
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className={`text-3xl font-bold mb-2 ${getScoreColor(analysisResult.seoScore)}`}>
                              {analysisResult.seoScore}
                            </div>
                            <Badge variant={getScoreBadgeVariant(analysisResult.seoScore)} className="mb-2">
                              {getScoreLabel(analysisResult.seoScore)}
                            </Badge>
                            <Progress value={analysisResult.seoScore} className="h-2" />
                          </CardContent>
                        </Card>

                        <Card className="bg-white border border-gray-200 shadow-lg">
                          <CardHeader>
                            <CardTitle className="text-green-600 flex items-center">
                              <Eye className="w-5 h-5 mr-2" />
                              Accessibility
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className={`text-3xl font-bold mb-2 ${getScoreColor(analysisResult.accessibilityScore)}`}>
                              {analysisResult.accessibilityScore}
                            </div>
                            <Badge variant={getScoreBadgeVariant(analysisResult.accessibilityScore)} className="mb-2">
                              {getScoreLabel(analysisResult.accessibilityScore)}
                            </Badge>
                            <Progress value={analysisResult.accessibilityScore} className="h-2" />
                          </CardContent>
                        </Card>
                      </div>

                      {/* Score Breakdown */}
                      {analysisResult.scoreBreakdown && (
                        <Card className="bg-white border border-gray-200 shadow-lg">
                          <CardHeader>
                            <CardTitle className="text-green-600 flex items-center">
                              <BarChart className="w-5 h-5 mr-2" />
                              Score Breakdown & Optimization Potential
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                              {Object.entries(analysisResult.scoreBreakdown).map(([key, value]) => {
                                if (key === 'totalPotential') return null;
                                if (typeof value === 'number') return null;
                                return (
                                  <div key={key} className="text-center">
                                    <div className="text-sm text-gray-600 mb-2 capitalize">
                                      {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </div>
                                    <div className="text-2xl font-bold text-green-600 mb-1">
                                      {value.current}
                                    </div>
                                    <div className="text-sm text-gray-500 mb-2">
                                      Potential: {value.potential}
                                    </div>
                                    <div className="text-xs text-green-600 font-medium">
                                      +{value.improvements} points possible
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="mt-6 text-center">
                              <div className="text-lg font-semibold text-gray-900 mb-2">
                                Total Optimization Potential
                              </div>
                              <div className="text-3xl font-bold text-green-600">
                                {analysisResult.scoreBreakdown.totalPotential}%
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {/* Detailed Strengths */}
                      {analysisResult.detailedStrengths && analysisResult.detailedStrengths.length > 0 && (
                        <Card className="bg-white border border-gray-200 shadow-lg">
                          <CardHeader>
                            <CardTitle className="text-green-600 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Revolutionary Strengths
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {analysisResult.detailedStrengths.map((strength, index) => (
                              <div key={index} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <h3 className="text-lg font-semibold text-gray-900">{strength.category}</h3>
                                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                                    {strength.items.length} strengths
                                  </Badge>
                                </div>
                                <ul className="space-y-2">
                                  {strength.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start">
                                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      )}

                      {/* Detailed Improvements */}
                      {analysisResult.detailedImprovements && analysisResult.detailedImprovements.length > 0 && (
                        <Card className="bg-white border border-gray-200 shadow-lg">
                          <CardHeader>
                            <CardTitle className="text-red-600 flex items-center">
                              <AlertTriangle className="w-5 h-5 mr-2" />
                              Critical Improvements for 100% Optimization
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {analysisResult.detailedImprovements.map((improvement, index) => (
                              <div key={index} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                  <h3 className="text-lg font-semibold text-gray-900">{improvement.category}</h3>
                                  <div className="flex items-center space-x-2">
                                    <Badge className={getPriorityColor(improvement.priority)}>
                                      {improvement.priority} Priority
                                    </Badge>
                                    <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
                                      {improvement.items.length} improvements
                                    </Badge>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  {improvement.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="bg-gray-50 p-3 rounded-lg">
                                      <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-semibold text-gray-900">{item.issue}</h4>
                                        <div className="flex items-center space-x-2">
                                          <Badge variant="outline" className={getEffortColor(item.effort)}>
                                            {item.effort} effort
                                          </Badge>
                                          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                                            +{item.scoreIncrease} points
                                          </Badge>
                                        </div>
                                      </div>
                                      <p className="text-gray-600 mb-2">{item.description}</p>
                                      <div className="mb-2">
                                        <span className="text-sm font-medium text-red-600">Impact: </span>
                                        <span className="text-sm text-gray-700">{item.impact}</span>
                                      </div>
                                      <div className="bg-green-50 p-2 rounded">
                                        <span className="text-sm font-medium text-green-600">Solution: </span>
                                        <span className="text-sm text-gray-700">{item.solution}</span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      )}

                      {/* Optimization Roadmap */}
                      {analysisResult.optimizationRoadmap && (
                        <Card className="bg-white border border-gray-200 shadow-lg">
                          <CardHeader>
                            <CardTitle className="text-green-600 flex items-center">
                              <Rocket className="w-5 h-5 mr-2" />
                              Optimization Roadmap
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div>
                                <h3 className="text-lg font-semibold text-red-600 mb-3 flex items-center">
                                  <Clock className="w-4 h-4 mr-2" />
                                  Immediate (0-30 days)
                                </h3>
                                <ul className="space-y-2">
                                  {analysisResult.optimizationRoadmap.immediate.map((action, index) => (
                                    <li key={index} className="flex items-start">
                                      <ArrowRight className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700">{action}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h3 className="text-lg font-semibold text-yellow-600 mb-3 flex items-center">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  Short-term (1-3 months)
                                </h3>
                                <ul className="space-y-2">
                                  {analysisResult.optimizationRoadmap.shortTerm.map((action, index) => (
                                    <li key={index} className="flex items-start">
                                      <ArrowRight className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700">{action}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h3 className="text-lg font-semibold text-green-600 mb-3 flex items-center">
                                  <Target className="w-4 h-4 mr-2" />
                                  Long-term (3-12 months)
                                </h3>
                                <ul className="space-y-2">
                                  {analysisResult.optimizationRoadmap.longTerm.map((action, index) => (
                                    <li key={index} className="flex items-start">
                                      <ArrowRight className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700">{action}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </TabsContent>

                  {/* AEO Tool Tab */}
                  <TabsContent value="aeo-tool" className="mt-6">
                    <div className="space-y-6">
                      {aeoResult ? (
                        <Card className="bg-white border border-gray-200 shadow-lg">
                          <CardHeader>
                            <CardTitle className="text-purple-600 flex items-center">
                              <Bot className="w-5 h-5 mr-2" />
                              AI Experience Optimization (AEO)
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div className="text-center">
                              <div className="text-4xl font-bold text-purple-600 mb-2">
                                {aeoResult.aeoScore}
                              </div>
                              <Badge variant="outline" className="border-purple-200 text-purple-600">
                                AEO Score
                              </Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-sm text-gray-600 flex items-center">
                                    <Users className="w-4 h-4 mr-2" />
                                    Personalization
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="text-2xl font-bold text-purple-600 mb-2">
                                    {aeoResult.personalizationOpportunities.score}
                                  </div>
                                  <Progress value={aeoResult.personalizationOpportunities.score} className="h-2" />
                                </CardContent>
                              </Card>

                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-sm text-gray-600 flex items-center">
                                    <Bot className="w-4 h-4 mr-2" />
                                    Conversational AI
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="text-2xl font-bold text-purple-600 mb-2">
                                    {aeoResult.conversationalAI.score}
                                  </div>
                                  <Progress value={aeoResult.conversationalAI.score} className="h-2" />
                                </CardContent>
                              </Card>

                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-sm text-gray-600 flex items-center">
                                    <Cpu className="w-4 h-4 mr-2" />
                                    Predictive Analytics
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="text-2xl font-bold text-purple-600 mb-2">
                                    {aeoResult.predictiveAnalytics.score}
                                  </div>
                                  <Progress value={aeoResult.predictiveAnalytics.score} className="h-2" />
                                </CardContent>
                              </Card>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold mb-3 text-purple-600">Revolutionary AI Recommendations</h3>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold text-green-600 mb-2">Immediate Opportunities</h4>
                                  <ul className="space-y-2">
                                    {aeoResult.aiRecommendations.immediate.map((rec, index) => (
                                      <li key={index} className="flex items-start bg-green-50 p-3 rounded-lg">
                                        <Rocket className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{rec}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-blue-600 mb-2">Strategic Implementations</h4>
                                  <ul className="space-y-2">
                                    {aeoResult.aiRecommendations.strategic.map((rec, index) => (
                                      <li key={index} className="flex items-start bg-blue-50 p-3 rounded-lg">
                                        <Target className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{rec}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-purple-600 mb-2">Revolutionary Features</h4>
                                  <ul className="space-y-2">
                                    {aeoResult.aiRecommendations.revolutionary.map((rec, index) => (
                                      <li key={index} className="flex items-start bg-purple-50 p-3 rounded-lg">
                                        <Sparkles className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{rec}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ) : (
                        <Card className="bg-white border border-gray-200 shadow-lg">
                          <CardContent className="p-8 text-center">
                            <Bot className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">AEO Analysis</h3>
                            <p className="text-gray-600 mb-4">Click "AEO Analysis" to get AI Experience Optimization insights</p>
                            <Button 
                              onClick={handleAEOAnalysis}
                              disabled={isAnalyzing}
                              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            >
                              <Bot className="w-4 h-4 mr-2" />
                              Analyze AEO
                            </Button>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </TabsContent>

                  {/* Other tabs with placeholder content */}
                  <TabsContent value="keyword-research" className="mt-6">
                    <Card className="bg-white border border-gray-200 shadow-lg">
                      <CardContent className="p-8 text-center">
                        <Search className="w-16 h-16 mx-auto mb-4 text-green-600" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Advanced Keyword Analysis</h3>
                        <p className="text-gray-600 mb-4">Comprehensive keyword research coming soon!</p>
                        <Button disabled className="bg-gray-400 cursor-not-allowed">
                          Coming Soon
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="competitor-analysis" className="mt-6">
                    <Card className="bg-white border border-gray-200 shadow-lg">
                      <CardContent className="p-8 text-center">
                        <Target className="w-16 h-16 mx-auto mb-4 text-green-600" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Market Intelligence</h3>
                        <p className="text-gray-600 mb-4">Advanced competitive analysis coming soon!</p>
                        <Button disabled className="bg-gray-400 cursor-not-allowed">
                          Coming Soon
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="content-optimizer" className="mt-6">
                    <Card className="bg-white border border-gray-200 shadow-lg">
                      <CardContent className="p-8 text-center">
                        <FileText className="w-16 h-16 mx-auto mb-4 text-green-600" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Content Revolution</h3>
                        <p className="text-gray-600 mb-4">AI-powered content optimization coming soon!</p>
                        <Button disabled className="bg-gray-400 cursor-not-allowed">
                          Coming Soon
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="technical-audit" className="mt-6">
                    <Card className="bg-white border border-gray-200 shadow-lg">
                      <CardContent className="p-8 text-center">
                        <Settings className="w-16 h-16 mx-auto mb-4 text-green-600" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Technical Mastery</h3>
                        <p className="text-gray-600 mb-4">Advanced technical SEO analysis coming soon!</p>
                        <Button disabled className="bg-gray-400 cursor-not-allowed">
                          Coming Soon
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="performance" className="mt-6">
                    <Card className="bg-white border border-gray-200 shadow-lg">
                      <CardContent className="p-8 text-center">
                        <Zap className="w-16 h-16 mx-auto mb-4 text-green-600" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Performance Pro</h3>
                        <p className="text-gray-600 mb-4">Core Web Vitals optimization coming soon!</p>
                        <Button disabled className="bg-gray-400 cursor-not-allowed">
                          Coming Soon
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOAnalyzer;
