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
    
    const response = await fetch('http://localhost:3001/api/seo-analysis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('AI analysis completed successfully');
    return result;
  } catch (error) {
    console.error('AI Analysis Error:', error);
    
    // Enhanced error handling with specific error types
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Unable to connect to analysis server. Please ensure the server is running on port 3001.');
    }
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid URL')) {
        throw new Error('Please enter a valid website URL (e.g., https://example.com)');
      }
      if (error.message.includes('AI analysis failed')) {
        throw new Error('Analysis server encountered an error. Please try again or contact support.');
      }
    }
    
    throw new Error(`Analysis failed: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
  }
}

export async function analyzeAEOWithAI(url: string): Promise<AEOAnalysisResult> {
  try {
    console.log('Starting AEO analysis for:', url);
    
    const response = await fetch('http://localhost:3001/api/seo-analysis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    // Transform the result to AEO format
    return {
      aeoScore: Math.round((result.userExperienceScore + result.performanceScore) / 2),
      personalizationOpportunities: {
        score: Math.round(result.userExperienceScore * 0.9),
        recommendations: [
          'Implement dynamic content personalization based on user behavior',
          'Add AI-powered product recommendations',
          'Create personalized user dashboards'
        ]
      },
      conversationalAI: {
        score: Math.round(result.userExperienceScore * 0.85),
        recommendations: [
          'Integrate AI chatbot for customer support',
          'Add voice search capabilities',
          'Implement conversational commerce features'
        ]
      },
      predictiveAnalytics: {
        score: Math.round(result.performanceScore * 0.8),
        recommendations: [
          'Implement predictive content loading',
          'Add AI-powered user journey optimization',
          'Create intelligent caching strategies'
        ]
      },
      aiRecommendations: {
        immediate: [
          'Add AI-powered search functionality',
          'Implement smart content recommendations',
          'Create personalized user experiences'
        ],
        strategic: [
          'Develop AI-driven content strategy',
          'Implement machine learning for user segmentation',
          'Add predictive analytics dashboard'
        ],
        revolutionary: [
          'Create AI-powered virtual assistant',
          'Implement advanced personalization engine',
          'Add conversational AI interface'
        ]
      }
    };
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
