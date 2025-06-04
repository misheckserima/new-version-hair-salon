
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'hair' | 'nails' | 'lashes' | 'foot' | 'makeup' | 'barber' | 'training';
  price?: number;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: "hair-styling",
    title: "Hair Styling",
    description: "Professional cuts, coloring, and styling treatments for all hair types.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "hair",
    price: 45,
    featured: true
  },
  {
    id: "hair-coloring",
    title: "Hair Coloring",
    description: "Creative coloring services including highlights, balayage, and full color transformations.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "hair",
    price: 85
  },
  {
    id: "nail-art",
    title: "Nail Art",
    description: "Artistic nail designs, manicures, and pedicures with premium products.",
    image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "nails",
    price: 40,
    featured: true
  },
  {
    id: "gel-nails",
    title: "Gel Nails",
    description: "Long-lasting gel nail applications with a variety of finishes and designs.",
    image: "https://images.unsplash.com/photo-1632344572159-7d2c9d24c012?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "nails",
    price: 50
  },
  {
    id: "lash-extensions",
    title: "Lash Extensions",
    description: "Individual lash extensions for a fuller, more dramatic look.",
    image: "https://images.unsplash.com/photo-1583001809873-a128495da465?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "lashes",
    price: 70,
    featured: true
  },
  {
    id: "lash-lifting",
    title: "Lash Lifting",
    description: "Enhance your natural lashes with our professional lash lifting treatments.",
    image: "https://images.unsplash.com/photo-1568379783521-020dfc6941dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "lashes",
    price: 60
  },
  {
    id: "foot-spa",
    title: "Foot Spa",
    description: "Relaxing foot treatments including cleaning, massage, and moisturizing.",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "foot",
    price: 35
  },
  {
    id: "pedicure",
    title: "Pedicure",
    description: "Complete foot care with exfoliation, nail care, and relaxing massage.",
    image: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "foot",
    price: 45
  },
  {
    id: "full-makeup",
    title: "Full Makeup",
    description: "Complete makeup application for special occasions or everyday glamour.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "makeup",
    price: 80,
    featured: true
  },
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    description: "Special bridal makeup packages to make your special day perfect.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "makeup",
    price: 150
  },
  {
    id: "classic-haircut",
    title: "Classic Haircut",
    description: "Traditional men's haircut with precision and attention to detail.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "barber",
    price: 30,
    featured: true
  },
  {
    id: "beard-trim",
    title: "Beard Trim & Styling",
    description: "Expert beard shaping, trimming and styling for a polished look.",
    image: "https://images.unsplash.com/photo-1621605810052-80936445d7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "barber",
    price: 20
  },
  {
    id: "hot-towel-shave",
    title: "Hot Towel Shave",
    description: "Classic hot towel shave with premium products for ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1533143566558-1a2634bcbfa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "barber",
    price: 35
  },
  {
    id: "lash-training",
    title: "Lash Extension Course",
    description: "Learn professional techniques for applying stunning lash extensions.",
    image: "https://images.unsplash.com/photo-1587131782738-de30ea91a542?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "training",
    price: 499
  },
  {
    id: "makeup-masterclass",
    title: "Makeup Masterclass",
    description: "Comprehensive training on professional makeup application techniques.",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "training",
    price: 399,
    featured: true
  },
  {
    id: "nail-art-course",
    title: "Nail Art Certification",
    description: "Professional nail art training with certification upon completion.",
    image: "https://images.unsplash.com/photo-1610992435544-517b17af0a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "training",
    price: 450
  }
];

export const heroSlides = [
  {
    id: "slide-1",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Expert Hair Styling",
    description: "Transform your look with our professional stylists"
  },
  {
    id: "slide-2",
    image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Premium Nail Services",
    description: "Pamper yourself with our luxury nail treatments"
  },
  {
    id: "slide-3",
    image: "https://images.unsplash.com/photo-1583001809873-a128495da465?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Beautiful Lash Services",
    description: "Enhance your natural beauty with our lash experts"
  },
  {
    id: "slide-4",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Professional Makeup",
    description: "Look your best for any occasion with our makeup artists"
  },
  {
    id: "slide-5",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Expert Barber Services",
    description: "Precision cuts and styling for gentlemen"
  },
  {
    id: "slide-6",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Professional Training",
    description: "Learn beauty skills from industry experts"
  }
];

// Gallery images for the website
export const galleryImages = [
  {
    id: "gallery-1",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "hair"
  },
  {
    id: "gallery-2",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "hair"
  },
  {
    id: "gallery-3",
    image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "nails"
  },
  {
    id: "gallery-4",
    image: "https://images.unsplash.com/photo-1583001809873-a128495da465?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "lashes"
  },
  {
    id: "gallery-5",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "makeup"
  },
  {
    id: "gallery-6",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "barber"
  },
  {
    id: "gallery-7",
    image: "https://images.unsplash.com/photo-1621605810052-80936445d7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "barber"
  },
  {
    id: "gallery-8",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "training"
  }
];

// WhatsApp info
export const salonInfo = {
  name: "New Version Hair Salon",
  phone: "+1234567890", // Replace with actual salon number
  address: "123 Beauty Street, City, Country",
  email: "contact@newversionsalon.com",
  hours: "Mon-Sat: 9am-8pm, Sun: 10am-6pm",
  instagram: "newversionsalon",
  facebook: "newversionsalon"
};
