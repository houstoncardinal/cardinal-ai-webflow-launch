import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import FloatingActionWidget from "@/components/FloatingActionWidget";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Main pages
import ServicesPage from "./pages/Services";
import IndustriesPage from "./pages/Industries";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import InsightsPage from "./pages/Insights";
import CareersPage from "./pages/Careers";
import AuthPage from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import SocialMediaTest from "./components/SocialMediaTest";
import PortfolioPage from "./pages/Portfolio";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import FreeAuditPage from "./pages/FreeAudit";
import SEOAnalyzerPage from "./pages/SEOAnalyzer";
import StrategyCallPage from "./pages/StrategyCall";
import LoadingScreen from "./components/LoadingScreen";

// Service pages
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileApplications from "./pages/services/MobileApplications";
import SEOInsights from "./pages/services/SEOInsights";
import BrandIdentity from "./pages/services/BrandIdentity";
import DigitalCampaigns from "./pages/services/DigitalCampaigns";
import ExperienceOptimization from "./pages/services/ExperienceOptimization";

// Portfolio detail pages
import VargasGroup from "./pages/portfolio/VargasGroup";
import ClearLedger from "./pages/portfolio/ClearLedger";
import BluTouchPools from "./pages/portfolio/BluTouchPools";
import HougenPros from "./pages/portfolio/HougenPros";
import EPSParking from "./pages/portfolio/EPSParking";
import IACCenters from "./pages/portfolio/IACCenters";
import ABQMRI from "./pages/portfolio/ABQMRI";
import APNClinic from "./pages/portfolio/APNClinic";
import HoustonWebDesignLanding from "./pages/landing/HoustonWebDesign";
import HoustonWebDesignEsLanding from "./pages/landing/HoustonWebDesignEs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingScreen />
        <Toaster />
        <Sonner />
        <FloatingActionWidget />
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Main Pages */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/test" element={<SocialMediaTest />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/portfolio/vargas-tax" element={<VargasGroup />} />
            <Route path="/portfolio/clearledger" element={<ClearLedger />} />
            <Route path="/portfolio/blutouch-pools" element={<BluTouchPools />} />
            <Route path="/portfolio/hougenpros" element={<HougenPros />} />
            <Route path="/portfolio/eps-parking" element={<EPSParking />} />
            <Route path="/portfolio/iac-centers" element={<IACCenters />} />
            <Route path="/portfolio/abq-mri" element={<ABQMRI />} />
            <Route path="/portfolio/apn-clinic" element={<APNClinic />} />
            <Route path="/free-audit" element={<FreeAuditPage />} />
            <Route path="/seo-analyzer" element={<SEOAnalyzerPage />} />
            <Route path="/strategy-call" element={<StrategyCallPage />} />
            
            {/* Service Routes */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-applications" element={<MobileApplications />} />
            <Route path="/services/seo-insights" element={<SEOInsights />} />
            <Route path="/services/brand-identity" element={<BrandIdentity />} />
            <Route path="/services/digital-campaigns" element={<DigitalCampaigns />} />
            <Route path="/services/experience-optimization" element={<ExperienceOptimization />} />
            
            {/* Portfolio Detail Routes */}
            <Route path="/portfolio/vargas-tax" element={<VargasGroup />} />
            <Route path="/portfolio/clearledger" element={<ClearLedger />} />
            <Route path="/portfolio/blutouch-pools" element={<BluTouchPools />} />
            <Route path="/portfolio/hougenpros" element={<HougenPros />} />
            <Route path="/portfolio/eps-parking" element={<EPSParking />} />
            <Route path="/portfolio/iac-centers" element={<IACCenters />} />
            <Route path="/portfolio/abq-mri" element={<ABQMRI />} />
            <Route path="/portfolio/apn-clinic" element={<APNClinic />} />
            
            {/* Promotional Landing Pages */}
            <Route path="/houston-web-design" element={<HoustonWebDesignLanding />} />
            <Route path="/diseno-web-houston" element={<HoustonWebDesignEsLanding />} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
