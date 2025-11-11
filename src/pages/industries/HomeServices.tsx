import { Home } from "lucide-react";
import IndustryLandingTemplate from "@/components/IndustryLandingTemplate";

const HomeServices = () => {
  const industryData = {
    industry: "Home Services",
    icon: Home,
    headline: "Digital Systems That Fill Your Calendar.",
    subheadline: "We build lead-generating websites and growth systems for contractors, HVAC companies, plumbers, electricians, and home service businesses.",
    painPoints: [
      {
        title: "Seasonal Revenue Swings",
        description: "No consistent pipeline — feast or famine based on weather and season."
      },
      {
        title: "Expensive Pay-Per-Click Costs",
        description: "Spending $50-150 per click on Google Ads with inconsistent ROI."
      },
      {
        title: "Low Local Visibility",
        description: "Not showing up in Google Maps when homeowners search for emergency services."
      },
      {
        title: "Poor Mobile Booking Experience",
        description: "Customers can't easily request service from their phone during an emergency."
      },
      {
        title: "No Repeat Customer System",
        description: "Treating every job as one-time work instead of building recurring maintenance clients."
      },
      {
        title: "Weak Referral Generation",
        description: "No system to encourage reviews, referrals, or word-of-mouth growth."
      }
    ],
    solutions: [
      {
        title: "Emergency Booking Systems",
        description: "One-click mobile booking and dispatch for urgent service requests that convert fast."
      },
      {
        title: "Local Service Area SEO",
        description: "Dominate Google Maps and organic search for all your service areas and zip codes."
      },
      {
        title: "Seasonal Lead Pipelines",
        description: "Year-round lead generation and off-season nurturing that smooths revenue."
      },
      {
        title: "Maintenance Plan Automation",
        description: "Recurring service subscriptions with automated scheduling and billing."
      },
      {
        title: "Review & Referral Systems",
        description: "Automated requests after every job that build reputation and drive new leads."
      },
      {
        title: "Service Area Landing Pages",
        description: "Neighborhood-specific pages that convert local searchers into booked jobs."
      }
    ],
    caseStudy: {
      client: "Hougen Pros",
      problem: "Seasonal HVAC business struggling with inconsistent lead flow and high customer acquisition costs.",
      solution: "Complete brand redesign, local SEO optimization, emergency booking system, and maintenance plan automation.",
      result: "40% increase in average project value, 200% growth in qualified leads, year-round revenue stability through recurring maintenance plans.",
      link: "/portfolio/hougenpros"
    },
    gradientFrom: "from-green-900",
    gradientTo: "to-emerald-900",
    accentColor: "from-green-600 to-green-500",
    seoKeywords: "contractor websites, HVAC website design, plumber websites, home services marketing, local service SEO, emergency service websites, contractor lead generation"
  };

  return <IndustryLandingTemplate {...industryData} />;
};

export default HomeServices;
