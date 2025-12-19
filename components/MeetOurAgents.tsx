"use client";

import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

export default function MeetOurAgents() {
  return (
    <AnimatedSection delay={150}>
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              MEET OUR AGENTS
            </h2>
          </div>

          {/* Contact Section */}
          <div className="max-w-2xl mx-auto">
            <Link href="/contact" className="block">
              <div className="bg-primary-navy rounded-lg p-8 border border-primary-gold shadow-lg hover:shadow-xl transition-shadow text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-gold mb-4">
                  Get In Touch With Our Team
                </h3>
                <p className="text-white mb-6">
                  Our experienced real estate agents are ready to help you find your perfect property or assist with selling your property.
                </p>
                <div className="inline-block bg-primary-gold hover:bg-yellow-600 text-primary-navy px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

