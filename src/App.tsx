import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Compliance from "./pages/Compliance";
import Governance from "./pages/Governance";
import HowToBuyG2G from "./pages/HowToBuyG2G";
import LegalFramework from "./pages/LegalFramework";
import OurMission from "./pages/OurMission";
import Roadmap from "./pages/Roadmap";
import Team from "./pages/Team";
import TokenMetrics from "./pages/TokenMetrics";
import TokenOverview from "./pages/TokenOverview";

const queryClient = new QueryClient();

// Simple placeholder for pages you haven't created yet
const ComingSoon = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl mb-8">Coming Soon...</p>
      <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Back to Home
      </a>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Real pages that exist */}
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/how-to-buy-g2g" element={<HowToBuyG2G />} />
            <Route path="/legal-framework" element={<LegalFramework />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/team" element={<Team />} />
            <Route path="/token-metrics" element={<TokenMetrics />} />
            <Route path="/token-overview" element={<TokenOverview />} />
            
            {/* Placeholder pages for navigation links that don't exist yet */}
            <Route path="/whitepaper" element={<ComingSoon title="Whitepaper" />} />
            <Route path="/contact" element={<ComingSoon title="Contact" />} />
            <Route path="/developers" element={<ComingSoon title="Developers" />} />
            <Route path="/community" element={<ComingSoon title="Community" />} />
            <Route path="/getting-started" element={<ComingSoon title="Getting Started" />} />
            <Route path="/api-reference" element={<ComingSoon title="API Reference" />} />
            <Route path="/dao-fundamentals" element={<ComingSoon title="DAO Fundamentals" />} />
            <Route path="/web3-identity" element={<ComingSoon title="Web3 Identity" />} />
            <Route path="/g-rade-system" element={<ComingSoon title="G-RADE System" />} />
            <Route path="/patent-portfolio" element={<ComingSoon title="Patent Portfolio" />} />
            <Route path="/faq" element={<ComingSoon title="FAQ" />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;