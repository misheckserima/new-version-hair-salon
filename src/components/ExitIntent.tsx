
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import SubscribeForm from "./SubscribeForm";

const ExitIntent = () => {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if we've already shown the popup in this session
    const alreadyShown = sessionStorage.getItem("exitIntentShown") === "true";
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    let timer: number;
    
    // Detect when mouse leaves the viewport (heading to browser chrome)
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && 
        !hasShown &&
        !alreadyShown
      ) {
        timer = window.setTimeout(() => {
          setOpen(true);
          setHasShown(true);
          sessionStorage.setItem("exitIntentShown", "true");
        }, 300);
      }
    };
    
    // Also show after some time on the page
    const timeoutTimer = window.setTimeout(() => {
      if (!hasShown && !alreadyShown) {
        setOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    }, 60000); // 60 seconds

    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
      clearTimeout(timeoutTimer);
    };
  }, [hasShown]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-gradient text-2xl font-bold">
            Before You Go!
          </DialogTitle>
          <DialogDescription>
            Subscribe to our newsletter to receive weekly beauty tips, exclusive offers and updates.
          </DialogDescription>
        </DialogHeader>
        <div className="p-4">
          <SubscribeForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntent;
