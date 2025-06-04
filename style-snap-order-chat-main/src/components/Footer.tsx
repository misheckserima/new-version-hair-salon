
import { salonInfo } from "@/data/services";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>{salonInfo.phone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>{salonInfo.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{salonInfo.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <span>{salonInfo.hours}</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-purple-400 transition-colors">Book Appointment</a>
              </li>
            </ul>
          </div>
          
          {/* Social & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href={`https://instagram.com/${salonInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-purple-600 text-white p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={`https://facebook.com/${salonInfo.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-purple-600 text-white p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            
            <p className="text-sm max-w-xs">
              Stay updated with our latest offers, trends, and beauty tips by following us on social media.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          <p>&copy; {year} {salonInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
