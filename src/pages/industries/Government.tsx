import { Landmark } from "lucide-react";
import IndustryLandingTemplate from "@/components/IndustryLandingTemplate";

const Government = () => {
  const industryData = {
    industry: "Government",
    icon: Landmark,
    headline: "Accessible Digital Services for All Citizens.",
    subheadline: "We create WCAG-compliant, secure platforms for public sector organizations, municipalities, and government agencies.",
    painPoints: [
      {
        title: "Outdated Legacy Systems",
        description: "Websites built decades ago that don't work on mobile and fail accessibility standards."
      },
      {
        title: "Poor Citizen Experience",
        description: "Confusing navigation makes it hard for citizens to find forms, services, and information."
      },
      {
        title: "Accessibility Non-Compliance",
        description: "Not meeting WCAG 2.1 AA standards, creating legal liability and excluding citizens."
      },
      {
        title: "Manual Service Requests",
        description: "Citizens have to call or visit in person for simple requests and status updates."
      },
      {
        title: "Limited Transparency",
        description: "No centralized system for budgets, meeting minutes, and public records access."
      },
      {
        title: "Security & Compliance Gaps",
        description: "Systems don't meet modern security standards or data protection requirements."
      }
    ],
    solutions: [
      {
        title: "WCAG 2.1 AA Compliant Design",
        description: "Fully accessible interfaces that serve all citizens, including those with disabilities."
      },
      {
        title: "Secure Citizen Portals",
        description: "Self-service systems for permits, payments, forms, and service request tracking."
      },
      {
        title: "Mobile-First Public Services",
        description: "Responsive, fast experiences optimized for how citizens actually access information."
      },
      {
        title: "Transparency Dashboards",
        description: "Public-facing systems for budgets, contracts, meeting archives, and open data."
      },
      {
        title: "ADA & Section 508 Compliance",
        description: "Built-in accessibility features, screen reader support, and keyboard navigation."
      },
      {
        title: "Multi-Language Support",
        description: "Content translated and localized for diverse community populations."
      }
    ],
    caseStudy: {
      client: "Municipal Services Department",
      problem: "20-year-old website failing accessibility audits, frustrating citizens, and creating legal liability.",
      solution: "Complete platform rebuild with WCAG compliance, self-service portals, mobile optimization, and bilingual support.",
      result: "100% accessibility compliance, 65% reduction in phone calls to city hall, improved citizen satisfaction scores from 2.1 to 4.6/5.",
      link: "/portfolio"
    },
    gradientFrom: "from-indigo-900",
    gradientTo: "to-blue-900",
    accentColor: "from-indigo-600 to-indigo-500",
    seoKeywords: "government website design, municipal websites, WCAG compliance, accessible websites, government digital services, public sector websites, ADA compliant websites"
  };

  return <IndustryLandingTemplate {...industryData} />;
};

export default Government;
