import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    price?: number;
  };
  className?: string;
}

const ServiceCard = ({ service, className }: ServiceCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { id, title, description, image, category, price } = service;

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'hair':
        return 'border-blue-400 text-blue-400';
      case 'nails':
        return 'border-pink-400 text-pink-400';
      case 'lashes':
        return 'border-purple-400 text-purple-400';
      case 'makeup':
        return 'border-red-400 text-red-400';
      default:
        return 'border-gray-400 text-gray-400';
    }
  };

  const categoryLabel = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Service';

  return (
    <Card className={cn(
      "overflow-hidden bg-gray-800/50 border transition-all duration-300 hover:scale-105",
      getCategoryStyle(category),
      className
    )}>
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute top-2 right-2 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-900/80">
            {categoryLabel}
          </span>
        </div>
        <div className={cn(
          "absolute inset-0 bg-gray-900",
          imageLoaded ? "opacity-0" : "opacity-100"
        )} />
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold text-white">{title}</CardTitle>
          {price && (
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-900/80">
              ${price}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <CardDescription className="text-gray-300 line-clamp-2">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <WhatsAppButton serviceName={title} />
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
