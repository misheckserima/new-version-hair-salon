
import { useEffect, useState } from "react";
import ImageGallery from "@/components/ImageGallery";
import { galleryImages } from "@/data/services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GallerySection = () => {
  const [images, setImages] = useState(galleryImages);

  useEffect(() => {
    // Load images from localStorage if they exist
    const savedImages = localStorage.getItem("admin_gallery");
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    }
  }, []);

  const categories = ["all", "hair", "nails", "lashes", "foot", "makeup", "barber", "training"];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gradient mb-2">Our Gallery</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Showcasing our best work and beautiful results
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center">
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category === "all" ? "All" : category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all">
            <ImageGallery images={images} />
          </TabsContent>
          
          {categories.slice(1).map(category => (
            <TabsContent key={category} value={category}>
              <ImageGallery category={category} images={images} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default GallerySection;
