
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DonationPage from "./pages/DonationPage";
import FoodBanksPage from "./pages/FoodBanksPage";
import VolunteerPage from "./pages/VolunteerPage";
import TrackingPage from "./pages/TrackingPage";
import RewardsPage from "./pages/RewardsPage";
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
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/food-banks" element={<FoodBanksPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/track" element={<TrackingPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
