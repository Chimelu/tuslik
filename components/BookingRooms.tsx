"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const apartments = [
  {
    id: 1,
    title: "Luxury 2 Bedroom Serviced Apartment",
    location: "Lagos, Victoria Island",
    price: "₦450,000/month",
    rating: 4.8,
    images: {
      main: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&q=80",
      rooms: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560448075-cbc16bfdbd80?w=600&h=400&fit=crop&q=80",
      ],
    },
    amenities: ["WiFi", "Housekeeping", "Gym", "Pool", "Concierge"],
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 2,
    title: "Premium 3 Bedroom Serviced Apartment",
    location: "Abuja, Wuse 2",
    price: "₦650,000/month",
    rating: 4.9,
    images: {
      main: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80",
      rooms: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560448075-cbc16bfdbd80?w=600&h=400&fit=crop&q=80",
      ],
    },
    amenities: ["WiFi", "Housekeeping", "Gym", "Pool", "Concierge", "Parking"],
    bedrooms: 3,
    bathrooms: 3,
  },
  {
    id: 3,
    title: "Executive 1 Bedroom Serviced Apartment",
    location: "Port Harcourt, GRA",
    price: "₦350,000/month",
    rating: 4.7,
    images: {
      main: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80",
      rooms: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560448075-cbc16bfdbd80?w=600&h=400&fit=crop&q=80",
      ],
    },
    amenities: ["WiFi", "Housekeeping", "Gym", "Laundry"],
    bedrooms: 1,
    bathrooms: 1,
  },
];

export default function BookingRooms() {
  const [selectedApartment, setSelectedApartment] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <AnimatedSection delay={200}>
      <section className="py-16 bg-gradient-to-b from-gray-900 to-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Book Our Serviced Apartments
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-primary-gold"></div>
              <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
              <div className="w-12 h-0.5 bg-primary-gold"></div>
            </div>
            <p className="text-xl text-primary-gold font-semibold">
              View Room Pictures & Book Your Stay
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apartments.map((apartment) => (
              <div
                key={apartment.id}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800"
              >
                {/* Main Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={
                      selectedApartment === apartment.id
                        ? apartment.images.rooms[selectedImageIndex]
                        : apartment.images.main
                    }
                    alt={apartment.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-gold text-primary-navy px-4 py-2 rounded text-sm font-bold">
                    BOOK NOW
                  </div>
                  {selectedApartment === apartment.id && (
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {apartment.images.rooms.map((roomImg, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedImageIndex(idx)}
                            className={`flex-shrink-0 relative w-16 h-16 sm:w-20 sm:h-20 rounded overflow-hidden border-2 ${
                              selectedImageIndex === idx
                                ? "border-primary-gold"
                                : "border-gray-600"
                            }`}
                          >
                            <Image
                              src={roomImg}
                              alt={`Room ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {apartment.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{apartment.location}</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-white font-semibold">{apartment.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mb-4 text-gray-300">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-sm">{apartment.bedrooms} Bed</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{apartment.bathrooms} Bath</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {apartment.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary-navy/50 text-primary-gold px-3 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-primary-gold text-xl sm:text-2xl font-bold">
                      {apartment.price}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                      <button
                        onClick={() =>
                          setSelectedApartment(
                            selectedApartment === apartment.id ? null : apartment.id
                          )
                        }
                        className="bg-primary-navy hover:bg-primary-navy/80 text-white px-4 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
                      >
                        {selectedApartment === apartment.id ? "Hide Rooms" : "View Rooms"}
                      </button>
                      <Link
                        href={`/rent?apartment=${apartment.id}`}
                        className="bg-primary-gold hover:bg-yellow-600 text-primary-navy px-4 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/rent?type=serviced-apartment"
              className="inline-block bg-primary-gold hover:bg-yellow-600 text-primary-navy px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Apartments
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

