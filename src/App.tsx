
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DomainRegistration from "./pages/DomainRegistration";
import NotFound from "./pages/NotFound";

// Service pages
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileApplications from "./pages/services/MobileApplications";
import WebApplications from "./pages/services/WebApplications";
import CloudSolutions from "./pages/services/CloudSolutions";
import SEOInsights from "./pages/services/SEOInsights";
import BrandIdentity from "./pages/services/BrandIdentity";
import DigitalCampaigns from "./pages/services/DigitalCampaigns";
import ExperienceOptimization from "./pages/services/ExperienceOptimization";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/domains" element={<DomainRegistration />} />
          
          {/* Service Routes */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-applications" element={<MobileApplications />} />
          <Route path="/services/web-applications" element={<WebApplications />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/seo-insights" element={<SEOInsights />} />
          <Route path="/services/brand-identity" element={<BrandIdentity />} />
          <Route path="/services/digital-campaigns" element={<DigitalCampaigns />} />
          <Route path="/services/experience-optimization" element={<ExperienceOptimization />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
