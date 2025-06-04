import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

export default function Services() {
  const categories = ['hair', 'nails', 'lashes', 'makeup'];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury beauty services tailored to your unique style
          </p>
        </div>
        
        {categories.map((category) => (
          <div key={category} id={`${category}-services`} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center capitalize">
              {category} Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter((service) => service.category === category)
                .map((service) => (
                  <Card 
                    key={service.id}
                    className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-0"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-lg font-medium">
                          View Details
                        </p>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {service.title}
                        </h3>
                        {service.price && (
                          <span className="text-primary font-medium">
                            ${service.price}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {service.description}
                      </p>
                      <button 
                        className="mt-4 w-full bg-primary/10 text-primary hover:bg-primary hover:text-white py-2 rounded-md transition-colors duration-300"
                        onClick={() => window.location.href = `https://wa.me/1234567890?text=I'm interested in ${service.title} service`}
                      >
                        Book Now
                      </button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}