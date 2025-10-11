export interface AIAnalysisResult {
  url: string;
  domain: string;
  analysisDate: string;
  overallScore: number;
  performanceScore: number;
  accessibilityScore: number;
  seoScore: number;
  mobileScore: number;
  contentScore: number;
  technicalScore: number;
  userExperienceScore: number;
  securityScore: number;
  trustScore: number;
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
    score: number;
    ttfb: number;
    fcp: number;
  };
  advancedMetrics: {
    domainAuthority: number;
    pageSpeedInsights: number;
    mobileUsability: number;
    accessibilityScore: number;
    securityScore: number;
    trustScore: number;
    relevanceScore: number;
  };
  detailedStrengths: Array<{
    category: string;
    items: string[];
  }>;
  detailedImprovements: Array<{
    category: string;
    priority: string;
    items: Array<{
      issue: string;
      description: string;
      impact: string;
      solution: string;
      effort: string;
      scoreIncrease: number;
    }>;
  }>;
  optimizationRoadmap: {
    immediate: string[];
    shortTerm: string[];
    longTerm: string[];
  };
  scoreBreakdown: {
    technicalSEO: { current: number; potential: number; improvements: number };
    contentOptimization: { current: number; potential: number; improvements: number };
    performance: { current: number; potential: number; improvements: number };
    userExperience: { current: number; potential: number; improvements: number };
    securityTrust: { current: number; potential: number; improvements: number };
    totalPotential: number;
  };
}

export interface AEOAnalysisResult {
  aeoScore: number;
  personalizationOpportunities: {
    score: number;
    recommendations: string[];
  };
  conversationalAI: {
    score: number;
    recommendations: string[];
  };
  predictiveAnalytics: {
    score: number;
    recommendations: string[];
  };
  aiRecommendations: {
    immediate: string[];
    strategic: string[];
    revolutionary: string[];
  };
}

export async function analyzeWebsiteWithAI(url: string): Promise<AIAnalysisResult> {
  try {
    console.log('Starting AI analysis for:', url);
    
    const { supabase } = await import('@/integrations/supabase/client');
    const { data, error } = await supabase.functions.invoke('seo-analysis', {
      body: { url }
    });

    if (error) {
      throw new Error(error.message || 'Analysis request failed');
    }

    console.log('AI analysis completed successfully');
    return data as AIAnalysisResult;
  } catch (error) {
    console.error('AI Analysis Error:', error);
    
    // Enhanced error handling with specific error types
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Unable to connect to analysis service. Please try again.');
    }
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid URL')) {
        throw new Error('Please enter a valid website URL (e.g., https://example.com)');
      }
      if (error.message.includes('AI analysis failed')) {
        throw new Error('Analysis service encountered an error. Please try again or contact support.');
      }
    }
    
    throw new Error(`Analysis failed: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
  }
}

export async function analyzeAEOWithAI(url: string): Promise<AEOAnalysisResult> {
  try {
    console.log('Starting AEO analysis for:', url);
    
    const { supabase } = await import('@/integrations/supabase/client');
    const { data, error } = await supabase.functions.invoke('aeo-analysis', {
      body: { url }
    });

    if (error) {
      throw new Error(error.message || 'AEO analysis request failed');
    }

    console.log('AEO analysis completed successfully');
    return data as AEOAnalysisResult;
  } catch (error) {
    console.error('AEO Analysis Error:', error);
    throw new Error(`AEO analysis failed: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
  }
}

export async function generateSEOReportWithAI(url: string, analysisResult: AIAnalysisResult): Promise<string> {
  try {
    const response = await fetch('http://localhost:3001/api/seo-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url, analysisResult }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const report = await response.text();
    return report;
  } catch (error) {
    console.error('Report Generation Error:', error);
    throw new Error(`Report generation failed: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
  }
}
