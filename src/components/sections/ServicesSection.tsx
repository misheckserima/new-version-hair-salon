import { useState, useEffect } from "react";
import { services } from "@/data/services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceCard from "@/components/ServiceCard";
import { Scissors, Crop, Paintbrush } from "lucide-react";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  // Listen for tab change events from navigation
  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail.tab || "all");
    };

    window.addEventListener('tabChange', handleTabChange as EventListener);
    return () => window.removeEventListener('tabChange', handleTabChange as EventListener);
  }, []);

  const categories = [
    { id: "all", label: "All Services", icon: <Scissors className="h-4 w-4" /> },
    { id: "hair", label: "Hair", icon: <Scissors className="h-4 w-4" /> },
    { id: "nails", label: "Nails", icon: <Paintbrush className="h-4 w-4" /> },
    { id: "lashes", label: "Lashes", icon: <Crop className="h-4 w-4" /> },
    { id: "makeup", label: "Makeup", icon: <Paintbrush className="h-4 w-4" /> }
  ];

  const filteredServices = activeTab === "all"
    ? services
    : services.filter(service => service.category === activeTab);

  return (
    <section id="services" className="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Our Services</h2>
          <p className="text-xl text-gray-300">
            Experience luxury beauty services tailored to your unique style
          </p>
        </div>

        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6 flex flex-wrap justify-center bg-gray-800/50">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 capitalize text-gray-300 data-[state=active]:text-white data-[state=active]:bg-blue-500"
              >
                {category.icon}
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service}
              />
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;