
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/admin/DashboardLayout";
import { galleryImages } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2, Upload, Plus } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const AdminGallery = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Local state for images
  const [images, setImages] = useState(() => {
    const savedImages = localStorage.getItem("admin_gallery");
    return savedImages ? JSON.parse(savedImages) : galleryImages;
  });
  
  // State for new image
  const [newImage, setNewImage] = useState({
    url: "",
    category: "hair",
  });

  useEffect(() => {
    // Check if admin is authenticated
    const isAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate]);
  
  useEffect(() => {
    // Save images to localStorage when they change
    localStorage.setItem("admin_gallery", JSON.stringify(images));
  }, [images]);

  const handleDeleteImage = (id: string) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      setImages(images.filter((image: any) => image.id !== id));
      toast({
        title: "Image deleted",
        description: "The image has been removed from the gallery",
        duration: 3000,
      });
    }
  };

  const handleAddImage = () => {
    if (!newImage.url) {
      toast({
        title: "URL required",
        description: "Please enter an image URL",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    const newImageItem = {
      id: uuidv4(),
      image: newImage.url,
      category: newImage.category,
    };

    setImages([...images, newImageItem]);
    
    setNewImage({
      url: "",
      category: "hair",
    });

    toast({
      title: "Image added",
      description: "The new image has been added to the gallery",
      duration: 3000,
    });
  };

  const categories = ["hair", "nails", "lashes", "foot", "makeup", "barber", "training"];

  return (
    <DashboardLayout title="Manage Gallery">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gradient">Gallery Images</h2>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6 flex flex-wrap">
            <TabsTrigger value="all">All Images</TabsTrigger>
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
            <TabsTrigger value="add">Add New Image</TabsTrigger>
          </TabsList>
          
          <TabsContent value="add" className="animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border p-6 mb-6">
              <h3 className="text-lg font-medium mb-4">Add New Image</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Image URL</label>
                  <Input
                    value={newImage.url}
                    onChange={(e) => setNewImage({...newImage, url: e.target.value})}
                    placeholder="https://example.com/image.jpg"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <Select 
                    value={newImage.category} 
                    onValueChange={(value) => setNewImage({...newImage, category: value})}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button 
                  className="btn-gradient" 
                  onClick={handleAddImage}
                >
                  <Plus className="mr-1 h-4 w-4" />
                  Add Image
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image: any) => (
                <div key={image.id} className="relative group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src={image.image} 
                    alt={`Gallery - ${image.category}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDeleteImage(image.id)}
                      className="transform transition-transform duration-200 hover:scale-110"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      image.category === 'training' ? 'bg-purple-100 text-purple-700' :
                      image.category === 'hair' ? 'bg-blue-100 text-blue-700' :
                      image.category === 'barber' ? 'bg-green-100 text-green-700' :
                      image.category === 'nails' ? 'bg-pink-100 text-pink-700' :
                      image.category === 'lashes' ? 'bg-yellow-100 text-yellow-700' :
                      image.category === 'makeup' ? 'bg-red-100 text-red-700' :
                      image.category === 'foot' ? 'bg-indigo-100 text-indigo-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {categories.map(category => (
            <TabsContent key={category} value={category} className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images
                  .filter((image: any) => image.category === category)
                  .map((image: any) => (
                    <div key={image.id} className="relative group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <img 
                        src={image.image} 
                        alt={`Gallery - ${image.category}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDeleteImage(image.id)}
                          className="transform transition-transform duration-200 hover:scale-110"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AdminGallery;
