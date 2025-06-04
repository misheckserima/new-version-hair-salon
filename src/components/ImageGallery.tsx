
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { galleryImages } from "@/data/services";

interface ImageGalleryProps {
  category?: string;
  limit?: number;
  images?: any[];
}

const ImageGallery = ({ category, limit, images = galleryImages }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter images by category if provided
  const filteredImages = category && category !== "all"
    ? images.filter(img => img.category === category)
    : images;
    
  // Limit the number of images if specified
  const displayImages = limit 
    ? filteredImages.slice(0, limit) 
    : filteredImages;

  return (
    <div className="image-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {displayImages.map((image) => (
        <Drawer key={image.id}>
          <DrawerTrigger asChild>
            <div 
              className="cursor-pointer shadow-glow card-hover rounded-lg overflow-hidden aspect-square border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image.image)}
            >
              <img 
                src={image.image} 
                alt={`Gallery image - ${image.category}`} 
                className="w-full h-full object-cover transition-all hover:scale-110"
              />
            </div>
          </DrawerTrigger>
          <DrawerContent className="p-6 flex items-center justify-center">
            <div className="max-w-4xl w-full">
              <img 
                src={image.image} 
                alt={`Gallery image - ${image.category}`} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </DrawerContent>
        </Drawer>
      ))}

      {displayImages.length === 0 && (
        <div className="col-span-full text-center py-12 border border-dashed rounded-lg border-gray-300 dark:border-gray-600">
          <p className="text-gray-500 dark:text-gray-400">No images found in this category</p>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
