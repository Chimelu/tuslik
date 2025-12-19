"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Property {
  id: number;
  title: string;
  location: string;
  type: "House" | "Land";
  propertyType?: string;
  bedrooms?: number;
  price: string;
  image: string;
}

const allProperties: Property[] = [
  {
    id: 1,
    title: "Contemporary 5 Bedroom Villa",
    location: "Lagos",
    type: "House",
    propertyType: "CONTEMPORARY",
    bedrooms: 5,
    price: "₦150,000,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 2,
    title: "5 Bedroom Fully Detached Duplex",
    location: "Abuja",
    type: "House",
    propertyType: "FULLY DETACHED DUPLEX",
    bedrooms: 5,
    price: "₦85,000,000",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Prime Commercial Land",
    location: "Port Harcourt",
    type: "Land",
    propertyType: "COMMERCIAL LAND",
    price: "₦45,000,000",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 4,
    title: "4 Bedroom Maisonette",
    location: "Kano",
    type: "House",
    propertyType: "MAISONETTE",
    bedrooms: 4,
    price: "₦120,000,000",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 5,
    title: "3 Bedroom Bungalow",
    location: "Ibadan",
    type: "House",
    propertyType: "BUNGALOW",
    bedrooms: 3,
    price: "₦65,000,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Luxury 6 Bedroom Penthouse",
    location: "Lagos",
    type: "House",
    propertyType: "PENTHOUSE",
    bedrooms: 6,
    price: "₦200,000,000",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 7,
    title: "4 Bedroom Townhouse",
    location: "Abuja",
    type: "House",
    propertyType: "TOWNHOUSE",
    bedrooms: 4,
    price: "₦95,000,000",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 8,
    title: "Residential Plot",
    location: "Kaduna",
    type: "Land",
    propertyType: "RESIDENTIAL LAND",
    price: "₦28,000,000",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80",
  },
];

const locations = ["All", "Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Enugu", "Kaduna"];

const propertyTypeFilters = [
  { name: "Fully Detached Duplex", count: 105 },
  { name: "Semi-Detached", count: 55 },
  { name: "Apartment", count: 46 },
  { name: "Terrace Duplex", count: 44 },
  { name: "Land", count: 14 },
  { name: "Maisonette", count: 7 },
  { name: "Contemporary", count: 5 },
  { name: "Penthouse", count: 2 },
];

export default function BuyPage() {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [sortBy, setSortBy] = useState("default");

  const filteredProperties = allProperties.filter((property) => {
    const locationMatch = selectedLocation === "All" || property.location === selectedLocation;
    const typeMatch = selectedType === "All" || property.type === selectedType;
    return locationMatch && typeMatch;
  });

  return (
    <main className="min-h-screen bg-primary-navy">
      {/* Breadcrumb */}
      <div className="bg-gray-900 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">
            Home <span className="mx-2">/</span> <span className="text-white">For Sale</span>
          </p>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-primary-navy py-8 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                For Sale
              </h1>
              <button className="bg-primary-gold hover:bg-yellow-600 text-primary-navy px-6 py-3 rounded-lg font-semibold transition-colors">
                Book an appointment
              </button>
            </div>
            <div className="text-lg text-white font-semibold">
              {filteredProperties.length} Properties
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-5xl">
            <div className="bg-gray-900 rounded-lg p-4 shadow-lg border border-gray-800">
              {/* Top Row - I'm looking for */}
              <div className="mb-3 relative">
                <select className="w-full px-4 py-3 pr-10 bg-primary-navy text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-base md:text-lg appearance-none cursor-pointer">
                  <option value="">I&apos;m looking for...</option>
                  <option value="house">House</option>
                  <option value="land">Land</option>
                  <option value="apartment">Apartment</option>
                  <option value="serviced-apartment">Serviced Apartment</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Bottom Row - Three fields + Search button */}
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <select className="w-full px-4 py-3 pr-10 bg-primary-navy text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-base md:text-lg appearance-none cursor-pointer">
                    <option value="">Select Area</option>
                    {locations.filter(l => l !== "All").map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  <select className="w-full px-4 py-3 pr-10 bg-primary-navy text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-base md:text-lg appearance-none cursor-pointer">
                    <option value="">Bedrooms</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5+">5+ Bedrooms</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  <select className="w-full px-4 py-3 pr-10 bg-primary-navy text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-base md:text-lg appearance-none cursor-pointer">
                    <option value="">Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="duplex">Duplex</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="land">Land</option>
                    <option value="serviced-apartment">Serviced Apartment</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <button className="bg-primary-gold hover:bg-yellow-600 text-primary-navy px-6 md:px-8 py-3 rounded-lg font-bold text-base md:text-lg transition-colors whitespace-nowrap w-full md:w-auto">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
            <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-800 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Property Type</h3>
              <div className="space-y-3">
                {propertyTypeFilters.map((filter, index) => (
                  <label key={index} className="flex items-center justify-between cursor-pointer hover:text-primary-gold transition-colors">
                    <span className="text-gray-300">{filter.name}</span>
                    <span className="text-gray-500 text-sm">({filter.count})</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-900 rounded-lg p-1 border border-gray-800">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-colors ${
                      viewMode === "list"
                        ? "bg-primary-gold text-primary-navy shadow"
                        : "text-gray-400 hover:text-white"
                    }`}
                    aria-label="List view"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-colors ${
                      viewMode === "grid"
                        ? "bg-primary-gold text-primary-navy shadow"
                        : "text-gray-400 hover:text-white"
                    }`}
                    aria-label="Grid view"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-300 hidden sm:inline">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-sm sm:text-base w-full sm:w-auto"
                >
                  <option value="default">Default Order</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {/* Properties Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
              {filteredProperties.map((property) => (
                viewMode === "grid" ? (
                  <Link
                    key={property.id}
                    href={`/property/${property.id}`}
                    className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-gray-800 block"
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-primary-navy text-white px-4 py-2 rounded text-sm font-bold">
                        FOR SALE
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
                      {property.bedrooms && (
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center text-gray-300">
                            <svg
                              className="w-5 h-5 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                            <span className="text-sm font-medium">{property.bedrooms}</span>
                          </div>
                        </div>
                      )}
                      <p className="text-gray-400 text-sm mb-4">{property.location}</p>
                      <p className="text-primary-gold text-2xl font-bold">
                        {property.price}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div
                    key={property.id}
                    className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group flex flex-col md:flex-row border border-gray-800"
                  >
                    <div className="relative h-64 md:h-48 md:w-80 flex-shrink-0 w-full">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-primary-navy text-white px-4 py-2 rounded text-sm font-bold">
                        FOR SALE
                      </div>
                    </div>
                    <div className="p-4 md:p-6 bg-gray-900 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="mb-2">
                          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                            {property.propertyType || property.type}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                          {property.title}
                        </h3>
                        {property.bedrooms && (
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center text-gray-300">
                              <svg
                                className="w-5 h-5 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                              </svg>
                              <span className="text-sm font-medium">{property.bedrooms}</span>
                            </div>
                          </div>
                        )}
                        <p className="text-gray-400 text-sm mb-4">{property.location}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                        <p className="text-primary-gold text-xl md:text-2xl font-bold">
                          {property.price}
                        </p>
                        <Link
                          href={`/property/${property.id}`}
                          className="bg-primary-gold hover:bg-yellow-600 text-primary-navy px-4 md:px-6 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base w-full sm:w-auto inline-block text-center"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400 mb-4">No properties found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedLocation("All");
                setSelectedType("All");
              }}
              className="bg-primary-gold hover:bg-yellow-600 text-primary-navy px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
