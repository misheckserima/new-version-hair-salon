
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedServices from "@/components/sections/FeaturedServices";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import ExitIntent from "@/components/ExitIntent";
import SubscribeForm from "@/components/SubscribeForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturedServices />
        <AboutSection />
        <GallerySection />
        <ServicesSection />
        <ContactSection />
        
        {/* Newsletter Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 text-gradient">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get weekly beauty tips, exclusive offers, and updates on new services.
              </p>
              <SubscribeForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ExitIntent />
    </div>
  );
};

export default Index;
