
// Import React and routing hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import components
import AdminLogin from "@/components/AdminLogin";  // Login form component
import Header from "@/components/Header";  // Site header
import Footer from "@/components/Footer";  // Site footer

/**
 * Admin Authentication Page
 * - Handles admin authentication flow
 * - Redirects to dashboard if already authenticated
 * - Displays login form for unauthenticated users
 */
const Admin = () => {
  // Hook for programmatic navigation
  const navigate = useNavigate();
  
  // Check authentication status on component mount
  useEffect(() => {
    // Check if admin is already authenticated in localStorage
    const isAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    
    // Redirect to dashboard if already authenticated
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  return (
    // Main container with flex layout
    <div className="min-h-screen flex flex-col">
      {/* Site header */}
      <Header />
      
      {/* Main content area */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Render the admin login form */}
          <AdminLogin />
        </div>
      </main>
      
      {/* Site footer */}
      <Footer />
    </div>
  );
};

export default Admin;
