"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Property {
  id: number;
  title: string;
  location: string;
  type: "House" | "Apartment" | "Serviced Apartment";
  propertyType?: string;
  bedrooms?: number;
  price: string;
  image: string;
  amenities?: string[];
}

const allProperties: Property[] = [
  {
    id: 1,
    title: "3 Bedroom Apartment",
    location: "Lagos",
    type: "Apartment",
    propertyType: "APARTMENT",
    bedrooms: 3,
    price: "₦2,500,000/year",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 2,
    title: "4 Bedroom Detached House",
    location: "Abuja",
    type: "House",
    propertyType: "DETACHED HOUSE",
    bedrooms: 4,
    price: "₦3,200,000/year",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Luxury 2 Bedroom Serviced Apartment",
    location: "Lagos",
    type: "Serviced Apartment",
    propertyType: "SERVICED APARTMENT",
    bedrooms: 2,
    price: "₦450,000/month",
    amenities: ["WiFi", "Housekeeping", "Gym", "Pool"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 4,
    title: "5 Bedroom Luxury Villa",
    location: "Lagos",
    type: "House",
    propertyType: "VILLA",
    bedrooms: 5,
    price: "₦5,000,000/year",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Premium 3 Bedroom Serviced Apartment",
    location: "Abuja",
    type: "Serviced Apartment",
    propertyType: "SERVICED APARTMENT",
    bedrooms: 3,
    price: "₦650,000/month",
    amenities: ["WiFi", "Housekeeping", "Gym", "Pool", "Concierge"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 6,
    title: "2 Bedroom Flat",
    location: "Port Harcourt",
    type: "Apartment",
    propertyType: "FLAT",
    bedrooms: 2,
    price: "₦1,800,000/year",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80",
  },
];

const locations = ["All", "Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Enugu", "Kaduna"];

export default function RentPage() {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState<"All" | "House" | "Apartment" | "Serviced Apartment">("All");

  const filteredProperties = allProperties.filter((property) => {
    const matchesLocation = selectedLocation === "All" || property.location === selectedLocation;
    const matchesType = selectedType === "All" || property.type === selectedType;
    return matchesLocation && matchesType;
  });

  return (
    <main className="min-h-screen bg-primary-navy">
      <div className="bg-gradient-to-r from-primary-navy to-primary-gold text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-primary-gold">Rent</span>{" "}
            <span className="text-white">Properties</span>
          </h1>
          <p className="text-xl text-gray-300">
            Find your perfect rental property including serviced apartments
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Filters */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-primary-gold focus:outline-none"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Property Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as "All" | "House" | "Apartment" | "Serviced Apartment")}
                className="w-full px-4 py-2 bg-gray-800 text-white border-2 border-gray-700 rounded-lg focus:border-primary-gold focus:outline-none"
              >
                <option value="All">All</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Serviced Apartment">Serviced Apartment</option>
              </select>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Link
              key={property.id}
              href={`/property/${property.id}`}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-gray-800"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 right-4 ${property.type === "Serviced Apartment" ? "bg-primary-gold text-primary-navy" : "bg-primary-navy text-white"} px-4 py-2 rounded text-sm font-bold`}>
                  {property.type === "Serviced Apartment" ? "SERVICED" : "FOR RENT"}
                </div>
              </div>
              <div className="p-6 bg-gray-900">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {property.propertyType || property.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {property.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{property.location}</p>
                {property.bedrooms && (
                  <div className="flex items-center text-gray-300 mb-4">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-sm font-medium">{property.bedrooms} Bedrooms</span>
                  </div>
                )}
                {property.amenities && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="text-xs bg-primary-navy/50 text-primary-gold px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-primary-gold text-2xl font-bold">
                  {property.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

