"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "How do I search for properties?",
    answer:
      "You can use our search bar on the homepage to search by state and LGA, or browse our listings by property type (Houses for Sale, Homes for Rent, Serviced Apartments, or Land for Sale).",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We operate across major cities in Nigeria including Lagos, Abuja, Port Harcourt, Kano, Ibadan, Enugu, and Kaduna.",
  },
  {
    question: "How can I schedule a property viewing?",
    answer:
      "You can contact us through our contact page, call us at 08141416640, or email us at hello@tuslik.com to schedule a viewing.",
  },
  {
    question: "What documents do I need to buy a property?",
    answer:
      "We assist with all legal documentation. Typically, you'll need valid identification, proof of income, and we'll guide you through the title verification and transfer process.",
  },
  {
    question: "Do you offer property financing options?",
    answer:
      "Yes, we work with various financial institutions to help you secure financing for your property purchase. Contact us for more information.",
  },
  {
    question: "Can I list my property for sale or rent?",
    answer:
      "Absolutely! Visit our 'Sell' page to submit your property listing. Our team will review and contact you to proceed.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection delay={100}>
      <section className="py-16 bg-gradient-to-b from-gray-900 to-primary-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-primary-gold"></div>
            <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
            <div className="w-12 h-0.5 bg-primary-gold"></div>
          </div>
          <p className="text-xl text-primary-gold font-semibold">Get Answers</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
              >
                <span className="text-white font-semibold text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary-gold transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-800">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}

