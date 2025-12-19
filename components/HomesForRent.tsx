import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const housesForRent = [
  {
    id: 1,
    title: "3 Bedroom Apartment",
    location: "Lagos, Nigeria",
    type: "APARTMENT",
    bedrooms: 3,
    price: "₦2,500,000/year",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 2,
    title: "4 Bedroom Detached House",
    location: "Abuja, Nigeria",
    type: "DETACHED HOUSE",
    bedrooms: 4,
    price: "₦3,200,000/year",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 3,
    title: "5 Bedroom Luxury Villa",
    location: "Lagos, Nigeria",
    type: "VILLA",
    bedrooms: 5,
    price: "₦5,000,000/year",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 4,
    title: "2 Bedroom Flat",
    location: "Port Harcourt, Nigeria",
    type: "FLAT",
    bedrooms: 2,
    price: "₦1,800,000/year",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 5,
    title: "3 Bedroom Bungalow",
    location: "Kano, Nigeria",
    type: "BUNGALOW",
    bedrooms: 3,
    price: "₦2,000,000/year",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 6,
    title: "4 Bedroom Townhouse",
    location: "Abuja, Nigeria",
    type: "TOWNHOUSE",
    bedrooms: 4,
    price: "₦3,500,000/year",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80",
  },
];

export default function HomesForRent() {
  return (
    <AnimatedSection delay={100}>
      <section className="py-16 bg-primary-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Homes For Rent
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-primary-gold"></div>
            <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
            <div className="w-12 h-0.5 bg-primary-gold"></div>
          </div>
          <p className="text-xl text-primary-gold font-semibold">Premium Rentals</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {housesForRent.slice(0, 3).map((house) => (
            <Link
              key={house.id}
              href="/buy"
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-gray-800"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={house.image}
                  alt={house.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary-navy text-white px-4 py-2 rounded text-sm font-bold">
                  FOR RENT
                </div>
              </div>
              <div className="p-6 bg-gray-900">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {house.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {house.title}
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
                    <span className="text-sm font-medium">{house.bedrooms}</span>
                  </div>
                </div>
                <p className="text-primary-gold text-2xl font-bold mb-4">
                  {house.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/buy?type=Rent"
            className="inline-block bg-primary-gold hover:bg-yellow-600 text-primary-navy px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Rentals
          </Link>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}

