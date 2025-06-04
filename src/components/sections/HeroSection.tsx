import HeroSlider from "@/components/ImageSlider";
import { Sparkles, Star, Crown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative">
      <HeroSlider />
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Features section below slider */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
              <div className="absolute -top-4 -right-4">
                <Sparkles className="h-8 w-8 text-blue-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Experience</h3>
              <p className="text-gray-300">Indulge in luxury beauty services with our expert team</p>
              <div className="mt-4 border-t border-gray-700 pt-4">
                <span className="text-blue-400 text-sm">Discover Excellence</span>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
              <div className="absolute -top-4 -right-4">
                <Star className="h-8 w-8 text-purple-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional Team</h3>
              <p className="text-gray-300">Skilled beauty experts dedicated to your transformation</p>
              <div className="mt-4 border-t border-gray-700 pt-4">
                <span className="text-purple-400 text-sm">Meet Our Experts</span>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="relative bg-gradient-to-br from-pink-900/50 to-red-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
              <div className="absolute -top-4 -right-4">
                <Crown className="h-8 w-8 text-pink-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Luxury Services</h3>
              <p className="text-gray-300">Experience the finest in beauty and wellness treatments</p>
              <div className="mt-4 border-t border-gray-700 pt-4">
                <span className="text-pink-400 text-sm">View Services</span>
              </div>
            </div>
          </div>
          
          {/* Decorative line */}
          <div className="mt-12 flex items-center justify-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="mx-4">
              <Star className="h-6 w-6 text-blue-500" />
            </div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
