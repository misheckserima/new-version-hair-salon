
import { Button } from "@/components/ui/button";
import { salonInfo } from "@/data/services";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";

interface WhatsAppButtonProps {
  serviceName: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const WhatsAppButton = ({ 
  serviceName, 
  size = "default",
  variant = "default"
}: WhatsAppButtonProps) => {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  
  // Track click for analytics
  const handleClick = () => {
    // Send analytics data to local storage first
    const clicks = JSON.parse(localStorage.getItem('whatsappClicks') || '{}');
    clicks[serviceName] = (clicks[serviceName] || 0) + 1;
    localStorage.setItem('whatsappClicks', JSON.stringify(clicks));

    // Try to send to database if connected
    try {
      // This would be implemented with Supabase in a real scenario
      console.log(`Tracked click for ${serviceName}`);
    } catch (error) {
      console.error("Error logging click:", error);
    }

    // Create WhatsApp message
    const message = encodeURIComponent(
      `Hello, I'm interested in your "${serviceName}" service. I'd like to book an appointment.`
    );
    const whatsappUrl = `https://wa.me/263773385732?text=${message}`;
    
    // Show toast and open WhatsApp
    toast({
      title: "Opening WhatsApp",
      description: "Connecting you with our team...",
      duration: 3000,
    });
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      onClick={handleClick}
      className={`btn-gradient animate-pulse-glow ${isHovered ? 'animate-bounce' : ''}`}
      size={size}
      variant={variant}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MessageSquare className="mr-2 h-4 w-4" />
      Order Now
    </Button>
  );
};

export default WhatsAppButton;
