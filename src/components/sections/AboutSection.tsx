import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <section id="about" className="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={`transform transition-all duration-1000 ${isScrolled ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Salon Interior" 
                className="rounded-lg shadow-glow h-full w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg overflow-hidden shadow-lg rotate-6 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Beauty Service" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className={`space-y-4 transform transition-all duration-1000 delay-300 ${isScrolled ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">Welcome to Nail&Lash_Haven</h2>
              <p className="text-xl text-gray-300">Your premier beauty destination</p>
            </div>
            <p className="text-gray-300">
              Our team of skilled professionals is dedicated to providing you with the highest quality hair, 
              nail, lash, and makeup services tailored to your unique style.
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
