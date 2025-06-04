
import { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  Settings, 
  Package, 
  Users, 
  Image, 
  MessageSquare, 
  LogOut,
  BarChart,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
      duration: 3000,
    });
    navigate("/admin");
  };

  const menuItems = [
    { icon: <Home size={20} />, label: "Dashboard", path: "/admin/dashboard" },
    { icon: <Package size={20} />, label: "Services", path: "/admin/services" },
    { icon: <Image size={20} />, label: "Gallery", path: "/admin/gallery" },
    { icon: <MessageSquare size={20} />, label: "Messages", path: "/admin/messages" },
    { icon: <Users size={20} />, label: "Users", path: "/admin/users" },
    { icon: <BarChart size={20} />, label: "Analytics", path: "/admin/analytics" },
    { icon: <Settings size={20} />, label: "Settings", path: "/admin/settings" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
              <h1 className="ml-2 md:ml-0 text-xl font-semibold text-gray-800 dark:text-white">
                {title}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="hidden md:flex"
              >
                View Site
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleLogout}
                className="hidden md:flex"
              >
                <LogOut className="mr-1.5 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-grow">
        {/* Sidebar for tablet and desktop */}
        <aside className="hidden md:block w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <nav className="p-4 space-y-1">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start mb-1"
                onClick={() => navigate(item.path)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Button>
            ))}
            <hr className="my-4 border-gray-200 dark:border-gray-700" />
            <Button
              variant="destructive"
              className="w-full justify-start"
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-4 w-4" />
              Logout
            </Button>
          </nav>
        </aside>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50">
            <div className="h-full w-64 bg-white dark:bg-gray-800 shadow-lg animate-slide-in-left">
              <div className="p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="mb-4"
                >
                  <X size={20} />
                </Button>
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start mb-1"
                      onClick={() => {
                        navigate(item.path);
                        setIsMenuOpen(false);
                      }}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </Button>
                  ))}
                  <hr className="my-4 border-gray-200 dark:border-gray-700" />
                  <Button
                    variant="destructive"
                    className="w-full justify-start"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-3 h-4 w-4" />
                    Logout
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-grow p-6">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
