
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price?: number;
  className?: string;
}

const ServiceCard = ({
  id,
  title,
  description,
  image,
  category,
  price,
  className,
}: ServiceCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className={cn(
      "overflow-hidden rounded-xl shadow-lg border-2 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
      category === 'training' ? 'border-purple-400 shadow-purple-200 dark:border-purple-700' :
      category === 'hair' ? 'border-blue-400 shadow-blue-200 dark:border-blue-700' :
      category === 'barber' ? 'border-green-400 shadow-green-200 dark:border-green-700' :
      category === 'nails' ? 'border-pink-400 shadow-pink-200 dark:border-pink-700' :
      category === 'lashes' ? 'border-yellow-400 shadow-yellow-200 dark:border-yellow-700' :
      category === 'foot' ? 'border-indigo-400 shadow-indigo-200 dark:border-indigo-700' :
      category === 'makeup' ? 'border-red-400 shadow-red-200 dark:border-red-700' :
      'border-gray-200 dark:border-gray-700',
      className
    )}>
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <div className="absolute top-2 right-2 z-10">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm",
            category === 'training' ? 'bg-purple-100/80 text-purple-700' :
            category === 'hair' ? 'bg-blue-100/80 text-blue-700' :
            category === 'barber' ? 'bg-green-100/80 text-green-700' :
            category === 'nails' ? 'bg-pink-100/80 text-pink-700' :
            category === 'lashes' ? 'bg-yellow-100/80 text-yellow-700' :
            category === 'foot' ? 'bg-indigo-100/80 text-indigo-700' :
            category === 'makeup' ? 'bg-red-100/80 text-red-700' :
            'bg-gray-100/80 text-gray-700'
          )}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
        <div className={cn(
          "absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse",
          imageLoaded ? "opacity-0" : "opacity-100"
        )} />
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          {price !== undefined && (
            <span className={cn(
              "px-3 py-1 rounded-full text-sm font-semibold",
              category === 'training' ? 'bg-purple-100 text-purple-700' :
              category === 'hair' ? 'bg-blue-100 text-blue-700' :
              category === 'barber' ? 'bg-green-100 text-green-700' :
              category === 'nails' ? 'bg-pink-100 text-pink-700' :
              category === 'lashes' ? 'bg-yellow-100 text-yellow-700' :
              category === 'foot' ? 'bg-indigo-100 text-indigo-700' :
              category === 'makeup' ? 'bg-red-100 text-red-700' :
              'bg-primary/10 text-primary'
            )}>
              ${price}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <CardDescription className="text-muted-foreground line-clamp-3 min-h-[3rem]">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end">
        <WhatsAppButton serviceName={title} />
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
