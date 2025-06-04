
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Instagram, Facebook, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { salonInfo } from "@/data/salonConfig";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { title: "Home", href: "#home" },
    { title: "Services", href: "#services" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-xl font-bold text-purple-600">New Version</span>
            <span className="ml-1 text-lg font-medium">Hair Salon</span>
          </a>

          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors text-sm font-medium"
              >
                {item.title}
              </a>
            ))}
            <div className="ml-4 flex items-center space-x-3">
              <a 
                href={`tel:${salonInfo.phone}`}
                className="text-gray-600 hover:text-purple-600"
              >
                <Phone size={18} />
              </a>
              <a 
                href={`https://instagram.com/${salonInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={`https://facebook.com/${salonInfo.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <Facebook size={18} />
              </a>
              <Link 
                to="/admin"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                title="Admin Login"
              >
                <LogIn size={20} />
              </Link>
            </div>
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white"
              size="sm"
              asChild
            >
              <a href="#appointment">Book Now</a>
            </Button>
          </nav>

          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-purple-600"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 pt-2 pb-4 border-t">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <div className="flex items-center space-x-4 py-2">
              <a 
                href={`tel:${salonInfo.phone}`}
                className="text-gray-600 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
              </a>
              <a 
                href={`https://instagram.com/${salonInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={`https://facebook.com/${salonInfo.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                <Facebook size={18} />
              </a>
              <Link 
                to="/admin"
                className="text-gray-600 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn size={20} />
              </Link>
            </div>
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white w-full"
              size="sm"
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#appointment">Book Now</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
