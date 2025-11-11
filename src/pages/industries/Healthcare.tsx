import { Heart } from "lucide-react";
import IndustryLandingTemplate from "@/components/IndustryLandingTemplate";

const Healthcare = () => {
  const industryData = {
    industry: "Healthcare",
    icon: Heart,
    headline: "Digital Solutions Built for Healthcare Excellence.",
    subheadline: "We create HIPAA-compliant platforms, patient portals, and growth systems for medical practices, clinics, and healthcare providers.",
    painPoints: [
      {
        title: "Outdated Patient Experience",
        description: "Legacy systems create friction in booking, communication, and patient engagement."
      },
      {
        title: "Low Online Visibility",
        description: "Practices struggle to be found online when patients search for local providers."
      },
      {
        title: "Manual Administrative Work",
        description: "Staff spend hours on scheduling, reminders, and paperwork instead of patient care."
      },
      {
        title: "Poor Mobile Experience",
        description: "Existing websites don't work well on mobile devices where patients search most."
      },
      {
        title: "Compliance Concerns",
        description: "Lack of HIPAA-compliant systems for patient data and communications."
      },
      {
        title: "Low Patient Retention",
        description: "No systematic way to engage patients between visits or encourage referrals."
      }
    ],
    solutions: [
      {
        title: "HIPAA-Compliant Patient Portals",
        description: "Secure systems for appointments, records, and communication that meet all compliance standards."
      },
      {
        title: "Local SEO Domination",
        description: "Rank #1 in your area when patients search for your services on Google."
      },
      {
        title: "Automated Appointment Systems",
        description: "Self-service booking, automated reminders, and waitlist management that reduce no-shows."
      },
      {
        title: "Mobile-First Design",
        description: "Fast, intuitive experiences optimized for how patients actually search and book."
      },
      {
        title: "Patient Education Hubs",
        description: "Build trust and authority with content that answers patient questions before their visit."
      },
      {
        title: "Retention & Referral Systems",
        description: "Automated follow-ups, review requests, and referral incentives that grow your practice."
      }
    ],
    caseStudy: {
      client: "ABQ MRI",
      problem: "Low online visibility and poor conversion rates limiting patient acquisition for medical imaging center.",
      solution: "Comprehensive technical SEO overhaul, local search optimization, patient education content, and conversion-focused booking system.",
      result: "300% increase in organic traffic, 500% growth in online bookings, #1 rankings for key local medical imaging terms.",
      link: "/portfolio/abq-mri"
    },
    gradientFrom: "from-blue-900",
    gradientTo: "to-indigo-900",
    accentColor: "from-blue-600 to-blue-500",
    seoKeywords: "healthcare website development, medical practice websites, patient portals, HIPAA compliant systems, healthcare SEO, medical clinic websites, healthcare digital marketing"
  };

  return <IndustryLandingTemplate {...industryData} />;
};

export default Healthcare;
