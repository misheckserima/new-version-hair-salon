import * as React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Instagram, Facebook, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { salonInfo } from "@/data/salonConfig";
import WhatsAppButton from "./WhatsAppButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Extract the section and tab from href
    const [section, params] = href.split('?');
    const element = document.querySelector(section);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // If there's a tab parameter, update the URL
      if (params) {
        const searchParams = new URLSearchParams(params);
        window.history.pushState({}, '', `${window.location.pathname}?${searchParams.toString()}`);
        
        // Dispatch a custom event to notify the services section
        window.dispatchEvent(new CustomEvent('tabChange', { 
          detail: { tab: searchParams.get('tab') }
        }));
      }
    }
  };

  const navItems = [
    { title: "All Services", href: "#services" },
    { title: "Hair Services", href: "#services?tab=hair" },
    { title: "Nail Services", href: "#services?tab=nails" },
    { title: "Lash Services", href: "#services?tab=lashes" },
    { title: "Makeup Services", href: "#services?tab=makeup" },
    { title: "Gallery", href: "#gallery" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
            <img src="/logo.svg" alt="2Pal Logo" className="h-12 w-auto" />
          </a>

          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="text-white hover:text-blue-300 transition-colors text-sm font-medium"
              >
                {item.title}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a 
                href={`tel:${salonInfo.phone}`}
                className="text-white hover:text-blue-300 transition-colors"
              >
                <Phone size={18} />
              </a>
              <WhatsAppButton
                serviceName="General Inquiry"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white shadow-lg shadow-pink-500/30 border border-pink-400/20 rounded-full px-6 font-medium"
                size="sm"
              />
            </div>
          </nav>

          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-blue-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900 px-4 pt-2 pb-4 border-t border-gray-800">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-white hover:text-blue-300 transition-colors py-2 text-sm font-medium"
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              >
                {item.title}
              </a>
            ))}
            <WhatsAppButton
              serviceName="General Inquiry"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white shadow-lg shadow-pink-500/30 border border-pink-400/20 rounded-full w-full font-medium"
              size="sm"
            />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
