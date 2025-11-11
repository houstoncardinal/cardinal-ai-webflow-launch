import { DollarSign } from "lucide-react";
import IndustryLandingTemplate from "@/components/IndustryLandingTemplate";

const FinancialServices = () => {
  const industryData = {
    industry: "Financial Services",
    icon: DollarSign,
    headline: "Secure Platforms That Build Trust.",
    subheadline: "We create compliant, high-security digital systems for accounting firms, financial advisors, and professional service providers.",
    painPoints: [
      {
        title: "Client Acquisition Costs Too High",
        description: "Referrals are unpredictable; digital leads are expensive and low-quality."
      },
      {
        title: "No Online Trust Signals",
        description: "Website doesn't communicate expertise, credentials, or security standards."
      },
      {
        title: "Manual Client Onboarding",
        description: "Paper forms, email attachments, and calls waste time and create friction."
      },
      {
        title: "Document Sharing Concerns",
        description: "Clients email sensitive files unsecurely, creating liability and compliance risk."
      },
      {
        title: "Compliance & Audit Trails",
        description: "No systematic way to track client communications and document access."
      },
      {
        title: "Weak Educational Content",
        description: "Not publishing insights that demonstrate expertise and attract ideal clients."
      }
    ],
    solutions: [
      {
        title: "Secure Client Portals",
        description: "Bank-grade encryption for document sharing, signatures, and communications."
      },
      {
        title: "Automated Compliance Workflows",
        description: "Built-in audit trails, access logs, and regulatory compliance features."
      },
      {
        title: "Authority-Building Content",
        description: "SEO-optimized insights and resources that establish expertise and attract referrals."
      },
      {
        title: "Digital Onboarding Systems",
        description: "Secure, guided intake that collects information and documents in one flow."
      },
      {
        title: "Financial Planning Tools",
        description: "Calculators, projections, and interactive tools that educate and qualify leads."
      },
      {
        title: "Referral Partner Networks",
        description: "Co-marketing systems with CPAs, attorneys, and wealth managers."
      }
    ],
    caseStudy: {
      client: "ClearLedger",
      problem: "New SaaS accounting platform struggling to gain traction in competitive market with limited marketing budget.",
      solution: "Strategic content marketing, technical SEO foundation, conversion pathway optimization, and partner integration showcase.",
      result: "250% increase in qualified leads, 180% growth in trial signups, established thought leadership in accounting automation space.",
      link: "/portfolio/clearledger"
    },
    gradientFrom: "from-emerald-900",
    gradientTo: "to-teal-900",
    accentColor: "from-emerald-600 to-emerald-500",
    seoKeywords: "financial services websites, accounting firm websites, financial advisor websites, secure client portals, financial planning tools, CPA websites, wealth management websites"
  };

  return <IndustryLandingTemplate {...industryData} />;
};

export default FinancialServices;
