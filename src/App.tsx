import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
 
 const ForJobSeekers = lazy(() => import("./pages/ForJobSeekers"));
 const ForEmployers = lazy(() => import("./pages/ForEmployers"));
 const AboutUs = lazy(() => import("./pages/AboutUs"));
 const Contact = lazy(() => import("./pages/Contact"));
 const Blog = lazy(() => import("./pages/Blog"));
const JobSearch = lazy(() => import("./pages/JobSearch"));
const JobApplication = lazy(() => import("./pages/JobApplication"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
           <Route path="/job-seekers" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><ForJobSeekers /></Suspense>} />
           <Route path="/employers" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><ForEmployers /></Suspense>} />
           <Route path="/about" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><AboutUs /></Suspense>} />
           <Route path="/contact" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><Contact /></Suspense>} />
           <Route path="/blog" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><Blog /></Suspense>} />
           <Route path="/search" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><JobSearch /></Suspense>} />
           <Route path="/apply" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><JobApplication /></Suspense>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
