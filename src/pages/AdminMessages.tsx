
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/admin/DashboardLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Trash2, MessageSquare } from "lucide-react";

const AdminMessages = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Sample messages data - in a real app, this would come from a database
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("admin_messages");
    return savedMessages ? JSON.parse(savedMessages) : [
      {
        id: "1",
        name: "Sarah Johnson",
        email: "sarah@example.com",
        service: "Nail Art",
        message: "I'd like to book an appointment for gel nails on Saturday morning if possible.",
        date: "2025-04-15T10:30:00.000Z",
        isRead: false
      },
      {
        id: "2",
        name: "Michael Brown",
        email: "michael@example.com",
        service: "Hair Styling",
        message: "What are your prices for men's haircuts? Do you have availability this Friday?",
        date: "2025-04-14T15:45:00.000Z",
        isRead: true
      },
      {
        id: "3",
        name: "Jessica Lee",
        email: "jessica@example.com",
        service: "Lash Extensions",
        message: "I'm interested in getting volume lashes. How long does the appointment typically take?",
        date: "2025-04-12T09:15:00.000Z",
        isRead: true
      }
    ];
  });

  useEffect(() => {
    // Check if admin is authenticated
    const isAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate]);
  
  useEffect(() => {
    // Save messages to localStorage when they change
    localStorage.setItem("admin_messages", JSON.stringify(messages));
  }, [messages]);

  const handleMarkAsRead = (id: string) => {
    setMessages(messages.map((message: any) => 
      message.id === id ? {...message, isRead: true} : message
    ));
    
    toast({
      title: "Message marked as read",
      duration: 3000,
    });
  };

  const handleDeleteMessage = (id: string) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      setMessages(messages.filter((message: any) => message.id !== id));
      
      toast({
        title: "Message deleted",
        duration: 3000,
      });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <DashboardLayout title="Customer Messages">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gradient">Customer Inquiries</h2>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Status</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                      <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p>No messages yet</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  messages.map((message: any) => (
                    <TableRow key={message.id} className={message.isRead ? "" : "bg-blue-50 dark:bg-blue-900/20"}>
                      <TableCell>
                        <span className={`inline-block w-2 h-2 rounded-full ${message.isRead ? 'bg-gray-300' : 'bg-blue-500 animate-pulse'}`}></span>
                      </TableCell>
                      <TableCell className="font-medium">
                        <div>{message.name}</div>
                        <div className="text-xs text-gray-500">{message.email}</div>
                      </TableCell>
                      <TableCell>{message.service || "General"}</TableCell>
                      <TableCell className="max-w-md">
                        <div className="truncate">{message.message}</div>
                      </TableCell>
                      <TableCell>{formatDate(message.date)}</TableCell>
                      <TableCell className="text-right space-x-2">
                        {!message.isRead && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleMarkAsRead(message.id)}
                          >
                            Mark as Read
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteMessage(message.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminMessages;
