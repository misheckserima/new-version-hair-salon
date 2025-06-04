import { salonInfo } from "@/data/services";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">{salonInfo.name}</h3>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{salonInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{salonInfo.email}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1" />
              <span>{salonInfo.address}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href={salonInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={salonInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <p>&copy; {new Date().getFullYear()} {salonInfo.name}</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
