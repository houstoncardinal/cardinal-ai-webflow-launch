import { Building2 } from "lucide-react";
import IndustryLandingTemplate from "@/components/IndustryLandingTemplate";

const RealEstate = () => {
  const industryData = {
    industry: "Real Estate",
    icon: Building2,
    headline: "Digital Platforms That Close More Deals.",
    subheadline: "We create high-performance websites and marketing systems for real estate brokers, agencies, and property management companies.",
    painPoints: [
      {
        title: "Dependence on Zillow & Realtor.com",
        description: "Spending thousands monthly on portals with no control over lead quality or branding."
      },
      {
        title: "Poor Mobile Listing Experience",
        description: "Buyers can't easily browse properties on mobile, leading to lost opportunities."
      },
      {
        title: "No Lead Nurturing System",
        description: "Leads go cold because there's no automated follow-up or drip campaign."
      },
      {
        title: "Weak Local Market Presence",
        description: "Not showing up when buyers search for neighborhoods or specific property types."
      },
      {
        title: "Inefficient Property Updates",
        description: "Manually updating listings across multiple platforms wastes hours each week."
      },
      {
        title: "Limited Buyer/Seller Tools",
        description: "No calculators, market reports, or resources that establish expertise and capture leads."
      }
    ],
    solutions: [
      {
        title: "IDX-Integrated Property Websites",
        description: "Beautiful, mobile-first listing sites with automatic MLS updates and advanced search."
      },
      {
        title: "Neighborhood SEO Strategy",
        description: "Rank for 'homes for sale in [neighborhood]' and become the go-to local expert."
      },
      {
        title: "Automated Lead Nurture Sequences",
        description: "Email and SMS campaigns that keep your agency top-of-mind until buyers are ready."
      },
      {
        title: "Buyer & Seller Portals",
        description: "Calculators, market reports, and virtual tours that qualify leads before contact."
      },
      {
        title: "Virtual Tour Integration",
        description: "3D walkthroughs and video tours that drive engagement and reduce in-person showings."
      },
      {
        title: "Multi-Platform Listing Sync",
        description: "Update once, publish everywhere — MLS, your site, and social media automatically."
      }
    ],
    caseStudy: {
      client: "Southwest Realty Group",
      problem: "High dependence on Zillow leads ($8K/month) with poor conversion and limited brand recognition.",
      solution: "Custom IDX website with neighborhood SEO, property alerts, and automated lead nurturing system.",
      result: "Reduced portal spend by 70%, generated 240+ qualified leads/month organically, closed $2.1M in deals from website traffic.",
      link: "/portfolio"
    },
    gradientFrom: "from-orange-900",
    gradientTo: "to-red-900",
    accentColor: "from-orange-600 to-orange-500",
    seoKeywords: "real estate website design, IDX websites, realtor websites, property listing sites, real estate SEO, real estate lead generation, broker websites"
  };

  return <IndustryLandingTemplate {...industryData} />;
};

export default RealEstate;
