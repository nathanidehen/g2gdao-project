import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Index from "./pages/Index";
import TokenOverview from "./pages/TokenOverview";
import HowToBuyG2G from "./pages/HowToBuyG2G";
import Governance from "./pages/Governance";
import TokenMetrics from "./pages/TokenMetrics";
import Roadmap from "./pages/Roadmap";
import OurMission from "./pages/OurMission";
import LegalFramework from "./pages/LegalFramework";
import Team from "./pages/Team"; // 
import Compliance from "./pages/Compliance";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/token-overview" element={<TokenOverview />} />
            <Route path="/how-to-buy-g2g" element={<HowToBuyG2G />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/token-metrics" element={<TokenMetrics />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/team" element={<Team />} />
            <Route path="/legal-framework" element={<LegalFramework />} />
            <Route path="/compliance" element={<Compliance />} />

            {/* ADD ALL CUSTOM ROUTES BELOW THIS COMMENT */}
            {/* Example: <Route path="/custom-page" element={<CustomPage />} /> */}

            {/* ADD ALL CUSTOM ROUTES BELOW THIS COMMENT */}
            {/* Example: <Route path="/custom-page" element={<CustomPage />} /> */}
            
            {/* ADD ALL CUSTOM ROUTES BELOW THIS COMMENT */}
            {/* Example: <Route path="/custom-page" element={<CustomPage />} /> */}

            {/* ADD ALL CUSTOM ROUTES ABOVE THIS COMMENT */}
            {/* Example: <Route path="/custom-page" element={<CustomPage />} /> */}
            
            {/* Catch-all route for 404 Not Found */}
           

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;