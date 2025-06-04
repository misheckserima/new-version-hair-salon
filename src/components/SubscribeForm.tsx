
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address");

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      emailSchema.parse(email);
      setIsLoading(true);
      
      // In a real implementation, this would send the email to your database
      // For now we'll simulate with a timeout
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Store in localStorage for now (would be database in real implementation)
      const subscribers = JSON.parse(localStorage.getItem("subscribers") || "[]");
      subscribers.push({ email, date: new Date().toISOString() });
      localStorage.setItem("subscribers", JSON.stringify(subscribers));
      
      toast({
        title: "Subscribed!",
        description: "You'll receive our weekly beauty tips and exclusive offers.",
        duration: 5000,
      });
      
      setEmail("");
      setIsLoading(false);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        setError("Something went wrong. Please try again.");
      }
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/80 dark:bg-gray-800/80 border-2 focus:border-primary"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <Button 
        type="submit" 
        disabled={isLoading} 
        className="w-full btn-gradient"
      >
        {isLoading ? "Subscribing..." : "Subscribe to Updates"}
      </Button>
      <p className="text-xs text-gray-500">
        By subscribing, you agree to receive marketing emails from us. You can unsubscribe anytime.
      </p>
    </form>
  );
};

export default SubscribeForm;
