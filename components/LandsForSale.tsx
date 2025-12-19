import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const lands = [
  {
    id: 1,
    title: "Prime Commercial Land",
    location: "Port Harcourt, Nigeria",
    type: "COMMERCIAL LAND",
    price: "₦45,000,000",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Commercial Development Land",
    location: "Enugu, Nigeria",
    type: "COMMERCIAL LAND",
    price: "₦35,000,000",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Residential Plot",
    location: "Kaduna, Nigeria",
    type: "RESIDENTIAL LAND",
    price: "₦28,000,000",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Development Land",
    location: "Lagos, Nigeria",
    type: "DEVELOPMENT LAND",
    price: "₦75,000,000",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Estate Land",
    location: "Abuja, Nigeria",
    type: "ESTATE LAND",
    price: "₦55,000,000",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Agricultural Land",
    location: "Kano, Nigeria",
    type: "AGRICULTURAL LAND",
    price: "₦22,000,000",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&q=80",
  },
];

export default function LandsForSale() {
  return (
    <AnimatedSection delay={200}>
      <section className="py-16 bg-primary-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Lands For Sale
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-primary-gold"></div>
            <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
            <div className="w-12 h-0.5 bg-primary-gold"></div>
          </div>
          <p className="text-xl text-primary-gold font-semibold">Prime Properties</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lands.slice(0, 3).map((land) => (
            <Link
              key={land.id}
              href="/buy"
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-gray-800"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={land.image}
                  alt={land.title}
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
                    {land.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {land.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{land.location}</p>
                <p className="text-primary-gold text-2xl font-bold">
                  {land.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/buy?type=Land"
            className="inline-block bg-primary-gold hover:bg-yellow-600 text-primary-navy px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Lands
          </Link>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}

