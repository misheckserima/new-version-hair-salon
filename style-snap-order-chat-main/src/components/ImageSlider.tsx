
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/data/services";
import { cn } from "@/lib/utils";

interface HeroSliderProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const HeroSlider = ({
  autoSlide = true,
  autoSlideInterval = 5000
}: HeroSliderProps) => {
  const [curr, setCurr] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurr((curr) => (curr === 0 ? heroSlides.length - 1 : curr - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurr((curr) => (curr === heroSlides.length - 1 ? 0 : curr + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [next, autoSlide, autoSlideInterval]);

  return (
    <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <div 
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-white mb-6 max-w-xl opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                {slide.description}
              </p>
              <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                  <a href="#services">Explore Services</a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full bg-white/70 hover:bg-white text-gray-800 hover:text-gray-900 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full bg-white/70 hover:bg-white text-gray-800 hover:text-gray-900 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurr(i);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                curr === i ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
