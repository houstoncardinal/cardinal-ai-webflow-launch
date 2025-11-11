import { Scale } from "lucide-react";
import IndustryLandingTemplate from "@/components/IndustryLandingTemplate";

const Legal = () => {
  const industryData = {
    industry: "Legal",
    icon: Scale,
    headline: "Digital Systems That Win More Cases.",
    subheadline: "We build secure, professional platforms for law firms, attorneys, and legal service providers that generate qualified leads and streamline client management.",
    painPoints: [
      {
        title: "Low-Quality Lead Generation",
        description: "Current marketing generates phone calls, but few become paying clients."
      },
      {
        title: "Lack of Online Authority",
        description: "Competitors rank higher on Google and capture clients searching for legal help."
      },
      {
        title: "Inefficient Client Intake",
        description: "Manual intake processes waste billable hours and create poor first impressions."
      },
      {
        title: "No Client Self-Service",
        description: "Clients call for updates and documents, overwhelming support staff."
      },
      {
        title: "Data Security Concerns",
        description: "Current systems don't meet security standards for sensitive legal documents."
      },
      {
        title: "Difficult Case Management",
        description: "Tracking cases, deadlines, and client communications across disconnected tools."
      }
    ],
    solutions: [
      {
        title: "High-Converting Landing Pages",
        description: "Practice area-specific pages designed to convert searchers into qualified consultations."
      },
      {
        title: "Legal SEO & Content Strategy",
        description: "Dominate local search results for high-value practice areas and case types."
      },
      {
        title: "Automated Client Intake",
        description: "Secure intake forms that pre-qualify leads and route them to the right attorney."
      },
      {
        title: "Secure Client Portals",
        description: "Self-service access to case updates, documents, and billing that reduces support calls."
      },
      {
        title: "Attorney-Grade Security",
        description: "Bank-level encryption, secure file sharing, and compliance with legal data standards."
      },
      {
        title: "Case Management Integration",
        description: "Seamless connections to Clio, MyCase, and other legal management systems."
      }
    ],
    caseStudy: {
      client: "Regional Law Firm",
      problem: "Spending $15K/month on ads with poor lead quality and low conversion rates from web traffic.",
      solution: "Complete website redesign with practice area landing pages, local SEO optimization, and automated intake qualification system.",
      result: "62% reduction in ad spend, 4x increase in consultation bookings, 85% of leads now pre-qualified before attorney contact.",
      link: "/portfolio"
    },
    gradientFrom: "from-purple-900",
    gradientTo: "to-indigo-900",
    accentColor: "from-purple-600 to-purple-500",
    seoKeywords: "law firm websites, attorney website design, legal SEO, lawyer marketing, legal practice management, client portal for lawyers, law firm digital marketing"
  };

  return <IndustryLandingTemplate {...industryData} />;
};

export default Legal;
