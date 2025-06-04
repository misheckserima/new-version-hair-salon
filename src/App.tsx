// Import UI components from shadcn/ui
import { Toaster } from "@/components/ui/toaster";  // Toast notifications
import { Toaster as Sonner } from "@/components/ui/sonner";  // Alternative toast component
import { TooltipProvider } from "@/components/ui/tooltip";  // Tooltip context provider

// Import data fetching and routing dependencies
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";  // Data fetching
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Client-side routing

// Import page components
import Index from "./pages/Index";  // Main public page
import Admin from "./pages/Admin";  // Admin authentication page
import AdminDashboard from "./pages/AdminDashboard";  // Admin dashboard
import AdminServices from "./pages/AdminServices";  // Services management
import AdminGallery from "./pages/AdminGallery";  // Gallery management
import AdminMessages from "./pages/AdminMessages";  // Customer messages
import NotFound from "./pages/NotFound";  // 404 page

// Create a new QueryClient instance for React Query
// This manages server state, caching, and more
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,  // Don't refetch when window regains focus
      retry: 1,  // Retry failed requests once
    },
  },
});

/**
 * Main App component that sets up the application
 * - Wraps the app with QueryClientProvider for data fetching
 * - Sets up client-side routing with React Router
 * - Provides tooltips and toast notifications globally
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toast notifications */}
        <Toaster />
        <Sonner />
        
        {/* Client-side routing */}
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            
            {/* Admin authentication */}
            <Route path="/admin" element={<Admin />} />
            
            {/* Protected admin routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/services" element={<AdminServices />} />
            <Route path="/admin/gallery" element={<AdminGallery />} />
            <Route path="/admin/messages" element={<AdminMessages />} />
            
            {/* Future admin routes (currently using dashboard as placeholder) */}
            <Route path="/admin/users" element={<AdminDashboard />} />
            <Route path="/admin/analytics" element={<AdminDashboard />} />
            <Route path="/admin/settings" element={<AdminDashboard />} />
            
            {/* 404 - Catch all unmatched routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
