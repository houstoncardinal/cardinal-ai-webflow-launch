import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();
    console.log('Starting SEO analysis for:', url);

    if (!url) {
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY not found');
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Comprehensive SEO analysis prompt
    const prompt = `Analyze the website at ${url} and provide a comprehensive SEO analysis with the following structure (respond ONLY with valid JSON, no markdown formatting):

{
  "url": "${url}",
  "domain": "extracted-domain",
  "analysisDate": "current-date",
  "overallScore": 85,
  "performanceScore": 90,
  "accessibilityScore": 88,
  "seoScore": 85,
  "mobileScore": 92,
  "contentScore": 87,
  "technicalScore": 89,
  "userExperienceScore": 91,
  "securityScore": 95,
  "trustScore": 88,
  "coreWebVitals": {
    "lcp": 2.1,
    "fid": 45,
    "cls": 0.08,
    "score": 90,
    "ttfb": 380,
    "fcp": 1.2
  },
  "advancedMetrics": {
    "domainAuthority": 65,
    "pageSpeedInsights": 88,
    "mobileUsability": 92,
    "accessibilityScore": 88,
    "securityScore": 95,
    "trustScore": 88,
    "relevanceScore": 85
  },
  "detailedStrengths": [
    {
      "category": "Technical SEO",
      "items": ["Fast loading speed", "Mobile-responsive design", "Clean URL structure"]
    },
    {
      "category": "Content Quality",
      "items": ["Well-structured content", "Good keyword usage", "Engaging multimedia"]
    }
  ],
  "detailedImprovements": [
    {
      "category": "Technical SEO",
      "priority": "high",
      "items": [
        {
          "issue": "Missing meta descriptions",
          "description": "Several pages lack meta descriptions",
          "impact": "Reduced click-through rates from search results",
          "solution": "Add unique meta descriptions to all pages",
          "effort": "low",
          "scoreIncrease": 3
        }
      ]
    }
  ],
  "optimizationRoadmap": {
    "immediate": ["Fix broken links", "Add missing alt text", "Optimize image sizes"],
    "shortTerm": ["Improve page speed", "Enhance mobile experience", "Update meta tags"],
    "longTerm": ["Build quality backlinks", "Create content strategy", "Implement schema markup"]
  },
  "scoreBreakdown": {
    "technicalSEO": { "current": 85, "potential": 95, "improvements": 10 },
    "contentOptimization": { "current": 87, "potential": 94, "improvements": 7 },
    "performance": { "current": 90, "potential": 96, "improvements": 6 },
    "userExperience": { "current": 91, "potential": 97, "improvements": 6 },
    "securityTrust": { "current": 95, "potential": 98, "improvements": 3 },
    "totalPotential": 32
  }
}

Provide realistic scores based on what you would expect from analyzing ${url}. Make the analysis actionable and specific.`;

    console.log('Calling Lovable AI for SEO analysis...');
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: 'You are an expert SEO analyst. Provide detailed, actionable SEO analysis in valid JSON format only. Do not include markdown code blocks or any formatting - respond with pure JSON.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Lovable AI error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI usage limit reached. Please add credits to continue.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ error: 'AI analysis failed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log('AI response received');
    
    let analysisText = data.choices[0].message.content;
    
    // Remove markdown code blocks if present
    analysisText = analysisText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    let analysisResult;
    try {
      analysisResult = JSON.parse(analysisText);
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      console.error('Raw response:', analysisText);
      return new Response(
        JSON.stringify({ error: 'Failed to parse AI response' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('SEO analysis completed successfully');
    return new Response(
      JSON.stringify(analysisResult),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in seo-analysis function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
