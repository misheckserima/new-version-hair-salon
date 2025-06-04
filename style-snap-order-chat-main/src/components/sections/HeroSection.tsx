
import HeroSlider from "@/components/ImageSlider";

const HeroSection = () => {
  return (
    <section id="home" className="relative">
      <HeroSlider />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
    </section>
  );
};

export default HeroSection;
