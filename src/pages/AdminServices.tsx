
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/admin/DashboardLayout";
import { services as initialServices } from "@/data/services";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Edit, Trash2, Plus, Check, X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const AdminServices = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Local state for services
  const [services, setServices] = useState(() => {
    const savedServices = localStorage.getItem("admin_services");
    return savedServices ? JSON.parse(savedServices) : initialServices;
  });
  
  // State for editing a service
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  // State for adding a new service
  const [isAddingService, setIsAddingService] = useState(false);
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    price: "",
    category: "hair",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  });
  
  useEffect(() => {
    // Check if admin is authenticated
    const isAuthenticated = localStorage.getItem("admin_authenticated") === "true";
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate]);
  
  useEffect(() => {
    // Save services to localStorage when they change
    localStorage.setItem("admin_services", JSON.stringify(services));
  }, [services]);

  const handleEditClick = (service: any) => {
    setEditingId(service.id);
    setEditFormData({
      title: service.title,
      description: service.description,
      price: service.price ? service.price.toString() : "",
      category: service.category,
      image: service.image,
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleSaveEdit = (id: string) => {
    setServices(services.map((service: any) => 
      service.id === id 
        ? { 
            ...service, 
            title: editFormData.title,
            description: editFormData.description,
            price: editFormData.price === "" ? undefined : parseFloat(editFormData.price),
            category: editFormData.category,
            image: editFormData.image,
          }
        : service
    ));
    
    setEditingId(null);
    toast({
      title: "Service updated",
      description: "The service has been updated successfully",
      duration: 3000,
    });
  };

  const handleDeleteService = (id: string) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter((service: any) => service.id !== id));
      toast({
        title: "Service deleted",
        description: "The service has been deleted successfully",
        duration: 3000,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleNewServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: value,
    });
  };

  const handleCategoryChange = (value: string) => {
    setEditFormData({
      ...editFormData,
      category: value,
    });
  };

  const handleNewServiceCategoryChange = (value: string) => {
    setNewService({
      ...newService,
      category: value,
    });
  };

  const handleAddService = () => {
    setIsAddingService(true);
  };

  const handleCancelAddService = () => {
    setIsAddingService(false);
    setNewService({
      title: "",
      description: "",
      price: "",
      category: "hair",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    });
  };

  const handleSaveNewService = () => {
    const newServiceItem = {
      id: uuidv4(),
      title: newService.title,
      description: newService.description,
      price: newService.price === "" ? undefined : parseFloat(newService.price),
      category: newService.category as any,
      image: newService.image,
    };

    setServices([...services, newServiceItem]);
    setIsAddingService(false);
    
    setNewService({
      title: "",
      description: "",
      price: "",
      category: "hair",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    });

    toast({
      title: "Service added",
      description: "The new service has been added successfully",
      duration: 3000,
    });
  };

  const categories = ["hair", "nails", "lashes", "foot", "makeup", "barber", "training"];

  return (
    <DashboardLayout title="Manage Services">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gradient">Services List</h2>
          <Button 
            className="btn-gradient"
            onClick={handleAddService}
            disabled={isAddingService}
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Add New Service
          </Button>
        </div>
        
        {isAddingService && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border p-6 mb-6 animate-fade-in">
            <h3 className="text-lg font-medium mb-4">Add New Service</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input
                  name="title"
                  value={newService.title}
                  onChange={handleNewServiceChange}
                  placeholder="Service title"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <Select 
                  value={newService.category} 
                  onValueChange={handleNewServiceCategoryChange}
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
              <div>
                <label className="block text-sm font-medium mb-1">Price ($)</label>
                <Input
                  name="price"
                  type="text"
                  value={newService.price}
                  onChange={handleNewServiceChange}
                  placeholder="Leave empty for no price"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <Input
                  name="image"
                  value={newService.image}
                  onChange={handleNewServiceChange}
                  placeholder="Image URL"
                  className="w-full"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Description</label>
                <Input
                  name="description"
                  value={newService.description}
                  onChange={handleNewServiceChange}
                  placeholder="Service description"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={handleCancelAddService}>
                Cancel
              </Button>
              <Button 
                className="btn-gradient" 
                onClick={handleSaveNewService}
                disabled={!newService.title || !newService.description || !newService.category}
              >
                <Check className="mr-1 h-4 w-4" />
                Save Service
              </Button>
            </div>
          </div>
        )}
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service: any) => (
                  <TableRow key={service.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <TableCell>
                      {editingId === service.id ? (
                        <Input
                          name="title"
                          value={editFormData.title}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      ) : (
                        service.title
                      )}
                    </TableCell>
                    <TableCell className="max-w-xs">
                      {editingId === service.id ? (
                        <Input
                          name="description"
                          value={editFormData.description}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      ) : (
                        <div className="truncate">{service.description}</div>
                      )}
                    </TableCell>
                    <TableCell>
                      {editingId === service.id ? (
                        <Select 
                          value={editFormData.category} 
                          onValueChange={handleCategoryChange}
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
                      ) : (
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.category === 'training' ? 'bg-orange-100 text-orange-700' :
                          service.category === 'hair' ? 'bg-blue-100 text-blue-700' :
                          service.category === 'barber' ? 'bg-green-100 text-green-700' :
                          service.category === 'nails' ? 'bg-pink-100 text-pink-700' :
                          service.category === 'lashes' ? 'bg-yellow-100 text-yellow-700' :
                          service.category === 'makeup' ? 'bg-red-100 text-red-700' :
                          service.category === 'foot' ? 'bg-indigo-100 text-indigo-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {service.category}
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      {editingId === service.id ? (
                        <Input
                          name="price"
                          type="text"
                          value={editFormData.price}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Empty for no price"
                        />
                      ) : (
                        service.price ? `$${service.price}` : "N/A"
                      )}
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      {editingId === service.id ? (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleSaveEdit(service.id)}
                          >
                            <Check className="h-4 w-4 text-green-500" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleCancelEdit}
                          >
                            <X className="h-4 w-4 text-red-500" />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditClick(service)}
                          >
                            <Edit className="h-4 w-4 text-blue-500" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteService(service.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminServices;
