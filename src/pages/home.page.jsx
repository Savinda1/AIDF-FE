import React, { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import HotelListings from '@/components/HotelListings'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const imageSlides = [
  '/assets/hero/1.jpg',
  '/assets/hero/2.jfif',
  '/assets/hero/3.jpg',
  '/assets/hero/4.png'
];

function HomePage() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const interval = 5000;

  const nextSlide = () => {
    setFade(false);
    setCurrent((prev) => (prev + 1) % imageSlides.length);
    setFade(true);
  };

  const prevSlide = () => {
    setFade(false);
    setCurrent((prev) => (prev - 1 + imageSlides.length) % imageSlides.length);
    setFade(true);
  };

  useEffect(() => {
    const auto = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(auto);
  }, [current]);

  return (
    <main>
      <div className="relative min-h-screen overflow-hidden">
        <Hero />

        {/* Background Image */}
        <img
          key={current}
          src={imageSlides[current]}
          alt="background"
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Prev/Next Buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-4 z-20">
          <Button
            onClick={prevSlide}
            className="bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={nextSlide}
            className="bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {imageSlides.map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full border border-white transition-all duration-300 p-0 ${
                index === current ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <HotelListings />
    </main>
  );
}

export default HomePage;
