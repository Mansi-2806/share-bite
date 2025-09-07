
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import DonationPage from "./pages/DonationPage";
import FoodBanksPage from "./pages/FoodBanksPage";
import VolunteerPage from "./pages/VolunteerPage";
import TrackingPage from "./pages/TrackingPage";
import RewardsPage from "./pages/RewardsPage";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import AuthPage from "./pages/AuthPage";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/donate" element={<DonationPage />} />
                <Route path="/food-banks" element={<FoodBanksPage />} />
                <Route path="/volunteer" element={<VolunteerPage />} />
                <Route path="/track" element={<TrackingPage />} />
                <Route path="/rewards" element={<RewardsPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
