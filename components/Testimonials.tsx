"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Adebayo Ogunleye",
    location: "Lagos",
    role: "Property Buyer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    text: "Tuslik made finding my dream home in Lagos effortless. Their team was professional, responsive, and guided me through every step of the process.",
    rating: 5,
  },
  {
    id: 2,
    name: "Chinwe Okonkwo",
    location: "Abuja",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
    text: "I've worked with many real estate brokers, but Tuslik stands out. They helped me acquire prime land in Abuja with excellent legal support.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emeka Nwankwo",
    location: "Port Harcourt",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
    text: "The team at Tuslik is exceptional. They found me the perfect commercial property in Port Harcourt. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <AnimatedSection delay={100}>
      <section className="py-16 bg-primary-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-primary-gold"></div>
              <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
              <div className="w-12 h-0.5 bg-primary-gold"></div>
            </div>
            <p className="text-xl text-primary-gold font-semibold">Testimonials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all border border-gray-800"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

