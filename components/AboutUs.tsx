"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const locations = [
    { 
      name: "Lagos", 
      description: "Commercial hub with premium properties",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Abuja", 
      description: "Federal capital with luxury estates",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Port Harcourt", 
      description: "Oil-rich city with prime lands",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Kano", 
      description: "Northern commercial center",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Ibadan", 
      description: "Historic city with growing real estate",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Enugu", 
      description: "Coal city with affordable properties",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Kaduna", 
      description: "Northern hub with diverse properties",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Benin City", 
      description: "Historic capital with modern developments",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Warri", 
      description: "Oil city with prime real estate",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop&q=80"
    },
    { 
      name: "Calabar", 
      description: "Coastal city with scenic properties",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=300&fit=crop&q=80"
    },
  ];

  const itemsPerView = 3;
  const totalSlides = Math.ceil(locations.length / itemsPerView);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const howWeWork = [
    {
      title: "Property Search",
      description: "Browse through our extensive collection of verified properties",
    },
    {
      title: "Expert Consultation",
      description: "Get professional advice from our experienced real estate brokers",
    },
    {
      title: "Site Visits",
      description: "Schedule visits to inspect properties before making decisions",
    },
    {
      title: "Legal Support",
      description: "We assist with documentation and legal processes",
    },
  ];

  return (
    <AnimatedSection>
      <section className="py-16 bg-gradient-to-b from-primary-navy to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-primary-gold flex-1 max-w-20"></div>
            <h2 className="text-5xl md:text-6xl font-black text-white">
              ABOUT
            </h2>
            <div className="h-px bg-primary-gold flex-1 max-w-20"></div>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-primary-gold">
            Tuslik
          </p>
        </div>

        {/* How We Work Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary-gold">
            How We Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {howWeWork.map((step, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-primary-gold hover:border-primary-navy border border-gray-800"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-gold rounded-lg flex items-center justify-center">
                      <span className="text-primary-navy text-xl font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Locations Section - Sliding Carousel */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Our Locations
            </h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-primary-gold"></div>
              <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
              <div className="w-12 h-0.5 bg-primary-gold"></div>
            </div>
            <p className="text-xl text-primary-gold font-semibold">
              {locations.length}+ Locations Across Nigeria
            </p>
          </div>

          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                    {locations
                      .slice(slideIndex * itemsPerView, slideIndex * itemsPerView + itemsPerView)
                      .map((location, index) => (
                        <div
                          key={slideIndex * itemsPerView + index}
                          className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-800"
                        >
                          <div className="relative h-48 w-full">
                            <Image
                              src={location.image}
                              alt={location.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <h4 className="text-2xl font-bold text-white">
                                {location.name}
                              </h4>
                            </div>
                          </div>
                          <div className="p-4 bg-gray-900">
                            <p className="text-gray-400">{location.description}</p>
                            <button className="mt-3 text-primary-gold font-semibold hover:text-white transition-colors">
                              View Properties →
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-gold/90 hover:bg-primary-gold text-primary-navy p-3 rounded-full shadow-lg transition-all z-10"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-gold/90 hover:bg-primary-gold text-primary-navy p-3 rounded-full shadow-lg transition-all z-10"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary-gold"
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}

