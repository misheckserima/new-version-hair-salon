interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'hair' | 'nails' | 'lashes' | 'makeup';
  price?: number;
  featured?: boolean;
}

export const services: Service[] = [
  // Hair Services
  {
    id: "haircut-styling",
    title: "Haircut & Styling",
    description: "Professional haircut and styling for all hair types and lengths.",
    image: "images/haircut.jpg",
    category: "hair",
    price: 6
  },
  {
    id: "hair-coloring",
    title: "Hair Coloring",
    description: "Full color, highlights, balayage, and other coloring services.",
    image: "images/haircolouring.jpg",
    category: "hair",
    price: 5
  },
  {
    id: "hair-treatment",
    title: "Hair Treatments",
    description: "Deep conditioning, keratin, and repair treatments for healthy hair.",
    image: "images/hairtreatment.jpg",
    category: "hair",
    price: 12
  },
  
  // Nail Services
  {
    id: "manicure",
    title: "Classic Manicure",
    description: "Professional nail care and polish for beautiful hands.",
    image: "images/classicmanicure.jpg",
    category: "nails",
    price: 13
  },
  {
    id: "pedicure",
    title: "Luxury Pedicure",
    description: "Relaxing foot care and polish for perfect feet.",
    image: "images/pedicure.jpg",
    category: "nails",
    price: 10
  },
  {
    id: "nail-art",
    title: "Nail Art & Design",
    description: "Custom nail art and designs for unique style.",
    image: "images/nailart.jpg",
    category: "nails",
    price: 15
  },
  
  // Lash Services
  {
    id: "lash-extensions",
    title: "Lash Extensions",
    description: "Full set of premium lash extensions for dramatic eyes.",
    image: "images/lashextension.jpg",
    category: "lashes",
    price: 12
  },
  {
    id: "lash-lift",
    title: "Lash Lift & Tint",
    description: "Natural lash enhancement with lift and tint treatment.",
    image: "images/lashlift.jpg",
    category: "lashes",
    price: 10
  },
  {
    id: "brow-service",
    title: "Brow Shaping & Tinting",
    description: "Professional brow shaping and tinting services.",
    image: "images/browshaping.jpg",
    category: "lashes",
    price: 12
  },
  
  // Makeup Services
  {
    id: "full-makeup",
    title: "Full Glam Makeup",
    description: "Complete makeup application for special occasions.",
    image: "images/fullglame.jpg",
    category: "makeup",
    price: 15
  },
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    description: "Special bridal makeup packages for your big day.",
    image: "images/bridal.jpg",
    category: "makeup",
    price: 20
  },
  {
    id: "natural-makeup",
    title: "Natural Makeup",
    description: "Light, natural makeup for everyday elegance.",
    image: "images/natural.jpg",
    category: "makeup",
    price: 12
  }
];

export const heroSlides = [
  {
    id: "slide-1",
    image: "images/nailart.jpg",
    title: "Premium Nail Services",
    description: "Pamper yourself with our luxury nail treatments"
  },
  {
    id: "slide-2",
    image: "images/hairstyle1.jpg", 
    title: "Expert Hair Styling", 
    description: "Transform your look with our professional stylists"
  },
  {
    id: "slide-3",
    image: "images/lashlift.jpg",
    title: "Beautiful Lash Services",
    description: "Enhance your natural beauty with our lash experts"
  },
  {
    id: "slide-4",
    image: "images/fullglame.jpg",
    title: "Professional Makeup",
    description: "Look your best for any occasion with our makeup artists"
  }
];

// Gallery images for the website
export const galleryImages = [
  {
    id: "gallery-1",
    image: "images/nailart.jpg",
    category: "hair"
  },
  {
    id: "gallery-2",
    image: "images/haircolour2.jpg",
    category: "hair"
  },
  {
    id: "gallery-3",
    image: "images/classicmanicure.jpg",
    category: "nails"
  },
  {
    id: "gallery-4",
    image: "images/bridal1.jpg",
    category: "nails"
  },
  {
    id: "gallery-5",
    image: "images/gallary.jpg",
    category: "nails"
  },
  {
    id: "gallery-6",
    image: "images/hair2.jpg",
    category: "nails"
  },
  {
    id: "gallery-7",
    image: "images/haircolour3.jpg",
    category: "nails"
  },
  {
    id: "gallery-8",
    image: "images/lashextension.jpg",
    category: "lashes"
  },
  {
    id: "gallery-9",
    image: "images/bridal.jpg",
    category: "makeup"
  }

];

// Salon information
export const salonInfo = {
  name: "Nail&Lash_Haven",
  phone: "+263 773385732",
  address: "Kwame Rd , Harare, Zimbabwe",
  email: "serimaahsur@gmail.com",
  hours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed"
  },
  social: {
    instagram: "https://instagram.com/nailandlashhaven",
    facebook: "https://facebook.com/nailandlashhaven",
    whatsapp: "https://wa.me/263773385732"
  }
};
