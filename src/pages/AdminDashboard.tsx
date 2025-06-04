// Import React and routing hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import UI components
import DashboardLayout from "@/components/admin/DashboardLayout";  // Admin layout wrapper
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, MessageSquare, Scissors, DollarSign, Users, Award } from "lucide-react";

/**
 * Admin Dashboard Component
 * - Displays key metrics and recent activity for the salon
 * - Protected route that requires authentication
 * - Shows statistics like page views, WhatsApp clicks, and revenue
 */
const AdminDashboard = () => {
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Check authentication status on component mount
  useEffect(() => {
    // Check if admin is authenticated in localStorage
    const isAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate]);

  /**
   * Get total WhatsApp clicks from localStorage
   * @returns {number} Total count of WhatsApp button clicks
   */
  const getWhatsAppClicks = (): number => {
    try {
      const clicks = JSON.parse(localStorage.getItem("whatsappClicks") || "{}");
      return Object.values<number>(clicks).reduce(
        (sum: number, count: number) => sum + count, 
        0
      );
    } catch (error) {
      console.error("Error reading WhatsApp clicks:", error);
      return 0;
    }
  };

  /**
   * Get total newsletter subscribers from localStorage
   * @returns {number} Count of newsletter subscribers
   */
  const getSubscribers = (): number => {
    try {
      const subscribers = JSON.parse(localStorage.getItem("subscribers") || "[]");
      return subscribers.length;
    } catch (error) {
      console.error("Error reading subscribers:", error);
      return 0;
    }
  };

  // Dashboard statistics data
  const stats = [
    {
      title: "Total Page Views",
      value: Math.floor(Math.random() * 1000) + 500,  // Random demo data
      icon: <Eye className="h-6 w-6 text-blue-500" />,
      change: "+12.5%",
      changeDirection: "up",
    },
    {
      title: "WhatsApp Clicks",
      value: getWhatsAppClicks(),
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
      change: "+5.2%",
      changeDirection: "up",
    },
    {
      title: "Services Booked",
      value: Math.floor(Math.random() * 50) + 20,
      icon: <Scissors className="h-6 w-6 text-purple-500" />,
      change: "+8.1%",
      changeDirection: "up",
    },
    {
      title: "Revenue",
      value: `$${Math.floor(Math.random() * 5000) + 2000}`,
      icon: <DollarSign className="h-6 w-6 text-yellow-500" />,
      change: "+15.3%",
      changeDirection: "up",
    },
    {
      title: "New Subscribers",
      value: getSubscribers(),
      icon: <Users className="h-6 w-6 text-pink-500" />,
      change: "+3.7%",
      changeDirection: "up",
    },
    {
      title: "Course Enrollments",
      value: Math.floor(Math.random() * 30) + 5,
      icon: <Award className="h-6 w-6 text-indigo-500" />,
      change: "+22.4%",
      changeDirection: "up",
    },
  ];

  // Demo data for most popular services
  const popularServices = [
    { name: "Full Makeup", clicks: 28, category: "makeup" },
    { name: "Hair Styling", clicks: 24, category: "hair" },
    { name: "Lash Extensions", clicks: 19, category: "lashes" },
    { name: "Makeup Masterclass", clicks: 17, category: "training" },
    { name: "Classic Haircut", clicks: 15, category: "barber" },
  ];

  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${
                  stat.changeDirection === "up" ? "text-green-500" : "text-red-500"
                } flex items-center mt-1`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Services */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Most Popular Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {popularServices.map((service, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between p-2 rounded bg-gray-50 dark:bg-gray-800"
                >
                  <div className="flex items-center gap-2">
                    <span 
                      className={`w-3 h-3 rounded-full ${
                        service.category === "makeup" ? "bg-pink-500" :
                        service.category === "hair" ? "bg-blue-500" :
                        service.category === "lashes" ? "bg-purple-500" :
                        service.category === "barber" ? "bg-orange-500" : 
                        "bg-green-500"
                      }`}
                    ></span>
                    <span>{service.name}</span>
                  </div>
                  <span className="text-sm font-medium">{service.clicks} clicks</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity - Placeholder */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This section will display actual user interactions when connected to a database.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
