import { Phone } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { salonInfo } from "@/data/services";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-500" />
              <p>{salonInfo.phone}</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-500" />
              <p>{salonInfo.email}</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-500" />
              <p>{salonInfo.address}</p>
            </div>
          </div>

          {/* Social Media & Booking */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href={salonInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={salonInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <WhatsAppButton
                serviceName="any"
                className="bg-green-600 hover:bg-green-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
