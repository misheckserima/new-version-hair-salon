
// Import React hooks and components
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";

// Data
import { initialAdminCredentials } from "@/data/initialAdmin";

/**
 * Admin Login Component
 * - Handles admin authentication form
 * - Validates credentials against initial admin data
 * - Manages login state and error handling
 */
const AdminLogin = () => {
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Hooks
  const { toast } = useToast();  // For showing toast notifications
  const navigate = useNavigate();  // For programmatic navigation

  /**
   * Handle login form submission
   * @param e - Form event
   */
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate credentials against initial admin data
      if (email === initialAdminCredentials.email && 
          password === initialAdminCredentials.password) {
        
        // Store authentication state in localStorage
        localStorage.setItem("admin_authenticated", "true");
        localStorage.setItem("admin_email", email);
        
        // Show success message
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard",
          duration: 3000,
        });
        
        // Redirect to admin dashboard
        navigate("/admin/dashboard");
      } else {
        // Show error for invalid credentials
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Login error:", error);
      toast({
        title: "Login error",
        description: "An error occurred during login",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  return (
    // Main container for the login form
    <div className="flex justify-center items-center min-h-[80vh]">
      {/* Login card with subtle animation */}
      <Card className="w-full max-w-md shadow-glow animate-fade-in">
        <form onSubmit={handleLogin}>
          {/* Card header with title and description */}
          <CardHeader>
            <CardTitle className="text-2xl text-gradient">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          
          {/* Form fields */}
          <CardContent className="space-y-4">
            {/* Email input field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            
            {/* Password input field with show/hide toggle */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
                {/* Toggle password visibility button */}
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </CardContent>
          
          {/* Form submit button */}
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AdminLogin;
