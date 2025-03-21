import React, { useState, useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
//import { useCarousel } from "@/components/ui/carousel";
import Data from "../Shared/Data.jsx";
import AdsItem from "./AdsItem.jsx";

function Advertise() {
  // Create a ref for the carousel
  const carouselRef = useRef(null);
  const [api, setApi] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalAds = Data.Advertise.length;
  const autoSlideIntervalRef = useRef(null);

  // Set up the API when the component mounts
  useEffect(() => {
    if (carouselRef.current) {
      setApi(carouselRef.current.api);
    }
  }, []);

  // Set up auto-sliding
  useEffect(() => {
    if (!api) return;

    startAutoSlide();
    
    // Update current index when the carousel changes
    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    
    return () => {
      clearInterval(autoSlideIntervalRef.current);
      if (api) {
        api.off("select", handleSelect);
      }
    };
  }, [api]);

  const startAutoSlide = () => {
    clearInterval(autoSlideIntervalRef.current);
    autoSlideIntervalRef.current = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000); // 5 seconds per slide
  };

  const handlePrevious = () => {
    if (api) {
      clearInterval(autoSlideIntervalRef.current);
      api.scrollPrev();
      startAutoSlide();
    }
  };

  const handleNext = () => {
    if (api) {
      clearInterval(autoSlideIntervalRef.current);
      api.scrollNext();
      startAutoSlide();
    }
  };

  return (
    <div className='max-w-screen-lg mx-auto px-4 rounded-t-2xl relative'>
      <h2 className="font-bold text-3xl text-center my-8">Why Auta Rent?</h2>

      {Data.Advertise?.length > 0 && (
        <Carousel 
          ref={carouselRef}
          className="relative my-8 overflow-hidden"
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {Data.Advertise.map((ads, index) => (
              <CarouselItem key={ads.id || index} className="w-full flex-shrink-0">
                <AdsItem ads={ads} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300 cursor-pointer z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300 cursor-pointer z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </Carousel>
      )}
    </div>
  );
}

export default Advertise;
