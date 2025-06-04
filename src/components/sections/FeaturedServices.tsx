import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const FeaturedServices = () => {
  const featuredServices = services.filter(service => service.featured);

  return (
    <section className="pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gradient mb-2">Our Featured Services</h2>
          <p className="text-lg text-gray-600">Experience the best in beauty and styling</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard 
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              category={service.category}
              price={service.price}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
