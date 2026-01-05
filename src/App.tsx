import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import Experience from "@/pages/Experience";
import Menu from "@/pages/Menu";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {isLoading ? (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          ) : (
            <>
              <ScrollToTop />
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
