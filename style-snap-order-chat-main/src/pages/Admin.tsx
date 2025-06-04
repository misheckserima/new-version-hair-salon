
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from "@/components/AdminLogin";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Admin = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if admin is already authenticated
    const isAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <AdminLogin />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
