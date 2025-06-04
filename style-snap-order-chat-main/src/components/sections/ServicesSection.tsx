
import { useState } from "react";
import { services } from "@/data/services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceCard from "@/components/ServiceCard";
import { Scissors, Crop, Paintbrush, Droplet, Award } from "lucide-react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services", icon: <Scissors className="h-4 w-4" />, color: "bg-purple-100 text-purple-700" },
    { id: "hair", label: "Hair", icon: <Scissors className="h-4 w-4" />, color: "bg-blue-100 text-blue-700" },
    { id: "barber", label: "Barber", icon: <Scissors className="h-4 w-4" />, color: "bg-green-100 text-green-700" },
    { id: "nails", label: "Nails", icon: <Paintbrush className="h-4 w-4" />, color: "bg-pink-100 text-pink-700" },
    { id: "lashes", label: "Lashes", icon: <Crop className="h-4 w-4" />, color: "bg-yellow-100 text-yellow-700" },
    { id: "foot", label: "Foot Care", icon: <Droplet className="h-4 w-4" />, color: "bg-indigo-100 text-indigo-700" },
    { id: "makeup", label: "Makeup", icon: <Paintbrush className="h-4 w-4" />, color: "bg-red-100 text-red-700" },
    { id: "training", label: "Training", icon: <Award className="h-4 w-4" />, color: "bg-orange-100 text-orange-700" },
  ];

  const filteredServices = activeTab === "all"
    ? services
    : services.filter(service => service.category === activeTab);

  const trainingServices = services.filter(service => service.category === "training");
  const otherServices = filteredServices.filter(service => service.category !== "training");

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-3">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our range of professional beauty services designed to help you look and feel your best
          </p>
        </div>
        
        <Tabs 
          defaultValue="all" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-10 overflow-x-auto py-3">
            <TabsList className="bg-gray-100 dark:bg-gray-700 p-1.5 shadow-inner rounded-xl border">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className={`flex items-center gap-2 px-5 py-2.5 transition-all duration-300 rounded-lg ${
                    activeTab === category.id ? category.color : ""
                  }`}
                >
                  {category.icon}
                  <span className="hidden sm:inline font-medium">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border p-1">
            <ResizablePanelGroup 
              direction="horizontal" 
              className="min-h-[600px] rounded-lg"
            >
              <ResizablePanel defaultSize={75} minSize={30}>
                <div className="p-6 h-full overflow-y-auto">
                  <h3 className="text-2xl font-semibold mb-6 border-b pb-3">Beauty Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherServices.map((service) => (
                      <ServiceCard 
                        key={service.id}
                        {...service}
                        className="animate-fade-in"
                      />
                    ))}
                  </div>
                </div>
              </ResizablePanel>
              
              <ResizableHandle withHandle className="bg-gray-200 dark:bg-gray-700" />
              
              <ResizablePanel defaultSize={25} minSize={20}>
                <div className="p-6 h-full overflow-y-auto bg-purple-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6 border-b pb-3 text-gradient">Training Programs</h3>
                  <div className="space-y-6">
                    {trainingServices.map((service, index) => (
                      <ServiceCard 
                        key={service.id}
                        {...service}
                        className={`animate-slide-in-right delay-${index * 100}`}
                      />
                    ))}
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
