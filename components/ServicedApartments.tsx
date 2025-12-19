import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const servicedApartments = [
  {
    id: 1,
    title: "Luxury 2 Bedroom Serviced Apartment",
    location: "Lagos, Nigeria",
    type: "SERVICED APARTMENT",
    bedrooms: 2,
    price: "₦450,000/month",
    amenities: ["WiFi", "Housekeeping", "Gym", "Pool"],
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Premium 3 Bedroom Serviced Apartment",
    location: "Abuja, Nigeria",
    type: "SERVICED APARTMENT",
    bedrooms: 3,
    price: "₦650,000/month",
    amenities: ["WiFi", "Housekeeping", "Gym", "Pool", "Concierge"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Executive 1 Bedroom Serviced Apartment",
    location: "Port Harcourt, Nigeria",
    type: "SERVICED APARTMENT",
    bedrooms: 1,
    price: "₦350,000/month",
    amenities: ["WiFi", "Housekeeping", "Gym", "Laundry"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Deluxe 4 Bedroom Serviced Apartment",
    location: "Lagos, Nigeria",
    type: "SERVICED APARTMENT",
    bedrooms: 4,
    price: "₦850,000/month",
    amenities: ["WiFi", "Housekeeping", "Gym", "Pool", "Concierge", "Parking"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Modern 2 Bedroom Serviced Apartment",
    location: "Abuja, Nigeria",
    type: "SERVICED APARTMENT",
    bedrooms: 2,
    price: "₦500,000/month",
    amenities: ["WiFi", "Housekeeping", "Gym", "Pool", "Security"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Studio Serviced Apartment",
    location: "Kano, Nigeria",
    type: "SERVICED APARTMENT",
    bedrooms: 1,
    price: "₦280,000/month",
    amenities: ["WiFi", "Housekeeping", "Gym"],
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop&q=80",
  },
];

export default function ServicedApartments() {
  return (
    <AnimatedSection delay={150}>
      <section className="py-16 bg-gradient-to-b from-primary-navy to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Serviced Apartments For Rent
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-primary-gold"></div>
              <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
              <div className="w-12 h-0.5 bg-primary-gold"></div>
            </div>
            <p className="text-xl text-primary-gold font-semibold">
              Fully Furnished with Premium Amenities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicedApartments.slice(0, 3).map((apartment) => (
              <Link
                key={apartment.id}
                href="/rent?type=serviced-apartment"
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-gray-800"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={apartment.image}
                    alt={apartment.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary-gold text-primary-navy px-4 py-2 rounded text-sm font-bold">
                    SERVICED
                  </div>
                </div>
                <div className="p-6 bg-gray-900">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-primary-gold uppercase tracking-wide">
                      {apartment.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                    {apartment.title}
                  </h3>
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
                      <span className="text-sm font-medium">{apartment.bedrooms}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {apartment.amenities.slice(0, 3).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary-navy/50 text-primary-gold px-2 py-1 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <p className="text-primary-gold text-2xl font-bold mb-4">
                    {apartment.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/rent?type=serviced-apartment"
              className="inline-block bg-primary-gold hover:bg-yellow-600 text-primary-navy px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Serviced Apartments
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

