import "./global.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Blog from "./pages/Blog";
import WebDesign from "./pages/WebDesign";
import UiUx from "./pages/UiUx"
import WebMobileApp from "./pages/WebMobileApp"
import SoftwareDevelopment from "./pages/SoftwareDevelopment"
import MobileDevelopment from "./pages/MobileDevelopment";
import CommerceDevelopment from "./pages/CommerceDevelopment";
import ApiIntegration from "./pages/ApiIntegration";
import MaintenanceAndSupport from "./pages/MaintenanceAndSupport";
import ChatbotDevelopment from "./pages/ChatbotDevelopment";
import SeoMarketing from "./pages/SeoMarketing";
import GraphicDesigning from "./pages/GraphicDesigning";
import MetaAds from "./pages/MetaAds";
import WhatsappMarketing from "./pages/WhatsappMarketing";
import SmsMarketing from "./pages/SmsMarketing";
import ContentStrategy from "./pages/ContentStrategy";
import PhotographyVideography from "./pages/PhotographyVideography";
import AiAnimation from "./pages/AiAnimation";
import VideoEditing from "./pages/VideoEditing";
import ContactUs from "./pages/ContactUs"
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/ui-ux" element={<UiUx />} />
          <Route path="/web-mobile-app" element={<WebMobileApp />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/mobile-development" element={<MobileDevelopment />} />
          <Route path="/commerce-development" element={<CommerceDevelopment />} />
          <Route path="/api-integration" element={<ApiIntegration />} />
          <Route path="/maintenance-support" element={<MaintenanceAndSupport />} />
          <Route path="/chatbot-development" element={<ChatbotDevelopment />} />
          <Route path="/seo-marketing" element={<SeoMarketing />} />
          <Route path="/graphic-designing" element={<GraphicDesigning />} />
          <Route path="/meta-ads" element={<MetaAds />} />
          <Route path="/whatsapp-marketing" element={<WhatsappMarketing />} />
          <Route path="/sms-marketing" element={<SmsMarketing />} />
          <Route path="/content-strategy" element={<ContentStrategy />} />
          <Route path="/photography-videography" element={<PhotographyVideography />} />
          <Route path="/ai-animation" element={<AiAnimation />} />
          <Route path="/video-editing" element={<VideoEditing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
