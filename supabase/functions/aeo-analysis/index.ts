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
    console.log('Starting AEO analysis for:', url);

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

    const prompt = `Analyze the website at ${url} for AI Experience Optimization (AEO) and provide analysis with this structure (respond ONLY with valid JSON, no markdown formatting):

{
  "aeoScore": 75,
  "personalizationOpportunities": {
    "score": 70,
    "recommendations": [
      "Implement user preference tracking",
      "Add personalized content recommendations",
      "Create dynamic content based on user behavior"
    ]
  },
  "conversationalAI": {
    "score": 65,
    "recommendations": [
      "Add AI chatbot for customer support",
      "Implement voice search optimization",
      "Create FAQ schema for better AI understanding"
    ]
  },
  "predictiveAnalytics": {
    "score": 60,
    "recommendations": [
      "Implement user journey prediction",
      "Add predictive search suggestions",
      "Use AI for content recommendation"
    ]
  },
  "aiRecommendations": {
    "immediate": [
      "Add structured data markup for AI crawlers",
      "Optimize content for voice search",
      "Implement basic chatbot functionality"
    ],
    "strategic": [
      "Develop personalization engine",
      "Create AI-powered content recommendations",
      "Build predictive user behavior models"
    ],
    "revolutionary": [
      "Implement advanced NLP for content understanding",
      "Create fully personalized user experiences",
      "Deploy AI-driven conversion optimization"
    ]
  }
}

Provide realistic scores and actionable recommendations for ${url}.`;

    console.log('Calling Lovable AI for AEO analysis...');
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
            content: 'You are an expert in AI Experience Optimization (AEO). Provide detailed analysis in valid JSON format only. Do not include markdown code blocks or any formatting - respond with pure JSON.'
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

    console.log('AEO analysis completed successfully');
    return new Response(
      JSON.stringify(analysisResult),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in aeo-analysis function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
