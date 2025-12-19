"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Mock property data - in real app, this would come from an API
const propertyData = {
  id: 1,
  title: "Contemporary 5 Bedroom Home, Lekki Phase one, Lagos",
  location: "Lekki Phase one, Lagos",
  price: "₦530,000,000",
  type: "Contemporary",
  bedrooms: 5,
  bathrooms: 4,
  area: "450 sqm",
  status: "FOR SALE",
  isLand: false,
  images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=80",
  ],
  description: "This stunning contemporary 5-bedroom home is located in the prestigious Lekki Phase one area of Lagos. Featuring modern architecture, premium finishes, and luxurious amenities, this property offers the perfect blend of style and comfort.",
  features: [
    "All Rooms Ensuite",
    "Balcony",
    "Bath Tub",
    "Bluetooth speakers",
    "BQ",
    "Chandeliers",
    "Closets",
    "Concrete floor",
    "Contemporary Design",
    "Dining area",
    "Family Lounge",
    "Fitted Kitchen",
    "Interlocked Streets",
    "Kitchen Pantry",
    "New",
    "Outdoor Lights",
    "POP Ceilings",
    "Refrigerator",
    "Roof Top",
    "Secure Estate (Call to access)",
    "Security Post",
    "Spacious Rooms",
    "Spotlights",
    "Swimming Pool",
    "TV Console",
    "Walk-in Closet",
    "Walk-in shower",
    "Washing machine",
    "Water Closets",
    "Water heaters",
  ],
};

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    location: propertyData.location,
    inquiryType: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-primary-navy">
      {/* Breadcrumb */}
      <div className="bg-gray-900 py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/buy" className="hover:text-primary-gold transition-colors">
              Buy
            </Link>
            <span>/</span>
            <span className="text-white">{propertyData.type}</span>
            <span>/</span>
            <span className="text-white">{propertyData.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-navy text-white px-4 py-2 rounded text-sm font-bold border border-primary-gold">
                  {propertyData.status}
                </span>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                  </button>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {propertyData.title}
              </h1>
              <p className="text-xl text-gray-400 mb-4">{propertyData.location}</p>
            </div>
            <div className="text-right">
              <p className="text-4xl md:text-5xl font-bold text-primary-gold">
                {propertyData.price}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Gallery and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              {/* Main Image */}
              <div className="relative h-96 md:h-[500px] w-full">
                <Image
                  src={propertyData.images[selectedImageIndex]}
                  alt={propertyData.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Navigation Arrows */}
                {propertyData.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setSelectedImageIndex(
                          selectedImageIndex === 0
                            ? propertyData.images.length - 1
                            : selectedImageIndex - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        setSelectedImageIndex(
                          selectedImageIndex === propertyData.images.length - 1
                            ? 0
                            : selectedImageIndex + 1
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {propertyData.images.length > 1 && (
                <div className="p-4 bg-gray-900">
                  <div className="grid grid-cols-3 gap-2">
                    {propertyData.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative h-24 md:h-32 overflow-hidden rounded-lg border-2 transition-all ${
                          selectedImageIndex === index
                            ? "border-primary-gold"
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Property image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Property Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {!propertyData.isLand && propertyData.bedrooms && (
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Bedrooms</p>
                    <p className="text-xl font-bold text-white">{propertyData.bedrooms}</p>
                  </div>
                )}
                {!propertyData.isLand && propertyData.bathrooms && (
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Bathrooms</p>
                    <p className="text-xl font-bold text-white">{propertyData.bathrooms}</p>
                  </div>
                )}
                <div>
                  <p className="text-gray-400 text-sm mb-1">Area</p>
                  <p className="text-xl font-bold text-white">{propertyData.area}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Type</p>
                  <p className="text-xl font-bold text-white">{propertyData.type}</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                <p className="text-gray-300 leading-relaxed">{propertyData.description}</p>
              </div>
            </div>

            {/* Features Section */}
            {propertyData.features && propertyData.features.length > 0 && (
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {propertyData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-primary-gold"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={propertyData.location}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-navy border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold"
                    readOnly
                  />
                </div>
                <div>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-navy border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold appearance-none"
                    required
                  >
                    <option value="">Select</option>
                    <option value="buy">I want to buy</option>
                    <option value="rent">I want to rent</option>
                    <option value="viewing">Schedule a viewing</option>
                    <option value="info">Request more info</option>
                  </select>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-navy border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-navy border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-navy border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold resize-none"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-primary-gold bg-primary-navy border-gray-700 rounded focus:ring-primary-gold"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400">
                    By submitting this form I agree to Terms of Use
                  </label>
                </div>
                <div className="space-y-3">
                  <button
                    type="submit"
                    className="w-full bg-primary-gold hover:bg-yellow-600 text-primary-navy px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                  <a
                    href="tel:+2348141416640"
                    className="block w-full bg-white hover:bg-gray-100 text-primary-navy px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    Call
                  </a>
                  <a
                    href="https://wa.me/2348141416640"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 text-primary-navy px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

