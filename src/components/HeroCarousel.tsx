import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroFarm from '@/assets/hero-farm.jpg';
import heroRoasting from '@/assets/hero-roasting.jpg';
import heroPackaging from '@/assets/hero-packaging.jpg';
import heroCafe from '@/assets/hero-cafe.jpg';

const slides = [
  {
    image: heroFarm,
    alt: 'Ethiopian Yirgacheffe coffee plantation in highland mountains',
  },
  {
    image: heroRoasting,
    alt: 'Premium coffee beans being artisan roasted',
  },
  {
    image: heroPackaging,
    alt: 'ORA Coffee premium packaging and Ethiopian beans',
  },
  {
    image: heroCafe,
    alt: 'Modern café with professional coffee preparation',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            ORA Coffee — Premium Ethiopian Yirgacheffe, Wholesale
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 font-light">
            From farm to cup, crafted for your business.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero-primary">
              Request a Sample
            </button>
            <button className="btn-hero-secondary">
              Explore Our Roasts
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-accent' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;