// Import React and page components
import React from "react";

// Import layout components
import Header from "@/components/Header";  // Site header with navigation
import Footer from "@/components/Footer";  // Site footer with links and info

// Import section components
import HeroSection from "@/components/sections/HeroSection";  // Main hero banner
import FeaturedServices from "@/components/sections/FeaturedServices";  // Highlighted services
import AboutSection from "@/components/sections/AboutSection";  // About the salon
import ServicesSection from "@/components/sections/ServicesSection";  // All services
import GallerySection from "@/components/sections/GallerySection";  // Photo gallery
import ContactSection from "@/components/sections/ContactSection";  // Contact information

// Import utility components
import ExitIntent from "@/components/ExitIntent";  // Exit intent popup
import SubscribeForm from "@/components/SubscribeForm";  // Newsletter subscription form

/**
 * Main landing page of the salon website
 * - Displays all the main sections in a single-page layout
 * - Uses a dark theme with gradient backgrounds
 * - Includes a newsletter subscription section
 */
const Index = () => {
  return (
    // Main container with dark gradient background
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Site header with navigation */}
      <Header />
      
      {/* Main content area */}
      <main className="flex-1">
        {/* Hero banner section */}
        <HeroSection />
        
        {/* Page sections */}
        <div className="space-y-0">
          <AboutSection />  {/* About the salon */}
          <ServicesSection />  {/* Services offered */}
          <GallerySection />  {/* Photo gallery */}
          <ContactSection />  {/* Contact information */}
          
          {/* Newsletter subscription section */}
          <section className="py-12 bg-gradient-to-b from-gray-800 to-black">
            <div className="container mx-auto px-4">
              <div className="max-w-md mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-300 mb-6">
                  Get weekly beauty tips, exclusive offers, and updates on new services.
                </p>
                <SubscribeForm />  {/* Subscription form component */}
              </div>
            </div>
          </section>
        </div>
      </main>
      
      {/* Site footer */}
      <Footer />
      
      {/* Exit intent popup (shows when user tries to leave) */}
      <ExitIntent />
    </div>
  );
};

export default Index;
