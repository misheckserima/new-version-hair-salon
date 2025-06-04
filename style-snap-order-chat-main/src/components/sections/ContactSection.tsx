
import { Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import WhatsAppButton from "@/components/WhatsAppButton";
import { salonInfo } from "@/data/services";

const ContactSection = () => {
  return (
    <section id="appointment" className="py-20 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4 animate-fade-in">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in delay-100">
            Experience the New Version difference. Order now to discuss your beauty needs and book your appointment.
          </p>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 text-center shadow-glow animate-fade-in delay-200 card-hover gradient-card">
            <div className="mb-6">
              <div className="rounded-full bg-primary/10 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Easy Booking
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Click below to send us a WhatsApp message and we'll help you schedule your appointment.
              </p>
              <WhatsAppButton serviceName="Appointment Request" size="lg" />
            </div>
          </Card>
          
          <Card className="p-8 text-center shadow-glow animate-fade-in delay-300 card-hover gradient-card">
            <div className="mb-6">
              <div className="rounded-full bg-primary/10 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Talk to Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Have questions? Feel free to contact us directly.
              </p>
              <div className="flex justify-center">
                <a 
                  href={`tel:${salonInfo.phone}`}
                  className="btn-gradient px-6 py-3 rounded-md inline-flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
