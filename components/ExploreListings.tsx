"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const listingImages = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop&q=80", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop&q=80", span: "col-span-2 row-span-1" },
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&q=80", span: "col-span-2 row-span-1" },
  { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop&q=80", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=600&h=400&fit=crop&q=80", span: "col-span-1 row-span-2" },
];

export default function ExploreListings() {
  return (
    <AnimatedSection delay={150}>
      <section className="py-16 bg-primary-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-primary-gold font-semibold mb-2 uppercase tracking-wider">
            Discover
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            EXPLORE OUR
          </h2>
          <div className="inline-block px-8 py-2 bg-primary-gold">
            <span className="text-3xl md:text-4xl font-black text-primary-navy">
              LISTINGS
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 auto-rows-fr gap-2 md:gap-3">
          {listingImages.map((item, index) => (
            <Link
              key={index}
              href="/buy"
              className={`relative overflow-hidden group ${item.span} min-h-[200px] md:min-h-[250px]`}
            >
              <Image
                src={item.src}
                alt={`Property listing ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white/95 backdrop-blur-sm rounded p-2">
                  <p className="text-primary-navy text-sm font-semibold">View Property</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/buy"
            className="inline-block bg-primary-gold hover:bg-yellow-600 text-primary-navy px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Listings
          </Link>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}

