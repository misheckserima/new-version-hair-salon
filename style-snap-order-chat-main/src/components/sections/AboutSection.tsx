
import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl font-bold text-gradient mb-2">Welcome to New Version Hair Salon</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your premier destination for all beauty services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={`transform transition-all duration-1000 ${isScrolled ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Salon Interior" 
                className="rounded-lg shadow-glow h-[400px] w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-lg overflow-hidden shadow-lg rotate-6 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Beauty Service" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isScrolled ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Expert Beauty Services</h3>
            <p className="text-gray-600 dark:text-gray-300">
              At New Version Hair Salon, we believe in enhancing your natural beauty through 
              our expert services. Our team of skilled professionals is dedicated to providing 
              you with the highest quality hair, nail, lash, foot care, and makeup services tailored 
              to your unique style and preferences.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Whether you're preparing for a special occasion or treating yourself to some well-deserved 
              self-care, we ensure that every visit leaves you feeling refreshed, confident, and beautiful.
            </p>
            <div className="pt-4">
              <WhatsAppButton serviceName="General Inquiry" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
